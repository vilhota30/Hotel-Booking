import axios from "axios";

// Налаштування axios
const axiosConf = () => 
  axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 2000,
  });

// Функція для обробки запитів
const genericRequest = async ({ requestType, url, params, data, signal }) => {
  try {
    const httpClient = axiosConf();
    // Формування параметрів запиту, якщо є
    const config = {
      method: requestType,
      url: url,
      params: requestType === "get" && params ? new URLSearchParams(params).toString() : undefined,
      data: data,
      signal: signal, // передаємо signal сюди
    };
    const response = await httpClient(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Server Response Error:", error.response);
      throw new Error(`Server Error: ${error.response.data}`);
    } else if (error instanceof SyntaxError) {
      console.error("JSON Parse Error:", error.message);
      throw new Error(`Invalid JSON: ${error.message}`);
    } else {
      console.error("Unknown Error:", error);
      throw new Error(`Unknown Error: ${error.message}`);
    }
  }
};

// Функція для POST запитів
export async function post(url, data, signal) {
  return genericRequest({ requestType: "post", url, data, signal });
}

// Функція для GET запитів без параметрів
export async function get(url) {
  return genericRequest({ requestType: "get", url });
}

// Функція для GET запитів з ID
export async function getById(url, id, signal) {
  return genericRequest({ requestType: "get", url: `${url}/${id}`, signal });
}

export async function getHotelsFilter(url, params, signal) {
  const queryParams = params ? new URLSearchParams(params).toString() : '';
  const fullUrl = `${url}?${queryParams}`;
  return genericRequest({ requestType: 'get', url: fullUrl, signal });
}

// Функція для GET запитів з параметрами
// export async function getHotelsFilter(url, params, signal) {
//   return genericRequest({ requestType: "get", url, params, signal });
// }


// import axios from "axios";

// const axiosConf = () => 
//   axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     timeout: 2000,
//   });

// const genericRequest = async ({ requestType, url, params, data, signal }) => {
//   try {
//     const httpClient = axiosConf();
//     const config = {
//       method: requestType,
//       url: url,
//       params: params ? params : {},
//       data: data,
//       signal: signal, // передаємо signal сюди
//     };
//     const response = await httpClient(config);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       console.error("Server Response Error:", error.response);
//       throw new Error(`Server Error: ${error.response.data}`);
//     } else if (error instanceof SyntaxError) {
//       console.error("JSON Parse Error:", error.message);
//       throw new Error(`Invalid JSON: ${error.message}`);
//     } else {
//       console.error("Unknown Error:", error);
//       throw new Error(`Unknown Error: ${error.message}`);
//     }
//   }
// };

// export async function post(url, data, signal) {
//   return genericRequest({ requestType: "post", url, data, signal });
// }

// export async function get(url) {
//   return genericRequest({ requestType: "get", url });
// }

// export async function getById(url, id, signal) {
//   return genericRequest({ requestType: "get", url: `${url}/${id}`, signal });
// }

// export async function getHotelsFilter( url, params, signal) {
//   return genericRequest({ requestType: "get", url, params, signal });
// }

