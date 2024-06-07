import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24">
        <h1>This page can not be found</h1>
        <Link href='/'>
            Go Back Home
        </Link>
    </main>
  )
}

export default NotFound