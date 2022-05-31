import { revokeUser } from "@/plugins/utils/cookie";

export function guest(context) {
  const { next, isLoggedIn } = context;
  return next();
}

export function auth(context) {
  const { next, isLoggedIn } = context;
  if (isLoggedIn) {
    return next();
  }
  revokeUser();
  return next({ name: "LoginScreen" });
}
 