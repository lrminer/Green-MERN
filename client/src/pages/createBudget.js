import React from "react";
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class createBudget extends React.Component {
    state = {
        grocery: "",
        dineOut: "",
        alcohol: "", 
        housing: "", 
        apparerlAndServices: "", 
        transportation:"", 
        healthCare:"", 
        entertainment:"", 
        personalCare:"", 
        education:"", 
        miscallaneous:"", 
        donations:"", 
        insurance:""
    };

    componentDidMount() { }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ username: "", password: "" });
    };

    render() {
        return (
            <>
                <Navbar />
                <form>
                    <div class="form-group">
                        Grocery
                        <input type="grocery" class="form-control" name = "grocery" id="grocery" placeholder="Grocery" />
                    </div>
                    <div class="form-group">
                        Dine Out
                        <input type="dineout" class="form-control" name = "dineout" id="dineout" placeholder="Dineout" />
                    </div>
                    <div class="form-group">
                        Alcohol
                        <input type="Alcohol" class="form-control" name = "Alcohol" id="Alcohol" placeholder="Alcohol" />
                    </div>
                    <div class="form-group">
                        Housing
                        <input type="Housing" class="form-control" name = "Housing" id="Housing" placeholder="Housing" />
                    </div>
                    <div class="form-group">
                        Apparel and Services
                        <input type="Apparel" class="form-control" name = "Apparel" id="Apparel" placeholder="Apparel" />
                    </div>
                    <div class="form-group">
                        Transportation
                        <input type="Transportation" class="form-control" name = "Transportation" id="Transportation" placeholder="Transportation" />
                    </div>
                    <div class="form-group">
                        Health Care
                        <input type="password" class="form-control" name = "HealthCare" id="HealthCare" placeholder="HealthCare" />
                    </div>
                    <div class="form-group">
                        Entertainment
                        <input type="password" class="form-control" name = "Entertainment" id="Entertainment" placeholder="Entertainment" />
                    </div>
                    <div class="form-group">
                        Personal Care
                        <input type="password" class="form-control" name = "PersonalCare" id="PersonalCare" placeholder="PersonalCare" />
                    </div>
                    <div class="form-group">
                        Education
                        <input type="password" class="form-control" name = "Education" id="Education" placeholder="Education" />
                    </div>
                    <div class="form-group">
                        Miscallaneous
                        <input type="password" class="form-control" name = "Miscallaneous" id="Miscallaneous" placeholder="Miscallaneous" />
                    </div>
                    <div class="form-group">
                        Donations
                        <input type="password" class="form-control" name = "Donations" id="Donations" placeholder="Donations" />
                    </div>
                    <div class="form-group">
                        Insurance
                        <input type="password" class="form-control" name = "Insurance" id="Insurance" placeholder="Insurance" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <Footer />
            </>
        );
    }
}

export default createBudget;
