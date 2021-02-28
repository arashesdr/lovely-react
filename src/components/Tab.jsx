import "../App.css";

const Tab = ({ text, toggleState, toggleTab, index, count }) => {
  const isDisable = count === 0 ? true : false;

  return (
    <>
      <button
        className={toggleState === index ? "tabs active-tabs" : "tabs"}
        onClick={toggleTab}
        disabled={isDisable}
      >
        <span className={!isDisable ? "tab-key" : "tabkey-disabled"}>
          {text.toUpperCase()}
        </span>
        <span className={!isDisable ? "tab-count" : "tabcount-disaled"}>
          {count}
        </span>
      </button>
    </>
  );
};

export default Tab;
