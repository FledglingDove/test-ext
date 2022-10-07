document.getElementById('test').onclick = () => {
    const win = window.open('https://google.com');
    console.log(win);
    setInterval(() => {
        win.postMessage('test', 'https://google.com');
    }, 3000);
};
