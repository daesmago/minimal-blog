import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const LogIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <div id="login">
                <h1>Log In</h1>
                {error && <p className="error">{error}</p>}
                <input placeholder="Ingresa tu correo" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Ingresa tu constraseña" value={password} onChange={e => setPassword(e.target.value)}
                       type="password"/>
                <button onClick={LogIn}>Ingresar</button>
                <div><Link to="/create-account">¿No tienes cuenta? Crea una acá.</Link></div>
            </div>
        </>
    );

}

export default LoginPage;
