// pages/list-1/list-1.js
import {get} from '../../http/api'
const app = getApp()
let pageCtx = Page({
    data:{
        basData:[],
        orderDetails:[],
        no:'',
        isShow:false
    },
    onLoad:function(options){
        app.globalData.storeid = options.storeid
        app.globalData.dining_mode = options.dining_mode
        app.globalData.orderid = options.orderid
        /*app.globalData.storeid = '1134'
        app.globalData.dining_mode = '2'
        app.globalData.orderid = '36495'*/
        this.getOrderData()

    },
    //  获取订单数据
    getOrderData(){
        /*get('',{orderid:orderid}).then( request => {

        }).catch( error => {

        })
        wx.showLoading({
            title: '努力加载中',
            mask:true
        })

        let orderid = app.globalData.orderid,that = this
        wx.request({
            url: config.service.orderInfoUrl,
            method: 'POST',
            data:{
                orderid:orderid,
                storeid:app.globalData.storeid,
                dining_mode:app.globalData.dining_mode
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                wx.hideLoading()
                that.setData({
                    isShow:true
                })
                let userInfo = res['data']['message']['userInfo']
                that.setData({
                    orderDetails:res['data']['message']['orderInfo'],
                    basData:userInfo,
                    no:res['data']['message']['no']
                })
            }
        })*/
    },
})