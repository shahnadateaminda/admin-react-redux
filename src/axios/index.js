import axios from "axios";


const api = axios.create({
   baseURL: "http://localhost:4000",
   timeout: 1000,
 
});

// api.defaults.headers.common["Authorization"] = `AUTH_TOKEN`;
export default api;