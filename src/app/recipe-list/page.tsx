import RecipeList from '@/components/recipe-list'
import React from 'react'

const fetchRecipeList = async () => {
    try {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json()
        return data?.recipes
    } catch (error) {
        throw new Error('Failed to fetch recipe list')
    }
}

const Recipes = async () => {
    const recipeList = await fetchRecipeList()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <RecipeList recipeList = {recipeList} />
    </main>
  )
}

export default Recipes