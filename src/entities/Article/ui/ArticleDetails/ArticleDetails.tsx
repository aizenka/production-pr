import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { Skeleton, Text } from 'shared/ui'
import { TextAlign } from 'shared/ui/Text/Text'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks'
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader'
import { ARTICLE_DETAILS_NAMESPACE } from 'shared/constants/i18n'
import { fetchArticleById } from '../../model/services'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
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

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  useDynamicModuleLoader(reducers)
  const { t } = useTranslation(ARTICLE_DETAILS_NAMESPACE)
  const dispatch = useAppDispatch()

  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  const getArticleDetailsContent = () => {
    if (isLoading) {
      return (
        <div className={cls.skeletonWrapper}>
          <Skeleton
            className={cls.skeletonAvatar}
            width={200}
            height={200}
            borderRadius={'50%'}
          />
          <Skeleton width={300} height={32} />
          <Skeleton width={600} height={24} />
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
      return <div>Article content</div>
    }
  }

  return (
    <div className={classNames(cls.articleDetails, {}, [className])}>
      {getArticleDetailsContent()}
    </div>
  )
})