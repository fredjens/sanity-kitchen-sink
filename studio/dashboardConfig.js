export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fabe0da1625f7ac093599bc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h1gy1m5v',
                  apiId: '8022027b-a3d1-4562-a279-8a8bc56044e0'
                },
                {
                  buildHookId: '5fabe0da1625f7a449359b02',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vkx35cbf',
                  apiId: 'd581351c-a24e-46da-a7ea-404288e744b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fredjens/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vkx35cbf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
