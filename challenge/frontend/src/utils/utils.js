import Cookies from "js-cookie";


// Function to check if the user is logged in
export const isLoggedIn = () => {
  const token = Cookies.get("token");
  return !!token;
};


export const sortDistrictMembers = (array) => {
  return array.sort(
    (a, b) => Number(a.district.slice(4)) - Number(b.district.slice(4))
  );
}

export const numberOnly = (str) => str.slice(4);
