import { API } from "@/common/api"

export async function getProducts(skip) {
    const data = await API.get(`/get-products?skip=${skip}`);
    return data;
}

