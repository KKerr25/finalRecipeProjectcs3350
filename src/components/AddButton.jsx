import { useState } from "react";
import Classes from "./AddButton.module.css";

const AddButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");

  const [ingredientsIsValid, setIngredientsIsValid] = useState(true);
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [descriptionIsValid, setDescriptionIsValid] = useState(true);
  const [timeIsValid, setTimeIsValid] = useState(true);

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setTitleIsValid(false);
      isValid = false;
    } else {
      setTitleIsValid(true);
    }

    if (ingredients.trim() === "") {
      setIngredientsIsValid(false);
      isValid = false;
    } else {
      setIngredientsIsValid(true);
    }

    if (description.trim() === "") {
      setDescriptionIsValid(false);
      isValid = false;
    } else {
      setDescriptionIsValid(true);
    }

    if (time.trim() === "") {
      setTimeIsValid(false);
      isValid = false;
    } else {
      setTimeIsValid(true);
    }

    return isValid;
  };

  const sendRecipe = async () => {
    if (!validateForm()) {
      alert("Please fill out all fields correctly.");
      return;
    }

    const newRecipe = { name, description, time, ingredients };

    try {
      const response = await fetch(
        "https://recipeapp-19652-default-rtdb.firebaseio.com/Recipie.json",
        {
          method: "POST",
          body: JSON.stringify(newRecipe),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send recipe.");
      }

      alert("Recipe sent successfully!");
      setShowForm(false);
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <button className={Classes.addButton} onClick={() => setShowForm(true)}>
        Add Recipe
      </button>
      {showForm && (
        <div className={Classes.overlay}>
          <div className={Classes.modal}>
            <label>Recipe Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setTitleIsValid(true)}
              className={titleIsValid ? "" : Classes.invalid}
            />
            {!titleIsValid && (
              <p className={Classes.error}>Name is required.</p>
            )}

            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onFocus={() => setDescriptionIsValid(true)}
              className={descriptionIsValid ? "" : Classes.invalid}
            />
            {!descriptionIsValid && (
              <p className={Classes.error}>Description is required.</p>
            )}

            <label>Ingredients:</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              onFocus={() => setIngredientsIsValid(true)}
              className={ingredientsIsValid ? "" : Classes.invalid}
            />
            {!ingredientsIsValid && (
              <p className={Classes.error}>Ingredients are required.</p>
            )}

            <label>Time:</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              onFocus={() => setTimeIsValid(true)}
              className={timeIsValid ? "" : Classes.invalid}
            />
            {!timeIsValid && <p className={Classes.error}>Time is required.</p>}

            <div className={Classes.modalButtons}>
              <button onClick={sendRecipe}>Add</button>
              <button onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
