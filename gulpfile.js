const gulp = require("gulp");
//开启服务器
const connect = require("gulp-connect");
//跨域处理
const proxy = require("http-proxy-middleware");


gulp.task("server",function(){
	connect.server({
		root:"src",
		port:5050,
		livereload:true,
		middleware:function(){
			return [
				proxy("/SearchCompletion",{
					//代理的主机头  协议域名端口
					
					target:"http://www.wushang.com",
					changeOrigin:true
				}),
				proxy("/wsProductDetail",{
					//代理的主机头  协议域名端口
					
					target:"http://www.wushang.com",
					changeOrigin:true
				})
			]
		}
	})
})



gulp.task("watch-server",function(){
	gulp.watch("src/**/*",function(){
		gulp.src("src/**/*")
		.pipe(connect.reload())
	})
})

gulp.task("F5",["server","watch-server"])