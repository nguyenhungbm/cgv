import httpRequest from "@/plugins/api/http-request";
import apiConstant from "@/plugins/api/apiConstant";

export const getDetailProduct = async (slug) =>
    httpRequest.get(apiConstant.PRODUCT.DETAIL + slug);