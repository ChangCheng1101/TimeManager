// pages/planPage/planPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiperIndex:0,
    swiperList:[{
      id : 1,
      type : 'image',
      url:'https://www.claudiachang.top/tm_images/img1.jpg',
    },
    {
      id: 2,
      type: 'image',
      url: 'https://www.claudiachang.top/tm_images/img2.jpg',
    },
    {
      id: 3,
      type: 'image',
      url: 'https://www.claudiachang.top/tm_images/img3.jpg',
    },
    {
      id: 4,
      type: 'image',
      url: 'https://www.claudiachang.top/tm_images/img4.jpg',
    },
    {
      id: 5,
      type: 'image',
      url: 'https://www.claudiachang.top/tm_images/img5.jpg',
    },
    {
      id: 6,
      type: 'image',
      url: 'https://www.claudiachang.top/tm_images/img6.jpg',
    }]
  },
  swiperBindChange(e){
    this.setData({
      currentSwiperIndex: e.detail.current,
    }) 
  },
  onShareAppMessage: function () {

  }
})