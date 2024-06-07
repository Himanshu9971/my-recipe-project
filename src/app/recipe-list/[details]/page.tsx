import RecipeDetailsItems from '@/components/recipe-details'
import React from 'react'

const fetchRecipeDetails = async (currentRecipeId: string) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error('Failed to fetch recipe list')
  }
}

const RecipeDetailPage = async ({params}: {params: {details: string}}) => {
  const getRecipeDetails = await fetchRecipeDetails(params.details)
  return (
    <RecipeDetailsItems getRecipeDetails = {getRecipeDetails} />
  )
}

export default RecipeDetailPage