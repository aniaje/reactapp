interface Props {
  cartItems: string[];
  clear: () => void;
}

const Cart = ({ cartItems, clear }: Props) => {
  return (
    <div>
      <ul>
        {" "}
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={clear}>BUTTON</button>
    </div>
  );
};

export default Cart;
