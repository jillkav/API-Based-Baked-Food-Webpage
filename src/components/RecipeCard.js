import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="recipe-card">
      <Card.Img variant="top" src={recipe.strMealThumb} />
      <Card.Body>
        <Card.Title>{recipe.strMeal}</Card.Title>
       
        <Card.Text>{recipe.strInstructions.substring(0, 200)}...</Card.Text>
        <Button variant="primary" href={recipe.strYoutube} target="_blank">Watch Video</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;