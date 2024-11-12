import "../style.css";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
setupCounter(document.querySelector("#counter"));
const nflTeams = [
  {
    name: "Arizona Cardinals",
    city: "Glendale",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Arizona_Cardinals_logo.svg",
  },
  {
    name: "Atlanta Falcons",
    city: "Atlanta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Atlanta_Falcons_logo.svg",
  },
  {
    name: "Baltimore Ravens",
    city: "Baltimore",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Baltimore_Ravens_logo.svg",
  },
  {
    name: "Buffalo Bills",
    city: "Buffalo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Buffalo_Bills_logo.svg",
  },
  {
    name: "Carolina Panthers",
    city: "Charlotte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Carolina_Panthers_logo.svg",
  },
  {
    name: "Chicago Bears",
    city: "Chicago",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Chicago_Bears_logo.svg",
  },
  {
    name: "Cincinnati Bengals",
    city: "Cincinnati",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Cincinnati_Bengals_logo.svg",
  },
  {
    name: "Cleveland Browns",
    city: "Cleveland",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Cleveland_Browns_logo.svg",
  },
  {
    name: "Dallas Cowboys",
    city: "Arlington",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dallas_Cowboys_logo.svg",
  },
  {
    name: "Denver Broncos",
    city: "Denver",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Denver_Broncos_logo.svg",
  },
  {
    name: "Detroit Lions",
    city: "Detroit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Detroit_Lions_logo.svg",
  },
  {
    name: "Green Bay Packers",
    city: "Green Bay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Green_Bay_Packers_logo.svg",
  },
  {
    name: "Houston Texans",
    city: "Houston",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Houston_Texans_logo.svg",
  },
  {
    name: "Indianapolis Colts",
    city: "Indianapolis",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Indianapolis_Colts_logo.svg",
  },
  {
    name: "Jacksonville Jaguars",
    city: "Jacksonville",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jacksonville_Jaguars_logo.svg",
  },
  {
    name: "Kansas City Chiefs",
    city: "Kansas City",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Kansas_City_Chiefs_logo.svg",
  },
  {
    name: "Las Vegas Raiders",
    city: "Las Vegas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Las_Vegas_Raiders_logo.svg",
  },
  {
    name: "Los Angeles Chargers",
    city: "Los Angeles",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Los_Angeles_Chargers_logo.svg",
  },
  {
    name: "Los Angeles Rams",
    city: "Los Angeles",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Los_Angeles_Rams_logo.svg",
  },
  {
    name: "Miami Dolphins",
    city: "Miami",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Miami_Dolphins_logo.svg",
  },
];

const container = document.getElementById("container");

nflTeams.forEach((team) => {
  const listItem = document.createElement("li");
  DOMSelectors = `
    <img src="${team.logo}" alt="${team.name} logo">
    ${team.name} (${team.city})
  `;
  teamList.appendChild(listItem);
});
