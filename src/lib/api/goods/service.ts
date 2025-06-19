import { GetProductsResponse } from "./model";

interface GetProductsParams {
  page: number;
  page_size?: number;
}

const DEFAULT_PAGE_SIZE = 20;

export const getProducts = async (
  params: GetProductsParams
): Promise<GetProductsResponse> => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/products`);
    url.searchParams.append("page", String(params.page));
    url.searchParams.append(
      "page_size",
      String(params.page_size || DEFAULT_PAGE_SIZE)
    );

    const response = await fetch(url.toString(), {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to load products:", error);
    throw new Error("Products loading error");
  }
};
