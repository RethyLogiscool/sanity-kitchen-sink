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
                  buildHookId: '6245d6e2fd628411123ceab5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wwwnspeu',
                  apiId: 'bd14d269-e0a7-4e24-bb00-b0e48d7bb0bb'
                },
                {
                  buildHookId: '6245d6e3fd62840d9f3cefdd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sxmo1jbi',
                  apiId: 'b9ae2396-e1b5-4fff-88c0-c75defb49a81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RethyLogiscool/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sxmo1jbi.netlify.app', category: 'apps'}
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
