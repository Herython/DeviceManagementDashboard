// src/components/UpdateNewSection.js
import React, { useState } from 'react';

function UpdateNewSection() {
  const [deviceNums, setDeviceNums] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [devicePower, setDevicePower] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [filePattern, setFilePattern] = useState('');
  const [timeout, setTimeout] = useState('');
  const [file, setFile] = useState(null);
  const [rightNow, setRightNow] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('deviceNums', deviceNums);
    formData.append('deviceType', deviceType);
    formData.append('devicePower', devicePower);
    formData.append('host', host);
    formData.append('port', port);
    formData.append('userName', userName);
    formData.append('password', password);
    formData.append('filePattern', filePattern);
    formData.append('timeout', timeout);
    formData.append('rightNow', rightNow);
    formData.append('file', file);
    if (file) formData.append('file', file);

    fetch('http://192.168.8.120:17000/updateNew', {
      method: 'POST',
      body: formData, // 使用formData作为请求体
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
    <div id="updateNew-section" className="tab-content">
      <h2>升级new</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="deviceNumsUpdateNew"
          placeholder="设备号"
          value={deviceNums}
          onChange={(e) => setDeviceNums(e.target.value)}
          required
        /><br />

        <select
          id="deviceTypeUpdateNew"
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
          id="devicePowerUpdateNew"
          placeholder="桩功率"
          value={devicePower}
          onChange={(e) => setDevicePower(e.target.value)}
          min="0"
          step="1"
          required
        /><br />
        <input
          type="text"
          id="hostUpdateNew"
          placeholder="服务器地址"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          required
        /><br />
        <input
          type="number"
          id="portUpdateNew"
          placeholder="服务器端口"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          min="0"
          step="1"
          required
        /><br />
        <input
          type="text"
          id="userNameUpdateNew"
          placeholder="用户名"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        /><br />
        <input
          type="password"
          id="passwordUpdateNew"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input
          type="text"
          id="filePatternUpdateNew"
          placeholder="文件路径"
          value={filePattern}
          onChange={(e) => setFilePattern(e.target.value)}
          required
        /><br />
        <input
          type="number"
          id="timeoutUpdateNew"
          placeholder="超时时间"
          value={timeout}
          onChange={(e) => setTimeout(e.target.value)}
          min="0"
          step="1"
          required
        /><br />
        <input
          type="file"
          id="fileUpdateNew"
          onChange={(e) => setFile(e.target.files[0])}
        /><br />
        <input
          type="checkbox"
          id="rightNowUpdateNew"
          checked={rightNow}
          onChange={(e) => setRightNow(e.target.checked)}
        /> 是否立刻升级<br />
        <button type="submit">提交</button>
      </form>
      <div className="result-pre">{result}</div>
    </div>
  );
}

export default UpdateNewSection;
