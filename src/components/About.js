import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  // componentDidUpdate() {
  //   console.log(this.props.name + " Parent ComponentDidUpdate");
  // }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name={"First"} location={"Bengaluru (Class)"} />
        {/* <UserClass name={"Second"} location={"US"} />
        <UserClass name={"Third"} location={"US"} /> */}
        {/* <User name={"Rucha Dhok (function)"} /> */}
      </div>
    );
  }
}

export default About;
