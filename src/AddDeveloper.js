import React from "react";

class AddDeveloper extends React.Component {
  state = {
    developerName: "",
    skills: "",
    dateJoined: "2019-12-16"
  };

  updateDeveloperName = event => {
    this.setState({
      developerName: event.target.value
    });
  };

  updateDeveloperSkills = event => {
    // const skillsArray = event.target.value.split(",");
    // const filteredSkills = skillsArray.filter(skill => {
    //   return skill.length > 0;
    // });

    this.setState({
      skills: event.target.value
    });
  };

  updateDate = event => {
    this.setState({
      dateJoined: event.target.value
    });
  };

  addDeveloper = () => {
    this.props.addNewDeveloperFunc(this.state.developerName, this.state.skills, this.state.dateJoined);
  }

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <input
            type="text"
            onChange={this.updateDeveloperName}
            value={this.state.developerName}
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            onChange={this.updateDeveloperSkills}
            value={this.state.skills}
            className="form-control"
            placeholder="Enter skills"
          />
        </div>
        <div className="col-3">
          <input
            type="date"
            className="form-control"
            value={this.state.dateJoined}
            onChange={this.updateDate}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={this.addDeveloper}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddDeveloper;
