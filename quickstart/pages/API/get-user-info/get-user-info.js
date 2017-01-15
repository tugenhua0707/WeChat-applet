var app = getApp()
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo: function () {
    var that = this

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          console.log(res);
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
});