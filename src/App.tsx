import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(true);
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = { ...drink, price: drink.price + 1 };
    setDrink(newDrink);
  };

  let cities = ["new york", "london", "paris", "berlin", "tokyo"];
  let heading = "list";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div className="p-5 text-large"> {drink.price}</div>
      <button onClick={handleClick}>click me</button>
      <Like onClick={() => console.log("clicked")} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <span>jakis text text</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)} color="secondary">
        press me
      </Button>

      <ListGroup
        cities={cities}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
