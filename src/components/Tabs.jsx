import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clickTabHandle } from "../actions/tab.actions";
import Tab from "./Tab";
import Cards from "./Cards";
import { getTabContent } from "../actions/tabContent.action";
import Loader from "react-loader-spinner";

const Tabs = () => {
  const contacts = useSelector((store) => store.contact);
  const contacsTabInfo = useSelector((store) => store.contacsTabInfo);
  const tabContent = useSelector((store) => store.tabContent);
  const errorHandler = useSelector((store) => store.errorHandler);
  const dispatch = useDispatch();

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index, tab) => {
    dispatch(clickTabHandle(null));
    setToggleState(index);
    dispatch(getTabContent(contacts, tab));
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        {!errorHandler && contacsTabInfo !== null
          ? contacsTabInfo.map((tab, index) => (
              <Tab
                text={tab.key}
                toggleState={toggleState}
                toggleTab={() => toggleTab(index, tab.key)}
                index={index}
                key={index}
                count={tab.count}
              />
            ))
          : null}
      </div>
      <div className="content-tabs">
        <div className="content  active-content">
          {tabContent !== null ? (
            <Cards contacts={tabContent} />
          ) : (
            <div className="loader">
              <Loader type="Watch" color="orange" height={80} width={80} />
              <h5>Please wait ...</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
