import Cookies from "js-cookie";


// Function to check if the user is logged in
export const isLoggedIn = () => {
  const token = Cookies.get("token");
  return !!token;
};
