// pages/navigationBar/navigationBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  setNavigationBar: function() {
    console.log(1111111111111)
    //设置导航栏颜色
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    //动态设置当前页面的标题
    wx.setNavigationBarTitle({
      title: '我的微信界面',
    })
    //在当前页面显示导航条加载动画
    wx.showNavigationBarLoading()
    //在当前页面隐藏导航条加载动画
    setTimeout(() =>{
      wx.hideNavigationBarLoading()
    }, 3000)
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