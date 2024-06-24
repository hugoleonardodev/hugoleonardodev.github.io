'use client'
import React from 'react'
import { Timeline } from 'flowbite-react'
import { HiCalendar } from 'react-icons/hi'
import { useWindowSize } from '@/hooks'

interface WorkingExperienceProps {
  workingExperienceDictionary: {
    id: string
    title: string
    experiences: Array<{
      company: string
      role: string
      duration: string
      location: string
      tasks: string[]
    }>
  }
}
export function WorkingExperience({ workingExperienceDictionary }: WorkingExperienceProps): React.JSX.Element {
  const { width } = useWindowSize()
  return (
    <section className="pl-6 pr-2 sm:pl-0 pr-0">
      <Timeline horizontal={width > 1023} id={workingExperienceDictionary.id} className="">
        {workingExperienceDictionary.experiences.map(experience => (
          <Timeline.Item key={experience.company}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>{experience.duration}</Timeline.Time>
              <Timeline.Title>{experience.company}</Timeline.Title>
              <Timeline.Body>{experience.role}</Timeline.Body>
              <Timeline.Body>{experience.location}</Timeline.Body>
              <ul>
                {experience.tasks.map(task => (
                  <li className="list-[disclosure-closed]" key={task}>
                    {task}
                  </li>
                ))}
              </ul>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  )
}
