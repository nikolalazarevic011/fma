import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { countries } from "./register";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    churchName: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // **Redirect if not logged in and fetch fresh user data**
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
      return;
    }

    // **Fetch fresh user data from API**
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(user);
        const res = await fetch(`/api/get-user-profile?userId=${userData.ID}`);

        if (res.ok) {
          const data = await res.json();
          const freshUserData = data.user;

          setFormData({
            firstName: freshUserData.first_name || "",
            lastName: freshUserData.last_name || "",
            churchName: freshUserData.church_name || "",
            phone: freshUserData.phone || "",
            address: freshUserData.addr1 || "",
            zip: freshUserData.zip || "",
            city: freshUserData.city || "",
            state: freshUserData.state || "",
            country: freshUserData.country || "",
          });

          // **Update localStorage with fresh data**
          const updatedUser = { ...userData, ...freshUserData };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
          // **Fallback to localStorage data if API fails**
          const userData = JSON.parse(user);
          setFormData({
            firstName: userData.first_name || "",
            lastName: userData.last_name || "",
            churchName: userData.church_name || "",
            phone: userData.phone || "",
            address: userData.addr1 || "",
            zip: userData.zip || "",
            city: userData.city || "",
            state: userData.state || "",
            country: userData.country || "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // **Fallback to localStorage data**
        const userData = JSON.parse(user);
        setFormData({
          firstName: userData.first_name || "",
          lastName: userData.last_name || "",
          churchName: userData.church_name || "",
          phone: userData.phone || "",
          address: userData.addr1 || "",
          zip: userData.zip || "",
          city: userData.city || "",
          state: userData.state || "",
          country: userData.country || "",
        });
      }
    };

    fetchUserData();
  }, [router]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch("/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.ID,
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // **Update localStorage with new data**
        const updatedUser = { ...user, ...data.user };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setSuccess(true);
      } else {
        setError(data.message || "Failed to update profile");
      }
    } catch (error) {
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-xl px-8 pt-4 pb-8 mt-5 mb-4 bg-white rounded shadow-md"
      >
        <h1 className="mb-6 text-2xl font-bold text-center text-primary">
          Edit Profile
        </h1>

        {/* **First Name** */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **Last Name** */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **Church Name** */}
        <div className="mb-4">
          <label
            htmlFor="churchName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Church Name
          </label>
          <input
            type="text"
            id="churchName"
            value={formData.churchName}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **Phone** */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **Address** */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **Zip Code** */}
        <div className="mb-4">
          <label
            htmlFor="zip"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **City** */}
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **State** */}
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          />
        </div>

        {/* **Country Dropdown** */}
        <div className="mb-6">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none cursor-pointer focus:shadow-outline focus:outline-none"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 font-bold text-white rounded focus:shadow-outline bg-primary focus:outline-none disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="px-4 py-2 font-bold border rounded border-primary text-primary hover:bg-primary hover:text-white focus:outline-none"
          >
            Cancel
          </button>
        </div>

        {success && (
          <div className="p-3 my-4 text-green-700 bg-green-100 border border-green-300 rounded">
            Profile updated successfully!
          </div>
        )}

        {error && (
          <div className="p-3 mb-4 text-red-700 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default EditProfilePage;
