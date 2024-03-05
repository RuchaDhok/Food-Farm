import React from "react";

class UserClass extends React.Component {
  //Receiving props
  constructor(props) {
    super(props);

    //Creating state variable
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        login: "Dummy",
        type: "Default",
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/Rucha-Dhok");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    //Api Calls -- fill the data in the component and the component re renders
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Child ComponentWillUnmount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2, userInfo } = this.state;
    const { login, type } = userInfo;
    console.log(this.props.name + " Child Render");
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me!!
        </button>
        <h1>Count2 : {count2}</h1>
        <h2>Name : {login}</h2>
        <h3>Location : {type} </h3>
        <h4>Contact : 8987022675</h4>
      </div>
    );
  }
}

export default UserClass;
