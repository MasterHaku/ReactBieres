import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="mb-4 text-2xl font-bold">About Us and this app</h1>
        <p className="text-lg text-center">
          This project is created by Hoel Girard as a very serious Beer App, that may be used in real bars.<p></p>
          We inform you taht the adult age is required to use this app. <p></p>
          Alcool abuse is very dangerous for your heatlh, consome carefully
        </p>
      </div>
    );
  }
}

export default About;
