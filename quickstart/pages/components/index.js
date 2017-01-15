
Page({
  data: {
    
  },
  type: ['content','view','base', 'form', 'nav', 'media'],
  widgetsToggle: function(e) {
    var id = e.currentTarget.id, 
      data = {};
    var type = this.type;
    console.log(type);
    console.log(e);
    for(var i = 0; i < type.length; i++) {
      data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
  }
});