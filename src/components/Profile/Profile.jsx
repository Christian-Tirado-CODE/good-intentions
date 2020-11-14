import classes from './Profile.module.css';
import React, { Component } from 'react';
import axios from '../../axios/axios-categories';

class Profile extends Component {
    state = {
        name: "",
        description: "",
        logo: "",
        category: "",
        followers: "",
        website: "",
        followers: ""
    }

    componentDidMount(){
        console.log(this.props.match.params.name);
        this.fetchOrganizationsData(this.props.match.params.name);
    }

    fetchOrganizationsData = (name) => {
        axios.get('/organizations.json')
        .then(response => {
         response.data.organizations.map((organization) => {
             if(organization.name === name){
                 this.setState({
                     name: organization.name,
                     description: organization.description,
                     logo: organization.logo,
                     category: organization.category,
                     website: organization.website,
                     followers: organization.followers
                    });
             }
         });
    });
}

    render() {
        console.log(this.state.logo);
        return (
            <div className={classes.Profile}>
               <div className={classes.ProfileInfoContainer}>
                   <div className={classes.ProfileBio}>
                      <div className={classes.ProfilePic}>{/*<img src={require("../../img/" + this.state.logo).default} className={classes.CategoryCardImage}/>*/}</div>
                      <div className={classes.ProfileText}>
                      <div className={classes.ProfileName}>{this.state.name}</div>
                        <button className={classes.ProfileFollowButton}>Follow</button>
                        <div className={classes.AccountFollows}>
                            <p className={classes.AccountFollowsStats}>2,500 followers</p>
                            <p className={classes.AccountFollowsStats}>240 following</p>
                            
                        </div>
                      <div className={classes.ProfileDescription}>{this.state.description}</div>
                       <div className={classes.ProfileWebsiteLink}>Website: {this.state.website}</div>
                       </div>
                   </div>
                   <div className={classes.OrganizationPosts}>
                     <h1>hoj</h1>
                   </div>
               </div>
            </div>
        );
    }
}

export default Profile;