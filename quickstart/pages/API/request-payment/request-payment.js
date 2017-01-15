
Page({
  payment: function() {
    wx.requestPayment({
     'timeStamp': '',
     'nonceStr': '',
     'package': '',
     'signType': 'MD5',
     'paySign': '',
     'success':function(res){
        console.log('接口调用成功：'+res);
      },
     'fail':function(res){
        console.log('接口调用失败：'+res);
      }
    })
  }
});