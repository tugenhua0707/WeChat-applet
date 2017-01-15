Page({
  data: {
    toast: {
      hidden: true
    }
  },
  submitForm: function (e) {
    var type = e.detail.target.id
    var key = e.detail.value.key
    var data = e.detail.value.data

    if (key.length === 0 && type !== 'clear') {
      this.setData({
        key: key,
        data: data,
        'toast.hidden': false,
        'toast.content': 'key 不能为空'
      })
    } else if (type === 'get' && key.length > 0) {
      this.setData({
        key: key,
        data: wx.getStorageSync(key),
        'toast.hidden': false,
        'toast.content': '读取数据成功'
      })
    } else if (type === 'set' && key.length > 0) {
      wx.setStorageSync(key, data)
      this.setData({
        key: key,
        data: data,
        'toast.hidden': false,
        'toast.content': '存储数据成功'
      })
    } else if (type === 'clear') {
      wx.clearStorageSync()
      this.setData({
        key: '',
        data: '',
        'toast.hidden': false,
        'toast.content': '清除数据成功'
      })
    } else if (type === 'info') {
      wx.getStorageInfo({
        success: function(res) {
          console.log('当前storage中所有的key:' + res.keys)
          console.log('当前占用的空间大小, 单位kb:' + res.currentSize)
          console.log('限制的空间大小，单位kb:' + res.limitSize)
        }
      })
    }
  },
  toastChange: function () {
    this.setData({
      'toast.hidden': true
    })
  }
})
