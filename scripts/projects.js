const projectsSection = document.querySelector('.container')

const projects = [
	{
		url: 'https://todo-app-psi-ten.vercel.app/',
		title: 'Todo App',
		description: 'his is a simple to-do app that you can make a list of things you want to do and and tasks are saved in local storage.',
		gitRepo: 'https://github.com/JefferMarcelino/todo-app',
		techs: 'ReactJS'
	},
	{
		url: '',
		title: 'Beautysalon',
		description: 'A landing-page for a hair salon, where you can find a lot informations with just a click.',
		gitRepo: 'https://github.com/JefferMarcelino/beautysalon-nlw6-origin',
		techs: 'HTML, CSS and JavaScript',
	}
]



projects.map(project => {
	const divContainer = document.createElement('div')
	const divText = document.createElement('div')
	divText.classList.add("text")
	divContainer.classList.add("project")
	divText.innerHTML = `
		<h2>${(project.url.length >= 1) 
			? `<a href="${project.url}" target="_blank" rel="external">${project.title}</a>` 
			: `${project.title}`}
		</h2>
		<p>${project.description}</p>
		<p><a href="${project.gitRepo}" target="_blank" rel="external">GitHub Repository</a></p>
		<strong>${project.techs}<strong>
	`
	divContainer.appendChild(divText)
	projectsSection.appendChild(divContainer)
})

