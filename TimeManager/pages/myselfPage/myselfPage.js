// pages/myselfPage/myselfPage.js
Page({
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
  LoginRegister(){
    wx.showActionSheet({
      itemList: ['登陆', '注册'],
      success(res) {
       if(res.tapIndex == 0){
         wx.navigateTo({
           url: '../login/login',
         })
       }else{
         wx.navigateTo({
           url: '../register/register',
         })
       }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }
})