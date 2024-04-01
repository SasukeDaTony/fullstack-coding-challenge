import Cookies from "js-cookie";

// Test for top district number only
export function districtNumberOnly(str) {
  return str.charAt(str.length - 2) + str.charAt(str.length - 1);
}

// Function to check if the user is logged in
export const isLoggedIn = () => {
  const token = Cookies.get("token");
  return !!token;
};
