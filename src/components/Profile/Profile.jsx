import classes from './Profile.module.css';
import clases from './Profile.css';
import Events from '../Events/Events';
import React, { Component } from 'react';
import axios from '../../axios/axios-categories';
import Tabs from "../Tabs/Tabs"; 
import Posts from '../Posts/Posts';
class Profile extends Component {
    state = {
        name: "",
        description: "",
        logo: "",
        category: "",
        followers: "",
        website: "",
        followers: "",
        id: null,
        posts: []
    }

    componentDidMount(){
    
        this.fetchOrganizationsData(this.props.match.params.name);
    }

    fetchOrganizationsData = async (name) => {
        axios.get('/organizations.json')
        .then(response => {
         response.data.organizations.map((organization) => {
             if(organization.name === name){
                this.fetchPosts(organization.id);
                 this.setState({
                     name: organization.name,
                     description: organization.description,
                     logo: organization.logo,
                     category: organization.category,
                     website: organization.website,
                     followers: organization.followers,
                     id: organization.id
                    });
             }
             
         });
    });
}

    fetchPosts = (organization_id) => {
        const posts = [];
        axios.get('/organizations.json')
        .then(response => {
            response.data.posts.map(post => {
                if(post.organization_id === organization_id){
                    posts.push(post);
                }
            });
            this.setState({posts: posts});
        });
        
        
}

    render() {
        
        return (
            <div className={classes.Profile}>
               <div className={classes.ProfileInfoContainer}>
                   <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftarragona.repsol.es%2Fimagenes%2Frepsolporcitg%2Fes%2Fmanos_tierra_planta_tcm57-70697.jpg&f=1&nofb=1" class="banner"/>
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
                   <div className={classes.Triangle}></div>
                   <Tabs> 
       <div label="Sobre Nosotros">
           <div class="grid-container"> 
        <div class="grid-item">
        <h3>Mission</h3>
		<p>Transform Puerto Rico into a thriving destination for the world.</p>
        <h3>Purpose</h3>
		<p>Discover, link, and unleash Puerto Rico's potential as an active participant in the global economy. </p>
        <h3>Vision</h3>
		<p>A prosperous Puerto Rico that unleashes the talent, creativity, and passion of its people.</p>
        </div>
        <div class="grid-item">
        <iframe width="600" height="386" src="https://www.youtube.com/embed/AR_Ufjh1-Cc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        </div>
       <div label="Publicaciones"> 
           <Posts posts={this.state.posts}/>
       </div> 
       <div label="Eventos"> 
         <Events/>
       </div> 
     </Tabs> 
               </div>
            </div>
        );
    }
}

export default Profile;