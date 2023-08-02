import './App.css'
import ContactList from './components/ContactList';
import { useState } from 'react';
import SelectedContact from './components/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <div>
      {selectedContactId ? (
        <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} ></SelectedContact>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} ></ContactList>
      )}
      



    </div>
    
  )
}

export default App
