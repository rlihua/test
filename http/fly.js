var Fly = require("../libs/wx.js") //wx.js为flyio的微信小程序入口文件
import config from "./config.js"
var fly = new Fly(); //创建fly实例
//添加请求拦截器
fly.interceptors.request.use((config,promise)=>{
    wx.showLoading({
      title: config.body.title || '玩命加载中...',
      mask: true
    })
    //给所有请求添加自定义header
    config.headers["X-Tag"]="flyio";
    return config;
})


// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
      console.log('数据流')
      console.log(response)
      console.log(response.data)
    wx.hideLoading()
    return response.data // 请求成功之后将返回值返回
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    //console.log(err)
    wx.hideLoading()
  	wx.showToast({
  		title:'网络不流畅，请稍后再试！',
  		icon:'none'
  	})
  }
)
//配置请求基地址

fly.config.baseURL = config.HOST
fly.config.timeout = 10000
fly.config.params = {'title':'玩命加载中....','storeid':'1134','weid':'175'}

export default fly
