import React from "react";

interface Props {
  items: any[];
  heading: string;
}

const DoneList = ({ items, heading }: Props) => {
  return (
    <>
      <div className="">
        <h3>{heading}</h3>

        <ul className="list-group bg-info">
          {items.map((item, i) =>
            item.count >= 1 ? (
              <li key={item.name} className={"list-group-item"}>
                {item.count} {item.name}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};

export default DoneList;
