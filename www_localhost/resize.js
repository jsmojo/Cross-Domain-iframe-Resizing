



	//Load if hosted in iframe
    if ($("#iframePage").length > 0) {

        function iframeResize() {
			
			var iframeID = $('#iframeID').attr('value');
			var iframeHeight = '';
			
            iframeHeight = $('body').height();
			
            if (!!window.postMessage) {
                parent.postMessage(iframeHeight + iframeID, '*');
            }

        }
        $(iframeResize);

 
    }

    //Load if on Main site
    if ($("#mainPage").length > 0) {


        //Assign iframe height for IE7 and other browsers that do not support postmessage 
        if (!!window.postMessage) {
            //do nothing
        }
        else {
            $('#iframe1').height(750);
            $('#iframe2').height(340);
            $('#iframe3').height(850);
            $('#iframe4').height(670);
        }

        function resizeCrossDomainIframe(other_domain) {
            if (window.addEventListener) {

                window.addEventListener('message', function (event) {

                    if (event.origin !== other_domain) return;  // only accept messages from the specified domain

                    var iframeID = '';
                    var iframeHeight = '';

                    iframeID = (event.data).replace(/\d+/g, '');
                     
					iframeID = document.getElementById(iframeID);

					 
                    iframeHeight = parseInt(event.data);
                    
                    if (iframeHeight === +iframeHeight && iframeHeight === (iframeHeight | 0)) {
                        iframeHeight = iframeHeight + 50; // add some extra height to avoid scrollbar
                        iframeID.height = iframeHeight;
                    }

                }, false);

            }
            else if (window.attachEvent) {

                window.attachEvent('onmessage', function (event) {

                    if (event.origin !== other_domain) return;  // only accept messages from the specified domain

                    var iframeID = '';
                    var iframeHeight = '';

                    iframeID = (event.data).replace(/\d+/g, '');
                    iframeID = document.getElementById(iframeID);
					 
                    iframeHeight = parseInt(event.data);
					
					
                    if (iframeHeight === +iframeHeight && iframeHeight === (iframeHeight | 0)) {
                        iframeHeight = iframeHeight + 30; // add some extra height to avoid scrollbar
                        iframeID.height = iframeHeight;
                    }
                }, false);

            }
            else {

                return;
            }

        }

        function parentIframeResize() {

            if (!!window.postMessage) {

                resizeCrossDomainIframe('http://dev.localhost.com'); 
            }
            else {
                //do nothing
            }

        }
        $(parentIframeResize);

    }








