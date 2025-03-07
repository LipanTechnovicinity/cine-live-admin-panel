/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  const decoded: any = jwtDecode(token);
  return {
    ...decoded,
    role: decoded?.role?.toLowerCase(),
  };
};
