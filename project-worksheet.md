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

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

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

### MVP/PostMVP - 5min

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
- contact Info box (location and email) in the "contact section" (additional to contact form)
- add github and linkedin icons to mobile/tablet hamburger nav
- learn and implement additional uses of bootstrap
- carousel for project cards

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

|  Component  |  Priority  |  Estimated Time (Hrs)  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| create top-level HTML sections for grid layout purposes (header w/ brand name & nav, intro banner, about me, projects, get in touch, footer) | H | 1 |  hrs  |
| create top-level CSS grid layout (for visual purposes) | H | 1 |  hrs  |
| header section - regular nav bar + expandable hamburger nav with flexbox *use bootstrap* | H | 2 |  hrs  |
| header section - CSS/style nav | H | 1.5 |  hrs  |
| intro banner section (hi, my name is..) | L | 1 |  hrs  |
| about me section (photo & brand statement) - reminder: make photo circular  | H | 2 |  hrs  |
| update googlesheet w/ project data (title, image (take and upload screen shots), description, tech used, url (github repo and github pages)) | H | 2 |  hrs  |
| projects section - pull in project data from googlesheet via json api call | H | 2.5 |  hrs  |
| projects section - render and format project images/data on the page - grid/flexbox *possibly use a version of bootstrap cards* | H | 3 |  hrs  |
| projects section - css/style project previews & data | H | 2 |  hrs  |
| contact section - adding and styling contact form | H | 2 |  hrs  |
| footer section - adding and styling (name and adding social icons) | L | 1.5 |  hrs  |
| media queries for tablet responsive  | H | 1 |  hrs  |
| media queries for desktop responsive  | H | 2 |  hrs  |
| set up github pages for portfolio and featured projects | H | 2.5 |  hrs  |
| testing & de-bugging | H | 2 |  hrs  |
| choose fonts and color scheme | M | 1 |  hrs  |
|  Total  | H | 30 |  hrs  |


#### PostMVP

|  Component  |  Priority  |  Estimated Time  |  Actual Time  |
|  ---  |  :---:  |   :---:  |  :---:  |
| add hover animation on buttons and links | L | 2.5 |  |
| contact Info box (location and email) in the "contact section" (additional to contact form) | L | 2 |  |
| add github and linkedin icons to mobile/tablet hamburger nav | L | 1.5 |  |
| learn and implement uses of bootstrap | L | 3 |  |
| carousel for project cards | L | 3 |  |
| Total | L | 12 |  |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 - jQuery:
 - Bootstrap: 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
