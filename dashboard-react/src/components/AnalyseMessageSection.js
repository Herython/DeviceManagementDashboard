// src/components/AnalyseMessageSection.js
import React, { useState } from 'react';

function AnalyseMessageSection() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/analyseMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // 可以在这里更新UI，显示解析结果
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div id="analyseMessage-section" className="tab-content">
            <h2>解析报文</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="analyseMessageInput"
                    placeholder="请输入需要解析的报文"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                /><br />
                <button type="submit">提交</button>
            </form>
        </div>
    );
}

export default AnalyseMessageSection;
