type Props = {
    email: string;
    setEmail: any;
    password: string;
    setPassword: any;
    confirmPassword: string;
    setConfirmPassword: any;
    loading: boolean;
    handleFormSubmit: any;
};

export default function SignUpForm(props: Props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => props.setEmail(e.target.value)}
            />
            <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => props.setPassword(e.target.value)}
            />
            <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => props.setConfirmPassword(e.target.value)}
            />
            <button type="submit" disabled={props.loading}>
                Sign Up
            </button>
        </form>
    );
}
