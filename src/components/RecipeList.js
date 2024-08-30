import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';



const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const responses = await Promise.all([
          axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'),
          axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza'),
        ]);
        const combinedRecipes = responses.flatMap(response => response.data.meals);
        setRecipes(combinedRecipes);
        setFilteredRecipes(combinedRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = () => {
    const results = recipes.filter(recipe =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(results);
  };

  return (
    <Container className="mt-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      <Row>
        {filteredRecipes.map(recipe => (
          <Col key={recipe.idMeal} sm={12} md={6} lg={4} className="mb-4">
            <RecipeCard recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;

