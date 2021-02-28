import { useSelector } from "react-redux";

import Card from "./Card";
import CardInfo from "./CardInfo";

import "./css/card.css";

const Cards = ({ contacts }) => {
  const clickItem = useSelector((store) => store.tabClicked);

  return (
    <div>
      {clickItem !== null ? <CardInfo contact={clickItem} /> : null}
      {contacts.map((contact, index) => (
        <Card key={index} contact={contact} />
      ))}
    </div>
  );
};

export default Cards;
