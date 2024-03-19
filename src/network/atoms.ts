import { atom } from "jotai";

// Default values
const sidebarMinimizedDefault = false;

export const ATOMS = {
  user: atom({
    affiliateId: "",
    accountId: "",
    firstName: "",
    lastName: "",
    email: "",
    creditCoins: 0,
    creditBalance: 0,
    userRole: 1,
    bankAccount: "",
    bankAccountName: "",
    bank: "",
  }),
  sidebarMinimized: atom(sidebarMinimizedDefault),
};
