import {useState, useEffect} from "react"
import ContactRow from "./ContactRow";
import axios from "axios";
//set table values for single user

/*const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];
*/

const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

//setSelectedContactId is a function to change state in parent.
export default function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);



    //get all contacts from api
    useEffect(() => {
        async function fetchContacts () {
            try {
                const response = await axios.get(url)
                const contactArray = response.data;
                console.log(contactArray);
                setContacts(contactArray);
                
            }catch (error) {
                console.log(error);
            }
        }
        fetchContacts();

    }, [])
    console.log("Contacts: " + contacts);
    return ( 
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
            {
               contacts.map((contact) => {
                return <ContactRow setSelectedContactId={setSelectedContactId}  key={contact.id} contact={contact} ></ContactRow>

               })
             }
          </tbody>
        </table>
    ); 
}