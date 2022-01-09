import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import './Demo.css';

function Demo() {
    const dispatch = useDispatch();

    const loginDemo = (e) => {
        e.preventDefault();
        const credential = 'Demo-lition';
        const password = 'password';
        return dispatch(sessionActions.login({ credential, password })).catch(
            async(res) => {
                await res.json();
            }
        )
    }

    return (
        <button className='demo-button' onClick={loginDemo}>
            Demo User
        </button>
    )
}

export default Demo;
