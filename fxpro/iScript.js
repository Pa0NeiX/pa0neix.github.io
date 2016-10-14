/*function detectAndRemove() {
    setTimeout(function() {
        if (document.getElementById('taboola-mobile-below-article-thumbnails') === null) {
            detectAndRemove();
        }
        else {
            document.getElementById('taboola-mobile-below-article-thumbnails').remove();
        }
    }, 420);
}

function removeExtra()
{
    if(document.URL != "https://www.fxp.co.il/") {
        if (typeof injected == 'undefined') 
        {
            detectAndRemove();
            var writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var injected = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
        }
    }
}
*/

function detectAndRemove(rem) {
    setTimeout(function () {
        if (document.getElementById(rem) === null) {
            detectAndRemove(rem);
        }
        else {
            document.getElementById(rem).remove();
        }
    }, 420);
}

function removeExtra() {
    if (document.URL == "https://www.fxp.co.il/") 
        return;

    //if (typeof injected == 'undefined') {
    detectAndRemove('taboola-mobile-below-article-thumbnails');

    for(var i = 0; i < document.getElementsByTagName('iframe').length; i++) { 
        document.getElementsByTagName('iframe')[i].remove(); 
    }

    alert('x');

        //var writeRidden = document.createElement('script'); writeRidden.type = 'text/javascript'; writeRidden.innerHTML = 'var injected = true'; document.getElementsByTagName('head')[0].appendChild(writeRidden);
    //}
}

function adBlock() {

}
