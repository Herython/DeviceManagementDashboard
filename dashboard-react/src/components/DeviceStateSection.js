// src/components/DeviceStateSection.js
import React, { useState } from 'react';

function DeviceStateSection() {
    const [deviceNum, setDeviceNum] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/deviceState?deviceNum=${encodeURIComponent(deviceNum)}`)
        .then(response => response.json())
        .then(data => {
            console.log('Device State:', data);
            // 可以在这里更新UI，显示设备状态
        })
        .catch((error) => {
            console.error('Error:', error);
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
        </div>
    );
}

export default DeviceStateSection;
