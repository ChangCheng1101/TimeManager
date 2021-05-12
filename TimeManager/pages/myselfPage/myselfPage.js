// pages/myselfPage/myselfPage.js
const app = getApp();
Page({
  data:{
      nickname:"",
      avatarurl:"",
      openid:""
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
    const db = wx.cloud.database({});
    const collection = db.collection("tm_user");
    const _ = db.command;
    console.log(e);
    //使用云函数登陆获取用户openid
    wx.cloud.callFunction({
      name:"login",
      success:res=>{
        console.log("SUCCESS"),
        this.setData({
          openid:res.result.openid,
          nickname: e.nickName,
          avatarurl: e.avatarUrl
        }),
        console.log(this.data.openid),
        console.log(this.data.nickname)
      }
    })
    //对登陆的用户进行检查避免数据库中有多余的用户信息
    collection.where({
      _openid:_.in(this.data.openid)
    }).get({
      success:res=>{
        console.log("yeah")
        console.log(res)
        if(res.data.length == 0){
          //把数据放到云数据库里
          collection.add({
            data:{
              name:e.nickName,
              city:e.city,
              country:e.country,
              province:e.province,
              language:e.language,
            },
            success:function(res){
              console.log(res)  
            }
          })
        }
        wx.showToast({
          title: '登陆成功',
          duration:1000,
        })
        app.globalData.isLogin = "true"
        console.log(app.globalData.isLogin);
      },
    })
  },
  onGetUserProfile:function(){
    wx.getUserProfile({
      desc:"用于完善用户资料",
      success:res=>{
        console.log(res)
        this.onGetUserInfo(res.userInfo);
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  onShareAppMessage:function(){
    
  }
})