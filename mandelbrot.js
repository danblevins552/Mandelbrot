const canvas = document.getElementById('mandelbrot');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

const maxIterations = 1000;
const zoom = 300;
const offsetX = canvas.width / 2;
const offsetY = canvas.height / 2;

for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
        let real = (x - offsetX) / zoom;
        let imaginary = (y - offsetY) / zoom;

        const creal = real;
        const cimaginary = imaginary;

        let n = 0;
        while (n < maxIterations) {
            const real_square = real * real - imaginary * imaginary;
            const imaginary_square = 2 * real * imaginary;

            real = real_square + creal;
            imaginary = imaginary_square + cimaginary;

            if (real * real + imaginary * imaginary > 4) break;

            n++;
        }

        const color = n === maxIterations ? 'black' : `hsl(${n * 360 / maxIterations}, 100%, 50%)`;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
    }
}
