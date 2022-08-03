import { Link } from 'react-router-dom';


function HomePage () {

    return (
        
        <div>
            <h1> ROCK PAPER SCISSOR</h1>
             <hr></hr>
            <h1> Home Page</h1>
            <Link to = '/game'> Game</Link>
        </div>
    )
}

export default HomePage