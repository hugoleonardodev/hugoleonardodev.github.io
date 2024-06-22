import React from 'react'
import { Spinner } from 'flowbite-react'

export default function Loading(): JSX.Element {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full h-full absolute flex items-center justify-center bg-gray-700 bg-opacity-50 backdrop-blur-sm">
      <Spinner className="fill-purple-600" />
    </div>
  )
}
