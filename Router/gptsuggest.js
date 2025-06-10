const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;


router.post("/suggest", async (req, res) => {
  const { query } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mixtral-8x7b-instruct", 
        messages: [
          { role: "system", content: "You're a travel planner AI. Suggest amazing places based on user interests." },
          { role: "user", content: `Suggest one travel destinations in 1-line short and simple based on: ${query}` }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const suggestion = response.data.choices[0].message.content;
    res.json({ suggestion });
  } catch (err) {
    console.error("AI API error:", err.message);
    res.status(500).json({ error: "Failed to get suggestion." });
  }
});

module.exports = router;
