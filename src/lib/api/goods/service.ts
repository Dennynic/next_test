import { GetProductsResponse } from "./model";

interface GetProductsParams {
  page: number;
  page_size?: number;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface SubmitOrderParams {
  phone: string;
  cart: CartItem[];
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
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Failed to load products:", error);
    throw new Error("Products loading error");
  }
};

export const submitOrder = async (
  params: SubmitOrderParams
): Promise<{ success: boolean }> => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/order`);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: params.phone,
        cart: params.cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to submit order:", error);
    throw new Error("Order submission error");
  }
};
