'use client'
import React from 'react'

interface TechnologiesListProps {
  technologiesDictionary: {
    id: string
    title: string
    description: string
    list: string[]
  }
}

function TechnologiesList({ technologiesDictionary }: TechnologiesListProps): React.JSX.Element {
  const [listItems, setListItems] = React.useState(technologiesDictionary.list)

  const handleRemoveItem = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const currentItem = event.currentTarget.value
      setListItems(listItems.filter(tech => tech !== currentItem))
    },
    [listItems],
  )

  const handleResetList = React.useCallback(() => {
    setListItems(technologiesDictionary.list)
  }, [technologiesDictionary.list])

  return (
    <section id={technologiesDictionary.id}>
      <h1 className="px-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {technologiesDictionary.title}
      </h1>
      <p className="text-xl font-bold tracking-tight text-gray-600 dark:text-white">
        {technologiesDictionary.description}
      </p>
      {listItems.length > 0 ? (
        listItems.map(tech => (
          <span
            key={tech}
            id="badge-dismiss-indigo"
            className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300"
          >
            {tech}
            <button
              type="button"
              onClick={handleRemoveItem}
              value={tech}
              className="inline-flex items-center p-1 ms-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
              data-dismiss-target="#badge-dismiss-indigo"
              aria-label="Remove"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Remove {tech}</span>
            </button>
          </span>
        ))
      ) : (
        <div>
          <p className="text-gray-500 dark:text-gray-400">No technologies selected</p>
          <button
            onClick={handleResetList}
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Click here to reset
          </button>
        </div>
      )}
    </section>
  )
}

export default TechnologiesList
