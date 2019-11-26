import React from 'react';

class App extends React.Component {
    render() {
        function test() {
            fetch('/test').then(function(res) {
                console.log(res.status);
            }).catch(function(err) {
                console.log(err);
            });
        }
        return (
            <div className="App">
                <button className="btn btn-primary" onClick={test}>Test</button>
            </div>
        );
    }
}

export default App;