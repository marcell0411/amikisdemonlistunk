const levels = [
  {
    rank: 1, name: "ACU", creator: "Neigefeu", verifier: "Marcellgmd",
    points: 54, difficulty: "Extreme Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 2, name: "Windy Landscape", creator: "Woogi1141", verifier: "Marcellgmd",
    points: 53, difficulty: "Insane Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 3, name: "craZy", creator: "DavJT", verifier: "Marcellgmd",
    points: 52, difficulty: "Hard Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 4, name: "Future Funk", creator: "JonathanGD", verifier: "Marcellgmd",
    points: 51, difficulty: "Hard Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 5, name: "Nine Circles", creator: "Zobros", verifier: "Marcellgmd",
    points: 50, difficulty: "Hard Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "25%"]]
  },
  {
    rank: 6, name: "Troll Madness", creator: "Someone", verifier: "Marcellgmd",
    points: 49, difficulty: "Hard Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "12%"]]
  },
  {
    rank: 7, name: "Electrodynamix V2", creator: "Someone", verifier: "Marcellgmd",
    points: 48, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "2%"]]
  },
  {
    rank: 8, name: "Paracosm Circles", creator: "Someone", verifier: "Marcellgmd",
    points: 47, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "7%"]]
  },
  {
    rank: 9, name: "Verity", creator: "Serponge", verifier: "Marcellgmd",
    points: 46, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 10, name: "Resurrection", creator: "Someone", verifier: "Marcellgmd",
    points: 45, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 11, name: "Mechanical Showdown", creator: "Someone", verifier: "Marcellgmd",
    points: 44, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 12, name: "B", creator: "MotleYORC", verifier: "Marcellgmd",
    points: 43, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "13%"]]
  },
  {
    rank: 13, name: "Hell and Heaven", creator: "Someone", verifier: "Marcellgmd",
    points: 42, difficulty: "Medium Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 14, name: "Death Moon", creator: "Someone", verifier: "Marcellgmd",
    points: 41, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "34%"]]
  },
  {
    rank: 15, name: "Submerged", creator: "Someone", verifier: "Marcellgmd",
    points: 40, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 16, name: "Endless Descent", creator: "Someone", verifier: "Marcellgmd",
    points: 39, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 17, name: "Invisible Clubstep", creator: "Someone", verifier: "Marcellgmd",
    points: 38, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 18, name: "Deadlocked", creator: "RobTop", verifier: "Marcellgmd",
    points: 37, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "80%"]]
  },
  {
    rank: 19, name: "Theory of Everything 2", creator: "RobTop", verifier: "Marcellgmd",
    points: 36, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 20, name: "Retro Circles", creator: "Someone", verifier: "Marcellgmd",
    points: 35, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 21, name: "Equinox", creator: "Someone", verifier: "Marcellgmd",
    points: 34, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 22, name: "Clubstep", creator: "RobTop", verifier: "Marcellgmd",
    points: 33, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 23, name: "Brainwave", creator: "Someone", verifier: "Marcellgmd",
    points: 32, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 24, name: "Ispywithmylittleeye", creator: "Someone", verifier: "Marcellgmd",
    points: 31, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 25, name: "Problematic", creator: "Someone", verifier: "Marcellgmd",
    points: 30, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "67%"]]
  },
  {
    rank: 26, name: "Electroman Adven V2", creator: "Someone", verifier: "Marcellgmd",
    points: 29, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 27, name: "Super Cycles", creator: "Someone", verifier: "Marcellgmd",
    points: 28, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 28, name: "iSparki", creator: "Someone", verifier: "Marcellgmd",
    points: 27, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 29, name: "Xstep V2", creator: "Someone", verifier: "Marcellgmd",
    points: 26, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 30, name: "Ystep", creator: "Someone", verifier: "Marcellgmd",
    points: 25, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 31, name: "Shiver", creator: "Someone", verifier: "Marcellgmd",
    points: 24, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 32, name: "Speed Racer", creator: "Someone", verifier: "bushcampergmd",
    points: 23, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 33, name: "Red Alert", creator: "Someone", verifier: "Marcellgmd",
    points: 22, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 34, name: "Phjork", creator: "Someone", verifier: "Marcellgmd",
    points: 21, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 35, name: "Lights and Thunder", creator: "Someone", verifier: "Marcellgmd",
    points: 20, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 36, name: "Demon Jumper", creator: "Someone", verifier: "Marcellgmd",
    points: 19, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 37, name: "Impulse", creator: "Someone", verifier: "Marcellgmd",
    points: 18, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 38, name: "Dorabaedifficult4", creator: "Someone", verifier: "Marcellgmd",
    points: 17, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 39, name: "Ultra Paracosm", creator: "Viprin", verifier: "Marcellgmd",
    points: 16, difficulty: "Hard Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 40, name: "XYZ Step", creator: "Someone", verifier: "Marcellgmd",
    points: 15, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 41, name: "Demon Step", creator: "Someone", verifier: "Marcellgmd",
    points: 14, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "0%"]]
  },
  {
    rank: 42, name: "Demon Mixed", creator: "Someone", verifier: "Marcellgmd",
    points: 13, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 43, name: "IS", creator: "Someone", verifier: "Marcellgmd",
    points: 12, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "43%"]]
  },
  {
    rank: 44, name: "The Nightmare", creator: "Jax", verifier: "Marcellgmd",
    points: 11, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 45, name: "Platinum Adventure", creator: "Someone", verifier: "Marcellgmd",
    points: 10, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  },
  {
    rank: 46, name: "The Lightning Road", creator: "timeless", verifier: "Marcellgmd",
    points: 9, difficulty: "Easy Demon",
    records: [["Marcellgmd", "100%"], ["bushcampergmd", "100%"]]
  }
];

function renderLevels(filter = "") {
  const box = document.getElementById("levelList");
  const q = filter.toLowerCase();

  const filtered = levels.filter(l =>
    `${l.name} ${l.creator} ${l.verifier}`.toLowerCase().includes(q)
  );

  box.innerHTML = filtered.map(l => `
    <div class="level">
      <div class="rank">#${l.rank}</div>

      <div>
        <h3>${l.name}</h3>
        <small>by ${l.creator}</small>
      </div>

      <div class="points">${l.points} pts</div>

      <div class="difficulty">${l.difficulty}</div>

      <button class="view-button" onclick="showLevel(${l.rank})">
        VIEW
      </button>
    </div>
  `).join("") || "<p>No levels found.</p>";
}

function renderPlayers() {
  const map = {};

  levels.forEach(l => l.records.forEach(([player, progress]) => {
    if (!map[player]) map[player] = 0;

    // Only give points if the player has beaten the level
    if (progress === "100%") {
      map[player] += l.points;
    }
  }));

  const players = Object.entries(map).sort((a, b) => b[1] - a[1]);

  document.getElementById("playerCount").textContent = players.length;

  document.getElementById("playerList").innerHTML = players.map(([name, points], index) => `
    <div class="player">
      <b>#${index + 1} ${name}</b>
      <span>${points} points</span>
    </div>
  `).join("");
}

function showLevel(rank) {
  const l = levels.find(x => x.rank === rank);
  document.getElementById("modalContent").innerHTML = `
    <h2>#${l.rank} — ${l.name}</h2>
    <div class="detail">
      <b>Creator:</b> ${l.creator}<br>
      <b>Verifier:</b> ${l.verifier}<br>
      <b>Difficulty:</b> ${l.difficulty}<br>
      <b>Points:</b> ${l.points}
    </div>
    <h3>Records</h3>
    ${l.records.map(r => `<div class="record"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("")}
  `;
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("search").addEventListener("input", e => renderLevels(e.target.value));
document.getElementById("closeModal").onclick = () => document.getElementById("modal").classList.add("hidden");
document.getElementById("modal").onclick = e => {
  if (e.target.id === "modal") e.currentTarget.classList.add("hidden");
};

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("listTab").classList.toggle("hidden", btn.dataset.tab !== "list");
    document.getElementById("playersTab").classList.toggle("hidden", btn.dataset.tab !== "players");
  };
});

document.getElementById("levelCount").textContent = levels.length;
document.getElementById("topName").textContent = levels[0].name;
renderLevels();
renderPlayers();
