import styled from "styled-components";
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
        <Container>
            {currentUser ? (
                <div>Current user: {currentUser.email}</div>
            ) : (
                <div>No logged user!</div>
            )}
            {currentUser && <button onClick={handleLogout}>Logout</button>}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 8px;
    justify-content: space-between;
    background-color: pink;
`;
