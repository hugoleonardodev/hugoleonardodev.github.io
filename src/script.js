const hero = document.querySelector('.hero');
const projectsIndex = document.querySelector('.projects-index');
const buttonProjects = document.querySelector('.button-projects');

buttonProjects.addEventListener('click', function () {
	hero.style.display = 'none';
	projectsIndex.style.display = 'flex';
});
