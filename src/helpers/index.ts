export const getAccessToken = () => {
  const access_token = sessionStorage.getItem("access_token");
  const expires_in = sessionStorage.getItem("expires_in");
  return {
    access_token,
    expires_in,
  };
};

export const saveAccessToken = (
  access_token: string,
  expires_in: string,
): void => {
  sessionStorage.setItem("access_token", access_token);
  sessionStorage.setItem("expires_in", `${new Date().getTime()}${expires_in}`);
};
