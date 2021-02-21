export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60324e37550410917917820f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iettq8uz',
                  apiId: '1b7e8be6-1958-4dd8-a419-660ee20add26'
                },
                {
                  buildHookId: '60324e37258d66e786220b42',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kqihke3j',
                  apiId: '899e4a84-44ca-4292-893c-85a5c80f258d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richardsando/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kqihke3j.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
