import axios from "axios";
import * as apiConfig from "../constants";
import { getAccessToken, saveAccessToken } from "../helpers";

export const grantFreshAccessToken = async () => {
  try {
    const grantToken = await axios.post(apiConfig.AUTHENTICATION_URL, {
      grant_type: apiConfig.grantType,
      client_id: apiConfig.clientID,
      client_secret: apiConfig.clientSecret,
    });
    const { access_token, expires_in } = grantToken.data;
    saveAccessToken(access_token, expires_in);
    return access_token;
  } catch (error) {
    throw error;
  }
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const freshAccessToken = await grantFreshAccessToken();
      const config = error.config;
      config.headers["Authorization"] = `Bearer ${freshAccessToken}`;
      return axios.request(config);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const getAllPublications = async ({ page = 1, filter = "all" }) => {
  const { access_token } = getAccessToken();
  const params = { page: page === 0 ? 1 : page, limit: 15 };

  const queryParams = new URLSearchParams(
    params as unknown as Record<string, string>,
  );
  if (filter && filter !== "all") {
    queryParams.append("filter[0][field]", "category");
    queryParams.append("filter[0][type]", "eq");
    queryParams.append("filter[0][value]", filter);
  }

  try {
    return axios.get(`${apiConfig.PROJECTS_URL}?${queryParams.toString()}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getAllCategories = async () => {
  const { access_token } = getAccessToken();
  try {
    return axios.get(apiConfig.CATEGORY_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const searchPublication = async (input: string) => {
  const { access_token } = getAccessToken();
  const queryParams = new URLSearchParams({ limit: 10 } as unknown as Record<
    string,
    string
  >);
  try {
    queryParams.append("query[0][field]", "name");
    queryParams.append("query[0][type]", "like");
    queryParams.append("query[0][value]", `%${input}%`);
    return axios.get(`${apiConfig.PROJECTS_URL}?${queryParams.toString()}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getOnePublication = async (id: string) => {
  const { access_token } = getAccessToken();
  try {
    return axios.get(`${apiConfig.PROJECTS_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
