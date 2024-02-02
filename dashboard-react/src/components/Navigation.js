// src/components/Navigation.js
import React from 'react';

function Navigation({ setActiveSection }) {
    return (
        <nav>
            <ul>
                <li><a href="#RebootSection" onClick={(e) => { e.preventDefault(); setActiveSection('RebootSection'); }}>重启</a></li>
                <li><a href="#UpdateSection" onClick={(e) => { e.preventDefault();  setActiveSection('UpdateSection');}}>升级</a></li>
                <li><a href="#UpdateNewSection" onClick={(e) => { e.preventDefault();  setActiveSection('UpdateNewSection');}}>升级new</a></li>
                <li><a href="#ChangeServerSection" onClick={(e) => {e.preventDefault(); setActiveSection('ChangeServerSection');}}>修改服务器地址</a></li>
                <li><a href="#AnalyseMessageSection" onClick={(e) => {e.preventDefault(); setActiveSection('AnalyseMessageSection');}}>解析报文</a></li>
                <li><a href="#DeviceStateSection" onClick={(e) => {e.preventDefault(); setActiveSection('DeviceStateSection');}}>查看设备状态</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
