import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import produce from "immer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Text from "./components/Text";

function App() {
  const [alertVisible, setAlertVisible] = useState(true);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({ name: "pizza1", toppings: ["cheese"] });

  const changeName = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "pepperoni"] });
  };

  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const [customer, setCustomer] = useState({
    name: " John",
    address: {
      city: "New York",
      zipCode: "10001",
    },
  });

  const [bugs, setBugs] = useState([
    { id: 1, description: "bug1", resolved: false },
    { id: 2, description: "bug2", resolved: false },
  ]);

  const [cartItems, setCartItems] = useState([
    "product1",
    "product2",
    "product3",
  ]);

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "product1",
        quantity: 1,
      },
      {
        id: 2,
        title: "product2",
        quantity: 1,
      },
    ],
  });

  const clickHandler = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(cart);
  };

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.resolved = true;
      })
    );
    // bugs.map((bug) => (bug.id === 1 ? { ...bug, resolved: true } : bug))
  };

  // const handleClick = () => {
  //   setTags([...tags, "tag4"]);
  //   setTags(tags.filter((tag) => tag !== "tag2"));
  //   setTags(tags.map((tag) => (tag === "tag1" ? "tag1.1" : tag)));
  // };

  // const handleClick = () => {
  //   const newCustomer = {
  //     ...customer,
  //     address: { ...customer.address, zipCode: "10002" },
  //   };
  //   setCustomer(newCustomer);
  //   console.log(customer);
  // };

  let cities = ["new york", "london", "paris", "berlin", "tokyo"];
  let heading = "list";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const clear = () => {
    setCartItems([]);
  };

  return (
    <>
      <Text maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        magni aperiam maxime saepe quidem inventore molestiae dicta itaque vero
        velit! Voluptates dignissimos maxime culpa perferendis consectetur!
        Sapiente itaque doloremque accusantium provident, dolore perspiciatis
        dolor dolores nobis pariatur, quibusdam nam distinctio similique.
        Consectetur recusandae doloribus sint, id possimus facilis expedita
        minima laborum ipsum ut vel pariatur illo optio unde fugiat temporibus
        praesentium consequatur velit totam accusantium iste quia nostrum minus
        quisquam. Minima eveniet provident deleniti, quos cupiditate excepturi
        quaerat, ipsum, nostrum aliquid sunt voluptatem architecto expedita
        obcaecati pariatur molestias adipisci veniam. Expedita nesciunt laborum
        iste fugiat harum eum voluptate quod voluptatibus.
      </Text>

      <button onClick={clickHandler}>cart update</button>
      <button onClick={changeName}>click</button>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart clear={clear} cartItems={cartItems} />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.description} {bug.resolved ? "fixed" : "new"}
        </p>
      ))}

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
