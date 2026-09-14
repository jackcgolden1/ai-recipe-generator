import { useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import "./App.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const ingredientList = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim())
      .filter((ingredient) => ingredient.length > 0);

    if (ingredientList.length === 0) {
      return;
    }

    setLoading(true);
    setRecipe("");

    try {
      const result = await client.queries.askBedrock({
        ingredients: ingredientList,
      });

      if (result.errors && result.errors.length > 0) {
        console.error(result.errors);
        setRecipe("There was an error generating your recipe.");
        return;
      }

      if (result.data?.body) {
        setRecipe(result.data.body);
      } else {
        setRecipe("No recipe was returned.");
      }
    } catch (error) {
      console.error("Recipe generation error:", error);
      setRecipe("Sorry, something went wrong while generating your recipe.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="main-header">
          Meet Your Personal <span className="highlight">Recipe AI</span>
        </h1>

        <p className="description">
          Enter the ingredients you have on hand and let AI create a recipe
          idea for you.
        </p>
      </header>

      <main>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="search-container">
            <input
              className="wide-input"
              type="text"
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              placeholder="chicken, white rice, yellow squash, onion"
              aria-label="Ingredients"
            />

            <button
              className="search-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>

        <div className="result-container">
          {loading && (
            <div className="loader-container">
              <p>Creating your recipe...</p>
            </div>
          )}

          {!loading && recipe && <div className="result">{recipe}</div>}
        </div>
      </main>
    </div>
  );
}

export default App;
