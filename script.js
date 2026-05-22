const canvas = document.getElementById("c");
        const ctx = canvas.getContext("2d");

        let angle = 0;
        const NUM_STEPS = 80;
        const SCALE = 10;
        const TEXT = "I love you";
        const FONT_SIZE = 10;

        function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        function heartX(t) {
        return 16 * Math.pow(Math.sin(t), 3);
        }

        function heartY(t) {
        return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        }

        function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.font = `bold ${FONT_SIZE}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        for (let i = 0; i < NUM_STEPS; i++) {
        const t = (i / NUM_STEPS) * Math.PI * 2 + angle;
        const x = cx + heartX(t) * SCALE;
        const y = cy - heartY(t) * SCALE;
        ctx.fillStyle = "#ff4d6d";
        ctx.fillText(TEXT, x, y);
        }

        angle += 0.007;
        requestAnimationFrame(draw);
        }

        draw();
