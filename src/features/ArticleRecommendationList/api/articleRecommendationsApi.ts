import $rtkApi from 'shared/api/rtk'

const recommendationsApi = $rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
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