// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .


// $(document).ready(function()){
//   function display_search_results() {
//     if (this.readyState === 4) {
//       console.log(this);
//       document.getElementById('products').innerHTML = this.responseText;
//     };
//   }
// }

// var form = document.getElementById('serach-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   var searchValue = document.getElementById('search').value;

//  var xhr = new XMLHtttpRequest();
//   xhr.onload = display_search_results;
//   xhr.open('GET', '/products/search?search=' + searchValue, true);
//   xhr.send();
// });

$(document).ready(function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();
    $('#products').html('');
    $.ajax({
      url: '/products?search=' + searchValue,
      type: 'GET',
      dataType: 'script'
    });
  });
});

// $.getScript('/products?search=' + searchValue)

// jQuery(function(){
//   $(window).scroll(function(){
//     if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
//       console.log($('pagination span.next').children().attr('href'));
//       $.getScript($('pagination span.next').children().attr('href'));
//     }
//   });
// });

jQuery(function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }
});

$(function(){ $(document).foundation(); });
