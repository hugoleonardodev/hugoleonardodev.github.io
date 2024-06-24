import React from 'react'

interface ProjectsListProps {
  projectsDictionary: {
    id: string
    title: string
    description: string
    projects: Array<{
      title: string
      description: string
      link: string
      thumbnail: string
    }>
  }
}
function ProjectsList({ projectsDictionary }: ProjectsListProps): React.JSX.Element {
  return (
    <section id={projectsDictionary.id}>
      <h1 className="px-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {projectsDictionary.title}
      </h1>
      <h2 className="px-2 text-xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
        {projectsDictionary.description}
      </h2>
      {projectsDictionary.projects.map(project => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={project.thumbnail}
            alt="Rollers Hub - Thumbnail"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
          </div>
        </a>
      ))}
    </section>
  )
}

export default ProjectsList
