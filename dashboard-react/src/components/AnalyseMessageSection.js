// src/components/AnalyseMessageSection.js
import React, { useState } from 'react';

function AnalyseMessageSection() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://192.168.8.120:17000/analyseMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: message,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // 显示结果
            setResult(JSON.stringify(data, null, 2));
        })
        .catch((error) => {
            console.error('Error:', error);
            setResult(`Error: ${error.message}`); 
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
            <div id="analyseMessageResult">
                <pre className='result-pre'>{result}</pre> 
            </div>
        </div>
    );
}

export default AnalyseMessageSection;
