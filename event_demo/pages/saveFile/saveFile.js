// pages/saveFile/saveFile.js
let tempPath = ''
let savedList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  savedList: function() {
    wx.getSavedFileList({
      success(res) {
        console.log(res, 'getSavedFileList')
        savedList = res.fileList
      }
    })
  },
  savedFileInfo: function () {
    wx.getSavedFileInfo({
      filePath: savedList[0].filePath,
      success(res) {
        console.log(res, 'getSavedFileInfo')
      }
    })
  },
  save: function() {
    //保存
    wx.saveFile({
      tempFilePath: tempPath,
      success (res) {
        console.log(res, 'save')
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  takePhoto: function() {
    //拍照
    this.ctx.takePhoto({
      quality: 'high',
      success (res) {
        console.log(res, 'takePhoto')
        tempPath = res.tempImagePath
        //读取临时缓存文件信息
        wx.getFileInfo({
          filePath: tempPath,
          success (res) {
            console.log(res, 'getFileInfo')
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
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