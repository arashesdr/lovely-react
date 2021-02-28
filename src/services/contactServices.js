import { server } from "./server";

export const getContactList = (count) => {
  const url = `/?results=${count}&inc=name,email,location,login,picture,phone&nat=US`;
  return server.get(url);
};
