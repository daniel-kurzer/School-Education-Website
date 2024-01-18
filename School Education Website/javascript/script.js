/* --- SCROLLBAR PERCENTAGE  */

document.addEventListener('scroll', function (e) {
    var scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);
  
    // For scrollbar 1
    var scrollBar1 = document.querySelector(".scrollBar1");
    var scrollBar1Span = document.querySelector(".scrollBar1 span");
    scrollBar1.style.height = scrollPercent + "%";
    scrollBar1Span.textContent = roundScroll;
  
  });