import { selector } from "recoil";
import { loggedInUser } from "./state";

export const userState = selector({
    key: 'loggedInUser', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const loggedInUserState = get(loggedInUser);
  
      return loggedInUserState;
    },
  });