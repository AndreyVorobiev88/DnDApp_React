
import React from "react";
class Panel extends React.Component {
    state = {
      character: [],
    };
  
    componentDidMount() {
      fetch("../Character.json")
        .then((responce) => responce.json())
        .then((data) => this.setState({ character: Object.values(data) }));
    }
  
    render() {
      //const { character } = this.state;
  
      return (
     
            <div>"Имя: " + character.Name</div>
     
      );
    }
  }
  
  export { Panel };