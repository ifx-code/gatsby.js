# Run

- Install gatsby globally : `npm install --g gatsby-cli`
- New project : `gatsby new project_folder_name`
- Install dependencies : `npm install`
- Build your app : `npm run build`
- *Update dependencies if needed* : `npm update`
- Application generated in `public` folder

# Notes

- In folder `src`, this is where all HTML / CSS goes.
- To have multiple pages in your project, you just create them in the `pages/src folder`. *i.e : (index.js, about.js, contact.js, blog.js)*.
- Sub-components are like inlcuding files in php, so create folder `src/components`, to put sub-components such as *(container.js, header.js, footer.js, nav.js)*
- For a global css, create `src/styles/global.css`, then in the **root**, create `gatsby-browser.js`.
- If your website is in a subdirectory of your domain, create `gatsby-config.js` in the root, add `pathPrefix: '/gatsby-js-dev'` in **module.exports**
- - Use the following command to build : `gatsby build --prefix-paths`