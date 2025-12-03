import { sections } from "../utils/constants";

export default function JeevanParichay() {
    return (
        <div
            className="bg-top"
            style={{
                backgroundImage: "url('background.png')",
                backgroundSize: "contain",
                marginTop: "20px",
            }}
        >

            {/* Outer Modern Border + Soft Glow */}
            <div className="bg-white/35">

                {/* ==== Shradhanjali Heading ==== */}
                <br />
                <br />
                {/* === Profile Picture With Garland === */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">

                    {/* Profile Photo */}

                </div>
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-gray-800 tracking-wide">
                        <br />
                    </h2>
                </div>

                {/* === Name & Dates === */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        <br />
                    </h1>

                    <p className="text-lg font-semibold mt-1 text-gray-700">

                    </p>
                </div>

                {/* ==== Share Buttons ==== */}
                {/* <div className="mt-4 flex justify-center gap-4 mb-8">
                    <a
                        href={`https://wa.me/?text=${encodeURIComponent(`
                            स्वर्गीय श्री परमेश्वर प्रसाद सिंह 
                            (जन्म: 02 जनवरी 1944 – पुण्य तिथि: 22 नवम्बर 2025)

                            पूरा जीवन परिचय यहाँ पढ़ें:
                            https://ppsingh.vercel.app/
                        `)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-green-600 text-white rounded-lg shadow text-sm font-medium hover:bg-green-700"
                    >
                        WhatsApp पर शेयर करें
                    </a>

                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://ppsingh.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow text-sm font-medium hover:bg-blue-700"
                    >
                        Facebook पर शेयर करें
                    </a>
                </div> */}

                {/* ==== Sections with Modern Separators ==== */}
                {
                    sections.map((section, index) => (
                        <div key={index} className="mb-4"
                            style={{
                                padding: "0 11rem"
                            }}
                        >
                            <h2 className="text-xl font-bold mb-2 text-gray-900">
                                {section.header}
                            </h2>

                            <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                                {section.content}
                            </p>

                            {/* Modern thin-line separator */}
                            {index !== sections.length - 1 && (
                                <div className="border-b border-gray-300 mt-6"></div>
                            )}
                        </div>
                    ))
                }

                {/* ==== QR Code Share Section ==== */}
                <div className="text-center mt-10 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontSize: "25px", marginBottom: "50px", marginTop: "50px" }}>
                        PDF डाउनलोड करने के लिए QR कोड स्कैन करें
                    </h2>

                    <div className="flex justify-center">
                        <img
                            style={{ height: "25rem", width: "25rem" }}
                            src="ppsingh_qrcode.png"
                            alt="QR Code for Sharing"
                            className="w-80 h-80 sm:w-48 sm:h-48 shadow-lg rounded-lg border border-gray-300"
                        />
                    </div>

                    <p className="text-gray-700 text-sm mt-3" style={{ fontSize: "25px", marginTop: "50px", marginBottom: "50px", fontWeight: "bold" }}>
                        (मोबाइल कैमरा से स्कैन करें और सीधे श्रद्धांजलि पेज खोलें)
                    </p>
                </div>
                {/* ==== QR Code Share Section ==== */}
                <div className="text-center mt-10 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </h2>

                    <div className="flex justify-center">
                        <img
                            src="ppsingh_qrcode.png"
                            alt="QR Code for Sharing"
                            className="w-40 h-40 sm:w-48 sm:h-48 shadow-lg rounded-lg border border-gray-300"
                        />
                    </div>

                    <p className="text-gray-700 text-sm mt-3">
                        (मोबाइल कैमरा से स्कैन करें और सीधे श्रद्धांजलि पेज खोलें)
                    </p>
                </div>

            </div>
        </div>
    );
}
