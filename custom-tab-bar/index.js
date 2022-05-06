// index.js文件
Component({
  data: {
    active: 0,
    list: [{
        "url": "/pages/entrance/entrance",
        "icon": "wap-home-o",
        "text": "导航"
      },
      {
        "url": "/pages/setting/setting",
        "icon": "user-circle-o",
        "text": "设置"
      }
    ],
  },
  methods: {
    onChange(e) {
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({
        active: e.detail
      });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("onLoad");

      this.setData({
        active: 0
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log("onReady");
      
      wx.switchTab({
        url: this.data.list[this.data.active].url
      });
    },
  }
});