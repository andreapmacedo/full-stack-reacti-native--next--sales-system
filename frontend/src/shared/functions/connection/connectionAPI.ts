import axios from 'axios';
import { MethodEnum } from '../../enums/mehtods.enum';

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionAPI {

  static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    switch (method) {
      case MethodEnum.DELETE: // no body
      case MethodEnum.GET: // no body
        return (await axios[method]<T>(url)).data;
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (await axios[method]<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: MethodType, body?: B): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            // throw new Error(ERROR_ACCESS_DANIED);
            throw new Error('ERROR_ACCESS_DANIED');
          default:
            // throw new Error(ERROR_CONNECTION);
            throw new Error('ERROR_CONNECTION');
        }
      }
      // throw new Error(ERROR_CONNECTION);
      throw new Error('ERROR_CONNECTION');
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const connectionAPIPost = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const connectionAPIPut = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const connectionAPIPatch = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};
