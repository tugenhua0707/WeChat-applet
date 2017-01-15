
Page({
  "uploadfile": function() {
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths[0]);
        
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData:{
            'user': 'test'
          },
          success: function(res){
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  "loadfile": function() {
    wx.downloadFile({
      url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
      success: function(res) {
        wx.playVoice({
          filePath: res.tempFilePath
        })
      }
    })
  }
})