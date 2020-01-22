// pages/record/record.js
let tempFiledPath = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  record: function() {
    console.log('录音开始')
    wx.startRecord({
      success: res => {
        console.log(res)
        tempFiledPath = res.tempFilePath
      }
    })
    setTimeout(() => {
      console.log('停止录音')
      wx.stopRecord()
    }, 10000)
  },
  playRecord: function() {
    //播放音频
    wx.playVoice({
      filePath: tempFiledPath,
    })
  },
  pauseVoice: function() {
    //暂停音频
    wx.pauseVoice()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //背景音频
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '未知'
    // 设置了 src 之后会自动播放
    // backgroundAudioManager.src = 'http://mpge.5nd.com/2018/2018-10-29/88088/1.mp3'
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})