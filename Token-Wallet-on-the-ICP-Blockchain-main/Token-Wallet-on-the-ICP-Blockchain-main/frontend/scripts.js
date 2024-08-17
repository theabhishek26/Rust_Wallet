async function sendTokens() {
    const address = document.getElementById('address').value;
    const amount = parseInt(document.getElementById('amount').value);

    const response = await fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, amount }),
    });

    if (response.ok) {
        alert('Tokens sent successfully');
        updateBalance();
    } else {
        alert('Failed to send tokens');
    }
}
async function updateBalance() {
    const response = await fetch('/balance');
    const data = await response.json();
    document.getElementById('balance').textContent = data.balance;
}

window.onload = updateBalance;
