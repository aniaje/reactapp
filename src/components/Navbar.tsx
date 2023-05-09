interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return <div>navbar: {cartItemsCount}</div>;
};

export default Navbar;
