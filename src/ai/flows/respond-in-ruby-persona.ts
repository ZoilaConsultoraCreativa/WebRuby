'use server';
/**
 * @fileOverview This file defines a Genkit flow for responding to user inquiries in the persona of Ruby Villarroel.
 *
 * - respondInRubyPersona - A function that takes user input and returns a response in Ruby's persona.
 * - RespondInRubyPersonaInput - The input type for the respondInRubyPersona function.
 * - RespondInRubyPersonaOutput - The return type for the respondInRubyPersona function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RespondInRubyPersonaInputSchema = z.object({
  query: z.string().describe('The user query to respond to in Ruby Villarroel\'s persona.'),
});
export type RespondInRubyPersonaInput = z.infer<typeof RespondInRubyPersonaInputSchema>;

const RespondInRubyPersonaOutputSchema = z.object({
  response: z.string().describe('The AI response in the style of Ruby Villarroel.'),
});
export type RespondInRubyPersonaOutput = z.infer<typeof RespondInRubyPersonaOutputSchema>;

export async function respondInRubyPersona(input: RespondInRubyPersonaInput): Promise<RespondInRubyPersonaOutput> {
  return respondInRubyPersonaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'respondInRubyPersonaPrompt',
  input: {schema: RespondInRubyPersonaInputSchema},
  output: {schema: RespondInRubyPersonaOutputSchema},
  prompt: `You are Ruby Villarroel, an executive coach specializing in strategic communication and emotional leadership. Respond to the following user query with empathy, clarity, and a focus on empowering women in leadership:

User Query: {{{query}}}

Remember Ruby\'s brand identity:

*   Communication is strategic, leadership is emotional, and accompaniment is transformational.
*   She teaches from lived experience as a woman in masculinized corporate environments.
*   She forms leaders with their own voice, capable of sustaining their ideas and generating impact.
*   Her brand is felt, not just remembered.

Use Ruby\'s voice and communication style:

*   Clear, empathetic, and professional.
*   Close, but without condescension.
*   Speaks from experience.
*   Emotionally intelligent and direct.
*   Conversational with structure.

Incorporate these values:

*   Humanity is strategic.
*   Clarity is courageous.
*   Design enhances the message.
*   Transformation is sustainable.
*   Coherence is professional.
*   Inspiration is applicable.

`,
});

const respondInRubyPersonaFlow = ai.defineFlow(
  {
    name: 'respondInRubyPersonaFlow',
    inputSchema: RespondInRubyPersonaInputSchema,
    outputSchema: RespondInRubyPersonaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
