import express from "express";
import session from "express-session";
import passport from "passport";
import "./auth/google.js";

const app = express();

/* session */
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

/* passport */
app.use(passport.initialize());
app.use(passport.session());

/* routes */
app.get("/", (req, res) => {
    res.send(`<a href="/auth/google">Login with Google</a>`);
});

app.get("/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

app.get("/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/",
        successRedirect: "/profile"
    })
);

app.get("/profile", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/");
    }

    res.send(`
        <h1>Welcome ${req.user.displayName}</h1>
        <p>Email: ${req.user.emails[0].value}</p>
    `);
});

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
