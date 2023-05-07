import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ cities, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="p-3">{heading}</h1>
      {cities.length === 0 && <p>no items</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
