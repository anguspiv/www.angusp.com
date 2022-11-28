import ReactDOMServer from 'react-dom/server';
import { createElement } from 'react';
import { unified } from 'unified';
import parse from 'remark-parse';
import rehype from 'remark-rehype';
import react from 'rehype-react';
import slug from 'rehype-slug';
import headings from 'rehype-autolink-headings';
import { Link } from '@components/atoms/Link';
import { Divider } from '@components/atoms/Divider';
import { Image } from '@components/molecules/Image';

export async function markdownToHtml(markdown) {
  const file = unified()
    .use(parse)
    .use(rehype)
    .use(slug)
    .use(headings, {
      behavior: 'wrap',
    })
    .use(react, {
      createElement,
      components: {
        a: Link,
        hr: Divider,
        img: Image,
      },
    })
    .processSync(markdown);

  const string = ReactDOMServer.renderToStaticMarkup(file.result);

  return string;
}

export default markdownToHtml;
