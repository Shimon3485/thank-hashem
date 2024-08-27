import { useState } from "react";
import Button from "./Button";
import DashBoard from "./DashBoard";
import "./ListGroup.css";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface Props {
  items: any[];
  heading: string;
  onSelectItem: (item: string, i: number) => void;
  btnAddClick: (item: any) => void;
  btnSubClick: (item: any) => void;
  onClickBook: (item: string) => void;
  reset: boolean;
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  btnAddClick,
  btnSubClick,
  onClickBook,
  reset,
}: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>{heading}</h3>
      <ul className="list-group bg-info">
        {items.map((item, i) => (
          <li
            key={item.name}
            className="list-group-item"
            onMouseEnter={() => {
              setSelectedIndex(i);
              onSelectItem(item, i);
            }}
          >
            {selectedIndex === i && reset === false && (
              <>
                <p>
                  {` ${item.name}   (${item.value})`}
                  {"      "}
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => onClickBook(item)}
                  >
                    <GiOpenBook />
                  </button>
                </p>
                <Button onClick={() => btnSubClick(item.value)}>
                  <FaMinus />
                </Button>
                <Button
                  onClick={() => {
                    btnAddClick(item);
                  }}
                >
                  <FaPlus />
                </Button>

                {/* <p> {item.count}</p> */}
              </>
            )}
            {selectedIndex !== i || (selectedIndex === i && reset === true) ? (
              <p>{`  ${item.name} (${item.value})`} </p>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
