Page({
  onShow:function(){
    setTimeout(function(){
      wx.switchTab({
        url: '../planPage/planPage',
      })
    },3000)
  }
})