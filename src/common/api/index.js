import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API = {
    get: async (endPoint, input) => {
        let headers = {};

        let token = localStorage.getItem("token");
        if (token !== null) headers.Authorization = `Bearer ${token}`;

        let config = {
            headers: headers,
            params: input,
        };

        try {
            const response = await axios.get(BASE_URL + endPoint, config);
            return response;
        } catch (error) {
            return error.response;
        }
    },

    post: async (endPoint, input) => {
        let headers = {};
        let token = localStorage.getItem("token");
        if (token !== null) headers.Authorization = `Bearer ${token}`;

        try {
            const response = await axios.post(BASE_URL + endPoint, input, {
                headers: headers,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    },

    put: async (endPoint, input) => {
        let headers = {};

        let token = localStorage.getItem("token");
        if (token !== null) headers.Authorization = `Bearer ${token}`;
        let config = {
            headers: headers,
            params: input,
        };

        try {
            const response = await axios.put(BASE_URL + endPoint, input, config);
            return response;
        } catch (error) {
            return error.response;
        }
    },

    delete: async (endPoint, input) => {
        let headers = {};
        let token = localStorage.getItem("token");

        if (token !== null) headers.Authorization = `Bearer ${token}`;

        let config = {
            headers: headers,
            params: input,
        };

        try {
            const response = await axios.delete(BASE_URL + endPoint, config);
            return response;
        } catch (error) {
            return error.response;
        }
    },
};
