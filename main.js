let isSwapped = false;

function swapButtons() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    // Swap the positions
    if (!isSwapped) {
        yesButton.style.left = '150px';
        noButton.style.left = '50px';
    } else {
        yesButton.style.left = '50px';
        noButton.style.left = '150px';
    }

    isSwapped = !isSwapped;
}

function showLoveMessage() {
    window.location.href = 'love-message.html';
}

document.getElementById('no-button').addEventListener('mouseenter', swapButtons);
document.getElementById('yes-button').addEventListener('click', showLoveMessage);
