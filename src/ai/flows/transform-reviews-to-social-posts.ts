'use server';
/**
 * @fileOverview A flow that transforms client reviews into engaging social media posts, capturing the brand voice and incorporating brand colors.
 *
 * - transformReviewsToSocialPosts - A function that handles the transformation of reviews into social media posts.
 * - TransformReviewsToSocialPostsInput - The input type for the transformReviewsToSocialPosts function.
 * - TransformReviewsToSocialPostsOutput - The return type for the transformReviewsToSocialPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TransformReviewsToSocialPostsInputSchema = z.object({
  clientReview: z
    .string()
    .describe('The client review to be transformed into a social media post.'),
  brandColors: z
    .string()
    .describe("The brand's hex color codes to be incorporated into the post's background."),
  brandVoiceInstructions: z
    .string()
    .describe('Instructions on how to emulate the brand voice in the generated post.'),
});
export type TransformReviewsToSocialPostsInput = z.infer<
  typeof TransformReviewsToSocialPostsInputSchema
>;

const TransformReviewsToSocialPostsOutputSchema = z.object({
  socialMediaPost: z.string().describe('The generated social media post.'),
});
export type TransformReviewsToSocialPostsOutput = z.infer<
  typeof TransformReviewsToSocialPostsOutputSchema
>;

export async function transformReviewsToSocialPosts(
  input: TransformReviewsToSocialPostsInput
): Promise<TransformReviewsToSocialPostsOutput> {
  return transformReviewsToSocialPostsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'transformReviewsToSocialPostsPrompt',
  input: {schema: TransformReviewsToSocialPostsInputSchema},
  output: {schema: TransformReviewsToSocialPostsOutputSchema},
  prompt: `You are an expert social media manager specializing in creating engaging posts from client testimonials.

You will use this information to transform the review into a social media post that captures the brand voice and incorporates the brand colors into a visually appealing design.

Client Review: {{{clientReview}}}
Brand Colors: {{{brandColors}}}
Brand Voice Instructions: {{{brandVoiceInstructions}}}

Generate a social media post that is concise, engaging, and aligned with the brand's style.`,
});

const transformReviewsToSocialPostsFlow = ai.defineFlow(
  {
    name: 'transformReviewsToSocialPostsFlow',
    inputSchema: TransformReviewsToSocialPostsInputSchema,
    outputSchema: TransformReviewsToSocialPostsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
