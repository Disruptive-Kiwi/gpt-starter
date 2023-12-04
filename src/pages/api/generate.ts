// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateAction = async (req: NextApiRequest, res: NextApiResponse) => {
  const input = req.body.apiInput;
  console.log(input);

  // !STARTERCONF - change the following prompt based on your own use case
  const prompt = `${input}`;

  console.log(`Prompt being sent to OpenAI: ${prompt}`);

  try {
    const baseCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `${prompt}` }],
      temperature: process.env.MODEL_TEMPERATURE
        ? parseFloat(process.env.MODEL_TEMPERATURE)
        : 0.7,
      max_tokens: process.env.NUM_MAX_TOKENS
        ? parseInt(process.env.NUM_MAX_TOKENS)
        : 250,
    });

    const basePromptOutput = baseCompletion.choices[0]?.message?.content;
    console.log('\nSending response back to client 🚀');
    res.status(200).json({ output: { text: basePromptOutput } });
  } catch (err) {
    console.log(`Error occurred on the API side: ${err}`);
    res.status(500).json({ error: err });
  }
};

export default generateAction;
