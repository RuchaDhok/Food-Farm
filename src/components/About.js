import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       {/* <User name={"Rucha Dhok (function)"} /> */}
//       <UserClass name={"Rucha Dhok (Class)"} location={"Bengaluru (Class)"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  // componentDidUpdate() {
  //   console.log(this.props.name + " Parent ComponentDidUpdate");
  // }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <UserClass uName={"First"} uLocation={"Bengaluru (Class)"} /> */}
        {/* <UserClass uName={"Second"} uLocation={"US"} />
        <UserClass uName={"Third"} uLocation={"US"} /> */}
        {/* <User uName={"Rucha Dhok (function)"} /> */}
      </div>
    );
  }
}

export default About;
