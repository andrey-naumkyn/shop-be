import { APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { getAllProducts } from "@services/index";
import { middyfy } from "@libs/lambda";

export const getProductsList = async (): Promise<APIGatewayProxyResult> => {
  try {
    const products = await getAllProducts();
    return formatJSONResponse(200, products);
  } catch (error) {
    return formatJSONResponse(500, { message: "Product not found" });
  }
};

export const main = middyfy(getProductsList);
