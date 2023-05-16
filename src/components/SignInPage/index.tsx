import { useState } from "react";
import SignInForm from "./SignInForm";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(e: any) {
        e.preventDefault();
        const body = {
            email: email,
            password: password,
        };
        console.log(body);
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
        </>
    );
}
