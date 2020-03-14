        function start() {
            document.getElementById('header').style.borderWidth = "5px";
            document.getElementById('header').style.background = "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)";
            document.getElementById('content').removeAttribute('hidden');
            document.getElementById('button1').setAttribute('onclick', 'checkFields()');
            document.getElementById('button1').setAttribute('value', 'Log In');
        }

        function checkFields() {
            let userInput = document.getElementById('usernameinput').value;
            let passInput = document.getElementById('passwordinput').value;
            if (userInput.length == 0) {
                document.getElementById('usernameReq').innerHTML = "Username required.";
            } else if (passInput.length == 0) {
                document.getElementById('usernameReq').innerHTML = " ";
                document.getElementById('passwordReq').innerHTML = "Password required.";
            } else {
                document.getElementById('usernameReq').innerHTML = " ";
                document.getElementById('passwordReq').innerHTML = " ";
                verify();
            }
        }

        function verify() {
            let userInput = document.getElementById('usernameinput').value;
            let passInput = document.getElementById('passwordinput').value;
            if (userInput !== "limSP") {
                document.getElementById('usernameReq').innerHTML = "Wrong username.";
            } else if (passInput !== "needamint") {
                document.getElementById('passwordReq').innerHTML = "Wrong password.";
                document.getElementById('usernameReq').innerHTML = " ";
            } else {
                document.getElementById('usernameReq').innerHTML = " ";
                document.getElementById('passwordReq').innerHTML = " ";
                verify2();
            }
        }

        function verify2() {
            let secNum = prompt('Enter your Security Number:');
            if (secNum.length == 0) {
                alert('Please provide a Security Number.');
                verify2();
            } else if (secNum == "69420") {
                alert('Successful Log In!');
                window.location.replace('index.html');
            } else {
                alert('Your Security Number is wrong. Please try again.');
            }
        }