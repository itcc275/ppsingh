const ShraddhCard = ({ recipientName, cardRef }) => {


    const program = [
        { date: '01/12/2025', day: 'सोमवार', event: 'दशकर्म' },
        { date: '02/12/2025', day: 'मंगलवार', event: 'एकादशा' },
        { date: '03/12/2025', day: 'बुधवार', event: 'शोकसभा सह ब्रह्मभोज' },
        { date: '04/12/2025', day: 'गुरुवार', event: 'बरखी' },
    ];



    return (
        <div style={{ padding: "20px" }}>
            {/* Download Button */}
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
                <h2 style={{ textAlign: "center", margin: 0 }}>॥ शोक संदेश ॥</h2>

                <p style={{ textAlign: "center", margin: 0 }}>
                    नैन् छिनदन्ति शस्त्राणि, नैन् दहति पावकः। न चैनं क्लैदन्त्यापो न शोषयति मारुतः॥
                </p>

                <div style={{
                    textAlign: "left",
                    marginBottom: "20px",
                    fontFamily: "'Homemade Apple', 'Dancing Script', 'Pacifico', cursive",
                    fontSize: "20px",
                    lineHeight: "1.8",
                }}>
                    <p style={{ margin: "0 0 10px 0" }}>सेवा में,</p>
                    <div style={{ display: "flex" }}>
                        <p style={{
                            margin: 0,
                            paddingBottom: "6px",
                            display: "inline-block",
                            width: "20%",
                        }}>
                            श्रीमान्/श्रीमती
                        </p>

                        <p style={{
                            margin: 0,
                            color: "#555",
                            borderBottom: "2px dotted #555",
                            display: "inline-block",
                            width: "100%",
                            fontWeight: "bold",
                        }}>
                            <strong>{recipientName}</strong>
                        </p>
                    </div>
                </div>


                <p style={{ textAlign: "left", marginBottom: "20px" }}>
                    <strong>मान्यवर,</strong><br />
                    अत्यन्त दुःख के साथ सूचित कर रहा हूँ कि मेरे पूज्य <strong>पिता जी श्री परमेश्वर प्रसाद सिंह</strong> का स्वर्गवास
                    दिनांक <strong>22/11/2025 (शनिवार)</strong> को हो गया है।<br />
                    अतः आप सभी से प्रार्थना है कि सपरिवार निम्नलिखित श्राद्ध कार्यक्रम में सम्मिलित होकर उनकी आत्मा को
                    शांति प्रदान कर हमें कृतार्थ करें।
                </p>

                {/* Program Heading */}
                <h3 style={{ textAlign: "center", marginTop: "10px" }}>श्राद्ध कार्यक्रम</h3>

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
                    marginTop: "5px"
                }}>

                    {/* Shokakul */}
                    <div style={{ width: "48%", textAlign: "left" }}>
                        <strong>शोकाकुल :</strong><br />
                        <strong>महेश प्रसाद</strong> (भ्राता)<br />
                        <strong>सुरेश प्रसाद</strong> (भतीजा)<br />
                        पुत्र एवं समस्त दंगी परिवार
                    </div>

                    {/* Vinit */}
                    <div style={{ width: "48%", textAlign: "right" }}>
                        <strong>विनीत</strong><br />
                        <strong>श्याम किशोर प्रसाद</strong><br />
                        <strong>अरूण कुमार</strong><br />
                        <strong>नागेन्द्र प्रसाद</strong><br />
                        दाँगी भवन, इमामगंज
                        गया, बिहार<br />
                        मो.: 9931071552
                        9771898989<br />
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
