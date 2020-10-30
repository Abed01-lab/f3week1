import { useState } from "react";

function StateLift ({persons, setPersons}) {
    const [name, setName] = useState();

    const onSubmit = (event) => {
        setPersons([...persons, name])
        console.log(persons);
        event.preventDefault();
    }

    const handleChange = (event) => {
        setName(event.target.value);
        console.log(name);
    }

    const list = persons.map((person, index) => <li key={index}>{person}</li>);

    return(
        <div>
            <label>All Persons</label>
            <ul>{list}</ul>
            <form onSubmit={onSubmit}>
                <label>New Person</label>
                <input name='name' type='text' onChange={handleChange} />                
                <input type='submit' />                
            </form>
        </div>
    )
}

export default StateLift;