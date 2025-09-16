import { useState } from "react";
import InputField from "../components/InputField";

function ComponentOne() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ name: "", email: "", password: "" });

    let hasError = false;
    const newErrors = { name: "", email: "", password: "" };

    if (!name) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!email.includes("@")) {
      newErrors.email = "Invalid email address";
      hasError = true;
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      setLoading(true);
      setTimeout(() => {
        console.log("Form Data:", { name, email, password });
        setLoading(false);
        alert("Form submitted successfully!");
      }, 1500);
    }
  };

  return (
<div className="p-5">
    <div className="p-4 border rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">Component One</h2>
      <p>This is the content of Component One.</p>
    </div>
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-4 max-w-sm mx-auto"
    >
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="Please provide your full name."
        errorMessage={errors.name}
        invalid={!!errors.name}
        variant="filled"
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText="Please provide your email."
        errorMessage={errors.email}
        invalid={!!errors.email}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText="Please provide your password."
        errorMessage={errors.password}
        invalid={!!errors.password}
        variant="ghost"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
</div>
  );
}

export default ComponentOne;
