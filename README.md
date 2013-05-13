Cross-Domain-iframe-Resizing
============================

To use this script the developer needs access to both domains. 

How to use
----------

This script is intended to help developers resize an iframe after an event. The developer needs access to all sites 
hosted within the iframe. This can be either a sub-domain or different site. In the code example I have a 
local host with four different sub-domains. I have one main page under http://www.localhost.com that contains 4 
different iframes from http://dev.localhost.com

Script: There is only one script that is shared across both/all domains. This is not needed but it makes 
making changes to the script easier and convenient. 
      
      
Main Page:

      -Assign any Element with id #mainPage
      -For each iframe assign it a unique ID. This same ID must be in the hosted iframe.
      



iframe Page(each):

      -Assign any Elment with id #iframePage
      -Declare the iframes unique ID. Example: <input id="iframeID" type="hidden" value="iframeOne">
      -For each event change that may change the iframe height, run $(iframeResize);
      -See iframe1.html for example

Javascript File:
      
      -It is recommended that you check the origin of the event. However to if you do not need this then remove the 
      URL from here:  resizeCrossDomainIframe('http://dev.localhost.com'); 
      
I'll add more comments later.

