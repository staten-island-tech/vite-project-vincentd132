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

const nflTeams = [
  {
    name: "Arizona Cardinals",
    city: "Glendale",
    logo: "./card.png",
    conference: "NFC",
  },
  {
    name: "Atlanta Falcons",
    city: "Atlanta",
    logo: "./2.png",
    conference: "NFC",
  },
  {
    name: "Baltimore Ravens",
    city: "Baltimore",
    logo: "./3.png",
    conference: "AFC",
  },
  {
    name: "Buffalo Bills",
    city: "Buffalo",
    logo: "./4.png",
    conference: "AFC",
  },
  {
    name: "Carolina Panthers",
    city: "Charlotte",
    logo: "./5.png",
    conference: "NFC",
  },
  {
    name: "Chicago Bears",
    city: "Chicago",
    logo: "./6.png",
    conference: "NFC",
  },
  {
    name: "Cincinnati Bengals",
    city: "Cincinnati",
    logo: "./7.png",
    conference: "AFC",
  },
  {
    name: "Cleveland Browns",
    city: "Cleveland",
    logo: "./8.png",
    conference: "AFC",
  },
  {
    name: "Dallas Cowboys",
    city: "Arlington",
    logo: "./9.png",
    conference: "NFC",
  },
  {
    name: "Denver Broncos",
    city: "Denver",
    logo: "./10.png",
    conference: "AFC",
  },
  {
    name: "Detroit Lions",
    city: "Detroit",
    logo: "./11.png",
    conference: "NFC",
  },
  {
    name: "Green Bay Packers",
    city: "Green Bay",
    logo: "./12.png",
    conference: "NFC",
  },
  {
    name: "Houston Texans",
    city: "Houston",
    logo: "./13.png",
    conference: "AFC",
  },
  {
    name: "Indianapolis Colts",
    city: "Indianapolis",
    logo: "./14.png",
    conference: "AFC",
  },
  {
    name: "Jacksonville Jaguars",
    city: "Jacksonville",
    logo: "./15.png",
    conference: "AFC",
  },
  {
    name: "Kansas City Chiefs",
    city: "Kansas City",
    logo: "./16.png",
    conference: "AFC",
  },
  {
    name: "Las Vegas Raiders",
    city: "Las Vegas",
    logo: "./17.png",
    conference: "AFC",
  },
  {
    name: "Los Angeles Chargers",
    city: "Los Angeles",
    logo: "./18.png",
    conference: "AFC",
  },
  {
    name: "Los Angeles Rams",
    city: "Los Angeles",
    logo: "./19.png",
    conference: "NFC",
  },
  {
    name: "Miami Dolphins",
    city: "Miami",
    logo: "./20.png",
    conference: "AFC",
  },
];

function displayTeams(teams) {
  const container = document.querySelector("#nflteams");
  container.innerHTML = "";
  teams.forEach((team) => {
    const teamCardHTML = `
      <div class="team-card">
        <img src="${team.logo}" alt="${team.name} logo" class="team-logo" />
        <div class="team-info">
          <h3>${team.name}</h3>
          <p>${team.city}</p>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", teamCardHTML);
  });
}

displayTeams(nflTeams);

document.querySelector("#showAllTeams").addEventListener("click", () => {
  displayTeams(nflTeams);
});

document.querySelector("#showAfcTeams").addEventListener("click", () => {
  const afcTeams = nflTeams.filter((team) => team.conference === "AFC");
  displayTeams(afcTeams);
});

document.querySelector("#showNfcTeams").addEventListener("click", () => {
  const nfcTeams = nflTeams.filter((team) => team.conference === "NFC");
  displayTeams(nfcTeams);
});

document.querySelector("#showSuperbowlTeams").addEventListener("click", () => {
  const superbowlTeams = nflTeams.filter((team) => {
    const superbowlTeamsList = [
      "Miami Dolphins",
      "Dallas Cowboys",
      "Baltimore Ravens",
      "Denver Broncos",
      "Indianapolis Colts",
      "Kansas City Chiefs",
      "Las Vegas Raiders",
      "Chicago Bears",
      "Green Bay Packers",
      "Los Angeles Rams",
    ];
    return superbowlTeamsList.includes(team.name);
  });
  displayTeams(superbowlTeams);
});
