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
      console.log(e, 'e')
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({
        active: e.detail
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getTabBar().init();
  },
});