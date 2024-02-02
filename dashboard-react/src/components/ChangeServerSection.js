// src/components/ChangeServerSection.js
import React, { useState } from 'react';

function ChangeServerSection() {
  const [deviceNums, setDeviceNums] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://192.168.8.120:17000/changeServer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceNums: deviceNums.split(/[,，/]+/).map(num => num.trim()), 
        host,
        port: parseInt(port, 10)
      }),
    })
    // .then(response => response.json())
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
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
    <div id="changeServer-section" className="tab-content">
      <h2>修改服务器地址</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="deviceNumsChangeServer"
          placeholder="设备号"
          value={deviceNums}
          onChange={(e) => setDeviceNums(e.target.value)}
          required
        />
        <input
          type="text"
          id="hostChangeServer"
          placeholder="新的服务器地址"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          required
        />
        <input
          type="number"
          id="portChangeServer"
          placeholder="端口"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          required
        />
        <button type="submit">提交</button>
      </form>
      <div className="result-pre">{result}</div>
    </div>
  );
}

export default ChangeServerSection;
