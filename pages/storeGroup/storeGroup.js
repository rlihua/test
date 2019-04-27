// pages/storeGroup/storeGroup.js
import {get} from '../../http/api'
let regeneratorRuntime = require("../../utils/regenerator-runtime/runtime");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:null,
    longitude:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.positionAddress()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取门店
  async getStoreGroup() {
    let that = this,
        latitude = that.data.latitude,
        longitude = that.data.longitude
    /*await new Promise((resolve, reject) => {
      wx.request({
        url: 'https://qq.wxdw.top/mobile.php?act=module&name=small_order&do=getStores&weid=175',
        data: {
          currentTab: 0,
          lat: latitude,
          long: longitude,
          dining_mode: 1,
          join_type: 1
        },
        header: {
          'content-type': 'application/json'
        },
        success: res => {
          wx.hideToast()
          wx.hideLoading()
          wx.stopPullDownRefresh()
          console.log('!!!!!!!!!!!!!!!!!!!!1')
          that.setData({
            storeGroup: res['data']['message']['list'],//堂食的门店
            status: true
          })
          resolve(res)
        }
      })
    })
    console.log('*************')*/
    get('/mobile.php?act=module&name=small_order',{'do':'getStores','latitude':latitude,'longitude':longitude}).then( res => {
      that.setData({
        storeGroup:res['message']['list'],//堂食的门店
        status:true
      })
    }).catch( err => {
      console.log(err)
    })
  },
  //定位
  positionAddress() {
    let that = this
    wx.showToast({
      title: '定位中...',
      icon: 'none',
    })
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        console.log(res)
        let latitude = res.latitude,
            longitude = res.longitude
        that.setData({
          latitude:latitude,
          longitude:longitude
        })
        that.getStoreGroup()
          console.log('-------------------------')
      }
    })
  },
  //门店选择 触发事件
  selectStore(e) {
    let storeid = e.currentTarget.dataset.storeid,
        storeGroup = this.data.storeGroup
    for(let i in storeGroup){
      if(storeGroup[i]['storeid'] == storeid){
        storeGroup[i]['selected'] = 1
      }else{
        storeGroup[i]['selected'] = 0
      }
    }
    this.setData({
      storeGroup:storeGroup
    })
  }
})