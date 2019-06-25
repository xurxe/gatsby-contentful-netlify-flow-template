const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
    {
        allContentfulPage {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    `).then(result => {
        result.data.allContentfulPage.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                    slug: node.id,
                },
            });
        });
    });
};