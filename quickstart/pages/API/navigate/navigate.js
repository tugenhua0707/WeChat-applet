Page({
  navigateTo: function () {
    // 保留当前页 跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页面
    wx.navigateTo({ 
      url: './navigate?id=1&name=kongzhi',
      success: function() {
        console.log('跳转成功');
      },
      fail: function() {
        console.log('跳转失败');
      } 
    })
  },
  navigateBack: function () {
    wx.navigateBack()
  },
  redirectTo: function () {
    // 关闭当前页面，跳转到应用内的某个页面
    wx.redirectTo({ 
      url: './navigate',
      success: function() {
        console.log('跳转成功');
      },
      fail: function() {
        console.log('跳转失败');
      }  
    })
  }
})
