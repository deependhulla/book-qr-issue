/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {


/*
var yux=document.getElementById("randurl");
var shx=window.innerHeight;
var swx=window.innerWidth;
var xsrcx = "http://office.clubemerald.in/clubmaster/swimmingcardcheck.php?";
var zxx='<iframe src="'+xsrcx+'" name="dvdiframex" id="dvdiframex"  width="'+swx+'" height="'+shx+'"  frameborder=0 >.</iframe>';
        yux.innerHTML = zxx;

        var yu=document.getElementById("randurl");
var xsrc = "http://office.clubemerald.in/clubmaster/swimmingcardcheck.php?ID="+tagId;
var sh=window.innerHeight;
var sw=window.innerWidth;
var zx='<iframe src="'+xsrc+'" name="dvdiframe" id="dvdiframe"  width="'+sw+'" height="'+sh+'"  frameborder=0>.</iframe>';
 yu.innerHTML = zx;

*/



QRScanner.prepare(onDone); // show the prompt
 
function onDone(err, status){
  if (err) {
   // here we can handle errors and clean up any loose ends.
   console.error(err);
alert(err);
  }
  if (status.authorized) {
    // W00t, you have camera access and the scanner is initialized.
    // QRscanner.show() should feel very fast.
alert('auth ok');
  } else if (status.denied) {
   // The video preview will remain black, and scanning is disabled. We can
   // try to ask the user to change their mind, but we'll have to send them
   // to their device settings with `QRScanner.openSettings()`.
  } else {
    // we didn't get permission, but we didn't get permanently denied. (On
    // Android, a denial isn't permanent unless the user checks the "Don't
    // ask again" box.) We can ask again at the next relevant opportunity.
  }
}




function alertDismissed() {
    // do something
}

navigator.notification.alert(
    'You are the winner!',  // message
    alertDismissed,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);






/////////////////////
    }
};

app.initialize();
