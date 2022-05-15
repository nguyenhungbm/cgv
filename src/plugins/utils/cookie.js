import Cookies from 'universal-cookie';
import { convertTimestampToDate } from "./date";

const cookie = new Cookies();

export function setUserInfo(data, expireAt) {
  cookie.set("userInfo", data, {
    path: "/",
    expires: convertTimestampToDate(expireAt),
  });
}

export function getUserInfo() {
  return cookie.get("userInfo");
}

export function setAccessToken(token, expireAt) {
  cookie.set("token", token, {
    path: "/",
    expires: convertTimestampToDate(expireAt),
  });
  console.log("hi :"+ convertTimestampToDate(expireAt));
}

export function getAccessToken() {
  return cookie.get("token");
}

export function isAuthenticated() {
  const userInfo = getUserInfo();
  const token = getAccessToken();
  return !!userInfo && !!token;
}

export function revokeUser() {
  const options = {
    path: "/",
  };
  cookie.remove("token", options);
}
