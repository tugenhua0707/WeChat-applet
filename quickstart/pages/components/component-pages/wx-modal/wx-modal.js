Page({
  data: {
    "modalHidden": true,
    "modalHidden2": true
  },
  modalTap: function(e) {
    this.setData({
      "modalHidden": false
    })
  },
  modalTap2: function(e) {
    this.setData({
      "modalHidden2": false
    })
  },
  modalChange: function(e) {
    this.setData({
      "modalHidden": true
    })
  },
  modalChange2: function(e) {
    this.setData({
      "modalHidden2": true
    })
  } 
});