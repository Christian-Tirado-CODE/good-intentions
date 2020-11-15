import classes from './Profile.module.css';
import React, { Component } from 'react';
import axios from '../../axios/axios-categories';
import Tabs from "../Tabs/Tabs"; 
import Posts from '../Posts/Posts';
import HeroSlider from '../UI/HeroSlider/HeroSlider';
import Events from '../Events/Events';

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
        posts: [],
        events: []
    }

    componentDidMount(){
    
        this.fetchOrganizationsData(this.props.match.params.name);
        this.fetchEvents(1);
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

fetchEvents = (organization_id) => {
    const events = [];
    axios.get('/organizations/events.json')
    .then(response => {
        response.data.map(org_event => {
            if(org_event.organization_id === organization_id){
                events.push(org_event);
            }
        });
        this.setState({events: events});
    });
    
    
}

    render() {
        
        return (
            <div className={classes.Profile}>
               <div className={classes.ProfileInfoContainer}>
                   <div className={classes.ProfileBio}>
                      <div className={classes.ProfilePic}><img src={require("../../img/logo.png").default} className={classes.Logo}/></div>
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
                   <Tabs> 
       <div label="Sobre Nosotros"> 
         <HeroSlider />
         </div>
       <div label="Publicaciones"> 
         <Posts posts={this.state.posts}/>
       </div> 
       <div label="Eventos"> 
            <Events events={this.state.events}/>
       </div> 
     </Tabs> 
               </div>
            </div>
        );
    }
}

export default Profile;