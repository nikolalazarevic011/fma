export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { username, password, email } = req.body;
  
    try {
      const response = await fetch('http://fma.local/wp-json/wp/v2/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ message: data.message });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  