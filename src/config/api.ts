import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_EMDIA_API
});

// tslint:disable-next-line: no-default-export
export default api;
