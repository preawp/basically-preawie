import React, { useState } from 'react';
import './App.css';

function App() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [wins, setWins] = useState([]);
  const [titles, setTitles] = useState([]);
  const [newWinText, setNewWinText] = useState('');

  const levelThreshold = 100;

  const handleAddWin = () => {
    if (newWinText.trim() === '') return;

    const newXp = xp + 10;
    setXp(newXp);
    setWins([`✨ ${newWinText}`, ...wins]);
    setNewWinText('');

    // Level up
    if (newXp >= level * levelThreshold) {
      setLevel(level + 1);
    }

    // Title unlocks
    if (newXp >= 30 && !titles.includes("Soft Start Seeker")) {
      setTitles([...titles, "Soft Start Seeker"]);
    }
    if (newXp >= 80 && !titles.includes("Tiny Triumph Queen")) {
      setTitles([...titles, "Tiny Triumph Queen"]);
    }
  };

  return (
    <div className="App">
      <h1>👑 Basically Preawie</h1>
      <h2>Level {level}</h2>
      <p>{xp} XP earned</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Type your win here..."
          value={newWinText}
          onChange={(e) => setNewWinText(e.target.value)}
        />
        <button className="log-button" onClick={handleAddWin}>+ Add Win</button>
      </div>

      <div className="section">
        <h3>Recent Wins</h3>
        <ul>
          {wins.map((win, idx) => <li key={idx}>{win}</li>)}
        </ul>
      </div>

      <div className="section">
        <h3>Unlocked Titles</h3>
        <ul>
          {titles.map((title, idx) => <li key={idx}>🏅 {title}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
