import React from "react";
// import API from "../utils/API";

class BudgetForm extends React.Component {
    state = {
        grocery: "",
        dineOut: "",
        alcohol: "",
        housing: "",
        apparerlAndServices: "",
        transportation: "",
        healthCare: "",
        entertainment: "",
        personalCare: "",
        education: "",
        miscallaneous: "",
        donations: "",
        insurance: ""
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
        this.setState({
            grocery: "",
            dineOut: "",
            alcohol: "",
            housing: "",
            apparerlAndServices: "",
            transportation: "",
            healthCare: "",
            entertainment: "",
            personalCare: "",
            education: "",
            miscallaneous: "",
            donations: "",
            insurance: ""
        });
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        Grocery
                        <input type="grocery" className="form-control" name="grocery" id="grocery" placeholder="Grocery" />
                    </div>
                    <div className="form-group">
                        Dine Out
                        <input type="dineout" className="form-control" name="dineout" id="dineout" placeholder="Dineout" />
                    </div>
                    <div className="form-group">
                        Alcohol
                        <input type="Alcohol" className="form-control" name="Alcohol" id="Alcohol" placeholder="Alcohol" />
                    </div>
                    <div className="form-group">
                        Housing
                        <input type="Housing" className="form-control" name="Housing" id="Housing" placeholder="Housing" />
                    </div>
                    <div className="form-group">
                        Apparel and Services
                        <input type="Apparel" className="form-control" name="Apparel" id="Apparel" placeholder="Apparel" />
                    </div>
                    <div className="form-group">
                        Transportation
                        <input type="Transportation" className="form-control" name="Transportation" id="Transportation" placeholder="Transportation" />
                    </div>
                    <div className="form-group">
                        Health Care
                        <input type="password" className="form-control" name="HealthCare" id="HealthCare" placeholder="HealthCare" />
                    </div>
                    <div className="form-group">
                        Entertainment
                        <input type="password" className="form-control" name="Entertainment" id="Entertainment" placeholder="Entertainment" />
                    </div>
                    <div className="form-group">
                        Personal Care
                        <input type="password" className="form-control" name="PersonalCare" id="PersonalCare" placeholder="PersonalCare" />
                    </div>
                    <div className="form-group">
                        Education
                        <input type="password" className="form-control" name="Education" id="Education" placeholder="Education" />
                    </div>
                    <div className="form-group">
                        Miscallaneous
                        <input type="password" className="form-control" name="Miscallaneous" id="Miscallaneous" placeholder="Miscallaneous" />
                    </div>
                    <div className="form-group">
                        Donations
                        <input type="password" className="form-control" name="Donations" id="Donations" placeholder="Donations" />
                    </div>
                    <div className="form-group">
                        Insurance
                        <input type="password" className="form-control" name="Insurance" id="Insurance" placeholder="Insurance" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default BudgetForm;
