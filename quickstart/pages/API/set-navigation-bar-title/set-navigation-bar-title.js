Page({
  setNaivgationBarTitle: function (e) {
    console.log(e)
    var title = e.detail.value.title;
    wx.setNavigationBarTitle({
      title: title,
      success: function() {
        console.log('接口调用成功');
      },
      fail: function() {
        console.log('接口调用失败');
      }
    })
  },
  showNavigationBarLoading: function() {
    wx.showNavigationBarLoading();
  },
  hideNavigationBarLoading: function() {
    wx.hideNavigationBarLoading()
  }
})