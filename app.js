"use strict";

function MyApp()
{
    var version = "v1.0";

    function setStatus(message)
    {
        $("#app>footer").text(message);
    }
    
    this.start = function()
    {
        $("#app>header").append(version);
        setStatus("ready");
    };
}
var myApp = {
    version: "v1.0",
    setStatus: function(message)
    {
        $("#app>footer").text(message);
    },
    start: function()
    {
        $("#app>header").append(this.version);
        this.setStatus("ready");
    };
};
$(document).ready(handler);
$(function() {
    window.app = new MyApp();
    window.app.start();
});
 $("button").on("click", function() {
      alert("Clicked!");
    });
