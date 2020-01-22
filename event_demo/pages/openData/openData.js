// pages/openData/openData.js
const appid = 'wxf8bf4a58732b6e5d'
const secret = 'b3237ea5bfc4a401ebac35fedcdc9d6f'
let accessToken = ''
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userData: ''
  },
  nearByPoilist() {
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getnearbypoilist?page=1&page_rows=20&access_token='+ accessToken,
      success(res){
        console.log(res)
      }
    })
  },
  getPhoneNumber(e) {
    console.log(e, this.data.userData)
    var that = this;
    console.log(e.detail.errMsg == "getPhoneNumber:ok");
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      console.log('11111111111111112222222222')
      // wx.request({
      //   url: 'http://localhost/index/users/decodePhone',
      //   data: {
      //     encryptedData: e.detail.encryptedData,
      //     iv: e.detail.iv,
      //     sessionKey: that.data.session_key,
      //     uid: "",
      //   },
      //   method: "post",
      //   success: function (res) {
      //     console.log(res);
      //   }
      // })
    }
  },
  userLogin() {
    let that = this
    wx.login({
      success(res){
        // console.log(res)
        //换取openId
        wx.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${res.code}&grant_type=authorization_code`,
          success(res){
            console.log(res)
            that.setData({userData: res.data})
          }
        })
      }
    })
  },
  chooseLocation() {
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  getLocation() {
    //使用微信内置地图查看
    wx.getLocation({
      success: function(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude,longitude)
        //打开地图
        wx.openLocation({
          latitude,
          longitude,
          scale: 28
        })
      },
    })
  },
  getAdress() {
    wx.chooseAddress({
      success(res){
        console.log(res)
      }
    })
  },
  getUserInfo() {
    const accountInfo = wx.getAccountInfoSync()
    console.log(accountInfo.miniProgram.appId)
  },
  getAccessToken() {
    wx.request({
      url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
      success(res){
        console.log(res)
        accessToken = res.data.access_token
      }
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