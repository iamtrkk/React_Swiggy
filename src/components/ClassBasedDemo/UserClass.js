import { Button } from "@mui/material";
import React from "react";

// Demo Class Based components

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Calls React.Component's constructor
    // Now 'this' is available and you can use 'this.props'

    //Creating state variable
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount(){
    console.log('ComponentDidMont')
    //Uses for API call
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h4>{this.props.contact}</h4>
        <h4>{this.props.location}</h4>
        <h6>count:{this.state.count}</h6>
        <h6>count:{this.state.count2}</h6>
        <Button
          onClick={() => {
            this.setState({ //setting state variable using react state
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          InreaseCount
        </Button>
      </div>
    );
  }
}

export default UserClass;
