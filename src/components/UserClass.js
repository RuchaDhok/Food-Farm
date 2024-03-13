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
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.uName + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.uName + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/RuchaDhok");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      //console.log("Class based Comp");
    }, 1000);
    //Api Calls -- fill the data in the component and the component re renders
  }

  componentDidUpdate() {
    console.log(this.props.uName + " Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.uName + " Child ComponentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { uName, uLocation } = this.props;
    const { count, count2, userInfo } = this.state;
    const { name, location } = userInfo;
    console.log(this.props.uName + " Child Render");
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
        <h2>Name : {name}</h2>
        <h3>Location : {location} </h3>
        <h4>Contact : 8987022675</h4>
      </div>
    );
  }
}

export default UserClass;
