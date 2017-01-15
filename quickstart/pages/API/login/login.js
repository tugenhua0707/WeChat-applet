var app = getApp();
Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this;
    wx.login({
      success: function (res) {
        /*
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: '登录的接口',
            data: {
              code: res.code
            }
          })
        } else {
          console.log("获取用户登录状态失败!" + res.errMsg)
        }
        */
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
      }
    })
  },
  checklogin: function() {
    var that = this;
    wx.checkSession({
      success: function(){
        //登录态未过期
        console.log('登录未过期')
      },
      fail: function(){
        console.log('登录已过期');
        //登录态过期 重新登录
        that.login();
      }
    })
  }
})