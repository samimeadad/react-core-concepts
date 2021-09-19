import logo from './logo.svg';
import './App.css';

function App () {
  const friends = [ 'Sami', 'Farmee', 'Arishamma', 'Aarash', 'Ammapakhi', 'ArishammaPakhi' ];

  const bestFriends = [
    {name: 'Sami', age: 40, location: 'Uttara'},
    {name: 'Farmee', age: 36, location: 'Uttara'},
    {name: 'Arishamma', age: 1, location: 'Banasree'},
    {name: 'Aarash', age: 5, location: 'Banasree'}
  ]
  return (

    <div className="App">
      {
        bestFriends.map( bestFriend => <BestFriends name={bestFriend.name} age={bestFriend.age} location={bestFriend.location}></BestFriends> )
      }
      <ul>
        {
          friends.map( friend => <li>{friend}</li> )
        }
      </ul>
      <Person name="Sami Meadad Choudhury" profession="Full-stack MERN Developer" age="40"></Person>
      <Person name="Tasnuva Kawsar Farmee" profession="Teacher" age="36"></Person>
      <Person name="Arishamma" profession="Ammapakhi Dustupakhi" age="1"></Person>
      <Person name="Aarash" profession="Kannakati kora" age="6"></Person>
    </div >
  );
}

function Person ( props ) {
  const person = {
    margin: '20px',
    backgroundColor: 'burlywood',
    border: '3px solid hotpink',
    borderRadius: '20px'
  }
  return (
    // <div className="person">
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Profession: {props.profession}</h4>
      <h4>Age: {props.age}</h4>
    </div>
  );
}

function BestFriends ( props ) {
  return (
    <div className="friends">
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h4>Location: {props.location}</h4>
    </div>
  )
}

export default App;