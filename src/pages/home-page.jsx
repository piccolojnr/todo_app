import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
    <div>
      <h1>Home Page</h1>
      <Link to="/tasks">Tasks</Link>
    </div>
    </>

  )
}
