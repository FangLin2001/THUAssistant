// pages/info/index.js
Page({
  options: {
    styleIsolation: 'shared'
  },
  data: {
    active: 0,
    tabDatas: [{
        "text": "GPA"
      },
      {
        "text": "日程表"
      }
    ],
    classMap: {
      "A+": "Apclass",
      "A": "Aclass",
      "A-": "Amclass",
      "B+": "Bpclass",
      "B": "Bclass",
      "B-": "Bmclass",
      "C+": "Cpclass",
      "C": "Cclass",
      "C-": "Cmclass",
      "D+": "Dpclass",
      "D": "Dclass",
      "D-": "Dmclass",
      "P": "Pclass",
      "F": "Fclass",
      "W": "Wclass",
    },
    report: [],
    discardReport: [],
  },

  onChange(e) {
    // wx.showToast({
    //   title: `切换到 ${e.detail.title}`,
    //   icon: 'none'
    // });
    this.setData({
      active: e.detail.index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    this.setData({
      discardReport: wx.getStorageSync('discardReport') || [],
    });
    const that = this;
    // 登录
    wx.request({
      url: 'http://localhost:3000/info/login',
      data: {
        username: "2018013402",
        password: "20010120FangLin"
      },
      method: "POST",
      dataType: 'JSON',
      responseType: 'text',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        var jsonRes = JSON.parse(res.data);
        if (jsonRes["msg"] == "ok") {
          console.log("login success");
        }

        // 获取成绩
        wx.request({
          url: 'http://localhost:3000/info/report',
          data: {
            username: "2018013402"
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
              that.setData({
                report: jsonRes["report"]
              });
              console.log("report success");
            } else {
              console.log(jsonRes);
            }
          }
        });
      }
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
    console.log("onShow");
    wx.setNavigationBarTitle({
      title: "GPA"
    });
    this.setData({
      discardReport: wx.getStorageSync('discardReport') || [],
    });
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
})