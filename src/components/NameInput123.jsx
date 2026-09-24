import { useRef, useState } from "react";
import ShraddhCard123 from "./ShraddhCard123";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const NameInput123 = () => {
    const [name, setName] = useState("");
    const cardRef = useRef();

    // Data extracted from the provided PDF document
    const cardData = {
        title: "|| शोक संदेश ||",
        shloka: [
            "नैनं छिन्दन्ति शस्त्राणि, नैनं दहति पावकः !",
            "न चैनं कलेदयन्त्यातो, न शोषायति मारूतः !!"
        ],
        message: "अत्यन्त दुःखख के साथ सुचित कर रहा हूँ कि हमारे पुज्य पिताजी लक्ष्मीनाथ ठाकुर का स्वर्गवास दिनांक 17/09/2026 दिन गुरुवार को हो गया है। अतः आप से प्रार्थना है कि दिवंगत आत्मा के शांति के लिए आयोजित निम्नलिखित कार्यक्रम में पधार कर हमें अनुग्रहित करें।",
        programs: [
            { date: "27/09/2026", day: "(रविवार)", event: "दशकर्म" },
            { date: "28/09/2026", day: "(सोमवार)", event: "एकादशाः" },
            { date: "29/09/2026", day: "(मंगलवार)", event: "ब्रह्मभोज" },
            { date: "30/09/2026", day: "(बुधवार)", event: "बरखी" }
        ],
        family: [
            "समस्त ठाकुर परिवार",
            "रामनरेश शर्मा",
            "दिनेश चन्द्र शर्मा"
        ],
        location: "समस्त कार्यक्रम पैत्रिक निवास गेवालगंज से हो रहा है।",
        address: "ग्राम-गेवालगंज, पो०+था०-इमामगंज, गयाजी (बिहार)",
        contact: "7739244255",
        press: "Raj Studio & Computer Press Imamganj 9934106099"
    };

    const sharePDF = async () => {
        const card = cardRef.current;

        const canvas = await html2canvas(card, { scale: 1.5 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, width, height);

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
                padding: "20px",
                maxWidth: "480px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <label
                style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "10px",
                    display: "block",
                    color: "#333",
                }}
            >
                प्राप्तकर्ता का नाम दर्ज करें
            </label>

            {/* MOBILE-FIRST INPUT */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="उदा: श्रीमान् राम प्रसाद"
                style={{
                    width: "100%",
                    padding: "14px 16px",
                    fontSize: "17px",
                    borderRadius: "14px",
                    border: "1.5px solid #ccc",
                    outline: "none",
                    marginBottom: "18px",
                    transition: "0.2s",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
                onFocus={(e) => (e.target.style.border = "1.5px solid #4A4A4A")}
                onBlur={(e) => (e.target.style.border = "1.5px solid #ccc")}
            />

            {/* MOBILE-FIRST BUTTON */}
            <button
                onClick={sharePDF}
                style={{
                    width: "100%",
                    padding: "14px 0",
                    backgroundColor: "#25D366",
                    color: "white",
                    border: "none",
                    borderRadius: "14px",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
                    transition: "0.2s",
                    marginBottom: "25px",
                }}
                onMouseDown={(e) => (e.target.style.transform = "scale(0.97)")}
                onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
                📤 व्हाट्सऐप पर साझा करें
            </button>

            {/* Passed the extracted data to ShraddhCard as props */}
            <ShraddhCard123 recipientName={name} cardData={cardData} cardRef={cardRef} />
        </div>
    );
};

export default NameInput123;