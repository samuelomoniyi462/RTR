document.addEventListener('DOMContentLoaded', function() {
    const warningPopup = document.getElementById('warningPopup');
    warningPopup.style.display = 'block'; // Show the popup on page load

    window.confirmAge = function() {
        warningPopup.style.display = 'none'; // Hide the popup when confirmed
        // Add your logic here to proceed to content
        alert('Content will be displayed now!');
    };
});