import classes from './UserLayout.module.css';
import React from 'react';
import Aux from '../Auxiliary';

const UserLayout = (props) => {
    return (
        <Aux>
        <nav className={classes.UserLayout}>
                <div className={classes.Left}>
                <img src={require("../../img/logo2.png").default} className={classes.Logo}/>
                <input type="text" className={classes.SearchBar} placeholder="Search"/>
                </div>
                

                <div className={classes.Right}>
                <div className={classes.NavItem}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class={classes.NavItemIcon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 
                            16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 
                            16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 
                            12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 
                            0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 
                            12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 
                            16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                            </path>
                            </svg>
                     <p>Home</p>
                    </div>
                <div className={classes.NavItem}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots" class={classes.NavItemIcon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 
                    466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 
                    107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 
                    14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 
                    0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                        </path>
                        </svg>
                        <p>Messaging</p>
                    </div>
                <div className={classes.NavItem}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class={classes.NavItemIcon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 
                        64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 
                        14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 
                        14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
                            </path>
                            </svg>
                        <p>Notifications</p>
                    </div>
                    
                </div>
           

            </nav>
            </Aux>
        
    );
};

export default UserLayout;