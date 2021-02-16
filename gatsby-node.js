const path = require('path');

exports.onCreateNode = ({ node, getNode }) => {
  const fileNode = getNode(node.parent);
  if (!fileNode) {
    return null;
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const mainTemplate = path.resolve('src/templates/page.js');

  const pagesQuery = await graphql(
    `
      query {
        pagesJson {
          pageInfo {
            seoTitle
            seoDescription
            navigationLinks {
              name
            }
            main {
              typedTextContent
              firstMainText
              secondMainText
              optionalMainText
            }
            qualifications {
              title
              languagesTitle
              languages {
                name
                level
              }
              frameworksTitle
              frameworks {
                name
                level
              }
            }
            projects {
              title
              projectsList {
                name
                date
                link
                techStack
              }
              descriptions
            }
            education {
              title
              educationList {
                name
                faculty
                date
                university
                city
                thesisName
              }
            }
            job {
              title
              jobList {
                company
                position
                city
                date
                techStack
              }
            }
            contact {
              contactLinks {
                github
                linkedin
                mail
              }
            }
          }
        }
      }
    `
  );

  if (pagesQuery.errors) {
    throw pagesQuery.errors;
  }

  const {
    pagesJson: { pageInfo },
  } = pagesQuery.data;

  createPage({
    path: '/',
    component: mainTemplate,
    context: { ...pageInfo },
  });
};

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'global.GENTLY': false,
      }),
    ],
  });
};
