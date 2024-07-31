import axios from "../axios";

export const courseStudent = {
  create: (state) =>
    axios.post("/api/course-student", state, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  list: () =>
    axios.get("/api/course-student", {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  listId: (id) =>
    axios.get(`/api/course-student/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  remove: (id) =>
    axios.delete(`/api/course-student/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }),

  update: (id, state) =>
    axios.put(`/api/course-student/${id}`, state, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
