import axios from "axios";
import { get } from "lodash";
import { getAccessToken } from "@/plugins/utils/cookie";
import { StatusCode } from "@/plugins/const/app";
import { revokeUser } from "@/plugins/utils/cookie";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers,
});

axiosInstance.interceptors.request.use(
  (config) => {
    let params = config.params || {};
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return {
      ...config,
      params: params,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = get(error, "response.status");
    const errorData = get(error, "response.data");
    switch (status) {
      case StatusCode.Unauthorized: {
        window.location.reload(); 
        break;
      }
      case StatusCode.ValidationFailed:
      case StatusCode.BadRequest: {
        return Promise.reject({ ...errorData, status });
      }
      case StatusCode.Forbidden: {
        break;
      }
      case StatusCode.InternalServerError: {
        return Promise.reject({ error: errorData.message });
      }
      case StatusCode.TooManyRequests: {
        break;
      }
    }
    return Promise.reject({ ...errorData, status });
  }
);

function getApi(url, config = {}) {
  return axiosInstance.get(url, config);
}

function postApi(url, data, config = {}) {
  return axiosInstance.post(url, data, config);
}

function putApi(url, data, config = {}) {
  return axiosInstance.put(url, data, config);
}

function deleteApi(url, config = {}) {
  return axiosInstance.delete(url, config);
}

const httpRequest = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};

export default httpRequest;
