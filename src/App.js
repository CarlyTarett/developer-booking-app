import React from "react";
import uuid from "uuid/v4";
import DeveloperCount from "./DeveloperCount";
import Header from "./Header";
import Developer from "./Developer";
import AddDeveloper from "./AddDeveloper";

import "./App.css";

// Only class components can have state
// State must live in the parent of any components that need to access it
class App extends React.Component {
  state = {
    developers: [
      {
        name: "Sue Moron-Garcia",
        skills: ["TDD", "Debugging"],
        available: false,
        dateJoined: "2019-12-02",
        id: uuid()
      },
      {
        name: "Fiona Castillo",
        skills: ["HTML", "CSS"],
        available: true,
        dateJoined: "2019-11-30",
        id: uuid()
      },
      {
        name: "Harine Vijay",
        skills: ["Java"],
        available: false,
        dateJoined: "2019-12-01",
        id: uuid()
      },
      {
        name: "Ilga Koko",
        skills: ["HTML", "TDD", "React"],
        available: true,
        dateJoined: "2019-10-22",
        id: uuid()
      },
      {
        name: "Nichola Evans",
        skills: ["CSS", "Ruby", "Python"],
        available: false,
        dateJoined: "2019-12-09",
        id: uuid()
      }
    ]
  };

  deleteDeveloper = id => {
    const filteredDevelopers = this.state.developers.filter(dev => {
      return dev.id !== id;
    });
    console.log(filteredDevelopers);
    this.setState({
      developers: filteredDevelopers
    });
  };

  addNewDeveloper = (name, skills, dateJoined) => {
    console.log(name, skills, dateJoined);

    // Create a new developer object
    const newDev = {
      name: name,
      skills: skills,
      available: true,
      dateJoined: dateJoined,
      id: uuid()
    };

    // Copy the array of developers from state using slice
    const copy = this.state.developers.slice();

    // Push that object into the array of developers
    copy.push(newDev);

    // Make sure state is updated
    this.setState({
      developers: copy
    });
  };

  render() {
    const availableDevelopers = this.state.developers.filter(developer => {
      return developer.available === true;
    });

    const unavailableDevelopers = this.state.developers.filter(developer => {
      return developer.available === false;
    });

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddDeveloper addNewDeveloperFunc={this.addNewDeveloper} />
          <DeveloperCount count={availableDevelopers.length} />
          <h2>Available right now:</h2>
          {availableDevelopers.map(developer => {
            return (
              <Developer
                deleteDeveloperFunc={this.deleteDeveloper}
                key={developer.id}
                available={developer.available}
                name={developer.name}
                skills={developer.skills}
                dateJoined={developer.dateJoined}
                id={developer.id}
              />
            );
          })}
          <h2>Currently working very hard:</h2>
          {unavailableDevelopers.map(developer => {
            return (
              <Developer
                deleteDeveloperFunc={this.deleteDeveloper}
                key={developer.id}
                available={developer.available}
                name={developer.name}
                skills={developer.skills}
                dateJoined={developer.dateJoined}
                id={developer.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
