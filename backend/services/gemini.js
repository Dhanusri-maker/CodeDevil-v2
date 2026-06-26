const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAIResponse(category, question) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

   const prompt = `
You are an expert ${category} programming assistant.

Answer the following programming question.

Question:
${question}

IMPORTANT RULES:
- Give the CODE first.
- Use proper Markdown code blocks with the language.
- After the code, provide Sample Output.
- Then provide Explanation.
- Then provide Time Complexity.
- Then provide Space Complexity.

Format exactly like this:

# Code

\`\`\`${category}
...
\`\`\`

# Sample Output

...

# Explanation

...

# Time Complexity

...

# Space Complexity

...
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response;
  } catch (error) {
    console.error(error);
    return "Error generating AI response.";
  }
}

module.exports = generateAIResponse;