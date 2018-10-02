export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]

    ],

    routes: [{
        path: 'user',
        component: './user'
    }, {
        path: 'MyInput',
        component: './MyInput'
    }, {
        path: '/',
        component: './Layout/Index',
        routes: [
            { path: './', component: 'Dashboard/PuzzleCardsNetwork' }, 
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' }, 
            { path: '/dashboard/workplace', component: 'Dashboard/WorkPlace'
        }
    ]
    }],
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
};