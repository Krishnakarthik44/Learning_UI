import React, { useState } from 'react';  //using usestate add the text in the input fields.

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addContact = () => {
    setContacts([...contacts, { name, email }]); 
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Application</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();  //e.preventDefault used to prevent auto refresh the page on submission
            addContact();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // it will replace the setname value .ie, here the value is name
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Add Contact
          </button>
        </form>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
        <ul className="bg-white p-6 rounded-lg shadow-md space-y-4">
          {contacts.map((contact, index) => (  // Here the its taking the index for the contact which are in a array
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="text-gray-900 font-medium">{contact.name}</p>
                <p className="text-gray-600">{contact.email}</p>
              </div>
              <button
                onClick={() =>
                  setContacts(contacts.filter((contact, i) => i !== index)) // filter funtions removes the current index and places except the value with the current index.
                }
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
