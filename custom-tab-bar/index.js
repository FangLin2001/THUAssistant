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
    ]
  },
  methods: {
    onChange(e) {
      // console.log(e);
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({
        active: e.detail
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log("onReady");
      this.setData({
        active: 0
      });
      wx.switchTab({
        url: this.data.list[this.data.active].url
      });
    },
  }
});