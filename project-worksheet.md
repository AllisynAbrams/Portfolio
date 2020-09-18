# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This project is the first version of my professional portfolio. I will use jQuery, JavaScript, Bootstrap, CSS, and responsive design to include various sections and functionalities as briefly outlined below:
- highlight info about myself/brand statement
- display image previews and details about my previous projects, as well as link to the source code on github and the live project (use jQuery $.ajax({}) method to retrieve external project data from a googlesheet)
- provide a form for users to fill out and submit to contact me
- provide links to my GitHub and LinkedIn pages
- allow users to easily navigate to and view different sections of the page via an expandable/collapsable navigation bar


## Google Sheet

Include link to your google sheet here.
(https://docs.google.com/spreadsheets/d/13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA/edit#gid=0) 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://i.imgur.com/6SE23pZ.jpg?1)
- [Desktop](https://i.imgur.com/B1wfa3N.jpg?1)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix

[Time & Priority Grid](https://i.imgur.com/73nviUy.jpg?1)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- create top-level HTML sections for grid layout purposes (header w/ brand name & nav, intro banner, about me, projects, get in touch, footer)
- create top-level CSS grid layout (for visual purposes)
- header section - regular nav bar + expandable hamburger nav with flexbox *use bootstrap*
- header section - CSS/style nav
- intro banner section (hi, my name is..)
- about me section (photo & brand statement) - reminder: make photo circular 
- update googlesheet w/ project data (title, image (take and upload screen shots), description, tech used, url (github repo and github pages))
- projects section - pull in project data from googlesheet via json api call
- projects section - render and format project images/data on the page - grid/flexbox *possibly use a version of bootstrap cards*
- projects section - css/style project previews & data
- contact section - adding and styling contact form
- footer section - adding and styling (name and adding social icons)
- media queries for tablet responsive 
- media queries for desktop responsive 
- set up github pages for portfolio and featured projects
- testing & de-bugging
- choose fonts and color scheme

#### PostMVP
- add hover animation on buttons and links
- contact info box (location and email) in the "contact section" (additional to contact form)
- learn and implement additional uses of bootstrap
- make navbar collapse on click of link (added during project week)
- add github and linkedin icons to mobile/tablet hamburger nav -> did not implement (should be a quick add post-project now that I already have <a> tags for social icons in the footer)
- carousel for project cards -> did not implement -> still plan to utilize Bootstrap carousel component to implement this feature into my portfolio in the future

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

|  Component  |  Priority  |  Estimated Time  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| create top-level HTML sections for grid layout purposes (header w/ brand name & nav, intro banner, about me, projects, get in touch, footer) | high | 1 | 3 |
| create top-level CSS grid layout (for visual purposes) | high | 1 | 2 |
| header section - regular nav bar + expandable hamburger nav with flexbox *use bootstrap* | high | 2 | 0.5 |
| header section - CSS/style nav | high | 1.5 | 1.25 |
| intro banner section (hi, my name is..) | low | 1 | 0.5 |
| about me section (photo & brand statement) - reminder: make photo circular  | high | 2 | 0.75 |
| update googlesheet w/ project data (title, image (take and upload screen shots), description, tech used, url (github repo and github pages)) | high | 2 | 1.5 |
| projects section - pull in project data from googlesheet via json api call | high | 2.5 | 1 |
| projects section - render and format project images/data on the page - grid/flexbox *possibly use a version of bootstrap cards* | high | 3 | 2.5 |
| projects section - css/style project previews & data | high | 2 | 2 |
| contact section - adding and styling contact form | high | 2 | 1.5 |
| footer section - adding and styling (name and adding social icons) | low | 1.5 | 1 |
| media queries for tablet responsive  | high | 1 | 1 |
| media queries for desktop responsive  | high | 2 | 2 |
| set up github pages for portfolio and featured projects | high | 2.5 | 1 |
| testing & de-bugging | high | 2 | 1.5 |
|  Total  | H | 30 | 23.5 |


#### PostMVP

|  Component  |  Priority  |  Estimated Time  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| add hover animation on buttons and links | H | 2.5 | 1.5 |
| contact Info box (location and email) in the "contact section" (additional to contact form) | H | 2 | 2.5 |
| learn and implement uses of bootstrap | H | 3 | 1.5 |
| make navbar collapse on click of link | H | 0 | 1 |
| add github and linkedin icons to mobile/tablet hamburger nav | L | 1.5 | 0 |
| carousel for project cards | L | 3 | 0 |
| Total | M | 12 | 6.5 |

#### TOTAL
|  Component  |  Priority  |  Estimated Time  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| TOTAL | - | 42 | 30 |




## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 - jQuery: I used the jQuery $.ajax({}) method to retrieve external data from a googlesheet in JSON format and then turn it into an objects in a new array using the .map method. The data in the google sheet was information about previous projects (title, description, image, etc.). I then created a function, render(), with a .forEach method along with the .append to dynamically create project cards from the newly created objects within an array and display/append them to the page. I accessed the proper key/values of the newly created objects through the use of string interpolation in my .append method (i.e. to grab data from my ajax call as content to display on the page). *jQuery also played a role in using Bootstrap as many of my Bootstrap components used jQuery "under the hood"
 
 - Bootstrap: I attended the Bootstrap bonus lecture on Monday and found it to be extremely interesting and useful. I used the Bootstrap library in my project to create a top navbar, cards to display my previous projects + details, and a form. I re-styled elements of the standard Bootstrap components through lots of investgation using the Chrome inspector tools/console to determine certain selectors. I then applied my own CSS to ensure the aesthic of each component is in-line with the rest of my portfolio. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

1.
* Though I asked for help with this at first, I prefaced my question(s) with how I thought it could be done. With the help of my squad leader, I was pointed in the right direction. I was extremely proud of myself for asking the right questions and then being able to figure out the rest from there with my understanding of array methods and objects (ex. putting array methods in a function, properly placing functions within other functions, etc.). I was also proud of the fact that this was my fist time utilizing multiple different tools/libraries/external sources in one snipped of code. What I am most proud of regarding this code is my ability to now truly understand how it works, so much so that I was able to help multiple squad members with theirs and do my best to explain it. 
```
$.ajax({ url: sheetAsJSON }).then((data) => {
	// console.log('this is data: ', data)
	const projects = data.feed.entry.map((project) => {
		return {
			image: project.gsx$image.$t,
			alttext: project.gsx$imagealttext.$t,
			title: project.gsx$title.$t,
			description: project.gsx$description.$t,
			tools: project.gsx$tools.$t,
			liveurl: project.gsx$url.$t,
			githuburl: project.gsx$ghurl.$t,
		};
	});
	render(projects);
	// console.log('this is projects (array): ', projects);
});

const render = (array) => {
	array.forEach((project) => {
        // console.log('this is project - ', project)
		$('.project-cards').append(
			`<div class="card" style="width: 18rem;">
            <img src="${project.image}" class="card-img-top" alt="${project.alttext}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-desc">${project.description}</p>
                <p class="card-tools">${project.tools}</p>
                <a href="${project.githuburl}" class="btn btn-view-code" id="card-button">View Code</a>
                <a href="${project.liveurl}" class="btn btn-view-project" id="card-button">View Project</a>
            </div>
        </div>`
		);
	});
};
```

2. I was determined to make viisble the start of each section when the associated anchor/"jump tag" on the nav bar is clicked. I researched this quite a bit a found some helpful references on stackoverflow. I created empty spans/classes within each section's parent div. Then, using CSS, I added top padding and top negative margin to these spans to make enough sort of "fake space" above them so that when their anchor tags are clicked, the top most part of the section does not go behind/above the sticky nav and is therefore visible.
 - To note, while I am proud of figuring out and playing aroudn with this functionality, I do see it as a sort of temporary fix via HTML/CSS. I look forwad to figuring out how to do the same using JavaScript/jQuery/React in the future!
Reference: https://stackoverflow.com/questions/1418838/html-making-a-link-lead-to-the-anchor-centered-in-the-middle-of-the-page 

```
<li class="nav-item">
	<a class="nav-link" href="#anchor-projects">Projects</a>
</li>

<div id="projects">
    <span class="anchor" id="anchor-projects"></span>
    ........
Associated CSS:
anchor {
	display: block;
	padding-top: 180px;
	margin-top: -180px;
	visibility: hidden;
}
```

## Issues and Resolutions
Use this section to list of all major issues encountered and their resolution:

**Issue**: I was to use anchor tags in combination #s/IDs to allow the nav links navigate to different sections of the page. However, the nav-links were originally bringing the user to a view of the middle of the section rather than bringing them right to the top of the section (which is what I wanted). I was determined to fix this to make the nav-links jump the to top of the anchore section rather than somewhere in the middle of it.
 
**Resolution**: I researched this quite a bit a found some helpful references on stackoverflow. I created empty spans/classes within each section's parent div. Then, using CSS (above), I added top padding and top negative margin to these spans to make enough sort of "fake space" above them so that when their anchor tags are clicked, the top most part of the section does not go behind/above the sticky nav and is therefore visible.
https://stackoverflow.com/questions/1418838/html-making-a-link-lead-to-the-anchor-centered-in-the-middle-of-the-page 


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
