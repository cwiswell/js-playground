class Ball{
    constructor(){
        this.x = 0;
        this.y = 0;
    }

    draw = (ctx) =>{
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(100, 75, 3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

export default Ball;