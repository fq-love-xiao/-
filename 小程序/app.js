//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    // 触发chu初始化方法
    this.getAllData();
  },
  globalData: {
    userInfo: null,
    joker: null,
    beauty: {
      blush: null,
      bronzer: null,
      eyebrow: null,
      eyeliner: null,
      eyeshadow: null,
      foundation: null, 
      lip_liner: null,
      lipstick:  null, 
    },
  },
  staticData: {
    url: 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=',
    blush: 'blush',
    bronzer: 'bronzer',
    eyebrow: 'eyebrow',
    eyeliner: 'eyeliner',
    eyeshadow: 'eyeshadow',
    foundation: 'foundation',
    lip_liner: 'lip_liner',
    lipstick: 'lipstick',
  },
  //在程序加载事件提早保存数据在APP中
  getAllData() {

    this.baseRe(this.staticData.eyeliner);
    this.baseRe(this.staticData.blush);
    this.baseRe(this.staticData.bronzer);
    this.baseRe(this.staticData.eyebrow);
    this.baseRe(this.staticData.eyeshadow);
    this.baseRe(this.staticData.foundation);
    this.baseRe(this.staticData.lip_liner);
    this.baseRe(this.staticData.lipstick);
      this.getJoke();
  },
  getJoke(){
    var that = this;
    wx.request({
      url: 'https://icanhazdadjoke.com/search',
      header: {
        'Accept':'application/json',
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.globalData.joker = res.data.results;
     //   console.log(that.globalData.joker);
      }
    })
  },
  baseRe(typeme) {

    var that = this;
    if (typeme == "blush") {
      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {

          that.globalData.beauty.blush = res.data;
           console.log(that.globalData.beauty.blush);
        }
      })
    } else if (typeme == "bronzer") {
      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.bronzer = res.data;
          // console.log(that.globalData.beauty.bronzer);
        }
      })
    } else if (typeme == "eyebrow") {

      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.eyebrow = res.data;
          //console.log(that.globalData.beauty.eyebrow);
        }
      })
    } else if (typeme == "eyeliner") {

      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.eyeliner = res.data;
          //console.log(that.globalData.beauty.eyeliner);
        }
      })
    } else if (typeme == "eyeshadow"){
      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.eyeshadow = res.data;       
        }
      })
    } else if (typeme == "foundation"){
      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.foundation = res.data;
        }
      })
    } else if (typeme == "lip_liner"){
      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.lip_liner = res.data;
        }
      })
    } else if (typeme == "lipstick"){
      wx.request({
        url: that.staticData.url + typeme,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.globalData.beauty.lipstick = res.data;
        }
      })
    }
    else {
      console.log("no data")
    }


  }
})

/*
blush
*/