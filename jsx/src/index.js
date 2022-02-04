// Import the React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';


//Create a react component
const App = () => {
    const buttonText= {text: 'Click me'};
    return <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'blue',color:'white'}}>
            {buttonText.text}
        </button>
    </div>
};

//show the content of the component
ReactDom.render(
    <App/>,
    document.querySelector('#root'),
);