import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { Avatar, Icon, Skeleton, Text } from 'shared/ui'
import { TextAlign, TextSize } from 'shared/ui/Text/Text'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import EyeIcon from 'shared/assets/icons/icon-eye-outlined.svg'
import CalendarIcon from 'shared/assets/icons/icon-calendar.svg'
import {
  ArticleCodeBlockComponent,
  ArticleImageBlockComponent,
  ArticleTextBlockComponent
} from '../components'
import {
  useAppDispatch,
  useDynamicModuleLoader,
  useInitialEffect
} from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { fetchArticleById } from '../../model/services'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock, ArticleBlockType } from '../../model/types/Article'
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
        <div className={cls.contentWrapper}>
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            borderRadius={'50%'}
          />
          <div className={cls.skeletonInfoWrapper}>
            <Skeleton width={300} height={32} />
            <Skeleton width={600} height={24} />
          </div>
          <div className={cls.skeletonInfoWrapper}>
            <Skeleton width={100} height={22} />
            <Skeleton width={200} height={22} />
          </div>
          <Skeleton width={'100%'} height={200} />
          <Skeleton width={'100%'} height={200} />
        </div>
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
        <div className={cls.contentWrapper}>
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
          <div className={cls.infoWrapper}>
            <div className={cls.articleInfo}>
              <Icon Svg={EyeIcon}/>
              <Text text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
              <Icon Svg={CalendarIcon}/>
              <Text text={article?.createdAt} />
            </div>
          </div>
          {article?.blocks.map(renderBlock)}
        </div>
      )
    }
  }

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      {getArticleDetailsContent()}
    </div>
  )
})