// pages/orange/newmine/newmine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nickname : {
      type: String,
      value: "点击登录"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  headtap : function(e) {
    wx.navigateTo({
      url: '/pages/orange/login/login',
    })
  }
  }
})
