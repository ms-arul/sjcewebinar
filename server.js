const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/translate", async (req, res) => {
  const { text, sourceLang, targetLang } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-4",
        prompt: `Translate the following text from ${sourceLang} to ${targetLang}: ${text}`,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `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`, // Add your API Key here
        },
      }
    );

    const translatedText = response.data.choices[0]?.text.trim();
    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Translation failed. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
