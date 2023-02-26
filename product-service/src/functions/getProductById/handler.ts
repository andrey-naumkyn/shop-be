import { APIGatewayProxyHandler } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { getProdById } from "@services/index";
import { middyfy } from "@libs/lambda";

export const getProductById: APIGatewayProxyHandler = async (event, _context) => {
  try {
    const id = event.pathParameters.id;
    const product = await getProdById(id);

    if (!product) {
      return formatJSONResponse(404, {
        message: `Product with id ${id} not found`,
      });
    }

    return formatJSONResponse(200, product);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal server error",
      }),
    };
  }
};

export const main = middyfy(getProductById);
