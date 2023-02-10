import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const CreateAccountPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try{
            if (password !== confirmPassword) {
                setError('La constraseñas ingresadas no coinciden');
                return
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e){
            setError(e.message);
        }
    }

    return (
        <>
            <h1>Crear cuenta</h1>
            {error && <p className="error">{error}</p>}
            <input placeholder="Ingresa tu correo" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Ingresa tu constraseña" value={password} onChange={e => setPassword(e.target.value)}
                   type="password"/>
            <input placeholder="Confirma tu constraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                   type="password"/>
            <button onClick={createAccount}>Crear</button>
            <div><Link to="/create-account">¿ya tienes cuenta? Ingresa por acá.</Link></div>
        </>
    );

}



export default CreateAccountPage;