import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import auth from "../config/firebase";
import { User, signOut } from "firebase/auth";

const AuthContext = createContext({} as any);
const provider = new GoogleAuthProvider();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: any }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    function register(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleLogin() {
        return signInWithPopup(auth, provider);
    }

    function logout() {
        return signOut(auth);
    }

    const value = { currentUser, register, login, logout, googleLogin };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
