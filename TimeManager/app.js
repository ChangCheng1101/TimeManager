//app.js

App({
  
  onLaunch:function () {
    wx.cloud.init({
      env:'ccxcx-01b8d',
      traceUser:true  //将访问用户都记录下来
    });
    const db = wx.cloud.database({
      enc:"ccxcx"
    });
  },
  globalData: {
    userInfo: null,
  },
  onShareAppMessage: function () {
  },
  
})