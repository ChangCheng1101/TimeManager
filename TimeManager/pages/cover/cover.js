Page({
  onShow:function(){
    setTimeout(function(){
      wx.switchTab({
        url: '../planPage/planPage',
      })
    },4000)
  },
  onShareAppMessage: function () {
    var shareObj = {
      title: '',
      path: '/pages/cover/cover',
      imageUrl: '',
    };
    return shareObj;
  }
})