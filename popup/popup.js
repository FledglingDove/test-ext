document.getElementById('test').onclick = () => {
    const win = window.open('http://localhost:3000');
    console.log(win);
    setInterval(() => {
        win.postMessage('test', 'http://localhost:3000');
    }, 5000);
};