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
    console.log(e);
    //把数据放到云数据库里
    const db = wx.cloud.database({});
    const collection = db.collection("tm_user");
    collection.add({
      data:{
        name:e.detail.userInfo.nickName,
        city:e.detail.userInfo.city,
        country:e.detail.userInfo.country,
        province:e.detail.userInfo.province,
        language:e.detail.userInfo.language,
      },
      success:function(res){
        console.log(res)
      }
    })
    //显示出来
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