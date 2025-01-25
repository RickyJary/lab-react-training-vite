/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");
  const greetings = {
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailBorderColor =
    email === "" ? "initial" : emailRegex.test(email) ? "green" : "red";
  const passwordBorderColor =
    password === ""
      ? "initial"
      : passwordRegex.test(password)
      ? "green"
      : "red";

  return (
    <div>
      <form style={{ margin: "30px" }}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderColor: emailBorderColor,
            }}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borderColor: passwordBorderColor,
            }}
          />
        </label>
        <label htmlFor="nationality">Nationality:</label>
        <select
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </form>
      {emailBorderColor === "green" && passwordBorderColor === "green" ? (
        <div>
          <p>
            {greetings[nationality]}. Your email is {email}
          </p>
        </div>
      ) : (
        <p style={{ color: "red" }}>
          Your email isn't right or your password is not strong enough
        </p>
      )}
    </div>
  );
}

export default SignupPage;
