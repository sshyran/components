export default {
  props: {
    groups: [
      {
        title: 'LMS configuration',
        subtitle: 'Configure the coorpacademy integration to LMS',
        fields: [
          {
            type: 'slider',
            tabProps: [
              {
                title: 'CSOD'
              },
              {
                title: 'SAP'
              },
              {
                title: 'XAPI'
              }
            ],
            slides: [
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    value: true,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'text',
                    title: 'URL',
                    placeholder: 'https://some.fake.csod.hostname',
                    // description: 'This should explain',
                    required: true,
                    value: 'https://partner0125.csod.com',
                    onChange: () => console.log('dispatch URL')
                  },
                  {
                    type: 'text',
                    title: 'Client ID',
                    // description: 'This should explain',
                    required: true,
                    value: 'Some-client-id',
                    onChange: () => console.log('dispatch Client ID')
                  },
                  {
                    type: 'text',
                    title: 'Client Secret',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Client Secret')
                  },
                  {
                    type: 'text',
                    title: 'Provider',
                    description: 'This is the name you gave to Coorpacademy in CSOD.',
                    required: true,
                    value: 'COORPACADEMY',
                    onChange: () => console.log('dispatch Provider')
                  },
                  {
                    type: 'switch',
                    title: 'Course',
                    value: true,
                    onChange: () => console.log('dispatch Course')
                  },
                  {
                    type: 'switch',
                    title: 'Level',
                    value: true,
                    onChange: () => console.log('dispatch Level')
                  },
                  {
                    type: 'switch',
                    title: 'Chapter',
                    value: false,
                    onChange: () => console.log('dispatch Chapter')
                  }
                ]
              },
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    value: false,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'text',
                    title: 'Contact email address',
                    placeholder: '',
                    description:
                      'The email address we should notify when new content has been exported.',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Email address')
                  },
                  {
                    type: 'text',
                    title: 'URL',
                    placeholder: 'https://some.fake.sap.hostname',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch URL')
                  },
                  {
                    type: 'text',
                    title: 'Client ID',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Client ID')
                  },
                  {
                    type: 'text',
                    title: 'Client Secret',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch ClientSecret')
                  },
                  {
                    type: 'text',
                    title: 'Scope User ID',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Scope user ID')
                  },
                  {
                    type: 'text',
                    title: 'Scope Company ID',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Scope Company ID')
                  },
                  {
                    type: 'text',
                    title: 'Provider',
                    description: 'This is the name you gave to Coorpacademy in CSOD.',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Provider')
                  },
                  {
                    type: 'switch',
                    title: 'Course',
                    value: false,
                    onChange: () => console.log('dispatch Course')
                  },
                  {
                    type: 'switch',
                    title: 'Level',
                    value: false,
                    onChange: () => console.log('dispatch Level')
                  },
                  {
                    type: 'switch',
                    title: 'Chapter',
                    value: false,
                    onChange: () => console.log('dispatch Chapter')
                  }
                ]
              },
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    value: false,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'text',
                    title: 'URL',
                    placeholder: 'https://some.fake.csod.hostname',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch URL')
                  },
                  {
                    type: 'text',
                    title: 'Username',
                    // description: 'This should explain',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Username')
                  },
                  {
                    type: 'text',
                    title: 'Password',
                    description: 'this should be an input type password',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Password')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};