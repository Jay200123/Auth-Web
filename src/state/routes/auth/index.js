import { create } from "zustand";
import api from "../../api/index";

export const useAuthStore = create((set) => ({
  auth: [],
  access: null,
  refresh_token: null,
  status: null,
  isAuthenticated: false,

  login: async (email, password) => {
    const response = await api.post("/login", email, password);

    set({
      auth: response?.data,
      access: response?.data?.access,
      refresh_token: response?.data?.refresh_token,
      status: response?.status,
      isAuthenticated: true,
    });

    return response?.data;
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
  },
}));
