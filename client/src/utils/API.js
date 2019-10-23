import axios from "axios";

export default {
  // user operations
  getUsers: function () {
    return axios.get("/api/users").then(response => console.log("From API", response));
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  postUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  updateUser: function (id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },

  // budget operations
  getBudgets: function () {
    return axios.get("/api/budgets");
  },
  getBudget: function (id) {
    return axios.get("/api/budgets/" + id);
  },
  postBudget: function (budgetData) {
    return axios.post("/api/budgets", budgetData);
  },
  updateBudget: function (id, budgetData) {
    return axios.put("/api/budgets/" + id, budgetData);
  },
  deleteBudget: function (id) {
    return axios.delete("/api/budgets/" + id);
  }
};
