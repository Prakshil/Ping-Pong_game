// Game constants
const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const PADDLE_WIDTH = 14;
const PADDLE_HEIGHT = 100;
const BALL_SIZE = 16;
const PADDLE_MARGIN = 18;

let leftPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
let rightPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;

let ballX = WIDTH / 2 - BALL_SIZE / 2;
let ballY = HEIGHT / 2 - BALL_SIZE / 2;
let ballSpeedX = 5 * (Math.random() < 0.5 ? 1 : -1);
let ballSpeedY = 4 * (Math.random() * 2 - 1);

let leftScore = 0;
let rightScore = 0;

// Draw everything
function draw() {
    // Background
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Divider
    ctx.strokeStyle = "#fff";
    ctx.setLineDash([8, 16]);
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.setLineDash([]);

    // Left paddle
    ctx.fillStyle = "#0ff";
    ctx.fillRect(PADDLE_MARGIN, leftPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Right paddle
    ctx.fillStyle = "#f0f";
    ctx.fillRect(WIDTH - PADDLE_MARGIN - PADDLE_WIDTH, rightPaddleY, PADDLE_WIDTH, PADDLE_HEIGHT);

    // Ball
    ctx.fillStyle = "#fff";
    ctx.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);

    // Scores
    ctx.font = "36px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(leftScore, WIDTH / 4, 50);
    ctx.fillText(rightScore, WIDTH * 3 / 4, 50);
}

// Update positions
function update() {
    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with top/bottom
    if (ballY <= 0 || ballY + BALL_SIZE >= HEIGHT) {
        ballSpeedY = -ballSpeedY;
        ballY = Math.max(0, Math.min(HEIGHT - BALL_SIZE, ballY));
    }

    // Ball collision with left paddle
    if (
        ballX <= PADDLE_MARGIN + PADDLE_WIDTH &&
        ballY + BALL_SIZE > leftPaddleY &&
        ballY < leftPaddleY + PADDLE_HEIGHT
    ) {
        ballSpeedX = Math.abs(ballSpeedX);
        // Add some “spin” based on where it hit
        let hitPos = (ballY + BALL_SIZE / 2) - (leftPaddleY + PADDLE_HEIGHT / 2);
        ballSpeedY = hitPos * 0.2;
    }

    // Ball collision with right paddle
    if (
        ballX + BALL_SIZE >= WIDTH - PADDLE_MARGIN - PADDLE_WIDTH &&
        ballY + BALL_SIZE > rightPaddleY &&
        ballY < rightPaddleY + PADDLE_HEIGHT
    ) {
        ballSpeedX = -Math.abs(ballSpeedX);
        let hitPos = (ballY + BALL_SIZE / 2) - (rightPaddleY + PADDLE_HEIGHT / 2);
        ballSpeedY = hitPos * 0.2;
    }

    // Score check (left/right wall)
    if (ballX < 0) {
        rightScore++;
        resetBall();
    } else if (ballX + BALL_SIZE > WIDTH) {
        leftScore++;
        resetBall();
    }

    // Right paddle AI: follow the ball
    const aiCenter = rightPaddleY + PADDLE_HEIGHT / 2;
    if (aiCenter < ballY + BALL_SIZE / 2 - 10) {
        rightPaddleY += 4;
    } else if (aiCenter > ballY + BALL_SIZE / 2 + 10) {
        rightPaddleY -= 4;
    }
    // Clamp AI paddle
    rightPaddleY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, rightPaddleY));
}

// Reset ball to center
function resetBall() {
    ballX = WIDTH / 2 - BALL_SIZE / 2;
    ballY = HEIGHT / 2 - BALL_SIZE / 2;
    ballSpeedX = (Math.random() < 0.5 ? 1 : -1) * 5;
    ballSpeedY = 4 * (Math.random() * 2 - 1);
}

// Mouse control for left paddle
canvas.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    leftPaddleY = mouseY - PADDLE_HEIGHT / 2;
    // Clamp paddle
    leftPaddleY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, leftPaddleY));
});

// Main game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();