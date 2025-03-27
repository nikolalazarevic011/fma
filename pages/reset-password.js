import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { token } = router.query;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMessage("Missing token from URL.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        // Auto login the user using saved email (if you ask for it earlier), or get it from backend
        const loginResponse = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            login: data.email || "", // or prompt for email earlier
            password: newPassword,
          }),
        });

        const loginData = await loginResponse.json();

        if (loginResponse.ok) {
          // Save user data in local storage
          localStorage.setItem("user", JSON.stringify(loginData.user));

          // Extract the membership ID and save it in local storage
          if (
            loginData.user.membership_levels &&
            loginData.user.membership_levels.length > 0
          ) {
            const membershipId = loginData.user.membership_levels[0].id;
            localStorage.setItem("membershipId", membershipId);
          }

          // Generate a random token and save it in local storage
          const token = Math.random().toString(36).substr(2); // Random token
          localStorage.setItem("authToken", token);
          window.dispatchEvent(new Event("login-status-change")); //to trigger change of auth buttons in MainMenu
          router.push("/"); // Redirect to home page or another protected route
        } else {
          setMessage("Password changed but auto-login failed.");
        }
      } else {
        setMessage(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setMessage("❌ Error submitting request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-xl px-8 pt-4 pb-8 mb-4 bg-white rounded shadow-md"
      >
        <h1 className="mb-6 text-2xl font-bold text-center text-primary">
          Reset Your Password
        </h1>

        <div className="mb-4">
          <label
            htmlFor="new-password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {message && (
          <p className="mb-4 text-sm text-center text-gray-700">{message}</p>
        )}

        <div className="flex items-center">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 font-bold text-white rounded focus:shadow-outline bg-primary focus:outline-none disabled:opacity-50"
          >
            {submitting ? "Updating..." : "Reset Password"}
          </button>
        </div>
      </form>
    </div>
  );
}
