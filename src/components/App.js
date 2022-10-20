import React, { Component } from 'react';
import Recipe from './Recipe';
import Navigation from './Navigation';
class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Glazed Doughnut',
          ingredients: ['We’re using a straightforward dough for today’s doughnuts. You only need a few ingredients to begin.',
            '01. Milk',
            '02. Yeast',
            '03. Suger',
            '04. Egg',
            '05. Butter',
            '06. Salt & Vanilla Extract',
            '07. Nutmeg',
            '08. Flour'
          ],
          steps: [
            'Prepare the dough',
            'Let the dough rise',
            'Punch down the dough to release the air',
            'Roll & cut into doughnuts',
            'Prepare the oil',
            'Fry the doughnuts',
            'Make the glaze Doughnut'
          ],
          id: 'Glazed'
        },
        {
          title: 'Homemade Pizza',
          ingredients: ['Find these ingredients to make pizza',
            

            '01. 1/2 cups (355 ml) warm water (105°F-115°F)',
            '02. package (2 1/4 teaspoons) active dry yeast',
            '03. 3/4 cups (490g) bread flour',
            '04. tablespoons extra virgin olive oil (omit if cooking pizza in a wood-fired pizza oven)',
            '05. teaspoons kosher salt',
            '06. teaspoon sugar'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 350 degrees for 20 minutes'
          ],
          id: 'pizza'
        },
      ],
      selectedRecipe: null
    }
  }

  selectNewRecipe(recipeId) {
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }
  
  render() {
    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      <div className="App">
        <aside className='sidebar'>
          <h1 className='sidebar__title'>Cook Book</h1>
          <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            />
            :
            null
        }
      </div>
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}

export default App;
