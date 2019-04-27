import {get} from '../../http/api'
// pages/orderGroup/orderGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*titleStyle:{
      'color':'#f60',
      'font-size':'16px'
    },*/
    titleStyle: 'color:#f60;font-size:16px',
    orderGroup: [
      {
        'orderDate': {
          'title': '取餐号码',
          'value': '2019-01-01'
        },
        'status': {
          'title': '订单状态',
          'value': 1
        },
        'orderSn': {
          'title': '订单1',
          'value': '订单1'
        },
        'id': {
          'title': '订单id',
          'value': '1'
        },
        'totalprice': {
          'title': '支付金额',
          'value': 11
        },
        'paytype': {
          'title': '支付方式',
          'value': '微信支付'
        },
      },{
        'orderDate': {
          'title': '取餐号码',
          'value': '2019-01-02'
        },
        'status': {
          'title': '订单状态',
          'value': 2
        },
        'orderSn': {
          'title': '订单2',
          'value': '订单2'
        },
        'id': {
          'title': '订单id',
          'value': '2'
        },
        'totalprice': {
          'title': '支付金额',
          'value': 22
        },
        'paytype': {
          'title': '支付方式',
          'value': '微信支付'
        },
      },{
        'orderDate': {
          'title': '取餐号码',
          'value': '2019-01-03'
        },
        'status': {
          'title': '订单状态',
          'value': 3
        },
        'orderSn': {
          'title': '订单3',
          'value': '订单3'
        },
        'id': {
          'title': '订单id',
          'value': '3'
        },
        'totalprice': {
          'title': '支付金额',
          'value': 33
        },
        'paytype': {
          'title': '支付方式',
          'value': '储值卡支付'
        },
      },
    ],
    isShow:false,
    selectId:''
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
  //删除
  delOrder:function(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    this.setData({
      isShow:true,
      selectId:id
    })
  },
  //取消事件
  _cancelEvent(){
    console.log('你点击了取消');
  },
  //确认事件
  _confirmEvent(e){
    console.log('你点击了确定');
    let that = this
    get('/mobile.php?act=module&name=small_order',{'rul':123,'do':'getStoreList'}).then( res => {
      console.log('删除成功')
      that.removeData()
    }).catch( err => {
      console.log('失败')
      console.log(err)
    })
  },
  removeData(){
    let that = this,
        selectId = that.data.selectId,
        orderGroup = that.data.orderGroup
    orderGroup = orderGroup.filter( (item,index) => {
      return item.id.value != selectId
    })
    that.setData({
      orderGroup:orderGroup
    })
  }
  
})