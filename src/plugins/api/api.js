import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers,
});

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
