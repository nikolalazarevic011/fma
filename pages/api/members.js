// pages/api/members.js
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Retrieve the WordPress base URL from environment variables
  const wpBaseUrl = process.env.NEXT_PUBLIC_WP_URL;

  try {
    console.log(
      "Fetching members from:",
      `${wpBaseUrl}/wp-json/custom/v1/members`,
    );

    const response = await fetch(`${wpBaseUrl}/wp-json/custom/v1/members`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("WordPress API Response Status:", response.status);
    console.log("WordPress API Response Data:", data);

    if (response.ok) {
      // **Log sample member data to debug church field**
      if (data && data.length > 0) {
        console.log("Sample member data:", JSON.stringify(data[0], null, 2));
      }

      res.status(200).json(data);
    } else {
      console.error("WordPress API Error:", data);
      res
        .status(response.status)
        .json({ message: data.message || "Failed to fetch members" });
    }
  } catch (error) {
    console.error("Members API Error:", error);
    res.status(500).json({ message: error.message });
  }
}
