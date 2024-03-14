import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/common'
import { Avatar, Column, Icon, Row, Skeleton, Text } from '@/shared/ui'
import { TextAlign, TextSize } from '@/shared/ui/Text/Text'
import { ARTICLE_DETAILS_NAMESPACE } from '@/shared/constants/i18n'
import EyeIcon from '@/shared/assets/icons/icon-eye-outlined.svg'
import CalendarIcon from '@/shared/assets/icons/icon-calendar.svg'
import {
  ArticleCodeBlockComponent,
  ArticleImageBlockComponent,
  ArticleTextBlockComponent
} from '../components'
import {
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect
} from '@/shared/lib/hooks'
import type { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader'
import { fetchArticleById } from '../../model/services'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import type { ArticleBlock } from '../../model/types'
import { ArticleBlockType } from '../../model/consts'
import {
  getArticleDetailsData,
  getArticleDetailsLoading,
  getArticleDetailsError
} from '../../model/selectors/articleDetails'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  className?: string
   id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
  case ArticleBlockType.CODE:
    return (
      <ArticleCodeBlockComponent
        key={block.id}
        block={block}
      />
    )
  case ArticleBlockType.IMAGE:
    return  (
      <ArticleImageBlockComponent
        key={block.id}
        block={block}
      />
    )
  case ArticleBlockType.TEXT:
    return (
      <ArticleTextBlockComponent
        key={block.id}
        block={block}
      />
    )
  default:
    return null
  }
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  useDynamicModuleLoader(reducers)
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  }, [id])

  const getArticleDetailsContent = () => {
    if (isLoading) {
      return (
        <Column gap={24}>
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            borderRadius={'50%'}
          />
          <Column gap={8}>
            <Skeleton width={300} height={32} />
            <Skeleton width={600} height={24} />
          </Column>
          <Column gap={8}>
            <Skeleton width={100} height={22} />
            <Skeleton width={200} height={22} />
          </Column>
          <Skeleton width={'100%'} height={200} />
          <Skeleton width={'100%'} height={200} />
        </Column>
      )
    } else if (error) {
      return (
        <Text
          align={TextAlign.CENTER}
          title={t('errorLoadingArticle')}
        />
      )
    } else {
      return (
        <Column gap={24}>
          <Avatar
            className={cls.avatar}
            size={200}
            src={article?.img}
            alt='article avatar image'
          />
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <Column gap={8}>
            <Row
              vAlign='center'
              gap={8}
            >
              <Icon Svg={EyeIcon}/>
              <Text text={String(article?.views)} />
            </Row>
            <Row
              vAlign='center'
              gap={8}
            >
              <Icon Svg={CalendarIcon}/>
              <Text text={article?.createdAt} />
            </Row>
          </Column>
          {article?.blocks.map(renderBlock)}
        </Column>
      )
    }
  }

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      {getArticleDetailsContent()}
    </div>
  )
})