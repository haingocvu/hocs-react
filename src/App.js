import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Text from './components/Text';
import Feed from './components/Feed';

function App() {

  const [contacts, setContacts] = useState([]);

  const ref = useRef();

  function handleClick() {
    ref.current.logName();
  }

  useEffect(() => {
    fetch("https://api.randomuser.me/?results=50")
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.results.map(user => ({
        name: `${user.name.first}`,
        email: user.email,
        thumbnail: user.picture.thumbnail,
        id: user.dob.date,
      })))
      .then(contacts => setContacts(contacts))
  }, [])

  return (
    <div className="App">
      <Text>Hello World</Text>
      <button onClick={handleClick}>Log name</button>
      <Feed ref={ref} contacts={contacts} />
    </div>
  );
}

export default App;
