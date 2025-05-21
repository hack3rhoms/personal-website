const API_KEY = '78af6f8749d433ff450d00136e7b3c20';
const EPL_LEAGUE_ID = 39;
const SEASON = 2023;

fetch(`https://v3.football.api-sports.io/standings?league=${EPL_LEAGUE_ID}&season=${SEASON}`, {
  method: 'GET',
  headers: { 'x-apisports-key': API_KEY }
})
.then(res => res.json())
.then(data => {
  const standings = data.response[0].league.standings[0];
  const table = document.getElementById('standings');

  standings.forEach(team => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${team.rank}</td>
      <td><img src="${team.team.logo}" width="20"> ${team.team.name}</td>
      <td>${team.points}</td>
      <td>${team.all.played}</td>
      <td>${team.all.win}</td>
      <td>${team.all.draw}</td>
      <td>${team.all.lose}</td>
    `;
    table.appendChild(row);
  });
})
.catch(err => {
  console.error(err);
  document.getElementById('standings').innerHTML = '<p class="text-danger text-center">⚠️ Veri alınamadı.</p>';
});
