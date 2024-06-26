function generateMarker() {
    const dictionary = document.getElementById('dictionary').value;
    const markerId = document.getElementById('markerId').value;
    const markerOutput = document.getElementById('markerOutput');

    const markerUrl = `https://example.com/generate_marker?dictionary=${dictionary}&id=${markerId}`;
    markerOutput.innerHTML = `<img src="${markerUrl}" alt="ArUco Marker">`;
}
