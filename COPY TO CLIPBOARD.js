document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    const copyButton = document.getElementById('copyButton');
    const displayButton = document.getElementById('displayButton');
    const copiedMessage = document.getElementById('copiedMessage');

    copyButton.addEventListener('click', function() {
        messageTextarea.select();
        document.execCommand('copy');
        copiedMessage.textContent = messageTextarea.value;
        displayButton.style.display = 'block';
        copiedMessage.style.display = 'none';
        alert('Message copied to clipboard: ' + messageTextarea.value);
    });

    displayButton.addEventListener('click', function() {
        copiedMessage.style.display = 'block';
        displayButton.style.display = 'none';
    });
});




