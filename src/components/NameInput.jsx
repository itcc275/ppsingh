import { useRef, useState } from "react";
import ShraddhCard from "./ShraddhCard";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const NameInput = () => {
    const [name, setName] = useState("");
    const cardRef = useRef();

    const sharePDF = async () => {
        const card = cardRef.current;

        const canvas = await html2canvas(card, { scale: 3 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 10, width + 50, height + 50);

        const pdfBlob = pdf.output("blob");

        const file = new File([pdfBlob], "Shraddh-Card.pdf", {
            type: "application/pdf",
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({
                    files: [file],
                    title: "Shraddh Card",
                    text: "श्रद्धांजलि सूचना साझा कर रहा हूँ।",
                });
            } catch (err) {
                console.log("Share canceled", err);
            }
        } else {
            const message = "श्रद्धांजलि सूचना साझा कर रहा हूँ। (कृपया PDF अटैच करें)";
            const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        }
    };

    return (
        <div
            style={{
                padding: "30px",
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <label
                style={{
                    // fontSize: "20px",
                    // fontWeight: "600",
                    // marginBottom: "10px",
                    // display: "block",
                }}
            >
                Enter Recipient Name
            </label>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. श्रीमान् राम प्रसाद"
                style={{
                    width: "80%",
                    padding: "12px 15px",
                    fontSize: "18px",
                    borderRadius: "12px",
                    border: "1.5px solid #999",
                    outline: "none",
                    marginBottom: "20px",
                    transition: "0.2s",
                    boxShadow: "0 0 5px rgba(0,0,0,0.12)",
                }}
                onFocus={(e) => (e.target.style.border = "1.5px solid #4A4A4A")}
                onBlur={(e) => (e.target.style.border = "1.5px solid #999")}
            />

            <br />

            <button
                onClick={sharePDF}
                style={{
                    marginTop: "10px",
                    marginBottom: "25px",
                    padding: "12px 25px",
                    backgroundColor: "#25D366",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    transition: "0.2s",
                }}
                onMouseDown={(e) => (e.target.style.transform = "scale(0.97)")}
                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
                📤 Share on WhatsApp
            </button>

            {/* Pass name as prop to ShraddhCard */}
            <ShraddhCard recipientName={name} cardRef={cardRef} />
        </div>
    );
};

export default NameInput;
