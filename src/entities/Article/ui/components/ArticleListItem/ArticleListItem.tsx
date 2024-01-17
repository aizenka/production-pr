import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar, Button, Card, Icon, Text } from 'shared/ui'
import { ButtonVariant } from 'shared/ui/Button/Button'
import { ARTICLES_NAMESPACE } from 'shared/constants/i18n'
import EyeIcon from 'shared/assets/icons/icon-eye-outlined.svg'
import {
  Article,
  ArticleBlockType,
  ArticleListView,
  ArticleTextBlock
} from '../../../model/types/Article'
import {
  ArticleTextBlockComponent
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string,
  article: Article,
  view: ArticleListView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.articleDetails}${article.id}`)
  }, [navigate, article.id])


  const types = (
    <Text
      className={cls.types}
      text={article.type.join(',')}
    />
  )

  const views = (
    <>
      <Text text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === ArticleListView.LIST) {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
      <div className={classNames(cls.articleListItem,
        {},
        [className, cls[view]]
      )}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <div className={cls.userInfo}>
              <Avatar
                src={article.user.avatarUrl}
                alt='user avatar'
                size={30}
              />
              <Text text={article.user.username} />
            </div>
            <Text text={article.createdAt} />
          </div>
          <Text title={article.title} />
          <div className={cls.types}>
            {types}
          </div>
          <img
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          {
            textBlock && (
              <ArticleTextBlockComponent
                className={cls.textBlock}
                block={textBlock}
              />
            )
          }
          <div className={cls.footer}>
            <Button
              variant={ButtonVariant.OUTLINED}
              onClick={onOpenArticle}
            >
              {t('readMore')}
            </Button>
            <div className={cls.viewsWrapper}>
              {views}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.articleListItem,
      {},
      [className, cls[view]]
    )}>
      <Card
        className={cls.card}
        onClick={onOpenArticle}
      >
        <div className={cls.imageWrapper}>
          <img
            className={cls.img}
            src={article.img}
            alt={article.title}
          />
          <Text
            className={cls.createdAt}
            text={article.createdAt}
          />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          <div className={cls.viewsWrapper}>
            {views}
          </div>
        </div>
        <Text
          className={cls.title}
          text={article.title}
        />
      </Card>
    </div>
  )
})