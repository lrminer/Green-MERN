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
    transportation: "",
    healthCare: "",
    entertainment: "",
    personalCare: "",
    education: "",
    miscallaneous: "",
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
      <>
        <Navbar />
        <div className="container">
          <form>
            <div class="form-group">
              <label for="grocery">Grocery</label>
              <input
                type="number"
                class="form-control"
                name="grocery"
                id="input-grocery"
                placeholder="Grocery"
              />
            </div>
            <div class="form-group">
              <label for="dineout">Dine Out</label>
              <input
                type="number"
                class="form-control"
                name="dineout"
                id="input-dineout"
                placeholder="Dine Out"
              />
            </div>
            <div class="form-group">
              <label for="alcohol">Alcohol</label>
              <input
                type="number"
                class="form-control"
                name="alcohol"
                id="input-alcohol"
                placeholder="Alcohol"
              />
            </div>
            <div class="form-group">
              <label for="housing">Housing</label>
              <input
                type="number"
                class="form-control"
                name="housing"
                id="input-housing"
                placeholder="Housing"
              />
            </div>
            <div class="form-group">
              <label for="apparel">Apparel</label>
              <input
                type="number"
                class="form-control"
                name="apparel"
                id="input-apparel"
                placeholder="Apparel"
              />
            </div>
            <div class="form-group">
              <label for="transportation">Transportation</label>
              <input
                type="number"
                class="form-control"
                name="transportation"
                id="input-transportation"
                placeholder="Transportation"
              />
            </div>
            <div class="form-group">
              <label for="healthcare">Health Care</label>
              <input
                type="number"
                class="form-control"
                name="healthcare"
                id="input-healthcare"
                placeholder="Health Care"
              />
            </div>
            <div class="form-group">
              <label for="entertainment">Entertainment</label>
              <input
                type="number"
                class="form-control"
                name="entertainment"
                id="input-entertainment"
                placeholder="Entertainment"
              />
            </div>
            <div class="form-group">
              <label for="personalcare">Personal Care</label>
              <input
                type="number"
                class="form-control"
                name="personalcare"
                id="input-personalcare"
                placeholder="Personal Care"
              />
            </div>
            <div class="form-group">
              <label for="education">Education</label>
              <input
                type="number"
                class="form-control"
                name="education"
                id="input-education"
                placeholder="Education"
              />
            </div>
            <div class="form-group">
              <label for="miscellaneous">Miscallaneous</label>
              <input
                type="number"
                class="form-control"
                name="miscellaneous"
                id="input-miscellaneous"
                placeholder="Miscallaneous"
              />
            </div>
            <div class="form-group">
              <label for="donations">Donations</label>
              <input
                type="number"
                class="form-control"
                name="donations"
                id="input-donations"
                placeholder="Donations"
              />
            </div>
            <div class="form-group">
              <label for="insurance">Insurance</label>
              <input
                type="number"
                class="form-control"
                name="insurance"
                id="input-insurance"
                placeholder="Insurance"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit Budget
            </button>
          </form>
        </div>

        <Footer />
      </>
    );
  }
}

export default createBudget;
