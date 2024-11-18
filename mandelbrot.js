const canvas = document.getElementById('mandelbrot');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

const maxIterations = 1000;
const zoom = 200;
const offsetX = canvas.width / 2;
const offsetY = canvas.height / 2;

for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
        let a = (x - offsetX) / zoom;
        let b = (y - offsetY) / zoom;

        let ca = a;
        let cb = b;

        let n = 0;
        while (n < maxIterations) {
            const aa = a * a - b * b;
            const bb = 2 * a * b;
            a = aa + ca;
            b = bb + cb;
            if (Math.abs(a + b) > 16) break;
            n++;
        }

        const color = n === maxIterations ? 'black' : `hsl(${n * 360 / maxIterations}, 100%, 50%)`;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
    }
}
