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