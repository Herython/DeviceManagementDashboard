// src/components/RebootSection.js
import React, { useState } from 'react';

function RebootSection() {
  const [deviceNums, setDeviceNums] = useState('');
  const [rightNow, setRightNow] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://192.168.8.120:17000/reboot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceNums: deviceNums.split(/[,，/]+/).map(num => num.trim()), //用于分割输入用中英文逗号斜杠均可完成分割
        rightNow
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
      setResult(JSON.stringify(data)); // 使用JSON.stringify来格式化结果对象，便于显示
    })
    .catch((error) => {
      console.error('Error:', error);
      setResult(`Error: ${error.message}`); // 显示错误信息
    });
  };

  return (
    <div id="reboot-section" className="tab-content">
      <h2>重启</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="deviceNumsReboot"
          placeholder="设备号"
          value={deviceNums}
          onChange={(e) => setDeviceNums(e.target.value)}
          required
        />
        <label htmlFor="rightNowReboot" style={{ display: 'inline-block', margin: '10px 0' }}>
          <input
            type="checkbox"
            id="rightNowReboot"
            checked={rightNow}
            onChange={(e) => setRightNow(e.target.checked)}
          /> 立即重启
        </label><br />
        <button type="submit">提交</button>
      </form>
      <div id="rebootResult"><pre className='result-pre'>{result}</pre></div>
    </div>
  );
}

export default RebootSection;
