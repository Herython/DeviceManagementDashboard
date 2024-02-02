// src/components/Navigation.js
import React from 'react';

function Navigation() {
    return (
        <nav>
            <ul>
            <li><a href="#RebootSection">重启</a></li>
            <li><a href="#UpdateSection">升级</a></li>
            <li><a href="#UpdateNewSection">升级new</a></li>
            <li><a href="#ChangeServerSection">修改服务器地址</a></li> 
            <li><a href="#AnalyseMessegeSection">解析报文</a></li>
            <li><a href="#DeviceStateSection">查看设备状态</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
