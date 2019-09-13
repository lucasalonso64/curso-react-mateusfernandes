import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Helloword = (props)=>(
    <div>
        <h1>Hello {props.name}</h1>
    </div>
);



ReactDOM.render(
<Helloword name="Lucas" />,
    document.getElementById('root')
);


