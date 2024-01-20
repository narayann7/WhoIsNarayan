import { Component } from "react";
import Profile from "../components/Profile";
import styles from "../components/commons/styles";

export class About extends Component {
  render() {
    return (
      <div style={styles.pageContent}>
        <Profile />
      </div>
    );
  }
}

export default About;
