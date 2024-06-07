import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center w-full p-24">
        <Skeleton />
    </main>
  )
}

export default Loading