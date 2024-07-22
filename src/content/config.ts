// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    creator: z.string(),
    hidden: z.boolean()
  }),
});

const toolsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    creator: z.string(),
    hidden: z.boolean()
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  articles: articlesCollection,
  tools: toolsCollection,
};
