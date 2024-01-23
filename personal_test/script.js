document.addEventListener('DOMContentLoaded', function(){

    //reboot form post
    document.getElementById('rebootForm').addEventListener('submit', function(event){
        event.preventDefault();
        var deviceNumsReboot = [document.getElementById('deviceNumsReboot').value];
        var rightNowReboot = document.getElementById('rightNowReboot').checked;
        var data = {
            deviceNums: deviceNumsReboot,
            rightNow: rightNowReboot
        };
        sendPostRequest('/reboot', data, 'rebootResult')
    });

    //update form post
    document.getElementById('updateForm').addEventListener('submit', function(event){
        event.preventDefault();
        var deviceNumsUpdate = [document.getElementById('deviceNumsUpdate').value]; 
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

        sendPostRequest('/update', data, 'updateResult')
    });

    //changeServer form post
    document.getElementById('changeServerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var deviceNumsChangeServer = [document.getElementById('deviceNumsChangeServer').value]; 
        var hostChangeServer = document.getElementById('hostChangeServer').value;
        var portChangeServer = parseInt(document.getElementById('portChangeServer').value, 10);
        var data = {
            deviceNums: deviceNumsChangeServer,
            host: hostChangeServer,
            port: portChangeServer
        };
        sendPostRequest('/changeServer', data, 'changeServerResult');
    });

    //global post
    function sendPostRequest(endpoint, data, resultElementId){
        var baseUrl = 'http://192.168.8.120:17000'
        fetch(baseUrl + endpoint,{
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