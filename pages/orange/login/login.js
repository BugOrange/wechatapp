// pages/orange/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "username" : '',
    "password" : '',
    "nickname" : ''
  },


  loginaction: function(e) {
    // 获取当前全部的页面栈
   let arr = getCurrentPages()    

   // 获取到要逆向传值的上一个页面
     let lastPage = (arr.length >= 2) ? arr[arr.length - 2] : undefined
    // 判断拿到的上一个页面是不是我们要的页面 

     if (!!lastPage && lastPage.route == 'pages/index/index') {
        /* 
        这里我们就拿到了上一个页面的页面对象, 这里其实我们就可以使用lastPage做很多事情了, 
        例如直接操作lastPage.data, 修改上一个页面的数据  
        或者调用这个页面内的方法,
        我上一个页面预留了一个更新方法, 所以这里就直接用上一个页面调用数据刷新的方法, 我这里给赋值, 就可以携带数据回上一个页面了
        */
        lastPage.loginaction(this.data.nickname)
        // 返回上一个页面
        wx.navigateBack()      
      }
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

  }
})