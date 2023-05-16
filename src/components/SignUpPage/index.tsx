import { useState } from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(e: any) {
        e.preventDefault();
        const body = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };
        console.log(body);
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
