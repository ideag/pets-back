/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
import User from '../interfaces/user.interface';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"format":"fast","nullable":true,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {User};
export const UserSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "defaultProperties": [
  ],
  "definitions": {
    "default": {
      "defaultProperties": [
      ],
      "properties": {
        "organizationId": {
          "type": "number"
        },
        "roleType": {
          "type": [
            "null",
            "string"
          ]
        }
      },
      "required": [
        "organizationId",
        "roleType"
      ],
      "type": "object"
    }
  },
  "properties": {
    "email": {
      "type": [
        "null",
        "string"
      ]
    },
    "id": {
      "type": "string"
    },
    "modTime": {
      "type": [
        "null",
        "string"
      ]
    },
    "name": {
      "type": [
        "null",
        "string"
      ]
    },
    "roles": {
      "additionalItems": {
        "anyOf": [
          {
            "$ref": "#/definitions/default"
          }
        ]
      },
      "items": [
        {
          "$ref": "#/definitions/default"
        }
      ],
      "minItems": 0,
      "type": "array"
    },
    "surname": {
      "type": [
        "null",
        "string"
      ]
    },
    "username": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "id",
    "modTime",
    "name",
    "roles",
    "surname",
    "username"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isUser = ajv.compile(UserSchema) as ValidateFunction<User>;
export default function validate(value: unknown): User {
  if (isUser(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isUser.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'User'}) +
      '\n\n' +
      inspect(value),
    );
  }
}