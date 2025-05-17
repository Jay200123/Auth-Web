import api from "../../api/index";

export const useAuthStore = (set) => ({
  auth: [],
  access: null,
  refresh_token: null,
  status: null,
  isAuthenticated: false,

  login: async (email, password) => {
    const res = await api.post("/login", {
      email,
      password,
    });

    set({
      auth: res?.data?.details,
      access: res?.data?.details?.access,
      refresh_token: res?.data?.details?.refresh_token,
      status: res?.data?.status,
      isAuthenticated: true,
    });

    return res?.data?.details;
  },

  logout: async () => {
    await api.post("/logout");

    set({
      auth: null,
      access: null,
      refresh_token: null,
      status: null,
      isAuthenticated: false,
    });

    return null;
  },
});
