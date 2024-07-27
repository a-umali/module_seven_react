import React, { useEffect, useRef , useState} from 'react';

export const NameComponent = () => {
  const [name, setName] = useState('John Doe');

  // useEffect to update name every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setName(generateRandomName()); // Update name with a new value
    }, 5000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once on mount

  // Function to generate a random name
  const generateRandomName = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  return (
    <div>
      <div>{name}</div>
    </div>
  );
};
