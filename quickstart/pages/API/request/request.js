
Page({
  "request": function() {
    wx.request({
      url: 'https://ynuf.alipay.com/service/um.json',
      data: {
        
      },
      method: 'POST',
      success: function(res) {
        console.log(res);
      }
    })
  }
})