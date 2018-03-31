import React, { Component } from 'react';
import '../style/App.css';
import NavigationBar from '../components/NavigationBar';
import {Link} from 'react-router';

class App extends Component {

  constructor(){
    super();
    this.state = {
      heading: "home"
    }
  }

  changeHeading(newheading){
    this.setState({heading: newheading});
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />

        {this.props.children}

      </div>
    );
  }
}

export default App;
