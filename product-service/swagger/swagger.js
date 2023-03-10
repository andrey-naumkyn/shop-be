// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "product-service",
    "version": "1"
  },
  "paths": {
    "/products": {
      "get": {
        "summary": "getProductsList",
        "description": "",
        "operationId": "getProductsList.get.products",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/products/{id}": {
      "get": {
        "summary": "getProductById",
        "description": "",
        "operationId": "getProductById.get.products/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {
    "Product": {
      "properties": {
        "author": {
          "title": "Product.author",
          "type": "string"
        },
        "country": {
          "title": "Product.country",
          "type": "string"
        },
        "imageLink": {
          "title": "Product.imageLink",
          "type": "string"
        },
        "language": {
          "title": "Product.language",
          "type": "string"
        },
        "link": {
          "title": "Product.link",
          "type": "string"
        },
        "pages": {
          "title": "Product.pages",
          "type": "number"
        },
        "title": {
          "title": "Product.title",
          "type": "string"
        },
        "year": {
          "title": "Product.year",
          "type": "number"
        },
        "id": {
          "title": "Product.id",
          "type": "string"
        },
        "price": {
          "title": "Product.price",
          "type": "number"
        },
        "count": {
          "title": "Product.count",
          "type": "number"
        }
      },
      "required": [
        "author",
        "country",
        "imageLink",
        "language",
        "link",
        "pages",
        "title",
        "year",
        "id",
        "price",
        "count"
      ],
      "additionalProperties": false,
      "title": "Product",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/dev"
};