import { sections } from "../utils/constants";

export default function JeevanParichay() {
    return (
        <div
            className="repeat bg-top"
            style={{
                backgroundImage: "url('background_ppsingh2.png')",
                backgroundSize: "contain",
            }}
        >

            {/* Outer Modern Border + Soft Glow */}
            <div className="bg-white/80">

                {/* ==== Shradhanjali Heading ==== */}
                <br />
                <br />
                {/* === Profile Picture With Garland === */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">

                    {/* Profile Photo */}
                    <img
                        src="father.png"
                        alt="स्वर्गीय श्री परमेश्वर प्रसाद सिंह"
                        className="w-full h-full rounded-full object-cover border-4 border-[#d4a74b] shadow-lg"
                    />

                    {/* Garland PNG */}
                    {/* <img
                        src="https://i.imgur.com/h6EUxHj.png"
                        alt="Flower Garland"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    /> */}
                </div>
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-gray-800 tracking-wide">
                        🙏 श्रद्धांजलि 🙏
                    </h2>
                </div>

                {/* === Name & Dates === */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        स्वर्गीय श्री परमेश्वर प्रसाद सिंह
                    </h1>

                    <p className="text-lg font-semibold mt-1 text-gray-700">
                        (जन्म - 02 जनवरी 1944  •  पुण्य तिथि - 22 नवम्बर 2025)
                    </p>
                </div>

                {/* ==== Share Buttons ==== */}
                <div className="mt-4 flex justify-center gap-4 mb-8">

                    {/* Download PDF Button */}
                    <a
                        href="/ppsingh.pdf"
                        download="Shradhanjali_PPSingh.pdf"
                        className="px-5 py-2 bg-green-600 text-white rounded-lg shadow text-sm font-medium hover:bg-green-700"
                    >
                        PDF डाउनलोड करें
                    </a>

                    {/* View PDF Online */}
                    <a
                        href="/ppsingh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow text-sm font-medium hover:bg-blue-700"
                    >
                        PDF ऑनलाइन देखें
                    </a>

                </div>



                {/* ==== Sections with Modern Separators ==== */}
                {
                    sections.map((section, index) => (
                        <div key={index} className="mb-8"
                            style={{
                                padding: "0 3.5rem"
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
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                        PDF डाउनलोड करने के लिए QR कोड स्कैन करें
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
