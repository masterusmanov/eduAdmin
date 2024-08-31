import axios from "../axios";

export const OnlineCourseStudent = {
  create: (state) =>
    axios.post("/api/users", state, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  list: () =>
    axios.get("/api/users", {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  listId: (id) =>
    axios.get(`/api/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  remove: (id) =>
    axios.delete(`/api/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  update: (id, state) =>
    axios.patch(`/api/users/${id}`, state, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
