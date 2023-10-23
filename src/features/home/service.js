import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../query";

const useQueryProdutcts = (skip, options) => {
    return useQuery(
        [`get-produccts`, { skip }],
        () => getProducts(skip),
        {
            ...options
        }
    );
}

export {
    useQueryProdutcts
}