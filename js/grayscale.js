/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

//Quote Generation with API
function newQuoteAPI(){
     $.getJSON("https://cors-anywhere.herokuapp.com/http://quotzzy.co/api/quote", function(json) {
          //bring in the data with stringify
          var stringQuoteData = JSON.stringify(json);
                
          //convert new string into a usable javascript object
          //Pass parsed to display function
          var objectQuoteData = JSON.parse(stringQuoteData);

          //replace content in html with the quote and author at each ("idTag")
        document.getElementById("quoteDisplay").innerHTML = '"' + objectQuoteData["text"] + '"';
        document.getElementById('authorDisplay').innerHTML = "- " + objectQuoteData["author"]["name"];
        });
};

//Tweeting code
function tweetIt () {
  var phrase = document.getElementById("quoteDisplay").innerHTML + " " + document.getElementById('authorDisplay').innerHTML;
  var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(phrase);
    
  window.open(tweetUrl);
};



