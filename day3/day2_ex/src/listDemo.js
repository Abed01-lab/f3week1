import React, { useState } from "react";

function MemberTable({members}) {
    return (
        <table>
            <thead></thead>
            <tbody>
                {members.map((member, index) => {
                    console.log(index)
                    return <tr key={index} ><td>{member.name}</td><td>{member.age}</td></tr>
                })}
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    console.log(props)
    return (
        <div>
            <h2>Ex 3</h2>
            <MemberTable members={props.members} />
        </div>
    );
}

export default function App() {
    const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}
