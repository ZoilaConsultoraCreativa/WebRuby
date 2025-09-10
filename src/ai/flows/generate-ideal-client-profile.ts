// src/ai/flows/generate-ideal-client-profile.ts
'use server';

/**
 * @fileOverview Generates an ideal client profile based on user input.
 *
 * - generateIdealClientProfile - A function that generates the ideal client profile.
 * - IdealClientProfileInput - The input type for the generateIdealClientProfile function.
 * - IdealClientProfileOutput - The return type for the generateIdealClientProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IdealClientProfileInputSchema = z.object({
  leadershipExperience: z
    .string()
    .describe(
      'Describe your experience as a leader, including the size of teams you have led and the challenges you have faced.'
    ),
  communicationChallenges: z
    .string()
    .describe(
      'What are the biggest communication challenges you face in your role?'
    ),
  aspirations: z
    .string()
    .describe(
      'What are your professional aspirations and what kind of impact do you want to make?'
    ),
  previousSolutions: z
    .string()
    .describe(
      'What solutions have you tried in the past to address your challenges, and what were the results?'
    ),
  idealSupport: z
    .string()
    .describe(
      'What kind of support or guidance do you believe would be most beneficial to you?'
    ),
});
export type IdealClientProfileInput = z.infer<typeof IdealClientProfileInputSchema>;

const IdealClientProfileOutputSchema = z.object({
  profileSummary: z
    .string()
    .describe(
      'A summary of the ideal client profile, including key characteristics, challenges, and goals.'
    ),
  suitabilityAssessment: z
    .string()
    .describe(
      'An assessment of how well Ruby Villarroel’s services align with the client’s needs and goals.'
    ),
  keyRecommendations: z
    .string()
    .describe(
      'Key recommendations for the client based on their profile, including specific programs or services that may be a good fit.'
    ),
});
export type IdealClientProfileOutput = z.infer<typeof IdealClientProfileOutputSchema>;

export async function generateIdealClientProfile(
  input: IdealClientProfileInput
): Promise<IdealClientProfileOutput> {
  return generateIdealClientProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'idealClientProfilePrompt',
  input: {schema: IdealClientProfileInputSchema},
  output: {schema: IdealClientProfileOutputSchema},
  prompt: `You are an expert executive coach specializing in communication and leadership.

  Based on the following information provided by a prospective client, generate an ideal client profile and assess the suitability of Ruby Villarroel's services for their needs.

  Leadership Experience: {{{leadershipExperience}}}
  Communication Challenges: {{{communicationChallenges}}}
  Aspirations: {{{aspirations}}}
  Previous Solutions: {{{previousSolutions}}}
  Ideal Support: {{{idealSupport}}}

  Provide a profile summary, a suitability assessment, and key recommendations.
  Follow the brand voice described below. The voice is clear, empathetic, and professional. It's approachable but not condescending, conveying the strength of someone who has experienced what they teach. The language is precise, emotionally intelligent, and direct, avoiding unnecessary embellishments or empty technical jargon.

  The persona believes:
  *Your leadership is real, don't doubt it anymore.
  *Recognize your value and power, communicate with confidence.
  *Lead strategically from who you already are.
  `,
});

const generateIdealClientProfileFlow = ai.defineFlow(
  {
    name: 'generateIdealClientProfileFlow',
    inputSchema: IdealClientProfileInputSchema,
    outputSchema: IdealClientProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
