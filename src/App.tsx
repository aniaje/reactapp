import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(true);

  let cities = ["new york", "london", "paris", "berlin", "tokyo"];
  let heading = "list";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
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
