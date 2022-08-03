
import { useEffect, useRef } from 'react'
import {useState} from 'react'

import Rock from "../images/rock.jpeg"
import Paper from "../images/paper.jpeg"
import Scissors from "../images/scissors.jpeg"

function GamePage () {

    const [currentGame, setCurrentGame] = useState([]) //store win, lose, or draw of the game

    const [playerCurrent, setPlayerCurrent] = useState(null)
    const [playerThrows, setPlayerThrows] = useState([])
    
    const handleClick = (current) => {
        // const current = event.target.value
        // console.log(current)
        setPlayerCurrent(current)
        setPlayerThrows([...playerThrows, current])
    }

    const [AICurrent, setAICurrent] = useState(null)
    const [AIThrows, setAIThrows] = useState([])
    //execute everything the array of player throw increases

    const DidPlayerWin = () => {
        //check both currents, return win, lose, draw
        let state = 'lose'

        if (playerCurrent === AICurrent) {
             state = 'draw'
        }
        else if (playerCurrent === 'paper' && AICurrent === 'rock') {
            state = 'win'
        }
        else if (playerCurrent === 'rock' && AICurrent === 'scissors') {
            state = 'win'
        }
        else if (playerCurrent === 'scissors' && AICurrent === 'paper') {
            state = 'win'}

        return state

    }

    const checkGame = () => {

        let playerWin = 0
        let AIWin = 0
        for (let outcome of currentGame ) {
            if (outcome === 'win') {
                playerWin ++
            } else if (outcome === 'lose')
                AIWin ++
        }

        if (playerWin >= 3) {
            return 'You'
        } else if (AIWin >= 3) {
            return 'AI'
        } 
        // console.log('continue')
        return 'continue'


    }

    let firstRender = useRef(true) //want the player to go first
    useEffect( () => {
        
        if (!firstRender.current) {
            
        let random = Math.floor(Math.random() * 3); //random number 0-2

        let current = ['rock', 'paper', 'scissors'][random]

        setAICurrent(current)
        setAIThrows([...AIThrows, current]) }




    },[playerThrows])

    useEffect( () => {
        if (!firstRender.current) {
        setCurrentGame([...currentGame, DidPlayerWin()]) }

        firstRender.current = false
    }
    , [AIThrows])

    return (

        <div>
            <h1> Game Page </h1>
            <h2> WIN: {currentGame.filter((turn) => turn === 'win').length}  LOSS: {currentGame.filter((turn) => turn === 'lose').length}</h2>

            {
                checkGame() != 'continue' ?  
                <div>
                    <h1>{checkGame()} WON! </h1>
                    <button onClick = {() => {window.location.reload()} }>RESTART GAME</button>
                </div>
                :
            <div>
                <p> Please select your choice!</p>
                <hr></hr>
                
                <button className = 'throwBut' onClick = {() => handleClick('rock')} value = 'rock'> 
                <img onClick = {() => handleClick('rock')} className = 'turn' src = {Rock}/>
                 </button>

                <button className = 'throwBut' onClick = {() => handleClick('paper')}  value = 'paper'> <img onClick = {() => handleClick('paper')} className = 'turn' src = {Paper} /> </button>

                <button className = 'throwBut' onClick = {() => handleClick('scissors')}  value = 'scissors'> <img onClick = {() => handleClick('scissors')}  className = 'turn'src = {Scissors}/> </button>
                <hr></hr>

                <h1> {!firstRender.current && DidPlayerWin()} </h1>


                { playerCurrent != null &&
                <h2>You played {playerCurrent}! </h2>}
                { playerThrows.length != 0 &&
                    <h2>Your History: {playerThrows.map((throw0, index) => {
                        return <span> {index+1}: {throw0} </span>
                    })} </h2>
                }
            
                <br></br>

                { AICurrent != null &&
                <h2>AI played {AICurrent}! </h2>}
                { AIThrows.length != 0 &&
                    <h2>AI History: {AIThrows.map((throw0, index) => {
                        return <span> {index+1}: {throw0} </span>
                    })} </h2>
                }

            </div>
            } 
            
        </div>
    )
}

export default GamePage