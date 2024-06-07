import Link from 'next/link'
import React from 'react'

const RecipeDetailsItems = ({getRecipeDetails}: {getRecipeDetails: any}) => {
  return (
    <main className="flex min-h-screen flex-col p-24 w-full">
        <Link href='/recipe-list' className='mb-4'>Go to Recipe List</Link>
        <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='w-full lg:sticky top-0 sm:flex gap-2'>
                <img
                    className='w-4/5 rounded object-cover'
                    src={getRecipeDetails.image}
                    alt={getRecipeDetails.name}
                />
            </div>
            <div className=''>
                <h2 className='text-3xl font-extrabold text-gray-900'>
                    {getRecipeDetails.name}
                </h2>
                <div className='flex flex-wrap gap-4 mt-5'>
                    <p className='text-2xl text-gray-700'>{getRecipeDetails.mealType}</p>
                </div>
                <div className='flex flex-wrap gap-4 mt-5'>
                    <p className='text-xl text-gray-800'>{getRecipeDetails.cuisine}</p>
                </div>
                <div className='mt-5'>
                    <h3 className='text-lg text-gray-700 font-bold'>Ingredients</h3>
                    <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>
                        {getRecipeDetails.ingredients.map((ingredient: string) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </main>
  )
}

export default RecipeDetailsItems