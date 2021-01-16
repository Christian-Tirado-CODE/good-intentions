import React from 'react';
import classes from './UserFeedPost.module.css';
const UserFeedPost = () => {
    return (
        <div className={classes.UserFeedPost}>
              <div className={classes.UserFeedPostHeader}>
                <div className={classes.NonProfitLogoContainer}>
                  <img
                    src={require("../../../../img/logo2.png").default}
                    className={classes.NonProfitLogo}
                  />
                </div>
                <div className={classes.NonProfitName}>Sembrando Sentido</div>
                <div className={classes.NonProfitFollowing}>25,000</div>
                <div className={classes.PostDate}>22h</div>
              </div>
              <div className={classes.Clearfix}></div>
              <div className={classes.UserFeedPostBody}>
                <div className={classes.UserFeedPostText}>Juan Jiménez, Analista de Política Pública de Sembrando Sentido, reitera la importancia de la Oficina del Contralor y la necesidad de crear espacios participativos y de incidencia en su gestión y el camino que trazan para proteger nuestros recursos.</div>
                <div className={classes.UserFeedPostImageContainer}> <img
                    src={require("../../../../img/post-image.jpg").default} 
                    className={classes.UserFeedPostImage}
                  />
                  </div>
              </div>
              <div className={classes.UserFeedPostFooter}>
                <div className={classes.SocialActions}>
                  <div className={classes.SocialAction}>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" class={classes.SocialActionIcon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 
                      8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 
                      22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 
                      27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 
                      111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 
                      8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 
                      0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 
                      47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 
                      18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 
                      10.745-24 24-24 24 10.745 24 24z">
                      </path>
                      </svg>
                      <span className={classes.SocialActionText}>Like</span>
                  </div>
                  <div className={classes.SocialAction}>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class={classes.SocialActionIcon} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 
                            72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 
                            54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 
                            18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 
                            553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 
                            305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 
                            192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 
                            352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 
                            3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 
                            196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path>
                            </svg>
                      <span className={classes.SocialActionText}>Comment</span>
                  </div>
                  <div className={classes.SocialAction}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" class={classes.SocialActionIcon}  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 
                                56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 
                                83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 
                                274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 
                                11.086-26.753 0-36.328z"></path>
                                </svg>
                                <span className={classes.SocialActionText}>Share</span>
                  </div>
                  <div className={classes.SocialAction}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class={classes.SocialActionIcon}  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 
                      13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 
                      33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                      </svg>
                      <span className={classes.SocialActionText}>Send</span>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default UserFeedPost;