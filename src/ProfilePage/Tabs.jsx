import React from 'react';
import classes from './ProfilePage.css';
import TabsComponent from "./Tabs/Tabs"; 
import Feed from "./Feed"; 
import About from "./About"; 
import Events from "./Events"; 

const Tabs = () => {
    return (
        <div>
     <TabsComponent> 
       <div label="About"> 
         <About/>
       </div> 
       <div label="Feed"> 
         <Feed/>
       </div> 
       <div label="Events"> 
        <Events/>
       </div> 
     </TabsComponent> 
    </div>
    );
};

export default Tabs;