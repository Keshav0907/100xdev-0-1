export const Card = ({ name }) => {
  return (
    <div style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>Happy Birthday {name}!</h1>
        <p style={{ color: "#666", fontSize: "16px" }}>
          Happy birthday! May your special day be filled with joy, laughter, and cherished moments.
          Here's to another amazing year ahead!
        </p>
      </div>
      
  );
};
