var myPrettyCode = function() {
    var containers = document.getElementsByClassName('username_container');
    var username = document.getElementsByClassName('log_in6')[0].innerText;
    for(var i = 0; i < containers.length; i++)
    {
        if(containers[i].innerHTML.includes(username))
        {
            document.getElementsByClassName('usertitle')[i].innerHTML = "<img src='http://i.imgur.com/j0TLu1W.png' alt='MobileSubstrate Hacker' />";
        }
    }
};
