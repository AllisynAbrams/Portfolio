// console.log('hello world')

let sheetUrl =
	'https://docs.google.com/spreadsheets/d/13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA/edit?usp=sharing';
// part of this link includes the crazy, long id to this particular spreadsheet

let sheetID = '13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA';

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA/od6/public/values?alt=json'; /* <-- if we paste this into our browser we are able to see all the data from the google sheet (as either raw or parsed) */

$.ajax({ url: sheetAsJSON }).then((data) => {
	// console.log(data)
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
	console.log(projects);
});

const render = (array) => {
	array.forEach((project) => {
		$('.project-cards').append(
			`<div class="card" style="width: 18rem;">
            <img src="${project.image}" class="card-img-top" alt="${project.alttext}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-desc">${project.description}</p>
                <p class="card-tools">${project.tools}</p>
                <a href="${project.githuburl}" class="btn btn-view-code">View Code</a>
                <a href="${project.liveurl}" class="btn btn-view-project">View Project</a>
            </div>
        </div>`
		);
	});
};
