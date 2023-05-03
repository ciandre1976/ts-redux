interface childI {
  color: string;
  onClick: () => void;
  children: string;
}

const Child: React.FC<childI> = ({ color, onClick, children }) => {
  return (
    <div style={{ color: `${color}` }}>
      <h3>{color}</h3>
      {children}
      <button onClick={onClick}>kllik</button>
    </div>
  );
};

export default Child;
