// pages/planPage/planPage.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details_1:[],
    plans_1:[],
    currentSwiperIndex:0,
    swiperList:[{
      id : 1,
      type : 'image',
      url:'cloud://ccxcx-01b8d.6363-ccxcx-01b8d-1301490213/images/img1.jpg',
    },
    {
      id: 2,
      type: 'image',
      url: 'cloud://ccxcx-01b8d.6363-ccxcx-01b8d-1301490213/images/img2.jpg',
    },
    {
      id: 3,
      type: 'image',
      url: 'cloud://ccxcx-01b8d.6363-ccxcx-01b8d-1301490213/images/img3.jpg',
    },
    {
      id: 4,
      type: 'image',
      url: 'cloud://ccxcx-01b8d.6363-ccxcx-01b8d-1301490213/images/img4.jpg',
    },
    {
      id: 5,
      type: 'image',
      url: 'cloud://ccxcx-01b8d.6363-ccxcx-01b8d-1301490213/images/img5.jpg',
    },
    {
      id: 6,
      type: 'image',
      url: 'cloud://ccxcx-01b8d.6363-ccxcx-01b8d-1301490213/images/img6.JPG',
    }]
  },
  //让下面的点可以动
  swiperBindChange(e){
    this.setData({
      currentSwiperIndex: e.detail.current,
    }) 
  },
  //下载轮播图中的图片
  fileLoad(e){
    console.log(e);
    var that = this;
    var index = this.data.currentSwiperIndex;
    var id = that.data.swiperList[index].id;
    console.log(id);
    wx.showModal({
      title: '下载',
      content: '是否下载该轮播图片',
      success:(res) => {
       if(res.confirm){
         console.log(res.confirm);
         wx.cloud.downloadFile({
           fileID: this.data.swiperList[index].url,
           success: (r) => {
             wx.saveImageToPhotosAlbum({
               filePath: r.tempFilePath,
               success: (r) => {
                 wx.showToast({
                   title: '下载成功',
                   duration: 1000,
                 })
               }
             })
           },
           fail: (err) => {
             console.log(err)
             if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
               wx.openSetting({
                 success(settingop) {
                   console.log(settingop)
                   if (settingop.authSetting['scope.writePhotosAlbum']) {
                     console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                   } else {
                     console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                   }
                 }
               })
             }
           }
         })
       }
      }
    })
  },
  jumpPlus(e){
    console.log(app.globalData.isLogin)
    //当前小程序没有在登陆的用户，就提醒用户登陆
    if(app.globalData.isLogin == "false"){
      wx.showModal({
        title:"提示",
        content:"当前未登陆，是否要跳转登陆",
        success:res=>{
          if(res.confirm){
            wx.switchTab({
              url: '../myselfPage/myselfPage',
            })
          }
        }
      })
    }else{
      wx.navigateTo({
        url: '../plusPlan/plusPlan',
      })
    }
    
  },
  onLoad:function(){
    var detail = wx.getStorageSync("details");
    var plan = wx.getStorageSync("plan");
    this.data.details_1.push(detail);
    this.data.plans_1.push(plan);
  },
  checkPlan:function(){
    
    console.log(this.data.plans_1);
    console.log(this.data.details_1);
  },
  onShareAppMessage: function () {
  }
})