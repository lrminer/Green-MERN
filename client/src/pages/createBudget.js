import React from "react";
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class createBudget extends React.Component {
    state = {
        username: "",
        password: ""
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
        // TODO:
        // Login action here
        this.setState({ username: "", password: "" });
    };

    render() {
        return (
            <>
                <Navbar />
                <form>
                    <div class="form-group">
                        Grocery
                        <input type="grocery" class="form-control" id="grocery" placeholder="Grocery" />
                    </div>
                    <div class="form-group">
                        Dine Out
                        <input type="dineout" class="form-control" id="dineout" placeholder="Dineout" />
                    </div>
                    <div class="form-group">
                        Alcohol
                        <input type="Alcohol" class="form-control" id="Alcohol" placeholder="Alcohol" />
                    </div>
                    <div class="form-group">
                        Housing
                        <input type="Housing" class="form-control" id="Housing" placeholder="Housing" />
                    </div>
                    <div class="form-group">
                        Apparel and Services
                        <input type="Apparel" class="form-control" id="Apparel" placeholder="Apparel" />
                    </div>
                    <div class="form-group">
                        Transportation
                        <input type="password" class="form-control" id="Transportation" placeholder="Transportation" />
                    </div>
                    <div class="form-group">
                        Health Care
                        <input type="password" class="form-control" id="HealthCare" placeholder="HealthCare" />
                    </div>
                    <div class="form-group">
                        Entertainment
                        <input type="password" class="form-control" id="Entertainment" placeholder="Entertainment" />
                    </div>
                    <div class="form-group">
                        Personal Care
                        <input type="password" class="form-control" id="PersonalCare" placeholder="PersonalCare" />
                    </div>
                    <div class="form-group">
                        Education
                        <input type="password" class="form-control" id="Education" placeholder="Education" />
                    </div>
                    <div class="form-group">
                        Miscallaneous
                        <input type="password" class="form-control" id="Miscallaneous" placeholder="Miscallaneous" />
                    </div>
                    <div class="form-group">
                        Donations
                        <input type="password" class="form-control" id="Donations" placeholder="Donations" />
                    </div>
                    <div class="form-group">
                        Insurance
                        <input type="password" class="form-control" id="Insurance" placeholder="Insurance" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <Footer />
            </>
        );
    }
}

export default createBudget;
