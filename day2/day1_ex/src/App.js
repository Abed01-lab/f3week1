import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males , females} from './file2';
import MultiWelcome from './file3';

const {firstName, email} = person;
const name = [...males, ...females];
const moreNames = [...males, 'Kurt', 'Helle', ...females, 'Tina'];
const personV2 = {...person, friends : moreNames, phone: 12345678};

function App() {
  return (
    <div>
      <h2>Ex 1</h2>
      <p>{upper('please upper case me')}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>
      {console.log(name)}
      {console.log(moreNames)}
      {console.log(personV2)}
      <h2>Ex 3</h2>
      <MultiWelcome/>
    </div>
  );
}
export default App;
