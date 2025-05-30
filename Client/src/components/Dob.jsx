import React, { useState } from 'react';
import axios from 'axios';

const Dob = () => {
  const [dob, setDob] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/submit-dob', { dob });
      setResponse(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.error('Error submitting DOB:', error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-100">
      <div className="w-[50%] h-[50%] flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6">
        <label htmlFor="dob" className="mb-2 text-lg font-semibold">Date of Birth</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {response && <p className="mt-4 text-green-600">{response}</p>}
      </div>
    </div>
  );
};

export default Dob;
