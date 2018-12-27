1、 webpack

{
    // 入口文件
    entry： '文件路径'，
    // 输出文件配置
    output: {
        filename: '输出文件的名称'，
        path: '输出文件的路径'
    }，
    module: {
        //配置解析文件的属性
        rules: [
            {
                test: /\.css$/ ，  //利用正则匹配对应文件 来解析
                use: ['style-loader', 'css-loader'] //解析所用依赖 
            }，
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss/,// 此解析需注意  依赖需要下载--》sass-loader、node-sass俩都得下
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }，
    plugins: [
        new HtmlWebpackPlugin({
            title: ''// 设置生成HTML文件的title属性，
            filename: ''//设置生成的html文件名，
            template: ''//设置生成文件的一个模板路径
        })，

        // 搭配devServer来实现热启动和热加载
        new webpack.NamedModulesPlugin(),
        new webpack.HotReplaceModulesPlugin()
    ]，
    devServer: {
        contentBase: './dist'// 启动服务时需要读取的文件路径
        before(app) {// 可以定义前端需要请求的数据接口
            app.get('/data', (req, res) => {
                res.json(数据)
            })
        }
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    }
}





// vue

// 指令： v-bind/:
//        v-on /@
//        v-if / v-else-if / v-else
//        v-for
//        v-show
//        v-html 
//        v-text



//         v-model  //双向数据绑定

// 生命周期

//beforeCreate实例之前
//created实例创建之后
//beforeMount 渲染Dom之前
//mounted渲染Dom之后
//beforeUpdate 修改数据之前
//updated 修改数据之后
//beforeDestroy 组件销毁之前
//destroyed 组件销毁之后



//计算属性：computed有一个缓存功能    在依赖属性改变的时候就会重新触发、只要依赖不改变重新渲染的话会直接拿取缓存内的值不需重新执行方法

//methods:{}定义方法


// 全局组件： Vue.component('组件名称'， {组件配置})
// 局部组件： {
//     components: {
//         '组件名称'： {组件配置}
//     }
// }


//插槽：<slot></slot>  接收调用者传进来的元素结构，也可设置默认值