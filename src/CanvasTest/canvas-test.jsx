import React, {Fragment} from 'react';
import { Typography } from '@material-ui/core';

const CanvasTest = () =>{
    const canvasRef = React.useRef(null)

    const onclick = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        draw(ctx, e.clientX -300, e.clientY);
    }
    const draw = (ctx, x, y) =>{
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    }
    
    return (
        <Fragment>
            <Typography variant="h2">
                Canvas Test
            </Typography>
            <canvas ref={canvasRef}
                style={{border: '1px solid black'}}
                width={800}
                height={500}
                onClick={onclick} />
        </Fragment>
    )
}

export default CanvasTest;