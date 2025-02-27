const path = require('path');
const slash = require('slash');
const { kebabCase, uniq, get, compact, times } = require('lodash');

const conf = require('./config');

const POSTS_PER_PAGE = conf.postPerPage;
const cleanArray = arr => compact(uniq(arr));

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const [basePath, name] = fileNode.relativePath.split('/');
    slug = `/${basePath}/${name}/`;
  }

  if (slug) {
    // eslint-disable-next-line quotes
    createNodeField({ node, name: `slug`, value: slug });
  }
};

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programmatically create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const templates = ['blogPost', 'tagsPage', 'blogPage'].reduce(
      (mem, templateName) => {
        return Object.assign({}, mem, {
          [templateName]: path.resolve(
            `src/templates/${kebabCase(templateName)}.js`
          ),
        });
      },
      {}
    );

    graphql(
      `
        {
          posts: allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }

      const posts = result.data.posts.edges.map(p => p.node);

      // Create blog pages
      posts
        .filter(post => post.fields.slug.startsWith('/blog/'))
        .forEach(post => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.blogPost),
            context: {
              slug: post.fields.slug,
            },
          });
        });

      // Create tags pages
      posts
        .reduce(
          (mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.tags'))),
          []
        )
        .forEach(tag => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag,
            },
          });
        });

      // Create blog pagination
      const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
      times(pageCount, index => {
        createPage({
          path: `/blog/page/${index + 1}/`,
          component: slash(templates.blogPage),
          context: {
            skip: index * POSTS_PER_PAGE,
          },
        });
      });

      resolve();
    });
  });
};
