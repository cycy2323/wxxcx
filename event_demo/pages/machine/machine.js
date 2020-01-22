// pages/machine/machine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  startCompass: function() {
    wx.startCompass({
      success() {
        wx.onCompassChange(function(res){
          console.log(res)
        })
      }
    })
  },
  endCompass: function () {
    wx.stopCompass({
      
    })
  },

})