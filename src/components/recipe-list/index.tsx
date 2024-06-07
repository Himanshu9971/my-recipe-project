import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const RecipeList = ({ recipeList }: { recipeList: any }) => {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 w-full">
            <div className='w-full py-16 px-16 mx-auto max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {recipeList && recipeList.length > 0 ?
                recipeList.map((recipe: any) => (
                    <Link href={`/recipe-list/${recipe.id}`}>
                        <Card>
                            <CardContent className='bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all'>
                                <div className='w-full aspect-w-16 aspect-auto-h-9 lg:h-80'>
                                    <img
                                        className='w-full h-full object-top'
                                        src={recipe.image}
                                        alt={recipe.name}
                                    />
                                </div>

                                <div className='p-6'>
                                    <h3 className='text-lg font-bold text-gray-900'>{recipe.name}</h3>
                                    <div className='mt-4 flex items-center flex-wrap gap-2'>
                                        <p className='text-lg text-gray-600'>Ratings: {recipe.rating}</p>
                                        <div className='ml-auto'>
                                            <p className='text-lg text-gray-600 font-bold'>{recipe.cuisine}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </CardContent>
                        </Card>
                    </Link>
                ))
                : null
                }
            </div>
        </main>
    )
}

export default RecipeList