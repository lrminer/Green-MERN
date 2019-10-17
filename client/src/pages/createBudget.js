import React from "react";
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BudgetForm from "../components/BudgetForm";


function createBudget() {
    return (
        <>
            <Navbar />
            <BudgetForm />
            <Footer />
        </>
    );
}

export default createBudget;
