// pages/myselfPage/myselfPage.js
Page({
  data:{
      nickname:"",
      avatarurl:"",
    
  },
  CopyLink(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success:res => {
        wx.showToast({
          title: '已复制',
          duration:1000,
        })
      }
    })
  },
  onGetUserInfo:function(e){
    var un = e.detail.userInfo.nickName;
    var ava = e.detail.userInfo.avatarUrl;
    var nick = 'nickname';
    var avatar = 'avatarurl';
    console.log(un);
    this.setData({
        [nick]:un,
        [avatar]:ava,
      })
    console.log(ava);
    wx.showToast({
      title: '登陆成功',
      duration:1000,
    })
  },
  onShareAppMessage:function(){
    
  }
})