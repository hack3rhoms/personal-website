const stars = [
  {
    name: "Erling Haaland",
    photo: "https://media.api-sports.io/football/players/184.png",
    team: "Manchester City"
  },
  {
    name: "Mohamed Salah",
    photo: "https://media.api-sports.io/football/players/306.png",
    team: "Liverpool"
  },
  {
    name: "Marcus Rashford",
    photo: "https://media.api-sports.io/football/players/227.png",
    team: "Manchester United"
  },
  {
    name: "Bukayo Saka",
    photo: "https://media.api-sports.io/football/players/26759.png",
    team: "Arsenal"
  },
  {
    name: "Heung-min Son",
    photo: "https://media.api-sports.io/football/players/190.png",
    team: "Tottenham"
  }
];

const starsDiv = document.getElementById('stars');
stars.forEach((player, i) => {
  const el = document.createElement('div');
  el.className = 'star';
  el.innerHTML = `
    <img src="${player.photo}" alt="${player.name}">
    <div>
      <strong>${player.name}</strong><br>
      Takım: ${player.team}
    </div>
  `;
  starsDiv.appendChild(el);
});
