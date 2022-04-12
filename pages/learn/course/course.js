// pages/learn/course/course.js
Component({
  data: {
    active: 0,
    courseId: -1,
    notifications: [],
    homework: [],
    files: [],

    tabDatas: [{
        "text": "公告"
      },
      {
        "text": "作业"
      },
      {
        "text": "文件"
      },
    ],
  },
  methods: {
    onChange(e) {
      // wx.showToast({
      //   title: `切换到 ${e.detail.title}`,
      //   icon: 'none'
      // });
      this.setData({
        active: e.detail.index
      });
    },

    notiToTap: function (e) {
      // console.log(e.currentTarget);
      var notification = e.currentTarget.dataset.noti;
      // console.log(notification);
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/notification/notification?json=' + encodeURIComponent(JSON.stringify(notification)),
      })
    },

    hwToTap: function (e) {
      // console.log(e.currentTarget);
      var hw = e.currentTarget.dataset.hw;
      // console.log(hw);
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/homework/homework?json=' + encodeURIComponent(JSON.stringify(hw)),
      })
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options.id, "onLoad");
      this.setData({
        courseId: options.id,
      });
      // 最初获取数据
      wx.request({
        url: 'http://localhost:3000/learn/courseDetail',
        data: {
          username: "2018013402",
          courseId: this.data.courseId
        },
        method: "POST",
        dataType: 'JSON',
        responseType: 'text',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res) => {
          var jsonRes = JSON.parse(res.data);
          if (jsonRes["msg"] == "ok") {
            // console.log(jsonRes["notifications"]);
            this.setData({
              notifications: jsonRes["notifications"],
              homework: jsonRes["homework"],
              files: jsonRes["files"],
            });
            // this.data.notifications.sort(function(a, b){if(a.hasRead ^ b.hasRead){return (a.hasRead)? -1:1} else {return a.publishTime - b.publishTime}});
            this.data.homework.sort(function(a, b){/*if(a.submitted ^ b.submitted){console.log("diff");return (a.submitted)? -1:1} else {*/return b.deadline - a.deadline;});
            // this.data.files.sort(function(a, b){return a.uploadTime - b.uploadTime});
          } else {
            console.log(jsonRes);
          }
        }
      });
      wx.setNavigationBarTitle({
        title: options.name
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      console.log("onUnload");
      wx.setNavigationBarTitle({
        title: "网络学堂"
      });
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
  }
});