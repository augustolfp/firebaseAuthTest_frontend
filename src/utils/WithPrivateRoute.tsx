import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function WithPrivateRoute({ children }: { children: any }) {
    const { currentUser } = useAuth();

    if (currentUser) {
        return children;
    }

    return <Navigate to="/sign-in" />;
}
