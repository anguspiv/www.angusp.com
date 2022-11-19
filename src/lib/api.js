const matter = require('gray-matter');
const readingTime = require('reading-time');
const fs = require('fs');
const path = require('path');

const postDir = path.join(process.cwd(), '_posts');
const tagDir = path.join(process.cwd(), '_tags');
const contentDir = path.join(process.cwd(), '_content');

export function getPostSlugs() {
  return fs.readdirSync(postDir);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'readingTime') {
      items[field] = readingTime(content);
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const hasTag = (post, tag) =>
  post.tags && post.tags.map((postTag) => postTag.toLowerCase().replace(/\s/g, '-')).includes(tag);

export function getTagBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(tagDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }

    if (field === 'posts') {
      items[field] = getAllPosts(['title', 'slug', 'date', 'description', 'tags']).filter((post) =>
        hasTag(post, realSlug),
      );
    }

    if (field === 'postCount') {
      items[field] = getAllPosts(['title', 'slug', 'date', 'description', 'tags']).filter((post) =>
        hasTag(post, realSlug),
      ).length;
    }
  });

  return items;
}

export function getTagSlugs() {
  return fs.readdirSync(tagDir);
}

export function getAllTags(fields = []) {
  const slugs = getTagSlugs();

  const tags = slugs
    .map((slug) => getTagBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((tag1, tag2) => (tag1.date > tag2.date ? -1 : 1));
  return tags;
}

export function getPostsByTag(tag, fields = []) {
  const allPosts = getAllPosts(fields);
  const posts = allPosts.filter((post) => hasTag(post, tag));
  return posts;
}

export function getContentBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}
