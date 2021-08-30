import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/loginform';

import './app.css';

const App =() =>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (

        <ChatEngine

        height="100vh"
        projectID="ba608115-12c2-4012-9959-cfd638e40076"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}

        // userName="chandradeep16"
        // userSecret="123456"
        />
    );
}

export default App;