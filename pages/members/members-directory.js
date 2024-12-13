// pages/members/members-directory.js

import { AcfVideo } from "components/acfVideo";
import { useEffect, useState } from "react";

const MembersDirectory = () => {
  // Retrieve the WordPress base URL from environment variables
  const wpBaseUrl = process.env.NEXT_PUBLIC_WP_URL;
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/members");
        const data = await res.json();
        if (res.ok) {
          setMembers(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.church.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.city.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
          placeholder="Search for..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Members List */}
      <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {filteredMembers.map((member, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md">
            <h2 className="mb-2 text-xl font-bold text-primary">
              {member.name}
            </h2>
            <p className="mb-2">{member.church}</p>
            <p>{member.address}</p>
            <p>{member.city}</p>
            <p>{member.zip}</p>
            <p>{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersDirectory;
