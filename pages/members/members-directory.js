// pages/members/members-directory.js

import { AcfVideo } from "components/acfVideo";
import { useEffect, useState } from "react";

const MembersDirectory = () => {
  // Retrieve the WordPress base URL from environment variables
  const wpBaseUrl = process.env.NEXT_PUBLIC_WP_URL;
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/members");
        const data = await res.json();

        if (res.ok) {
          setMembers(data);
        } else {
          console.error("API Error:", data.message);
          setError(data.message);
        }
      } catch (error) {
        console.error("Failed to fetch members:", error);
        setError("Failed to fetch members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // **Fixed filtering with null checks**
  const filteredMembers = members.filter((member) => {
    const name = member.name || "";
    const church = member.church || "";
    const city = member.city || "";

    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      church.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 border-b-2 rounded-full animate-spin border-primary"></div>
          <p className="text-primary">Loading members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Video Component */}
      <AcfVideo
        src={`${wpBaseUrl}/wp-content/uploads/2024/07/FMA-1.mov`}
        poster=""
        controls="0"
        autoplay={true}
        loop={true}
        heightProp="600"
        muted={true}
      />

      {/* Heading */}
      <h1 className="my-8 text-4xl font-bold text-center text-primary">
        FMA Members Directory
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name, church, or city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Members List */}
      <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold text-primary">
                {member.name || "No Name"}
              </h2>
              <p className="mb-2 text-gray-600">
                <strong>Church:</strong> {member.church || "Not specified"}
              </p>
              <p className="mb-1 text-gray-600">
                <strong>Address:</strong> {member.address || "Not specified"}
              </p>
              <p className="mb-1 text-gray-600">
                <strong>City:</strong> {member.city || "Not specified"}
              </p>
              <p className="mb-1 text-gray-600">
                <strong>Zip:</strong> {member.zip || "Not specified"}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {member.phone || "Not specified"}
              </p>
            </div>
          ))
        ) : (
          <div className="py-8 text-center col-span-full">
            <p className="text-lg text-gray-500">
              {searchTerm
                ? "No members found matching your search."
                : "No members found."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersDirectory;
