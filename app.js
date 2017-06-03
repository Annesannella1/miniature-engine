
$(document).ready(handler);
$(function() {
    window.app = new MyApp();
    window.app.start();
});
 $("button").on("click", function() {
      alert("Clicked!");
    });
