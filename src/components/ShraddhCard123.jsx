const ShraddhCard123 = ({ recipientName, cardRef, cardData }) => {
    // Use cardData prop if passed, otherwise default to extracted document data
    const program = cardData?.programs || [
        { date: "27/09/2026", day: "रविवार", event: "दशकर्म" },
        { date: "28/09/2026", day: "सोमवार", event: "एकादशाः" },
        { date: "29/09/2026", day: "मंगलवार", event: "ब्रह्मभोज" },
        { date: "30/09/2026", day: "बुधवार", event: "बरखी" },
    ];

    return (
        <div style={{ padding: "20px" }}>
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
                    fontSize: "16px"
                }}
            >
                {/* Profile Photo */}
                <div style={{ display: "flex", justifyContent: "center" }}>

                    <img
                        src="/lakshikant.png"  // Replace with your image path
                        alt="Profile"
                        style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            objectFit: "contain",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                        }}
                    />
                </div>

                <h2 style={{ textAlign: "center", margin: "10px 0 5px 0" }}>॥ शोक संदेश ॥</h2>

                <p style={{ textAlign: "center", margin: "0 0 15px 0", fontSize: "16px", fontStyle: "italic" }}>
                    नैनं छिन्दन्ति शस्त्राणि, नैनं दहति पावकः !<br />
                    न चैनं कलेदयन्त्यातो, न शोषायति मारूतः !!
                </p>

                <div style={{
                    textAlign: "left",
                    marginBottom: "20px",
                    fontSize: "18px",
                    lineHeight: "1.8",
                }}>
                    <p style={{ margin: "0 0 5px 0" }}>सेवा में,</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{
                            margin: 0,
                            paddingBottom: "6px",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                            marginRight: "8px"
                        }}>
                            श्रीमान्/श्रीमती
                        </p>

                        <p style={{
                            margin: 0,
                            color: "#333",
                            borderBottom: "2px dotted #555",
                            display: "inline-block",
                            width: "100%",
                            fontWeight: "bold",
                        }}>
                            {recipientName || "........................................................"}
                        </p>
                    </div>
                </div>

                <p style={{ textAlign: "left", marginBottom: "15px" }}>
                    <strong>मान्यवर,</strong><br />
                    अत्यन्त दुःख के साथ सूचित कर रहा हूँ कि हमारे पूज्य पिताजी <strong>श्री लक्ष्मीनाथ ठाकुर</strong> का स्वर्गवास दिनांक <strong>17/09/2026 (दिन गुरुवार)</strong> को हो गया है।<br />
                    अतः आप से प्रार्थना है कि दिवंगत आत्मा की शांति के लिए आयोजित निम्नलिखित कार्यक्रम में पधार कर हमें अनुग्रहित करें।
                </p>

                {/* Program Heading */}
                <h3 style={{ textAlign: "center", margin: "15px 0 10px 0" }}>श्राद्ध कार्यक्रम</h3>

                {/* Program Table */}
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 0, fontSize: "14px" }}>
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
                    नोटः– समस्त कार्यक्रम हमारे पैत्रिक निवास <strong>गेवालगंज</strong> से हो रहा है।
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px"
                }}>
                    {/* Shokakul */}
                    <div style={{ width: "48%", textAlign: "left" }}>
                        <strong>शोकाकुल :</strong><br />
                        समस्त ठाकुर परिवार
                    </div>

                    {/* Vinit */}
                    <div style={{ width: "48%", textAlign: "right" }}>
                        <strong>विनीत :</strong><br />
                        <strong>रामनरेश शर्मा</strong><br />
                        <strong>दिनेश चन्द्र शर्मा</strong><br />
                        ग्राम-गेवालगंज, पो०+था०-इमामगंज<br />
                        गयाजी (बिहार)<br />
                        मो.: 7739244255
                    </div>
                </div>

                {/* Press Info */}
                {/* <div style={{
                    marginTop: "25px",
                    paddingTop: "10px",
                    borderTop: "1px dashed #aaa",
                    fontSize: "13px",
                    color: "#666",
                    textAlign: "center"
                }}>
                    Raj Studio & Computer Press Imamganj (9934106099)
                </div> */}
            </div>
        </div>
    );
};

// Table Styles
const headerCell = {
    border: "1px solid #000",
    padding: "6px",
    backgroundColor: "#eaeaea",
    fontWeight: "bold",
    textAlign: "center"
};

const cell = {
    border: "1px solid #000",
    padding: "6px",
    textAlign: "center"
};

export default ShraddhCard123;