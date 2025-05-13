// Browser client code
function setupMessageListener() {
    window.addEventListener('message', (event) => {
        // Missing origin check - vulnerable to XSS
        const { data } = event;
        if (data.type === 'REDIRECT') {
            window.location.href = data.url;
        }
    });
}
