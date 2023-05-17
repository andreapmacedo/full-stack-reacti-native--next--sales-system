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