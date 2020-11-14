import React from 'react';
import classes from './ProfilePage.css';
import Tabs from './Tabs';


const ProfilePage = () => {
    return (
		
        <div class="recipe-card">

	<aside>

		<img class="img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.paypal.com%2F00%2Fs%2FZDQ1ZTJkNDMtYTgyNi00MzRkLWJhN2UtZTc3MmExM2QzMWFl%2Ffile.PNG&f=1&nofb=1" alt="Foundation for Puerto Rico" />


	</aside>

	<article>

		<h2>Foundation for Puerto Rico</h2>
		<h3>Category</h3>

		<ul>
			<li><span class="icon icon-users"></span><span>1</span></li>
			<li><span class="icon icon-clock"></span><span>15 min</span></li>
			<li><span class="icon icon-level"></span><span>Beginner level</span></li>
			<li><span class="icon icon-calories"></span><span>248</span></li>
		</ul>	
        <br></br>
		<Tabs/>
	</article>

</div>
    );
};

export default ProfilePage;