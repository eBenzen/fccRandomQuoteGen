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

// Quote Generation

//Quote Bank
var quotes = [
    ["Ron Paul","Maybe we ought to consider a Golden Rule in foreign policy: Don't do to other nations what we don't want happening to us. We endlessly bomb these countries and then we wonder why they get upset with us?"],
    ["Ron Paul","Why is it is claimed that if people won't or can't take care of their own needs, that people in government can do it for them?"],
    ["Ron Paul","When one gets in bed with government, one must expect the diseases it spreads."],
    ["Ron Paul","Real patriotism is a willingness to challenge the government when it's wrong."],
    ["Ron Paul","You wanna get rid of drug crime in this country? Fine, let's just get rid of all the drug laws."],
    ["Ron Paul","The moral and constitutional obligations of our representatives in Washington are to protect our liberty, not coddle the world, precipitating no-win wars, while bringing bankruptcy and economic turmoil to our people."],
    ["Ron Paul","I have never met anyone who did not support our troops. Sometimes, however, we hear accusations that someone or some group does not support the men and women serving in our Armed Forces. But this is pure demagoguery, and it is intellectually dishonest."],
    ["Ron Paul","Setting a good example is a far better way to spread ideals than through force of arms."],
    ["Ron Paul","Legitimate use of violence can only be that which is required in self-defense."],
    ["Ron Paul","War is never economically beneficial except for those in position to profit from war expenditures."],
    ["Ron Paul","Justifying conscription to promote the cause of liberty is one of the most bizarre notions ever conceived by man! Forced servitude, with the risk of death and serious injury as a price to live free, makes no sense."],
    ["Ludwig von Mises","If history could teach us anything, it would be that private property is inextricably linked with civilization."],
    ["Ludwig von Mises","Whoever wishes peace among peoples must fight statism."],
    ["Ludwig von Mises","Society has arisen out of the works of peace; the essence of society is peacemaking."],
    ["Ludwig von Mises","Modern society, based as it is on the division of labor, can be preserved only under conditions of lasting peace."],
    ["Ludwig von Mises","If some peoples pretend that history or geography gives them the right to subjugate other races, nations, or peoples, there can be no peace."],
    ["Ludwig von Mises","The attainment of the economic aims of man presupposes peace."],
    ["Ludwig von Mises","Only one thing can conquer war - that attitude of mind which can see nothing in war but destruction and annihilation."],
    ["Ludwig von Mises","Human civilization is not something achieved against nature; it is rather the outcome of the working of the innate qualities of man."],
    ["Ludwig von Mises","Whoever wants peace among nations must seek to limit the state and its influence most strictly."],
    ["Ludwig von Mises","To defeat the aggressors is not enough to make peace durable. The main thing is to discard the ideology that generates war."]
    ]

//Quote Generator
function newQuote(){
    //gen a randome number to pick the quote
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    
    //replace content in html with the quote and author at each ("idTag")
    document.getElementById("quoteDisplay").innerHTML = '"' + quotes[randomNumber][1] + '"';
    document.getElementById('authorDisplay').innerHTML = "- " + quotes[randomNumber][0];

};

//Tweeting code
function tweetIt () {
  var phrase = document.getElementById("quoteDisplay").innerHTML + " " + document.getElementById('authorDisplay').innerHTML;
  var tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(phrase);
    
  window.open(tweetUrl);
};



