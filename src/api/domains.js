import axios from "axios";

const TOKEN = "pqwQmF7PjGIZzorgNn9WLjkR";

export const fetchDomains = async () => {
  await axios
    .get("https://api.vercel.com/v5/domains?limit=20", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    .then((response) => {
      // Handle successful response
      return response.data;
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
    });
};
