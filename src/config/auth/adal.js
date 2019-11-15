import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

export const adalConfig = {
  tenant: process.env.REACT_APP_AZURE_ADD_TENANT,
  clientId: process.env.REACT_APP_AZURE_ADD_CLIENT_ID,
  endpoints: {
    api: process.env.REACT_APP_AZURE_ADD_CLIENT_ID
  },
  cacheLocation: "sessionStorage"
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  adalConfig.endpoints.api
);
