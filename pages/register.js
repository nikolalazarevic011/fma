import { useState } from "react";
import { useRouter } from "next/router";


export const countries = [
    "Please select a country",
    "United States",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire*",
    "Azerbaijan",
    "Baden*",
    "Bahamas, The",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Bavaria*",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin (Dahomey)",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Brunswick and Lüneburg*",
    "Bulgaria",
    "Burkina Faso (Upper Volta)",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Central American Federation*",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo Free State, The*",
    "Cook Islands",
    "Costa Rica",
    "Cote d’Ivoire (Ivory Coast)",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Czechoslovakia*",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Duchy of Parma, The*",
    "East Germany (German Democratic Republic)*",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Federal Government of Germany (1848-49)*",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Grand Duchy of Tuscany, The*",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Hanover*",
    "Hanseatic Republics*",
    "Hawaii*",
    "Hesse*",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Serbia",
    "Kiribati",
    "Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Lew Chew (Loochoo)*",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
  ];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    churchName: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    country: "", // This will be populated by the dropdown
  });

  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login");
    } else {
      setError(data.message);
    }
  };

  

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-xl px-8 pt-4 pb-8 mt-5 mb-4 bg-white rounded shadow-md"
      >
        <h1 className="mb-6 text-2xl font-bold text-center text-primary">
          Register for FMA
        </h1>
        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Username (*)
          </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email (*)
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Password (*)
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Confirm Password (*)
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            First Name (*)
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Last Name (*)
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* Church Name */}
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

        {/* Phone */}
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

        {/* Address */}
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

        {/* Zip Code */}
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

        {/* City */}
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

        {/* State */}
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            State (*)
          </label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
            required
          />
        </div>

        {/* Country Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Country (*)
          </label>
          <select
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-blue-100 border rounded shadow appearance-none cursor-pointer focus:shadow-outline focus:outline-none"
            required
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="mb-4 text-xs italic text-red-500">{error}</p>}

        <div className="flex items-center">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded focus:shadow-outline bg-primary focus:outline-none"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
