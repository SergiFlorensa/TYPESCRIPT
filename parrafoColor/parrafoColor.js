$(document).ready(function() {
    $('#toggleRedBtn').click(function() {
        $('#paragraph1').toggleClass('red-text');
    });

    $('#toggleBlueBtn').click(function() {
        $('#paragraph2').toggleClass('blue-text');
    });
});
