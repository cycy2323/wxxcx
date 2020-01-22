// pages/webSocket/webSocket.js
let socketMsgQueue = ['hello']
function sendSocketMsg(msg) {
  // 发送数据
  wx.sendSocketMessage({
    data: msg,
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: ''
  },
  webScoketTap: function() {
    let that = this
    //连接
    wx.connectSocket({
      url: 'ws://121.40.165.18:8800',
      header: {
        'content-type': 'application/json'
      }
      // method: 'GET'
    })
    //监听
    wx.onSocketOpen(function(res){
      console.log('webSocket连接已打开')
      for (let i = 0; i < socketMsgQueue.length; i++){
        //发送数据
        sendSocketMsg(socketMsgQueue[i])
      }
        socketMsgQueue = []
    })
    //失败监听
    wx.onSocketError(() => {
      console.log('webSocket连接打开失败')
    })
    //监听服务器数据返回
    wx.onSocketMessage(function(res){
      console.log('收到服务器返回内容： ', res)
      that.setData({
        html: res.data
      })
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

  }
})