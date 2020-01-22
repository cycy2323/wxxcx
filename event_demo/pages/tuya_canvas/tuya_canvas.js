// pages/tuya_canvas/tuya_canvas.js
Page({
  startX: 0,
  startY:0,

  /**
   * 页面的初始数据
   */
  data: {
    pen: 2,
    color: '#00ff00'
  },
  colorSelect: function(e) {
    this.setData({
      color: e.currentTarget.dataset.param
    })
  },
  penSelect: function(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)
    })
  },

  touchStart: function(e) {
    // console.log(e)
    // 获取当前坐标位置
    this.startX = e.changedTouches[0].x
    this.startY = e.changedTouches[0].y
    //创建上下文对象
    this.context = wx.createContext()
    //设置颜色
    this.context.setStrokeStyle(this.data.color)
    //设置笔触
    this.context.setLineWidth(this.data.pen)
    //设置笔边（圆角或方角）
    this.context.setLineCap('round')
    //开始绘制
    this.context.beginPath()
  },

  touchMove: function (e) {
    // console.log(e, '999')
    //获取移动后新坐标
    let startX1 = e.changedTouches[0].x
    let startY1 = e.changedTouches[0].y
    //设置画笔移动到起始点
    this.context.moveTo(this.startX,this.startY)
    //绘制一条到x1,y1的直线
    this.context.lineTo(startX1,startY1)
    //进路径描边
    this.context.stroke()
    //重新设置坐标
    this.startX = startX1
    this.startY = startY1
    //绘制
    wx.drawCanvas({
      canvasId: 'myCanvas',
      reserve: true,
      actions: this.context.getActions() //获取绘制动作数组
    })
  },
  touchEnd: function (e) {

  },
})