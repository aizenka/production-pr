import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/common'
import {
  AppLink,
  Avatar,
  Button,
  Card,
  Column,
  Icon,
  LazyImage,
  Row,
  Skeleton,
  Text
} from '@/shared/ui'
import { ARTICLES_NAMESPACE } from '@/shared/constants/i18n'
import EyeIcon from '@/shared/assets/icons/icon-eye-outlined.svg'
import { getRouteArticleDetails } from '@/shared/constants/router'
import { ArticleBlockType, ArticleListView } from '../../../model/consts'
import {
  ArticleTextBlockComponent
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleListItem.module.scss'
import type { Article, ArticleTextBlock } from '../../../model/types/Article'
import type { HTMLAttributeAnchorTarget } from 'react'

interface ArticleListItemProps {
  className?: string,
  article: Article,
  view: ArticleListView
  openInNewWindow?: boolean
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, openInNewWindow } = props
  const { t } = useTranslation(ARTICLES_NAMESPACE)

  const target:HTMLAttributeAnchorTarget = openInNewWindow ? '_blank' : '_self'

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
          <Column gap={8}>
            <Row
              align='between'
              vAlign='center'
            >
              <Row
                gap={8}
                vAlign='center'
              >
                <Avatar
                  src={article.user?.avatarUrl}
                  alt='user avatar'
                  size={30}
                />
                <Text text={article.user.username} />
              </Row>
              <Text text={article.createdAt} />
            </Row>
            <Text title={article.title} />
            <div className={cls.types}>
              {types}
            </div>
            <LazyImage
              className={cls.img}
              src={article.img}
              alt={article.title}
              fallback={
                <Skeleton width='100%' height={230} />
              }
              errorFallback={
                <Skeleton width={200} height={200}/>
              }
            />
            {
              textBlock && (
                <ArticleTextBlockComponent
                  className={cls.textBlock}
                  block={textBlock}
                />
              )
            }
            <Row
              align='between'
              vAlign='center'
            >
              <AppLink
                to={getRouteArticleDetails(article.id)}
                target={target}
              >
                <Button variant='outlined'>
                  {t('readMore')}
                </Button>
              </AppLink>
              <Row
                gap={4}
                vAlign={'center'}
              >
                {views}
              </Row>
            </Row>
          </Column>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      className={classNames(cls.articleListItem,
        {},
        [className, cls[view]]
      )}
      to={getRouteArticleDetails(article.id)}
      target={target}
    >
      <Card className={cls.card}>
        <Column gap={8}>
          <div className={cls.imageWrapper}>
            <LazyImage
              className={cls.img}
              src={article.img}
              alt={article.title}
              fallback={
                <Skeleton width={200} height={200}/>
              }
              errorFallback={
                <Skeleton width={200} height={200}/>
              }
            />
            <Text
              className={cls.createdAt}
              text={article.createdAt}
            />
          </div>
          <Row
            className={cls.infoWrapper}
            align='between'
            vAlign='center'
          >
            {types}
            <Row
              gap={4}
              vAlign='center'
            >
              {views}
            </Row>
          </Row>
          <Text
            className={cls.title}
            text={article.title}
          />
        </Column>
      </Card>
    </AppLink>
  )
})