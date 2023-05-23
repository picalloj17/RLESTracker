import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import Body from './Body';

function App() {
    return (
        <>
            <Landing />
            
        </>
    )
}

export default App;

ReactDOM.render(<Landing />, document.getElementById('root'))