import { createElement, Fragment } from 'react';
import { unified } from 'unified';
import parse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeReact from 'rehype-react';
import stringify from 'rehype-stringify';
import { Link } from '@components/atoms/Link';

export async function markdownToHtml(markdown) {
  const result = unified()
    .use(parse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeReact, {
      createElement,
      Fragment,
      a: Link,
    })
    .use(stringify)
    .processSync(markdown);

  return result.toString();
}

export default markdownToHtml;
