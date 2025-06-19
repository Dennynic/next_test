import { GetReviewsResponse } from "./model";

export const getReviews = async (): Promise<GetReviewsResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/reviews`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка при загрузке отзывов:", error);
    throw new Error("Не удалось загрузить отзывы");
  }
};
