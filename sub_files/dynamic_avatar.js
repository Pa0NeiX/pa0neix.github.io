var xhtml = `<html>
<head>
  <title>dynamic (.gif) avatar</title>
  <style>
    body {
      background: url(https://i.imgur.com/po8LkUG.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      font-family: monospace;
      color: white;
      text-align: center;
      overflow: hidden;
    }
    .center {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    button {
      width: 200px;
      height: 40px;
      font-size: 16px;
      background: transparent;
      border: 1px solid white;
      border-radius: 8px;
      color: white;
      box-shadow: 0 0px 10px #00000066;
      outline: 0;
      transition: .7s ease;
    }
    button:hover {
      background: white;
      color: black;
      transition: .7s ease;
    }
    .credit {
      position: fixed;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      opacity: .2;
      color: white;
      text-shadow: 0 1px 1px black;
      animation: in .5s ease forwards .5s;
      font-size: 12px;
    }
    @keyframes in {
      from { top: 100% }
      to { top: calc(100% - 12px - 5px) }
    }
  </style>
</head>
<body>
  <div class="center">
    <button onclick="upload();">upload</button>
    <span id="status" style="display: none"></span>
  </div>
  <span class="credit">Created and Developed by pnx. 2017</span>
</body>
</html>`;

var loading, li = 0;
function breakOut(text) {
  clearInterval(loading);
  easeIn('#status');
  document.querySelector('#status').innerText = text;
  setTimeout(function() {
    document.querySelector('#status').animate([
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(.5)' }
    ], {
      duration: 750,
      easing: 'ease',
      iterations: 1
    });

    setTimeout(function() {
      document.querySelector('#status').style.display = 'none';
      document.querySelector('button').style.display = 'block';
      easeIn('button');
    }, 750);
  }, 5000);
}

function xhr(ARG) {
  var xhttp = new XMLHttpRequest();
  if(ARG['type'])
    xhttp.responseType = ARG['type'];
  xhttp.addEventListener('readystatechange', function () {
  if(xhttp.status == 200 && xhttp.readyState == 4 && ARG['func'])
    ARG['func'](xhttp);
  });
  xhttp.open(ARG['method'], ARG['url'], ARG['async'] ? ARG['async'] : ARG['method'] == 'GET' ? true : false);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  if(ARG['payload']) {
    var data = '';
    Object.keys(ARG['payload']).forEach(function (e, i) {
      data += e + '=' + Object.values(ARG['payload'])[i] + (Object.keys(ARG['payload']).length - 1 == i ? '' : '&');
    });
  }
  xhttp.send(ARG['payload'] ? data: null);
}

function upload() {
  var x = document.createElement('input');
  x.type = 'file';
  x.name = 'fileToUpload';
  x.accept = 'image/gif'
  x.click();
  x.addEventListener('change', function() {
    uploadFile(x);
    document.querySelector('button').style.display = 'none';
    document.querySelector('#status').style.display = 'block';
    loading = setInterval(function() {
      switch(li) {
        case 2:
        document.querySelector('#status').innerText = '...';
        li = 0;
        break;
        case 1:
        document.querySelector('#status').innerText = '..';
        li++;
        break;
        case 0:
        document.querySelector('#status').innerText = '.';
        li++;
        break;
      }
    }, 500);
  });
}

function uploadFile(x) {
  if(!x.files[0]) return;
  var data = new FormData();
  data.append('fileToUpload', x.files[0]);
  xhr({
    method: 'get',
    url: 'https://www.fxp.co.il/upload.php',
    async: true,
    func: function(e) {
      var y = new XMLHttpRequest();
      y.open('post', 'https://www.fxp.co.il/uploads/difup.php', true);
      y.addEventListener('readystatechange', function() {
      if(y.readyState != 4 || y.status != 200) return;
        var url = JSON.parse(y.response).image_link;
        console.log(url);
        setProfilePicture(url, USER_ID_FXP, SECURITYTOKEN);
        x.remove();
      });
      y.send(data);
    }
  });
}

document.querySelector('html').innerHTML = xhtml;
function setProfilePicture(url, uId, securitytoken) {
  var xhttp = new XMLHttpRequest();
  xhttp.addEventListener('readystatechange', function() {
    if(xhttp.readyState != 4 || xhttp.status != 200) return;
    console.log('changed');
    breakOut('process done.');
  });
  xhttp.open('post', 'https://www.fxp.co.il/private_chat.php', true);
  xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`do=update_profile_pic&profile_url=${url}&user_id=${uId}& securitytoken=${securitytoken}`);
}

function easeIn(element) {
  document.querySelector(element).animate([
    { opacity: 0, transform: 'scale(.5)' },
    { opacity: 1, transform: 'scale(1)' }
  ], {
    duration: 750,
    easing: 'ease',
    iterations: 1
  });
}

window.addEventListener('load', function() {
  easeIn('button');
});
