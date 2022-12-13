import React from 'react';
import './App.scss';

//custome components
import AppBar from 'components/AppBar/AppBar';
import BoardBar from 'components/BoardBar/BoardBar';
import BoardContent from 'components/BoardContent/BoardContent';

function App() {
  return (
    <div className="App">
      <header className="trello-master">
        < AppBar />
        < BoardBar />
        < BoardContent />
       
      </header>
    </div>
  );
}

export default App;
