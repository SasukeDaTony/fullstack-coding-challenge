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
};

export const complaintIcons = {
  Aging:
    "https://cdn5.vectorstock.com/i/1000x1000/92/84/old-ages-icon-vector-21019284.jpg",
  "Civil Service and Labor":
    "https://www.shutterstock.com/image-vector/worker-icon-vector-260nw-315506147.jpg",
  "Consumer Affairs": "https://static.thenounproject.com/png/3147066-200.png",
  "Cultural Affairs": "https://static.thenounproject.com/png/4949302-200.png",
  "Economy/Jobs": "https://static.thenounproject.com/png/813710-200.png",
  Education:
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Education%2C_Studying%2C_University%2C_Alumni_-_icon.png",
  Environment: "https://cdn-icons-png.flaticon.com/512/5496/5496089.png",
  Finance:
    "https://www.creativefabrica.com/wp-content/uploads/2020/07/14/Finance-icon-money-thin-line-bag-Graphics-4621103-1-1-580x386.png",
  "General Welfare":
    "https://cdn.iconscout.com/icon/free/png-256/free-welfare-1852190-1573167.png",
  "Governmental Operations":
    "https://cdn0.iconfinder.com/data/icons/lockdown-glyph/64/government-team-governor-operation-politician-512.png",
  Health:
    "https://i.pinimg.com/736x/a6/9e/2d/a69e2da6b1e9e1d5ec46a2daa65ae964.jpg",
  "Housing and Buildings":
    "https://cdn3.iconfinder.com/data/icons/buildings-places/512/Housing-512.png",
  "Human and Civil Rights":
    "https://cdn3.iconfinder.com/data/icons/protest-line/64/protest-53-512.png",
  Immigration: "https://cdn-icons-png.flaticon.com/512/6333/6333926.png",
  "Land Use and Zoning":
    "https://static.thenounproject.com/png/5579760-200.png",
  "Legal Services":
    "https://static.vecteezy.com/system/resources/thumbnails/002/205/885/small/business-law-icon-free-vector.jpg",
  Parks:
    "https://static.vecteezy.com/system/resources/previews/019/814/911/non_2x/park-icon-vector.jpg",
  "Public Safety":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaOdSN0zn3Dm6c5j0c3jTDVIGjEtq0nYVi_VUg9zdxw&s",
  "Quality of Life":
    "https://i.pinimg.com/564x/53/19/4d/53194de2defb50bfce72aa849daef3ce.jpg",
  "Recovery and Resiliency":
    "https://static.thenounproject.com/png/1681605-200.png",
  Sanitation:
    "https://static.vecteezy.com/system/resources/previews/005/745/271/original/sanitation-facilities-black-glyph-icon-hygienic-conditions-maintenance-accessible-bathroom-and-toilet-in-home-sanitary-accommodation-silhouette-symbol-on-white-space-isolated-illustration-vector.jpg",
  "Select One":
    "https://p7.hiclipart.com/preview/992/751/721/computer-icons-select-gesture-finger-thumbnail.jpg",
  Transportation:
    "https://www.shutterstock.com/image-vector/transparent-transportation-icon-png-vector-260nw-1946016238.jpg",
  Utilities:
    "https://p7.hiclipart.com/preview/432/632/872/water-electricity-three-utilities-problem-computer-icons-clip-art-electric.jpg",
  "Veterans Affairs":
    "https://cdn4.iconfinder.com/data/icons/military-109/62/army-soldier-military-veteran-patriot-512.png",
  "Youth Services":
    "https://www.pngkey.com/png/detail/148-1485227_youth-and-teen-programs-and-services-icon-teen.png",
  "Unavailable": "https://banner2.cleanpng.com/20180528/hek/kisspng-no-symbol-computer-icons-information-clip-art-not-allowed-5b0bcc376fdbf9.9631358015274998314582.jpg",
};
