import { useEffect, useState } from "react";

// Issue with my problem, *async* behind a functional react component does not work.
// Because when adding async in front of a function. the compiler translate it to a promise.
// Promises are javascript objects and cannot be rendered inside JSX
function Jokes() {
    const [joke, setJoke] = useState();
    const [dadJoke, setDadJoke] = useState();
    const getJoke = () =>  {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(respnse => respnse.json())
        .then(data => setJoke(data.value));
    }

    const getDadJoke = () => {
        /*fetch('https://icanhazdadjoke.com/', {
            headers: {'Accept' : 'application/json'}       
        })
        .then(respnse => respnse.json())
        .then(data => setDadJoke(data.joke));*/
    }

    //useEffect(() => {
    //    setInterval(getDadJoke, 10000);
    //})

    return (
        <div>
            <h2>Ex 2</h2>
            <button onClick={() => getJoke()}
            >Get Joke</button>
            <button onClick={() => getDadJoke()}
            >Get DADJoke</button>
            <br/>
            <p>Joke: {joke}</p>
            <p>Dad Joke: {dadJoke}</p>
        </div>
    )
}

export default Jokes;