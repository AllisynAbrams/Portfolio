
let sheetUrl =
	'https://docs.google.com/spreadsheets/d/13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA/edit?usp=sharing';

let sheetID = '13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA';

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/13ctCBuBlGwJCzYjHmGPistVh0hm6UPVSR6X1FHwafjA/od6/public/values?alt=json'; 

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



$('form').on('submit', (event) => {
    event.preventDefault();
    alert("Thanks for the message! I will be in touch within 48 hours.")
	$(event.currentTarget).trigger('reset');
});


// googled "how to automatically collapse bootstrap navbar" and used this article as a starting point but wrote my onclick method more so in the format we learned in class. i chose to listen to nav-link because i want nav to close specifically when user clicks on a link  https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically

$('.nav-link').on('click', () => {
	$('.navbar-collapse').collapse('hide');
});
