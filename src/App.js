import React, { Component } from 'react';
import PeopleList from './components/PeopleList';
import PickedList from './components/PickedList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: ['Hermione', 'Haggrid', 'Harry', 'Ron'],
      picked: [],
      test: ''
    };
  }

  handleConfirm = person => {
    const peopleCopy = this.state.people.slice();
    const index = peopleCopy.indexOf(person)
    peopleCopy.splice(index, 1);

    const pickedCopy = this.state.picked.slice();
    pickedCopy.push(person)

    this.setState({people: peopleCopy, picked: pickedCopy})
  };

  render() {
    const {people, picked} = this.state;

    let peopleList = people.map((element, index, arr) => {
      return <PeopleList
        key={index} 
        name={element} 
        confirmMethod=
        {this.handleConfirm} />;
    });

    let pickedList = picked.map((element, index, arr) => {
      return <PickedList key={index} name={element} />;
    });
  
    return (
      <div>
        <h3> General List </h3>
        {peopleList}
        <h3> Picked List </h3>
        {pickedList}
      </div>
    );
  }
}

export default App;
