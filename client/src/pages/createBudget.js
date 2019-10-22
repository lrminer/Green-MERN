import React from "react";
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../utils/API";
import Button from "../components/Button";
import Input from "../components/Input";

class CreateBudget extends React.Component {
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
    API.postBudget(budget).then(budget => {
      console.log(budget);
    });

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
        <div className="container">
          <Navbar />
          <form>
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Grocery"
              name="grocery"
              aria="grocery"
              value={this.state.grocery}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Dine Out"
              name="dineout"
              aria="dineout"
              value={this.state.dineout}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Alcohol"
              name="alcohol"
              aria="alcohol"
              value={this.state.alcohol}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Housing"
              name="housing"
              aria="housing"
              value={this.state.housing}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Apparel"
              name="apparel"
              aria="apparel"
              value={this.state.apparel}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Transportation"
              name="transportation"
              aria="transportation"
              value={this.state.transportation}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Healthcare"
              name="healthcare"
              aria="healthcare"
              value={this.state.healthcare}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Entertainment"
              name="entertainment"
              aria="entertainment"
              value={this.state.entertainment}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Personal Care"
              name="personalcare"
              aria="personalcare"
              value={this.state.personalcare}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Education"
              name="education"
              aria="education"
              value={this.state.education}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Miscellaneous"
              name="miscellaneous"
              aria="miscellaneous"
              value={this.state.miscellaneous}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Donations"
              name="donations"
              aria="donations"
              value={this.state.donations}
            />
            <Input
              onChange={this.handleInputChange}
              type="number"
              placeholder="Insurance"
              name="insurance"
              aria="insurance"
              value={this.state.insurance}
            />
            <Button
              type="button"
              onClick={this.handleFormSubmit}
              text="Submit Budget"
            />
          </form>
          <Footer />
        </div>
      </>
    );
  }
}

export default CreateBudget;
