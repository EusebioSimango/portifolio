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
	},
	{
		url: 'https://jeffermarcelino.github.io/advice/',
		title: 'Advice',
		description: 'Simple page which returns you a random advice that might improve your situation. I recommend!!!',
		gitRepo: 'https://github.com/JefferMarcelino/advice',
		techs: 'HTML, CSS, JavaScript and Advice Slip JSON API',
	},
	{
		url: '',
		title: 'Rocket.Q',
		description: 'This is a web application where you can make anonymous questions on a room and the room administrator can see and answer or delete the question.',
		gitRepo: 'https://github.com/JefferMarcelino/rocket.q-nlw6-discover',
		techs: 'HTML, CSS, JavaScript, ExpressJS and SQLite3',
	},
	{
		url: 'https://jeffermarcelino.github.io/codelandia-challenges/',
		title: 'Codelandia Challenges',
		description: 'This was created by me, here you find the solutions of the Codelandia server challenges on Discord. And you can find others simple front-end projects.',
		gitRepo: 'https://github.com/JefferMarcelino/codelandia-challenges',
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

