export interface IReview {
  id: number;
  text: string;
}

export type GetReviewsResponse = IReview[];