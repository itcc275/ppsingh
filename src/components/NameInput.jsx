import { useState } from "react";
import ShraddhCard from "./ShraddhCard";

const NameInput = () => {
    const [name, setName] = useState("");

    return (
        <div style={{ padding: "20px" }}>
            <label style={{ fontSize: "18px" }}>Enter Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter recipient name"
                style={{
                    padding: "8px 12px",
                    fontSize: "16px",
                    marginLeft: "10px",
                    borderRadius: "6px",
                    border: "1px solid #777",
                }}
            />

            {/* Pass name as prop to ShraddhCard */}
            <ShraddhCard recipientName={name} />
        </div>
    );
};

export default NameInput;
