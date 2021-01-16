import React, { Component } from "react";
import UserLayout from "../../hoc/UserLayout/UserLayout";
import classes from "./UserProfile.module.css";
import UserFeed from '../../components/UserFeed/UserFeed';

class UserProfile extends Component {
  /*
        User profile features:
            1. Write/edit bio
            2. Add events/look for events
            3. See non-profit posts in feed
            4. Search non-profits
            5. Message non-profits
            6. 
    */
  render() {
      document.querySelector('body').style.backgroundImage = 'linear-gradient(to right bottom, #ff3366, #ba265d)';
    return (
      <div className={classes.UserProfile}>
        <UserLayout />
        <UserFeed />
      </div>
    );
  }
}

export default UserProfile;
