import classes from './Profile.module.css';
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
          <div>
             <h2>Mision:</h2>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate vitae, odit 
             perspiciatis provident autem et esse aperiam voluptas tenetur harum illum? Excepturi eum 
             perferendis dignissimos porro beatae, quibusdam recusandae maxime deleniti cumque, ex fugit 
             aliquam, inventore iure dolore ab nulla! Rem nihil eaque fugit eveniet quia quod, inventore 
             tenetur.
          </div>
          <div>
             <h2>Vision:</h2>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate vitae, odit 
             perspiciatis provident autem et esse aperiam voluptas tenetur harum illum? Excepturi eum 
             perferendis dignissimos porro beatae, quibusdam recusandae maxime deleniti cumque, ex fugit 
             aliquam, inventore iure dolore ab nulla! Rem nihil eaque fugit eveniet quia quod, inventore 
             tenetur.
          </div>
          <div>
             <h2>Proposito:</h2>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate vitae, odit 
             perspiciatis provident autem et esse aperiam voluptas tenetur harum illum? Excepturi eum 
             perferendis dignissimos porro beatae, quibusdam recusandae maxime deleniti cumque, ex fugit 
             aliquam, inventore iure dolore ab nulla! Rem nihil eaque fugit eveniet quia quod, inventore 
             tenetur.
          </div>
          
       </div> 
       <div label="Publicaciones"> 
         After 'while, <em>Crocodile</em>! 
         <Posts posts={this.state.posts}/>
       </div> 
       <div label="Eventos"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
               </div>
            </div>
        );
    }
}

export default Profile;