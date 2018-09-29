export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }]

    ],

    routes: [{
        path: '/',
        component: './HelloWorld'
    }, {
        path: 'user',
        component: './user'
    }, {
        path: 'MyInput',
        component: './MyInput'
    }]
};