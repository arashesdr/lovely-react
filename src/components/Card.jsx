import { useDispatch } from "react-redux";

import { clickTabHandle } from "../actions/tab.actions";

import "./css/card.css";

const Card = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickTabHandle(contact));
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="column chip" onClick={handleClick}>
        <img
          src={contact.picture.thumbnail}
          alt="Person"
          style={{ width: "96", height: "96" }}
        />
        {`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
      </div>
    </div>
  );
};

export default Card;
