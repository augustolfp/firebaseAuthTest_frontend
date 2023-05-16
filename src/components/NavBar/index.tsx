import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate("/sign-in");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {currentUser ? (
                <div>Current user: {currentUser.email}</div>
            ) : (
                <div>No logged user!</div>
            )}
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
