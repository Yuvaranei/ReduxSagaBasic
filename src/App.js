import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {fetchPersonAction} from './actions/PersonAction';
import {fetchPlanetAction} from './actions/PlanetAction'

class App extends Component {

  constructor(props){
    super(props);

    this.getPersonDetails = this.getPersonDetails.bind(this);
    this.getPlanetDetails = this.getPlanetDetails.bind(this);
  }

  getPersonDetails(){
    this.props.fetchPersonAction();
  }

  getPlanetDetails(){
    this.props.fetchPlanetAction();
  }

  render() {
    const {person,planet} = this.props;
    const personName = (person && person.name) || '';
    const planetName = (planet && planet.name) || '';
    return (
      <div className="App">
        <button onClick={this.getPersonDetails}>Get Person Details</button>
        <button onClick={this.getPlanetDetails}>Get Planet Details</button>

        <div className="person-info">
          {personName}
        </div>

        <div className="planet-info">
          {planetName}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  person : state.personReducer.person,
  planet : state.planetReducer.planet
})

const mapDispatchToProps = {
  fetchPersonAction : fetchPersonAction,
  fetchPlanetAction : fetchPlanetAction
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
