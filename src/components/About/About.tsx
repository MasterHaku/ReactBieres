import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">About This Project</h1>
        <p className="text-lg text-center">
          This project is created by [Author 1] and [Author 2] as part of a lab exercise.
          We aim to build a simple Beer list application using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    );
  }
}

export default About;
