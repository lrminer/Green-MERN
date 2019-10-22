import React, { Component } from 'react';
// import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PieChart from "../components/PieChart";
import axios from 'axios'



class Chart extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        let currentComponent = this;
        axios.get(`/api/budget/`).then(response => {
            console.log(response);
            // axios.get(`/api/budget/`).then(response => {
            // console.log(response);
            //   currentComponent.setState({
            //     pets: response.data.pets,
            //     activePet: {
            //       name: response.data.pets[0].name,
            //       id: response.data.pets[0]._id
            //     },
            //     activePetVisit: response.data.pets[0].docVisits,
            //     mounted: true
            //   });
            
            //Dummy data for the chart function
            currentComponent.setState({
                chartData: {
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets: [
                        {
                            label: 'Population',
                            data: [
                                617594,
                                181045,
                                153060,
                                106519,
                                105162,
                                95072
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
                            ]
                        }
                    ]
                }
            });
        });

    }

    render() {
        return (
            <div>
                <Navbar />
                <PieChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                <Footer />
            </div>
        );
    }
}

export default Chart;