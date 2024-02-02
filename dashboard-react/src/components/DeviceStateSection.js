// src/components/DeviceStateSection.js
import React, { useState } from 'react';

function DeviceStateSection() {
    const [deviceNum, setDeviceNum] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://192.168.8.120:17000/deviceState?deviceNum=${encodeURIComponent(deviceNum)}`)
        // .then(response => response.json())
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Device State:', data);
            // 显示结果
            setResult(JSON.stringify(data, null, 2));
        })
        .catch((error) => {
            console.error('Error:', error);
            setResult(`Error: ${error.message}`);
        });
    };

    return (
        <div id="deviceState-section" className="tab-content">
            <h2>查看设备状态</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="deviceNumStateQ"
                    placeholder="请输入设备号"
                    value={deviceNum}
                    onChange={(e) => setDeviceNum(e.target.value)}
                    required
                /><br />
                <button type="submit">查询</button>
            </form>
            <div className="result-pre">{result}</div>
        </div>
    );
}

export default DeviceStateSection;
