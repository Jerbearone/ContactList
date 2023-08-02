import {useState, useEffect} from 'react'

const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

export default function SelectedContact({selectedContactId, setSelectedContactId}) {

    const [contact, setContact] = useState(null);

    function displayContactInfo() {
        if (contact != null) {
            console.log("displayContactInfo: " + contact.id);
            return (<div>
                <table>
                <thead>
                    <tr>
                    <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    </tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                </tbody>
                </table>
                
                </div>)
        }
    }
    
    useEffect(() => {
        const getContact = async () => {
            console.log("working id: " + selectedContactId);
            const response = await fetch(`${url}/${selectedContactId}`)
            const contactResponse = await response.json();
            console.log("contactResponse " + contactResponse);
            console.log("selectedContact Id : " + contactResponse.id);
            setContact(contactResponse);
            //setSelectedContactId(response.id);
            console.log("currentContact: " + contactResponse);

        }
        getContact();

    }, [])
    return (
        <div>{displayContactInfo()}
        <button onClick={() => setSelectedContactId(null)}>Home</button>
        
        </div>
    )
}