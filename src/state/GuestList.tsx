import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <>
      <h3>Guests</h3>
      <ul>
        {guests.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </>
  );
};

export default GuestList;
