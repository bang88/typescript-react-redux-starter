import * as React from 'react'
const DuckImage = require('../assets/Duck.jpg');

export default (props:
    JSX.IntrinsicClassAttributes<React.HTMLProps<HTMLDivElement>>) =>
    <div>
    hello
        <img src={DuckImage} alt=""/>
    </div>  
