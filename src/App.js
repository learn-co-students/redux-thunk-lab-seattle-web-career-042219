import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class App extends Component {
  state = {
    cats: []
  };
  componentDidMount() {
    fetch("http://localhost:4000/db")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .then(res => this.setState({ cats: res }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
