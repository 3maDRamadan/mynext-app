export const metadata = {
  title: "article page",
};

function layOut({ children }) {
  return (
    <div>
      <h1> articles</h1>

      <div
        style={{
          marginTop: "50px",
          backgroundColor: "blue",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default layOut;
