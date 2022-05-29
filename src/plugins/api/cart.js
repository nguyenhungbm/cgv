import httpRequest from "@/plugins/api/http-request";
import apiConstant from "@/plugins/api/apiConstant";

export const getCartDetail = async () =>
    httpRequest.get(apiConstant.CART.DETAIL);
export const addCart = async (id) =>
    httpRequest.post(apiConstant.CART.ADD + id);
export const updateCart = async (id) =>
    httpRequest.patch(apiConstant.CART.UPDATE + id);
export const deleteCart = async (id) =>
    httpRequest.delete(apiConstant.CART.DELETE + id);