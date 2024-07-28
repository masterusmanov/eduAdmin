import axios from "../axios";

export const webName = {
  create: (state) =>
    axios.post("/api/web-name", state, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  list: () =>
    axios.get("/api/web-name", {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  
  remove: (id) =>
    axios.delete(`/api/v1/admin/delete-account/${id}`, {
      headers: {
        "Content-Type": "application/json",
      }
    }),
  
  update: (id, state) =>
    axios.put(`/api/v1/admin/update/${id}`, state, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};