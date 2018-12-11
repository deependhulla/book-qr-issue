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

QRScanner.scan(displayContents);

function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
    alert(err);
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);

  }
}

QRScanner.show();


/////////////////////
    }
};

app.initialize();
