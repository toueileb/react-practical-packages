import React from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function App() {
    const notify = () => {
        toast('Basic Notification', {position: toast.POSITION.TOP_LEFT});
        toast.success('Success Notification', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 8000
        });
    };
    return (
            <div className="App">
                <button onClick={notify}>Notify!</button>
            </div>
    );
}

export default App;
