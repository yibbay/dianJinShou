module.exports = {
	
	//编写配置 webpack 代替（gulp+browserify）
	//基于配置的构建工具
	
	//1.配置入口文件读入通过entry
	entry:'./js/app.js',
	//2.配置输入参数 输出 最终被webpack 处理合并后的代码
	
	//有其它方法添加依赖库，具体使用查看相关文档??
	
	output:{
		path:'./app',//输出路径，
		filename:'main.min.js'//输出名字
	},
	//配置使用什么loader来处理我们引入入口文件
	module:{
		//定义使用哪种loader
		loaders:[
		{
			test:/\.js$/,
			loader:'jsx-loader',//指的是我们使用具体的加载器
			// {test: /\.js$/, loader: "babel"},
     // {test: /\.css$/, loader: "style!css"},
      //{test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      //{test: /\.scss$/, loader: "style!css!sass"}
		},
//		{
//			test:/\.css$/,
//			loader:'style-loader'
//		}
		]
	}
	
};



