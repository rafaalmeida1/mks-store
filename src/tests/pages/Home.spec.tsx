/**
 * @jest-environment jsdom
 */

import { fetchProductsData, productData } from "../../utils/fetchProductsData";

describe("Home Page", () => {
  it("should return product list", async () => {
    const result = await fetchProductsData();

    expect(result).toEqual(productData);
  });
});
