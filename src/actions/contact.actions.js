import { getContactList } from "./../services/contactServices";
import config from "../data/configs.json";
import { getTabContent } from "./tabContent.action";

const getContactsLetterCount = (contacts) => {
  let tabContentCounts = [];
  const tabsContent = config.tabs;

  tabsContent.forEach((tab) => {
    const tabContentCountsObject = {
      key: tab,
      count: contacts.filter(
        (item) => item.name.last.substr(0, 1).toLowerCase() === tab
      ).length,
    };
    tabContentCounts.push(tabContentCountsObject);
  });

  return tabContentCounts;
};

export const getContacts = (count) => {
  return async (dispatch) => {
    try {
      const { data } = await getContactList(count);
      await dispatch({ type: "INIT", payload: data.results });

      const tabContentCounts = getContactsLetterCount(data.results);
      await dispatch({ type: "COUNTER", payload: tabContentCounts });

      dispatch(getTabContent(data.results, "a"));
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err });
    }
  };
};
