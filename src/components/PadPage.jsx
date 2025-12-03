import React from "react";

export default function PadPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 text-center">

            <h1 className="text-3xl font-bold mb-6">Shradhanjali Page</h1>

            <a
                href="/श्री_परमेश्वर_प्रसाद_सिंह_जीवन_परिचय.pdf"   // PDF inside public/ folder
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 text-lg font-medium"
            >
                PDF देखें / Download करें
            </a>
        </div>
    );
}
