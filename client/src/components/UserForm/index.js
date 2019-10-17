import React from "react";
// import API from "../utils/API";

class UserForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        location: "",
        income: ""
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
            firstName: "",
            lastName: "",
            age: "",
            location: "",
            income: ""
        });
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        First Name
                        <input type="firstName" className="form-control" name="firstName" id="firstName" placeholder="FirstName" />
                    </div>
                    <div className="form-group">
                        Last Name
                        <input type="lastName" className="form-control" name="lastName" id="lastName" placeholder="lastName" />
                    </div>
                    <div className="form-group">
                        Age
                        <input type="age" className="form-control" name="age" id="age" placeholder="age" />
                    </div>
                    <div className="form-group">
                        Location
                        <input type="location" className="form-control" name="location" id="location" placeholder="location" />
                    </div>
                    <div className="form-group">
                        Income
                        <input type="income" className="form-control" name="income" id="income" placeholder="income" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserForm;
