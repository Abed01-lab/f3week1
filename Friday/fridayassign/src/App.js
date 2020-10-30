import FormDemo from './formDemo';
import FormDemoMultiple from './FormDemoMultiple';
import StateLift from './StateLift';
import {useState} from 'react';

function App() {
  const [persons, setPersons] = useState([]);
  return (
    <div>
      <h2>Simple Form</h2>
      <FormDemo />
      <h2>Handling multiple inputs</h2>
      <FormDemoMultiple />
      <h2>Lifting State Up</h2>
      <StateLift persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
