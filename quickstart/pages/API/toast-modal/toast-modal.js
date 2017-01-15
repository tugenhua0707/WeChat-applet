Page({
  showToast: function() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    });
  },
  showModal: function() {
    wx.showModal({
      title: '提示消息',
      content: '这是一个模态弹窗',
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击确定了');
        }
      }
    });
  },
  showActionSheet: function() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res);
        console.log(res.tapIndex);
      },
      fail: function(res) {
        console.log(res);
        console.log(res.errMsg);
      }
    })
  }
})