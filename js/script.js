$(document).ready(function(){if (window.innerWidth > 600) {$(".fancybox").fancybox({openEffect:'none',closeEffect:'none',padding:0});$('#photography').justifiedGallery({rowHeight:150,lastRow:'justify',margins:5});$(".menu-link").click(function(){$(".site-nav").toggleClass("active");$(".container").toggleClass("active");});}else {$(".fancybox").attr("href", "#")}});
