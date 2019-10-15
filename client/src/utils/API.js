import axios from "axios";

export default {
  // user operations
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  postUser: function() {
    return axios.post("/api/users");
  },
  updateUser: function(id) {
    return axios.put("/api/users/:id");
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/:id");
  },


  
  // budget operations
  getBudgets: function() {
    return axios.get("/api/budgets");
  },
  getBudget: function(id) {
    return axios.get("/api/budgets/" + id);
  },
  postBudget: function() {
    return axios.post("/api/budgets");
  },
  updateBudget: function(id) {
    return axios.put("/api/budgets/:id");
  },
  deleteBudget: function(id) {
    return axios.delete("/api/budgets/:id");
  }
};
