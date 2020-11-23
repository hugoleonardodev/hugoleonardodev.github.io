const mainContent = document.querySelector('.main-content');
const hero = document.querySelector('.hero');
const projectsIndex = document.querySelector('.projects-index');
const buttonLaunch = document.querySelector('.button-launch');
const buttonProjects = document.querySelector('.button-projects');
const showingContent = document.createElement('section');
showingContent.className = 'content-container';

buttonLaunch.addEventListener('click', function () {
	alert('Hello World! My name is Hugo. If you want to know more about me, feel free to check one of projects or social medias. You can also click on Info button. Thanks for come.');
	projectsIndex.style.display = 'none'
	hero.style.display = 'flex'
		// click.preventDefault();
})

buttonProjects.addEventListener('click', function () {
	hero.style.display = 'none';
	projectsIndex.style.display = 'flex';
});
