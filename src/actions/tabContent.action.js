export const getTabContent = (contacts, tabKey) => {
  return async (dispatch) => {
    const contactList = [...contacts];
    const specificList = contactList.filter(
      (item) => item.name.last.substr(0, 1).toLowerCase() === tabKey
    );
    await dispatch({ type: "LOAD", payload: specificList });
  };
};
