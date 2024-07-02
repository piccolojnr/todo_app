import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function TasksPage() {
  return (
    <>
    <Helmet>
        <title>Tasks Page</title>
    </Helmet>
    <div>
      <h1>Tasks Page</h1>
      <Link to="/">Home</Link>
    </div>
    </>
  )
}
