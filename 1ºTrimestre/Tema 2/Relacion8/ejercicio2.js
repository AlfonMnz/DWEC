var startAudio = () => {
    var audio = document.querySelector("#audioElement");

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            audio: true,
            video: false
        }, handleAudio, audiooError);
    }

    function handleAudio(stream) {
        audio.src = window.URL.createObjectURL(stream);
    }

    function audiooError(e) {
        // do something
    }
};
startAudio();