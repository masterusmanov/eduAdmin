import axios from "../axios";

export const courseStudent = {
  create: (state) => axios.post("/api/course-student", state, {}),

  list: () => axios.get("/api/course-student"),

  remove: (id) => axios.delete(`/api/course-student/${id}`),

  update: (id, state) => axios.put(`/api/course-student/${id}`),
};
