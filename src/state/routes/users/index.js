import api from "../../api";

export const useUserStore = (_set) => ({
  getAllUsers: async () => {
    const res = await api.get("/users");
    return res?.data;
  },
  getOneUser: async (id) => {
    const res = await api.get(`/user/${id}`);
    return res?.data;
  },
  createUser: async (data) => {
    const res = await api.post("/user", data);

    return res?.data;
  },
  updateUser: async (id, data) => {
    const res = await api.patch(`/user/edit/${id}`, data);
    return res?.data;
  },
  deleteUser: async (id) => {
    const res = await api.delete(`/user/${id}`);
    return res?.data;
  },
});
