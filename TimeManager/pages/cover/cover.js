Page({
  onShow:function(){
    setTimeout(function(){
      wx.switchTab({
        url: '../myselfPage/myselfPage',
      })
    },3000)
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