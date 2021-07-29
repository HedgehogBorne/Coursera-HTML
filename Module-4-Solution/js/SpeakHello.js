(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
         document.write(speakWord + " " + name + "<br>");
    };
    window.helloSpeaker = helloSpeaker;
})(window);
