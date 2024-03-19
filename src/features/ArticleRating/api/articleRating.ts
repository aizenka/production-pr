import type { Rating } from '@/entities/Rating'
import $rtkApi from '@/shared/api/rtk'

interface GetArticleRatingQueryArgs {
  articleId: string
  userId: string
}

interface RateArticleQueryArgs {
  articleId: string
  userId: string
  rate: number
  feedback?: string
}

interface UpdateArticleRateQueryArgs extends RateArticleQueryArgs {
  id: string
}

const articleRatingApi = $rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingQueryArgs>({
      query: ({ articleId, userId }) => ({
        url: '/articleRatings',
        params: {
          articleId,
          userId
        }
      })
    }),
    rateArticle: build.mutation<void, RateArticleQueryArgs>({
      query: (args) => ({
        url: '/articleRatings',
        method: 'POST',
        body: args
      })
    }),
    updateArticleRate: build.mutation<
      void,
      Partial<UpdateArticleRateQueryArgs> &
      Pick<UpdateArticleRateQueryArgs, 'id'>
    >({
      query: ({ id, ...args }) => ({
        url: `/articleRatings/${id}`,
        method: 'PATCH',
        body: args
      })
    })
  })
})
articleRatingApi.useUpdateArticleRateMutation


export const {
  useGetArticleRatingQuery: useGetArticleRating,
  useRateArticleMutation: useRateArticle,
  useUpdateArticleRateMutation: useUpdateArticleRate
} = articleRatingApi