import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
      

    <div className="App">
              <h1>Leaderboard</h1>
      <Student name="Ali Haider" university="NEDUET" score={349} />
      <Student name="Usama Iqbal" university="UIT" score={350} />
      <Student name="Sameer Faisal" university="UIT" score={349} />
      <Student name="Arsalan Ahmed" university="UIT" score={350} />
      <Student name="Hammad Ahmed" university="Bahria University" score={349} />
      <Student name="Aijaz Ali" university="DHA Suffah University" score={350} />
    </div>
  );
}

export default App;