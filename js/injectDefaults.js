var Scrpt = document.getElementsByTagName('script');
var dtctd;
for (var i = 0; i < Scrpt.length; i++) {
    if (Scrpt[i].src.includes("/js/succinjector.js")) {
        dtctd = true;
    }
}
if (dtctd) {
    InjectSucc('link', 'shortcut icon', '/favicon.png');
    InjectSucc('link', 'apple-touch-icon', '/favicon.png');
    InjectSucc('link', 'apple-touch-startup-image', '/startup.png');
}
else {
    console.log('[*] ERROR: SUCC INJECTOR DOESNT DETECTED!');
}