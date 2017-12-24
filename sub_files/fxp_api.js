//  __________   ___    _  __    __
// |  ______  | |   \  | | \ \  / /
// | |______| | | |\ \ | |  \ \/ /
// |  ________| | | \ \| |  / /\ \
// | |          |_|  \___| /_/  \_\
/* | | */
/* | | */ function xhr(ARG) {
/* | | */   var xhttp = new XMLHttpRequest();
/* | | */   if(ARG['type'])
/* | | */     xhttp.responseType = ARG['type'];
/* | | */   xhttp.addEventListener('readystatechange', function () {
/* | | */   if(xhttp.status == 200 && xhttp.readyState == 4 && ARG['func'])
/* | | */     ARG['func'](xhttp);
/* | | */   });
/* | | */   xhttp.open(ARG['method'], ARG['url'], ARG['async'] ? ARG['async'] : ARG['method'] == 'GET' ? true : false);
/* | | */   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
/* | | */   if(ARG['payload']) {
/* | | */     var data = '';
/* | | */     Object.keys(ARG['payload']).forEach(function (e, i) {
/* | | */       data += e + '=' + Object.values(ARG['payload'])[i] + (Object.keys(ARG['payload']).length - 1 == i ? '' : '&');
/* | | */     });
/* | | */   }
/* | | */   xhttp.send(ARG['payload'] ? data: null);
/* | | */ }
/* | | */
/* | | */ var fxp = {
/* | | */   newThread: function(forumId, prefix, title, content) {
/* | | */     if(!prefix) prefix = '';
/* | | */     else prefix = fxpData.prefixIds[forumId][prefix];
/* | | */     xhr({
/* | | */       method: 'post',
/* | | */       url: 'https://www.fxp.co.il/newthread.php?do=newthread&f='+forumId,
/* | | */       async: true,
/* | | */       payload: {
/* | | */         prefixid:prefix,
/* | | */         subject:title,
/* | | */         message_backup:'',
/* | | */         message:content,
/* | | */         wysiwyg:1,
/* | | */         s:null,
/* | | */         securitytoken:SECURITYTOKEN,
/* | | */         f:forumId,
/* | | */         do:'postthread',
/* | | */         posthash:'',
/* | | */         poststarttime:'',
/* | | */         loggedinuser:USER_ID_FXP,
/* | | */         sbutton:'צור אשכול חדש',
/* | | */         signature:1,
/* | | */         parseurl:1
/* | | */       },
/* | | */       func: function(e) {
/* | | */         var threadId = new URL(e.responseURL).searchParams.get('t');
/* | | */         if(callback) callback(threadId);
/* | | */       }
/* | | */     });
/* | | */   },
/* | | */   newPost: function(threadId, content, callback) {
/* | | */     xhr({
/* | | */       method: 'post',
/* | | */       url: 'https://www.fxp.co.il/newreply.php?do=postreply&t='+threadId,
/* | | */       async: true,
/* | | */       type: 'document',
/* | | */       payload: {
/* | | */         securitytoken:SECURITYTOKEN,
/* | | */         message_backup:'',
/* | | */         message:content,
/* | | */         wysiwyg:1,
/* | | */         signature:1,
/* | | */         fromquickreply:1,
/* | | */         s:null,
/* | | */         securitytoken:SECURITYTOKEN,
/* | | */         do:'postreply',
/* | | */         t:threadId,
/* | | */         p:'who cares',
/* | | */         specifiedpost:0,
/* | | */         parseurl:1,
/* | | */         loggedinuser:USER_ID_FXP
/* | | */       },
/* | | */       func: function(e) {
/* | | */         var postId = e.responseXML.querySelector('.postcontainer').id.replace(/\D/g,'');
/* | | */         if(callback) callback(postId);
/* | | */       }
/* | | */     });
/* | | */   },
/* | | */   editPost: function(postId, content, reason) {
/* | | */     xhr({
/* | | */       method: 'post',
/* | | */       url: 'https://www.fxp.co.il/editpost.php?do=updatepost&postid='+postId,
/* | | */       async: false,
/* | | */       payload: {
/* | | */         securitytoken:SECURITYTOKEN,
/* | | */         do:'updatepost',
/* | | */         ajax:1,
/* | | */         postid:postId,
/* | | */         posthash:'',
/* | | */         poststarttime:'',
/* | | */         message:content,
/* | | */         reason:reason
/* | | */       },
/* | | */       func: function() {
/* | | */
/* | | */       }
/* | | */     });
/* | | */   },
/* | | */   sendLike: function(postId, hash) {
/* | | */     xhr({
/* | | */       method: 'post',
/* | | */       url: 'https://www.fxp.co.il/ajax.php',
/* | | */       async: false,
/* | | */       payload: {
/* | | */         do:'add_like',
/* | | */         postid:postId,
/* | | */         fxppro:hash,
/* | | */         securitytoken:SECURITYTOKEN
/* | | */       },
/* | | */       func: function() {
/* | | */         //console.log('like sent -> post id '+postId);
/* | | */       }
/* | | */     });
/* | | */   },
/* | | */   addFriend: function(userId) {
/* | | */     xhr({
/* | | */       method: 'post',
/* | | */       url: 'https://www.fxp.co.il/profile.php?do=doaddlist&list=&userid='+userId,
/* | | */       async: false,
/* | | */       payload: {
/* | | */         s:null,
/* | | */         securitytoken:SECURITYTOKEN,
/* | | */         do:'doaddlist',
/* | | */         userlist:'friend',
/* | | */         userid:userId,
/* | | */         url:'https://www.fxp.co.il/member.php?u=1224790',
/* | | */         friend:1,
/* | | */         confirm:'כן'
/* | | */       },
/* | | */       func: function() {
/* | | */         //console.log('friend request sent -> user id '+userId);
/* | | */       }
/* | | */     });
/* | | */   },
/* | | */   sendPM: function(title, pmId, user, content) {
/* | | */     if(title == null) title = 'תגובה להודעה: ';
/* | | */     var data = {
/* | | */       message: content,
/* | | */       fromquickreply:1,
/* | | */       securitytoken: SECURITYTOKEN,
/* | | */       do: 'insertpm',
/* | | */       loggedinuser: USER_ID_FXP,
/* | | */       parseurl: 1,
/* | | */       signature: 1,
/* | | */       title: title,
/* | | */       recipients: user,
/* | | */       forward: 0,
/* | | */       savecopy: 1,
/* | | */       fastchatpm: 1,
/* | | */       randoomconv: null
/* | | */     };
/* | | */     if(pmId != null) data['pmid'] = pmId;
/* | | */     xhr({
/* | | */       method: 'post',
/* | | */       url: 'https://www.fxp.co.il/private_chat.php',
/* | | */       async: true,
/* | | */       payload: data,
/* | | */       func: function(xhttp) {
/* | | */          //console.log('sent');
/* | | */       }
/* | | */     });
/* | | */   }
/* | | */ };
/* | | */
/* | | */
/* |_| */
