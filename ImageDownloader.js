// ==UserScript==
// @name        Flickr Image Downloader
// @namespace   https://www.kalmuna.com
// @version     1.1
// @description Allows you to download full-sized original images from Flickr
// @author      admin@kalmuna.com
// @match       https://*.flickr.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    
    // Function to extract image URL from Flickr page
    function extractImageURL() {
        var imgElement = document.querySelector('.main-photo');
        if (imgElement) {
            return imgElement.getAttribute('src');
        }
        return nil;
    }
    
    // Function to download the image
    function downloadImage(url) {
        var a = document.createElement('a');
        a.href = url;
        a.download = 'flickr_image.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    // Main function
    function main() {
        var imageUrl = extractImageURL();
        if (imageUrl) {
            downloadImage(imageUrl);
        } else {
            console.log('Failed to extract image URL.');
        }
    }
    
    // Run the main function
    main();
})();
