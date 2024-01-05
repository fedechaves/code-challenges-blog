import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react'

const TURNS = {
    x: "X",
    o: "O"
}

export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const App2 = () => {
  const [ board, setBoard ] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board') 
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [ turn, setTurn ] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.x
})
  const [ winner, setWinner ] = useState(null)

  // eslint-disable-next-line react/prop-types
  const saveGameToStorage = ({ board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }
  
  const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
  }

  const WinnerModal = ({ winner, resetBoard }) => {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó'

    return(
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetBoard}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
  }

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
        const [a, b, c] = combo
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[b] === boardToCheck[c]) {
                return boardToCheck[a]
            }
    }
    return null
  }

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
  }
  
  const updateBoard = (index) =>  {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner) {
        confetti()
        setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
        setWinner(false)
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameStorage()
  }

  useEffect(() => {
    saveGameToStorage({
        board: board,
        turn: turn
    })
  },[turn, board])
  return (
    <main className="board">
        <h1>Este es un tic tac toe</h1>
        <section className="game">{board.map((item, index) =>  
            <Square 
                key={index}
                updateBoard={updateBoard}
                index={index}
            >
                {item}
            </Square>
        )}
        </section>

        <section className='turn'>
            <Square isSelected={turn === TURNS.x}>
                {TURNS.x}
            </Square>
            <Square isSelected={turn === TURNS.o}>
                {TURNS.o}
            </Square>
        </section>

        <section>
            <button onClick={resetBoard}>Clear board</button>
        </section>

        <WinnerModal resetBoard={resetBoard} winner={winner}></WinnerModal>
    </main>
  )
}

export default App2
