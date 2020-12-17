import { atom } from "recoil";

export const loggedInUser = atom({
    key: 'loggedInUserID', // unique ID (with respect to other atoms/selectors)
    default: null
  });