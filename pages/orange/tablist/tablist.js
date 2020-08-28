// pages/orange/tablist/tablist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleArray: ["全部订单","待支付","已取消","已入住"],
    time: 30 * 60 * 1000,
    timeData: {},
    /*
    paystatu:  unpaid  canceled finished
    */
    list : [
      {
        "id" : "1",
        "name" : "深圳华子大酒店",
        "roomLevelname" : "高级大床房",
        "price" : "999",
        "iconurl" : "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2964062487,143696455&fm=58&s=3A63CA1684218D03104BF2DC0200C0BA&bpow=121&bpoh=75",
        "paystatu" : "unpaid",
        "reservetime" : "02月02日-02月03日",
        "days" : "1",
        "paytimeRemaining" : 1800000,
      },
      {
        "id" : "1",
        "name" : "深圳丽枫酒店",
        "roomLevelname" : "高级大床房",
        "price" : "888",
        "iconurl" : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598507757165&di=0018bc31bf0757a05ef078ebe33329fa&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Ffd%2Fhotel%2Fg5%2FM07%2F9F%2FA1%2FCggYsFbD172AE1yVAAFh2pFE5J8596_550_412.jpg",
        "paystatu" : "finished",
        "reservetime" : "02月03日-02月05日",
        "days" : "2",
        "paytimeRemaining" : "3000",
      },
      {
        "id" : "1",
        "name" : "深圳7天酒店",
        "roomLevelname" : "高级大床房",
        "price" : "321",
        "iconurl" : "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3695295843,720470850&fm=26&gp=0.jpg",
        "paystatu" : "canceled",
        "reservetime" : "02月03日-02月04日",
        "days" : "1",
        "paytimeRemaining" : "3000"
      },
      {
        "id" : "1",
        "name" : "深圳维也纳酒店",
        "roomLevelname" : "高级大床房",
        "price" : "931",
        "iconurl" : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598507770582&di=d0f9f0803fc88c31e4171d6f69c243c8&imgtype=0&src=http%3A%2F%2Fbjcache.leju.com%2Fzxjiaju%2Fzx_pic%2F20150710%2F2a%2F35%2F559f89811a23406c8700.jpg",
        "paystatu" : "canceled",
        "reservetime" : "02月04日-02月05日",
        "days" : "1",
        "paytimeRemaining" : "3000"
      },
      {
        "id" : "1",
        "name" : "深圳拓邦大酒店",
        "roomLevelname" : "高级大床房",
        "price" : "123",
        "iconurl" : "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1381652287,662803494&fm=26&gp=0.jpg",
        "paystatu" : "unpaid",
        "reservetime" : "02月06日-02月07日",
        "days" : "1",
        "paytimeRemaining" : "3000"
      },
      {
        "id" : "1",
        "name" : "深圳达实大酒店",
        "roomLevelname" : "高级大床房",
        "price" : "99",
        "iconurl" : "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=320546477,2096553827&fm=26&gp=0.jpg",
        "paystatu" : "finished",
        "reservetime" : "02月02日-02月03日",
        "days" : "1",
        "paytimeRemaining" : "3000"
      },
    ],
  
  },
  

  celldidclick: function (e) {
    var release = e.currentTarget.dataset['celldata']
    wx.navigateTo({
      url: '/pages/orange/orderdetail/orderdetail?release=' + encodeURIComponent(JSON.stringify(release)),
    })
  },

  paymentDidClick: function(e) {
    var release = e.currentTarget.dataset['celldata']
    wx.navigateTo({
      url: '/pages/orange/payment/payment?release=' + encodeURIComponent(JSON.stringify(release)),
    })
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
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
})