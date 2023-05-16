import { useState } from "react";
import SignUpForm from "./SignUpForm";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    async function handleFormSubmit(e: any) {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log("Passwords dont match!");
            return;
        }

        try {
            setLoading(true);
            await register(email, password);
            navigate("/recipes");
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    }

    return (
        <>
            <div>Welcome to the SignUp page!</div>
            <h1>Create a new account</h1>
            <SignUpForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                loading={loading}
                handleFormSubmit={handleFormSubmit}
            />
        </>
    );
}
