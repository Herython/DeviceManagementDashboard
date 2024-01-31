document.addEventListener('DOMContentLoaded', function(){

    //reboot form post
    document.getElementById('rebootForm').addEventListener('submit', function(event){
        event.preventDefault();
        var deviceNumsString = document.getElementById('deviceNumsReboot').value;
        var deviceNumsReboot = [];
        
        var isValid = true;
        deviceNumsString.split(/[,，/]+/).forEach(function(item){
            item = item.trim();
            if(item.includes('~')){
                var range = item.split('~').map(Number);
                if(range[0] > range[1]){
                    alert('Error:范围逆序错误');
                    isValid = false;
                    return;
                }
                for(var i = range[0]; i<=range[1]; i++){
                    deviceNumsReboot.push(i.toString());
                }
            }else{
                deviceNumsReboot.push(item);
            }
        });
        if(!isValid) return;

        //输入去重
        deviceNumsReboot = Array.from(new Set(deviceNumsReboot));

        var rightNowReboot = document.getElementById('rightNowReboot').checked;
        var data = {
            deviceNums: deviceNumsReboot,
            rightNow: rightNowReboot
        };
        sendPostRequestWithJsonStr('/reboot', data, 'rebootResult')
    });

    //update form post
    document.getElementById('updateForm').addEventListener('submit', function(event){
        event.preventDefault();
        var deviceNumsString = document.getElementById('deviceNumsUpdate').value;
        var deviceNumsUpdate = [];
        var isValid = true;
        deviceNumsString.split(/[,，/]+/).forEach(function(item){
            item = item.trim();
            if(item.includes('~')){
                var range = item.split('~').map(Number);
                if(range[0] > range[1]){
                    alert('Error:范围逆序错误');
                    isValid = false;
                    return;
                }
                for(var i = range[0]; i<=range[1]; i++){
                    deviceNumsUpdate.push(i.toString());
                }
            }else{
                deviceNumsUpdate.push(item);
            }
        });
        if(!isValid) return;
        deviceNumsUpdate = Array.from(new Set(deviceNumsUpdate));
        
        // var deviceNumsUpdate = [document.getElementById('deviceNumsUpdate').value]; 
        // console.log("deviceNumsUpdate:", deviceNumsUpdate);

        var deviceTypeUpdate = document.getElementById('deviceTypeUpdate').value;
        // console.log("deviceTypeUpdate:", deviceTypeUpdate);

        var devicePowerUpdate = parseInt(document.getElementById('devicePowerUpdate').value, 10);
        // console.log("devicePowerUpdate:", devicePowerUpdate);

        var hostUpdate = document.getElementById('hostUpdate').value;
        // console.log("hostUpdate:", hostUpdate);

        var portUpdate = parseInt(document.getElementById('portUpdate').value, 10);
        // console.log("portUpdate:", portUpdate);

        var userNameUpdate = document.getElementById('userNameUpdate').value;
        // console.log("userNameUpdate:", userNameUpdate);

        var passwordUpdate = document.getElementById('passwordUpdate').value;
        // console.log("passwordUpdate:", passwordUpdate);

        var filePatternUpdate = document.getElementById('filePatternUpdate').value;
        // console.log("filePatternUpdate:", filePatternUpdate);

        var timeoutUpdate = parseInt(document.getElementById('timeoutUpdate').value, 10);
        // console.log("timeoutUpdate:", timeoutUpdate)

        var rightNowUpdate = document.getElementById('rightNowUpdate').checked;
        // console.log("rightNowUpdate", rightNowUpdate)

        var data = {
            deviceNums: deviceNumsUpdate,
            deviceType: parseInt(deviceTypeUpdate, 10),
            devicePower: devicePowerUpdate,
            host: hostUpdate,
            port: portUpdate,
            userName: userNameUpdate,
            password: passwordUpdate,
            filePattern: filePatternUpdate,
            timeout: timeoutUpdate,
            rightNow: rightNowUpdate
        };
        // console.log("data:", data);

        sendPostRequestWithJsonStr('/update', data, 'updateResult')
    });

    //updateNew form post
    //form-data
    document.getElementById('updateNewForm').addEventListener('submit', function(event){
        event.preventDefault();
        var deviceNumsString = document.getElementById('deviceNumsUpdateNew').value;
        var deviceNumsUpdateNew = [];
        var isValid = true;
        deviceNumsString.split(/[,，/]+/).forEach(function(item){
            item = item.trim();
            if(item.includes('~')){
                var range = item.split('~').map(Number);
                if(range[0] > range[1]){
                    alert('Error:范围逆序错误');
                    isValid = false;
                    return;
                }
                for(var i = range[0]; i<=range[1]; i++){
                    deviceNumsUpdateNew.push(i.toString());
                }
            }else{
                deviceNumsUpdateNew.push(item);
            }
        });
        if(!isValid) return;
        deviceNumsUpdateNew = Array.from(new Set(deviceNumsUpdateNew));

        var formData = new FormData();
        deviceNumsUpdateNew.forEach(function(num){
            formData.append('deviceNums[]', num);
        });

        formData.append('deviceType',document.getElementById('deviceTypeUpdateNew').value);
        formData.append('devicePower',document.getElementById('devicePowerUpdateNew').value);
        formData.append('host',document.getElementById('hostUpdateNew').value);
        formData.append('port',document.getElementById('portUpdateNew').value);
        formData.append('userName',document.getElementById('userNameUpdateNew').value);
        formData.append('password',document.getElementById('passwordUpdateNew').value);
        formData.append('filePattern',document.getElementById('filePatternUpdateNew').value);
        formData.append('timeout',document.getElementById('timeoutUpdateNew').value);
        formData.append('rightNow',document.getElementById('rightNowUpdateNew').checked);
        formData.append('file',document.getElementById('fileUpdateNew').files[0]);
        
        sendPostRequestWithFormData('/updateNew', formData, 'updateNewResult');
    });

    //changeServer form post
    document.getElementById('changeServerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var deviceNumsString = document.getElementById('deviceNumsChangeServer').value;
        var deviceNumsChangeServer = [];
        var isValid = true;
        deviceNumsString.split(/[,，/]+/).forEach(function(item){
            item = item.trim();
            if(item.includes('~')){
                var range = item.split('~').map(Number);
                if(range[0] > range[1]){
                    alert('Error:范围逆序错误');
                    isValid = false;
                    return;
                }
                for(var i = range[0]; i<=range[1]; i++){
                    deviceNumsChangeServer.push(i.toString());
                }
            }else{
                deviceNumsChangeServer.push(item);
            }
        });
        if(!isValid) return;
        deviceNumsChangeServer = Array.from(new Set(deviceNumsChangeServer));

        // var deviceNumsChangeServer = [document.getElementById('deviceNumsChangeServer').value]; 
        var hostChangeServer = document.getElementById('hostChangeServer').value;
        var portChangeServer = parseInt(document.getElementById('portChangeServer').value, 10);
        var data = {
            deviceNums: deviceNumsChangeServer,
            host: hostChangeServer,
            port: portChangeServer
        };
        // console.log(data);
        sendPostRequestWithJsonStr('/changeServer', data, 'changeServerResult');
    });

    //analyseMessage form post
    document.getElementById('analyseMessageForm').addEventListener('submit', function(event){
        event.preventDefault();

        var message = document.getElementById('analyseMessageInput').value;
        
        sendPostRequestWithJsonData('/analyseMessage', message, 'analyseMessageResult');
    })

    //deviceState form get
    document.getElementById('deviceStateForm').addEventListener('submit',function(event){
        event.preventDefault();

        var queryParams = {
            deviceNum : document.getElementById('deviceNumStateQ').value
        };
        // var deviceNum = document.getElementById('deviceNumInput').value;
        sendGetRequestWithQuery('/deviceState', queryParams, 'deviceStateResult');
    })

    
    //base_url
    const BASE_URL = 'http://192.168.8.120:17000'

    //global get
    //get with query
    function sendGetRequestWithQuery(url, queryParams, resultElementId){
        var urlWithParams = BASE_URL + url;

        if(queryParams && Object.keys(queryParams).length > 0){
            var queryString = Object.keys(queryParams).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`).join('&');
            urlWithParams += `?${queryString}`;
        }

        fetch(urlWithParams)
        .then(function(response){
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

        .then(function(data){
            console.log('Success',data);
            document.getElementById(resultElementId).textContent = JSON.stringify(data, null, 2);
        })

        .catch(function(error){
            console.error('Error:', error);
            document.getElementById(resultElementId).textContent = 'Manipulate Error: ' + error.message;
        });
    }

    //global post
    //post with json stringify
    function sendPostRequestWithJsonStr(url, data, resultElementId){
        fetch(BASE_URL + url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data)
        })

        .then(function(response){
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

        .then(function(data){
            console.log('Success',data);
            document.getElementById(resultElementId).textContent = JSON.stringify(data, null, 2);
        })

        .catch(function(error){
            console.error('Error:', error);
            document.getElementById(resultElementId).textContent = 'Manipulate Error: ' + error.message;
        });
    }

    //post with json data
    function sendPostRequestWithJsonData(url, data, resultElementId){
        fetch(BASE_URL + url,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: data
        })

        .then(function(response){
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

        .then(function(data){
            console.log('Success',data);
            document.getElementById(resultElementId).textContent = JSON.stringify(data, null, 2);
        })

        .catch(function(error){
            console.error('Error:', error);
            document.getElementById(resultElementId).textContent = 'Manipulate Error: ' + error.message;
        });
    }

    //post with formdata
    function sendPostRequestWithFormData(url, formData, resultElementId){
        fetch(BASE_URL + url,{
            method: 'POST',
            body: formData
        })

        .then(function(response){
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

        .then(function(data){
            console.log('Success',data);
            document.getElementById(resultElementId).textContent = JSON.stringify(data, null, 2);
        })

        .catch(function(error){
            console.error('Error:', error);
            document.getElementById(resultElementId).textContent = 'Manipulate Error: ' + error.message;
        });
    }

    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            const activeTabContent = document.querySelector(this.getAttribute('href'));
            activeTabContent.classList.add('active');
        });
    });

    document.querySelector('nav ul li a').click();

});