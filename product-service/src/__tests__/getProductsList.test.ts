import { getProductsList } from "../functions/getProductsList/handler";
import * as apiFunctions from "../services/index";
import { Product } from "../models/index";
import { APIGatewayProxyResult } from "aws-lambda";

const mockProducts = [
  {
    author: "unknown",
    country: "Canada",
    imageLink: "link",
    language: "English",
    link: "http://link",
    pages: 200,
    title: "Title",
    year: 2000,
    id: "tets-id",
    price: 200,
    count: 5,
  },
  {
    author: "unknown",
    country: "Canada",
    imageLink: "link",
    language: "English",
    link: "http://link",
    pages: 200,
    title: "Title",
    year: 2000,
    id: "tets-id",
    price: 200,
    count: 5,
  },
] as Product[];

describe("getProductById", () => {
  it("should return a product when given a valid ID", async () => {
    jest
      .spyOn(apiFunctions, "getAllProducts")
      .mockImplementationOnce(() => Promise.resolve(mockProducts));

    const result = (await getProductsList()) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(200);
    expect(JSON.parse(result.body)).toEqual(mockProducts);
  });

  it("should return 500 error when promise rejected", async () => {
    jest
      .spyOn(apiFunctions, "getAllProducts")
      .mockImplementationOnce(() => Promise.reject(new Error("api error")));

    const result = (await getProductsList()) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(500);
  });
});
