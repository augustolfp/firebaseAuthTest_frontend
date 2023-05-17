import { useState } from "react";
import SignInForm from "./SignInForm";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login, googleLogin } = useAuth();
    const navigate = useNavigate();

    async function handleFormSubmit(e: any) {
        e.preventDefault();

        try {
            setLoading(true);
            await login(email, password);
            navigate("/recipes");
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    }

    async function handleGoogleSubmit(e: any) {
        e.preventDefault();

        try {
            await googleLogin();
            navigate("/recipes");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>Welcome to the Sign In page!</div>
            <h1>Login to your account</h1>
            <SignInForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loading={loading}
                handleFormSubmit={handleFormSubmit}
            />
            <button onClick={handleGoogleSubmit}>Login with google</button>
        </>
    );
}
