import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
// import { response } from 'express';


function App() {
  const [puzzle, setPuzzle] = useState([]);


  // useEffect(() => {
  //   // retrieve puzzles and pieces from the backend via http to localhost:4000

  //   window
  //     .fetch('http://localhost:4000/puzzles/{e.target.value}')
  //     .then(response => {
  //       console.log('SUCCESS!! response => ', response)
  //     })
  //     .catch(error => {
  //       console.error('ERROR! error => ', error)
  //     })
  // })

  function handleChange (e) {

    window
      .fetch(`http://localhost:4000/puzzles/${e.target.value}`)
      .then((response) => response.json())
      .then(response => {
        setPuzzle(response)
      })
      .catch(error => {
        console.error('ERROR! error => ', error)
      })
  }

  const puzzleItemComponents = puzzle.map((p, index) => {
    return (
      <p key={index} >NAMEEEEEEEEE!!!! {p.name}</p>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        

        <p>Puzzle: {JSON.stringify(puzzle)}</p>

        <ul>{puzzleItemComponents}</ul>

        {/* <p>puzzle name {puzzle?[0].name}</p>
        <p>puzzle id {puzzle?[0].id}</p> */}

     
        <input type="text" onChange={handleChange} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
