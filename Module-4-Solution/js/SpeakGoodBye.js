(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
        document.write(speakWord + " " + name + "<br>" );

    };
    window.byeSpeaker = byeSpeaker;
})(window);