import { useDispatch } from "react-redux";

import { clickTabHandle } from "../actions/tab.actions";
import "./css/card.css";

const CardInfo = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className="column info">
      <header className="info-header">
        {`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
        <span
          className="closebtn"
          onClick={() => dispatch(clickTabHandle(null))}
        >
          &times;
        </span>
      </header>
      <div className="info-container">
        <img src={contact.picture.large} alt="Avatar" className="info-image" />
        <div className="info-detail">
          <p>
            <strong className="info-title">Email:</strong>
            {contact.email}
          </p>
          <p>
            <strong className="info-title">Phone:</strong>
            {contact.phone}
          </p>
          <p>
            <strong className="info-title">Street:</strong>
            {contact.location.street.name}
          </p>
          <p>
            <strong className="info-title">City:</strong>
            {contact.location.city}
          </p>
          <p>
            <strong className="info-title">State:</strong>
            {contact.location.state}
          </p>
          <p>
            <strong className="info-title">Postcode:</strong>
            {contact.location.postcode}
          </p>
          <br />
        </div>
      </div>
      <div className="info-bookmarkRibbon">
        <span className="info-user">{`User: ${contact.login.username}`}</span>
      </div>
    </div>
  );
};

export default CardInfo;
