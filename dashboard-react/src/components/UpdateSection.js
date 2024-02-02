// src/components/UpdateSection.js
import React, { useState } from 'react';

function UpdateSection() {
  const [deviceNums, setDeviceNums] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [devicePower, setDevicePower] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [filePattern, setFilePattern] = useState('');
  const [timeout, setTimeout] = useState('');
  const [rightNow, setRightNow] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://192.168.8.120:17000/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceNums: deviceNums.split(/[,，/]+/).map(num => num.trim()),
        deviceType,
        devicePower,
        host,
        port,
        userName,
        password,
        filePattern,
        timeout,
        rightNow
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // 处理成功响应
      // 显示结果
      setResult(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      console.error('Error:', error);
      // 处理错误
      setResult(`Error: ${error.message}`);
    });
  };

  return (
    <div id="update-section" className="tab-content">
      <h2>升级</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="deviceNumsUpdate"
          placeholder="设备号"
          value={deviceNums}
          onChange={(e) => setDeviceNums(e.target.value)}
          required
        /><br />

        <select
          id="deviceTypeUpdate"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          required
        >
          <option value="">请选择设备类型...</option>
          <option value="1">1直流</option>
          <option value="2">2交流</option>
        </select><br />

        <input
          type="number"
          id="devicePowerUpdate"
          placeholder="桩功率"
          value={devicePower}
          onChange={(e) => setDevicePower(e.target.value)}
          min="0"
          step="1"
          required
        /><br />
        <input
          type="text"
          id="hostUpdate"
          placeholder="服务器地址"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          required
        /><br />
        <input
          type="number"
          id="portUpdate"
          placeholder="服务器端口"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          min="0"
          step="1"
          required
        /><br />
        <input
          type="text"
          id="userNameUpdate"
          placeholder="用户名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        /><br />
        <input
          type="password"
          id="passwordUpdate"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input
          type="text"
          id="filePatternUpdate"
          placeholder="文件路径"
          value={filePattern}
          onChange={(e) => setFilePattern(e.target.value)}
          required
        /><br />
        <input
          type="number"
          id="timeoutUpdate"
          placeholder="超时时间"
          value={timeout}
          onChange={(e) => setTimeout(e.target.value)}
          min="0"
          step="1"
          required
        /><br />
        <input
          type="checkbox"
          id="rightNowUpdate"
          checked={rightNow}
          onChange={(e) => setRightNow(e.target.checked)}
        /> 是否立刻升级<br />
        <button type="submit">提交</button>
      </form>
      <div className="result-pre">{result}</div>
    </div>
  );
}

export default UpdateSection;
