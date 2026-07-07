import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const index = posts.map((post) => {
    // Strip markdown from body for search
    const body = post.body
      .replace(/^---[\s\S]*?---/, '') // remove frontmatter
      .replace(/```[\s\S]*?```/g, ' ') // remove code blocks
      .replace(/[#*_`>\-\[\]\(\)]/g, ' ') // remove markdown syntax
      .replace(/\n+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 2000); // limit body length for index size

    return {
      title: post.data.title,
      description: post.data.description || '',
      tags: post.data.tags || [],
      url: `/posts/${post.slug}/`,
      body,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
