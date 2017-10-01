// pages/joke/joke.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ones:"A bull and a cow is grazing in the field",
    jokeArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://icanhazdadjoke.com/slack',
      header: {
        'Accept': 'application/json',
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //that.setData.ones = res.data.attachments[0].text;
        that.setData({
          ones: res.data.attachments[0].text
        })
        console.log(that.setData.ones );
      }
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
    //console.log(app.globalData.joker);
    this.setData({
      jokeArr:app.globalData.joker,
    })
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
    this.getJoke();
       wx.stopPullDownRefresh()
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
  
  },
/**
 * getJoke message
 * 
*/
staticData:{
  page:2,
},
 getJoke:function(){
  // console.log("sd")
   var that = this;
   that.staticData.page++;
   wx.request({
     url: 'https://icanhazdadjoke.com/search?term=&page=' + that.staticData.page,
     header: {
       'Accept': 'application/json',
       'content-type': 'application/json' // 默认值
     },
     success: function (res) {
       that.setData({
         jokeArr: res.data.results
       });
       //console.log(res.data.results)
     }
   })
 },
})