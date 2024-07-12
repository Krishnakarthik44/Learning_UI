import React, { useState } from 'react';

const carModels = [
  'Model S',
  'Model 3',
  'Model X',
  'Model Y',
  'Roadster',
  'Cybertruck',
];


function App() {
  const [showPopover, setShowPopover] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);
  const [carModel, setCarModel] = useState('');
  const [contacts, setContacts] = useState([]);

  const openPopover = () => {
    setShowPopover(true);
  };

  const closePopover = () => {
    setShowPopover(false);
  };

  const addCustomer = () => {
 
    const newContact = { name, email, photo,carModel };
    setContacts([...contacts, newContact]);
    setName('');
    setEmail('');
    setPhoto(null);
    setCarModel('');
    closePopover();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  return (
    <div className="min-h-screen bg-scroll bg-cover bg-center flex flex-col items-center p-4" style={{ 
      backgroundImage: 'url("https://sb.kaleidousercontent.com/67418/1920x1277/59e722759f/colin-lloyd-titfvbwn_hc-unsplash.jpg")',
    }}>
      <h1 className="text-3xl font-bold mb-5">Customer Details</h1>
      <div className="bg-slate-50 p-2 rounded-lg shadow-md w-full max-w">
        <div className="flex items-center">
          <p className="flex-grow">Click on the Add Customer button to add the Customer details here</p>
          <button onClick={openPopover} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add details
          </button>
        </div>
        {showPopover && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Enter Customer Details</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addCustomer();
                }}
                className="space-y-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Car Model
                  </label>
                  <select
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  >
                    <option value="">Select car model</option>
                    {carModels.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Photo
                  </label>
                  <input
                    type="file"
                    onChange={handlePhotoChange}
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closePopover}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 w-full max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-2">Customer details</h2>
        {contacts.length > 0 ? (
          <ul className="bg-white p-2 rounded-lg shadow-md w-full max-w-lg">
            {contacts.map((contact, index) => (
              <li key={index} className="border-b border-gray-200 py-4 flex items-center justify-between">
                {contact.photo && (
                  <img
                    src={URL.createObjectURL(contact.photo)}
                    alt={`Photo of ${contact.name}`}
                    className="h-16 w-16 object-cover"
                  />
                )}
                <div>
                  <p className="text-lg font-semibold">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                </div>
                <div>
                <p className="text-sm text-gray-600">{contact.carModel}</p>
                </div>
                <button
                  onClick={() =>
                    setContacts(contacts.filter((_, i) => i !== index))
                  }
                  className="text-red-500 hover:text-red-700 ml-4 mr-4 "
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No customer are added yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
