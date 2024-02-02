// src/components/RebootSection.js
import React, { useState } from 'react';

function RebootSection() {
  const [deviceNums, setDeviceNums] = useState('');
  const [rightNow, setRightNow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/reboot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceNums: deviceNums.split(/[,，/]+/).map(num => num.trim()), // Assuming deviceNums is a comma-separated string
        rightNow
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // 可以在这里更新UI以显示操作结果
    })
    .catch((error) => {
      console.error('Error:', error);
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
        <input
          type="checkbox"
          id="rightNowReboot"
          checked={rightNow}
          onChange={(e) => setRightNow(e.target.checked)}
        /> 立即重启<br />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default RebootSection;
