import React, {Component} from 'react';
import PublicRouter from "./routes/PublicRoutes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PublicRouter/>
            </div>
        );
    }
}

export default App;
