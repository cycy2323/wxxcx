// pages/network/network.js
let downloadFile = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0
  },
  uploadImage: function() {
    //选择图片
    wx.chooseImage({
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        //上传
        wx.uploadFile({
          url: 'http://www.xxxxxxx',
          filePath: tempFilePaths[0],
          name: 'file',
          siccess: res => {
            console.log(res)
            wx.showModal({
              title: '提示',
              content: '上传完成',
            })
          }
        })
      },
    })
  },
  requestDown: function() {
    wx.request({
      url: 'http://www.chinaweb5.cn/index.php',
      success: res => {
        console.log(res)
      }
    })
  },
  downloadFile: function() {
    // 下载第一步，把网络文件存储到本地临时文件中
    const downloadTask = wx.downloadFile({
      url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      success: (res) => {
        console.log(res)
        downloadFile = res.tempFilePath
      }
    })
    //监控下载过程
    downloadTask.onProgressUpdate(res => {
      // console.log(res)
      this.setData({
        percent: res.progress
      })
    })
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