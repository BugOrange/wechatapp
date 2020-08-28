// pages/orange/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    background: ['class1', 'class2', 'class3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bannerindexchange(e) {
      // console.log(e.detail.current)
      this.triggerEvent('myevent',this.data.background[e.detail.current])
    },
  }
})
