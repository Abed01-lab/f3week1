
let number = 0;

function handleButton (){
  number += 1;
  console.log(number)
}

function App() {
  return (
    <div>
      <h2>Ex 1</h2>
      <p>{number}</p>
      <button onClick={handleButton}>press me</button>
    </div>
  );
}

export default App;