import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ShraddhCard = () => {
    const cardRef = useRef();

    const program = [
        { date: '01/12/2025', day: 'सोमवार', event: 'दशकर्म' },
        { date: '02/12/2025', day: 'मंगलवार', event: 'एकादशा' },
        { date: '03/12/2025', day: 'बुधवार', event: 'शोकसभा सह ब्रह्मभोज' },
        { date: '04/12/2025', day: 'गुरुवार', event: 'बरखी' },
    ];

    const sharePDF = async () => {
        const card = cardRef.current;

        // Convert HTML → Canvas
        const canvas = await html2canvas(card, { scale: 3 });
        const imgData = canvas.toDataURL("image/png");

        // Create PDF
        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 10, width, height);

        // Convert PDF → Blob
        const pdfBlob = pdf.output("blob");

        // Create file for sharing
        const file = new File([pdfBlob], "Shraddh-Card.pdf", {
            type: "application/pdf",
        });

        // Mobile share support
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
            // Desktop fallback: open WhatsApp chat
            const message = "श्रद्धांजलि सूचना साझा कर रहा हूँ। (कृपया PDF अटैच करें)";
            const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        }
    };


    return (
        <div style={{ padding: "20px" }}>
            {/* Download Button */}
            <button
                onClick={sharePDF}
                style={{
                    marginBottom: "20px",
                    padding: "10px 18px",
                    backgroundColor: "#4A4A4A",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "16px"
                }}
            >
                डाउनलोड PDF
            </button>

            {/* Card Container */}
            <div
                ref={cardRef}
                style={{
                    width: "700px",
                    margin: "0 auto",
                    padding: "25px",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "0 0 15px rgba(0,0,0,0.15)",
                    lineHeight: "1.6",
                    fontFamily: "Noto Sans Devanagari, serif",
                    fontSize: "18px"
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "5px" }}>॥ शोक संदेश ॥</h2>

                <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "16px" }}>
                    नैन् छिनदन्ति शस्त्राणि, नैन् दहति पावकः। <br />
                    न चैनं क्लैदन्त्यापो न शोषयति मारुतः॥
                </p>

                <div style={{ textAlign: "left", marginBottom: "20px" }}>
                    <p>सेवा में,</p>
                    <p>श्रीमान्/श्रीमती .......................................................................</p>
                </div>

                <p style={{ textAlign: "left", marginBottom: "20px" }}>
                    <strong>मान्यवर,</strong><br />
                    अत्यन्त दुःख के साथ सूचित करता हूँ कि मेरे पूज्य <strong>पिता जी परमेश्वर प्रसाद सिंह</strong> का स्वर्गवास
                    दिनांक <strong>22/11/2025 (शनिवार)</strong> को हो गया है।<br />
                    अतः आप सभी से विनम्र निवेदन है कि सपरिवार श्राद्ध कार्यक्रम में उपस्थित होकर दिवंगत आत्मा की
                    शांति हेतु प्रार्थना करें।
                </p>

                {/* Program Heading */}
                <h3 style={{ textAlign: "center", marginTop: "20px" }}>श्राद्ध कार्यक्रम</h3>

                {/* Program Table */}
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                    <thead>
                        <tr>
                            <th style={headerCell}>दिनांक</th>
                            <th style={headerCell}>दिन</th>
                            <th style={headerCell}>कार्यक्रम</th>
                        </tr>
                    </thead>
                    <tbody>
                        {program.map((item, index) => (
                            <tr key={index}>
                                <td style={cell}>{item.date}</td>
                                <td style={cell}>{item.day}</td>
                                <td style={cell}>{item.event}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Note Box */}
                <div style={{
                    border: "1px solid #000",
                    padding: "10px",
                    marginTop: "20px",
                    backgroundColor: "#f7f7f7",
                    fontWeight: "bold",
                    textAlign: "center"
                }}>
                    नोटः– समस्त कार्यक्रम हमारे निवास स्थान <strong>ग्राम छोटाका करासन</strong> में होगा।
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "25px"
                }}>

                    {/* Shokakul */}
                    <div style={{ width: "48%", textAlign: "left" }}>
                        <p><strong>शोकाकुल :</strong></p>
                        <p><strong>महेश प्रसाद</strong> (भ्राता)</p>
                        <p><strong>सुरेश प्रसाद</strong> (भतीजा)</p>
                        <p>पुत्र एवं समस्त नाँगी परिवार</p>
                    </div>

                    {/* Vinit */}
                    <div style={{ width: "48%", textAlign: "right" }}>
                        <p><strong>विनीत</strong></p>
                        <p><strong>श्याम किशोर प्रसाद</strong></p>
                        <p><strong>अरूण कुमार</strong></p>
                        <p><strong>नागेन्द्र प्रसाद</strong></p>
                        <p>दाँगी भवन, इमामगंज</p>
                        <p>गया, बिहार</p>
                        <p>मो.: 9931071552</p>
                        <p>9771898989</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Table Styles
const headerCell = {
    border: "1px solid #000",
    padding: "10px",
    backgroundColor: "#eaeaea",
    fontWeight: "bold",
};

const cell = {
    border: "1px solid #000",
    padding: "10px"
};

export default ShraddhCard;
