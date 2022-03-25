// pages/learn/index.js

Component({
  data: {
    active: 0,
    list: [{
        "url": "/pages/learn/announcement/announcement",
        "icon": "bulb-o",
        "text": "公告"
      },
      {
        "url": "/pages/learn/homework/homework",
        "icon": "records",
        "text": "作业"
      },
      {
        "url": "/pages/learn/course/course",
        "icon": "notes-o",
        "text": "课程"
      },
      {
        "url": "/pages/learn/calendar/calendar",
        "icon": "calendar-o",
        "text": "日程表"
      }
    ]
  },
  methods: {
    onChange(e) {
      console.log(e, 'e')
      wx.navigateTo({
        url: this.data.list[e.detail].url
      });
      this.setData({
        active: e.detail
      });
    },
    init() {
      const page = getCurrentPages().pop();
      wx.setNavigationBarTitle({
        title: '网络学堂'
      });
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