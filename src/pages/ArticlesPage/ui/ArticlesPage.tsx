import { ArticleList, ArticleListView } from 'entities/Article'
import { memo } from 'react'
import { classNames } from 'shared/lib/common'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList
        isLoading
        articles={[]}
        view={ArticleListView.GRID}
      />
    </div>
  )
}

export default memo(ArticlesPage)