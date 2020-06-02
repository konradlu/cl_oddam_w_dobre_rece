import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import "./scss/main.scss"
import App from './App';
import * as serviceWorker from './serviceWorker';

/*--standard--*/
/*ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);*/

/*--firebase context--*/
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();