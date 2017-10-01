// pages/beauty/beauty.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:null,
    common:null,
    beauty: {
      blush: null,
      bronzer: null,
      eyebrow: null,
      eyeliner: null
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.title);
    this.setData({
      title: options.title,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data);
   //var that=this;
    if (this.data.title == "Blush" || this.data.title =="beauty"){
      this.setData({
           common: app.globalData.beauty.blush || { blush: null}
         })
      console.log(this.common);
    } else if (this.data.title == "Bronzer"){
      this.setData({
       common: app.globalData.beauty.bronzer || { bronzer: null }
     })
    } else if (this.data.title == "Eyebrow"){
      this.setData({
       common: app.globalData.beauty.eyebrow || { eyebrow: null }
     })
    } else if (this.data.title == "Eyeliner"){
      this.setData({
       common: app.globalData.beauty.eyeliner || { eyeliner: null }
     })
    } else if (this.data.title == "Eyeshadow"){
      this.setData({
        common: app.globalData.beauty.eyeshadow || { eyeshadow: null }
      })
    } else if (this.data.title == "Foundation"){
      this.setData({
        common: app.globalData.beauty.foundation || { foundation: null }
      })
    } else if (this.data.title == "Lip_liner"){
      this.setData({
        common: app.globalData.beauty.lip_liner || { lip_liner: null }
      })
    } else if (this.data.title == "Lipstick"){
      this.setData({
        common: app.globalData.beauty.lipstick || { lipstick: null }
      })
    }
    else {
      this.setData({
       common:{ }
     })
    }
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})