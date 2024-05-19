document.addEventListener('DOMContentLoaded', function () {
    // Get current timestamp
    var now = new Date();
    var timestampField = document.getElementById('timestamp');
    timestampField.value = now.toISOString(); // Set timestamp value
});