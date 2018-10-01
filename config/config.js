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
            { path: './', component: 'Dashboard/PuzzleCards' }, 
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' }, 
            { path: '/dashboard/workplace', component: 'Dashboard/WorkPlace'
        }
    ]
    }]
};