document.getElementById('startButton').addEventListener('click', function() {
    // 隱藏按鈕
    this.style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('more').style.display = 'none';

    // 顯示其他元素
    document.querySelector('h1').style.display = 'block';
    document.getElementById('asciiArt').style.display = 'block';
    document.getElementById('love').style.display = 'block';
    document.getElementById('time').style.display = 'block';

    // 播放音樂
    const audio = document.getElementById('backgroundMusic');
    audio.play();

    // 開始顯示 ASCII 藝術動畫
    fetch('beauty.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const asciiArtElement = document.getElementById('asciiArt');
            asciiArtElement.innerHTML = ''; // 清空初始內容

            lines.forEach((line, index) => {
                const lineElement = document.createElement('div');
                lineElement.className = 'line';
                lineElement.style.animationDelay = `${index * 0.1}s`; // 每行間隔0.1秒
                lineElement.textContent = line;
                asciiArtElement.appendChild(lineElement);
            });
        })
        .catch(error => console.error('Error loading ASCII art:', error));
});