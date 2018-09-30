export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true
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
        component: './layout/index',
        routes: [{
            path: '/',
            component: './HelloWorld'
        }]
    }]
};