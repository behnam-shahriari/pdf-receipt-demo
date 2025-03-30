import { jsPDF } from "jspdf";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: [80, 100],
    });

    doc.setFont("courier", "normal");
    doc.setFontSize(12);
    doc.text("MY STORE", 10, 10);
    doc.text("Date: 2025-03-30", 10, 20);
    doc.text("Item: Apple", 10, 30);
    doc.text("Qty: 3", 10, 40);
    doc.text("Price: $9.00", 10, 50);
    doc.text("---------------------------", 10, 60);
    doc.text("Thank you for your purchase!", 10, 70);
    doc.text("Demo Receipt", 10, 90);

    doc.save("receipt.pdf");
  };

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#f9f9f9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Courier Prime', monospace",
    }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#333", marginBottom: "20px" }}>🧾 Receipt Generator</h2>
        <button
          onClick={generatePDF}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          Generate Receipt
        </button>
      </div>
    </div>
  );
}

export default App;
