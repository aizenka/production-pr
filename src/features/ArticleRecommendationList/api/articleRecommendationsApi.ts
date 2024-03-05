import type { Article } from 'entities/Article'
import $rtkApi from 'shared/api/rtk'

const recommendationsApi = $rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const {
  useGetArticleRecommendationsQuery: useArticleRecommendationList
} = recommendationsApi