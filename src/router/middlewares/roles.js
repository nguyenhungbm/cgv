import { revokeUser } from "@/plugins/utils/cookie";

export function guest(context) {
  const { next, isLoggedIn } = context;
  if (isLoggedIn) {
    return next({ name: "Start" });
  }
  return next();
}

export function auth(context) {
  const { next, isLoggedIn } = context;
  if (isLoggedIn) {
    return next();
  }
  revokeUser();
  window.location.reload();
}
