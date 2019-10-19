import React from "react";
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../utils/API";
import Button from "../components/Button";
import Input from "../components/Input";

class createBudget extends React.Component {
  state = {
    grocery: "",
    dineout: "",
    alcohol: "",
    housing: "",
    apparel: "",
    transportation: "",
    healthcare: "",
    entertainment: "",
    personalcare: "",
    education: "",
    miscellaneous: "",
    donations: "",
    insurance: ""
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {
      grocery,
      dineout,
      alcohol,
      housing,
      apparel,
      transportation,
      healthcare,
      entertainment,
      personalcare,
      education,
      miscellaneous,
      donations,
      insurance
    } = this.state;
    const budget = {
      grocery,
      dineout,
      alcohol,
      housing,
      apparel,
      transportation,
      healthcare,
      entertainment,
      personalcare,
      education,
      miscellaneous,
      donations,
      insurance
    };

    console.log(budget);
    API.postBudget(budget);

    this.setState({
      grocery: "",
      dineout: "",
      alcohol: "",
      housing: "",
      apparel: "",
      transportation: "",
      healthcare: "",
      entertainment: "",
      personalcare: "",
      education: "",
      miscellaneous: "",
      donations: "",
      insurance: ""
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <form>
            {/* <div className="form-group">
              <label htmlFor="grocery">Grocery</label>
              <input
                type="number"
                className="form-control"
                name="grocery"
                id="input-grocery"
                placeholder="Grocery"
              />
            </div> */}
            <Input
              type="number"
              placeholder="Grocery"
              name="grocery"
              aria="grocery"
            />
            <Input
              type="number"
              placeholder="Dine Out"
              name="dineout"
              aria="dineout"
            />
            <Input
              type="number"
              placeholder="Alcohol"
              name="alcohol"
              aria="alcohol"
            />
            <Input
              type="number"
              placeholder="Housing"
              name="housing"
              aria="housing"
            />
            <Input
              type="number"
              placeholder="Apparel"
              name="apparel"
              aria="apparel"
            />
            <Input
              type="number"
              placeholder="Transportation"
              name="transportation"
              aria="transportation"
            />
            <Input
              type="number"
              placeholder="Healthcare"
              name="healtcare"
              aria="healtcare"
            />
            <Input
              type="number"
              placeholder="Entertainment"
              name="entertainment"
              aria="entertainment"
            />
            <Input
              type="number"
              placeholder="Personal Care"
              name="personalcare"
              aria="personalcare"
            />
            <Input
              type="number"
              placeholder="Education"
              name="education"
              aria="education"
            />
            <Input
              type="number"
              placeholder="Miscellaneous"
              name="miscellaneous"
              aria="miscellaneous"
            />
            <Input
              type="number"
              placeholder="Donations"
              name="donations"
              aria="donations"
            />
            <Input
              type="number"
              placeholder="Insurance"
              name="insurance"
              aria="insurance"
            />
            <Button
              type="button"
              onClick={this.handleFormSubmit}
              text="Submit Budget"
            />
          </form>
        </div>

        <Footer />
      </>
    );
  }
}

export default createBudget;
