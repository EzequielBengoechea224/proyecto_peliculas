import { useState } from "react";
import { db, auth } from "../../firebase/firebaseConfig";     
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Material UI components
import { Button, TextField, Box, Typography, Container, Paper, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";


const LogInSignIn = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSignUp && password !== confirmPassword) {
            alert("Passwords do not match!!");
            return;
        }

        try {
            if (isSignUp) {
                // Register user
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Save additional user data to Firestore
                await setDoc(doc(db, "users", user.uid), {
                    email,
                    fullName,
                    userName,
                });
                console.log("User registered and data saved", user);
            } else {
                // User login
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                console.log("User logged in", user);
                alert("User looged In!!");
                navigate("/home");
            }
        } catch (e) {
            console.error("Error, please check the data", e);
        }
    };

    return (
        <Container component="main" sx={{ marginTop: 8 }}>
            <Paper elevation={6} className="logInSignIn" sx={{ padding: 4, mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Bienvenido a Netflix
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    {isSignUp ? "Sign Up" : "Log In"}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                color="primary"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email"
                                required
                            />
                        </Grid>
                        {isSignUp && (
                            <>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        label="Full Name"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        label="User Name"
                                        required
                                    />
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                required
                            />
                        </Grid>
                        {isSignUp && (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    label="Confirm Password"
                                    required
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                        {isSignUp ? "Sign Up" : "Log In"}
                    </Button>
                </Box>
                <Button
                    fullWidth
                    variant="text"
                    onClick={() => setIsSignUp(!isSignUp)}
                >
                    {isSignUp ? "Already have an account? Log In" : "Don’t have an account? Sign Up"}
                </Button>
            </Paper>
        </Container>
    );
};

export default LogInSignIn;
