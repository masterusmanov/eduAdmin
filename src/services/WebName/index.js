import axios from "../axios";

export const webName = {
    create: (state) => axios.post("/api/web-name", state, {
    }),
        
    list : () => axios.get("/api/web-name", {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    remove: (id)=> axios.delete(`/api/v1/admin/delete-account/${id}`, {
       
    }),
    update: (id, state)=> axios.put(`/api/v1/admin/update/${id}`, state, {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    
}