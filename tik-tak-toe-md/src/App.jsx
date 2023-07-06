import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti'
import Square from './components/Square';
import { TURNS } from './constants';
import { checkWinner, checkEndGame } from './logic/board';
import WinnerModal from './components/WinnerModal';
import './App.css'
import { saveGameToStorage, resetGameStorage } from './logic/storage';
import { TwitterButton } from './components/TwitterButton';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage 
    ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }
  );
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if(board[index] || winner) return

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard)
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar partida
    //look for a winner
    const newWinner = checkWinner(newBoard);
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)

    //reset local storage
    resetGameStorage()
  }

  useEffect(() => {
    saveGameToStorage({ 
      board: board,
      turn: turn
    })
  }, [board, turn])
  const fedecha = { 'img': 'https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg', 
                    'name': 'Federico Chaves',
                    'userName': '@fedecha',
                    'initialIsFollowing': true};
  return (
    <main className='board'>
      <header style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin:'10px'}}>
      <TwitterButton
        {...fedecha}
        />
      <TwitterButton
        img="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg"
        name="Federico Chaves"
        userName="@fedecha"
        isFollowing={false}
        />
      </header>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, idx) => {
            return (
              <Square
                key={idx}
                index={idx}
                updateBoard={updateBoard} 
              > 
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
