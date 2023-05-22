import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

function App() {
    return (
        <div id = 'root'>
            <Header />
        </div>
    )
}

export default App;

ReactDOM.render(<Header />, document.getElementById('root'))