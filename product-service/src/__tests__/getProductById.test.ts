import { getProductById } from "../functions/getProductById/handler";
import * as apiFunctions from "../services/index";
import { Product } from "../models/index";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const mockProduct = {
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
} as Product;

describe("getProductById", () => {
  it("should return a product when given a valid ID", async () => {
    jest
      .spyOn(apiFunctions, "getProdById")
      .mockImplementationOnce(() => Promise.resolve(mockProduct));

    const event = { pathParameters: { id: "1" } } as unknown as APIGatewayProxyEvent;
    const result = (await getProductById(event, null, null)) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(200);
    expect(JSON.parse(result.body)).toEqual(mockProduct);
  });

  it("should return 404 error when given a invalid ID", async () => {
    jest.spyOn(apiFunctions, "getProdById").mockImplementationOnce(() => Promise.resolve(null));

    const event = { pathParameters: { id: "434554" } } as unknown as APIGatewayProxyEvent;
    const result = (await getProductById(event, null, null)) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(404);
  });

  it("should return 500 error when promise rejected", async () => {
    jest
      .spyOn(apiFunctions, "getProdById")
      .mockImplementationOnce(() => Promise.reject(new Error("Product not found")));

    const event = { pathParameters: { id: "1" } } as unknown as APIGatewayProxyEvent;
    const result = (await getProductById(event, null, null)) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(500);
  });
});
