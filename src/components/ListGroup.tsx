import { useState } from "react";
import styled from "styled-components";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  text-decoration: underline;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  list-style: none;
  padding: 0;
  background-color: ${(props) => (props.active ? "lightblue" : "white")};
`;

const ListGroup = ({ cities, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1 className="p-3">{heading}</h1>
      {cities.length === 0 && <p>no items</p>}
      <List className="list-group">
        {cities.map((city, index) => (
          <ListItem
            active={index === selectedIndex}
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
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
