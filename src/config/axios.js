import axios from "axios";


const HOSTNAME = "https://api.rezerve.pl/index.php/api/v1/web/";
const callPrivateApi = (endpoint, method, payload) => {
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": " GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
            " Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",
            // token,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


export { callPrivateApi };
