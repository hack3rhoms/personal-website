fetch(`https://v3.football.api-sports.io/players/topscorers?league=39&season=2023`, {
  method: 'GET',
  headers: { 'x-apisports-key': API_KEY }
})
.then(res => res.json())
.then(data => {
  const scorersDiv = document.getElementById('topscorers');
  data.response.forEach((item, index) => {
    const p = item.player;
    const stats = item.statistics[0];
    const el = document.createElement('div');
    el.className = 'scorer';
    el.innerHTML = `
      <img src="${p.photo}" alt="${p.name}">
      <div>
        <strong>${index + 1}. ${p.name}</strong><br>
        Takım: ${stats.team.name} <br>
        Goller: ⚽ ${stats.goals.total ?? 0}
      </div>
    `;
    scorersDiv.appendChild(el);
  });
})
.catch(err => {
  console.error(err);
  document.getElementById('topscorers').innerHTML = '<p class="text-danger text-center">⚠️ Gol verisi alınamadı.</p>';
});
