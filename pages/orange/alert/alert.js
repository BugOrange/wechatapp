Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  hidealert: function (e) {
  },

  // 自定义弹框
  powerDrawer: function (e) {
    console.log(e) //打印出当前对象
    var currentStatu = e.currentTarget.dataset.statu; //获取statu属性值
    var currentNum = e.currentTarget.dataset.num;//获取num属性值
    currentNum = parseInt(currentNum, 10) //注意，这一步是将字符串转换为数字
    this.util(currentStatu, currentNum) //将参数引入util方法
  },
  util: function (currentStatu, currentNum) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    if (currentStatu == "close") {
        currentNum = wx.getSystemInfoSync().windowHeight
    }

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;
    console.log(currentNum)
    // 第3步：执行第一组动画 
    animation.opacity(0).translateY(currentNum).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画 
      animation.opacity(1).translateY(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },
})