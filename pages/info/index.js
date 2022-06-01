// pages/info/index.js
Page({
  options: {
    styleIsolation: 'shared'
  },
  data: {
    // active: 0,
    // tabDatas: [{
    //     "text": "GPA"
    //   },
    //   {
    //     "text": "日程表"
    //   }
    // ],
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
    // report: [],
    reportClass: {},
    average: {},
    discardReport: [],
  },

  // onChange(e) {
  //   // wx.showToast({
  //   //   title: `切换到 ${e.detail.title}`,
  //   //   icon: 'none'
  //   // });
  //   this.setData({
  //     active: e.detail.index
  //   });
  // },

  reportToTap: function (e) {
    // console.log(e);
    if (e.detail == "right") {
      var tmp = wx.getStorageSync('discardReport') || [];
      tmp.push(e.currentTarget.dataset.key);
      wx.setStorageSync('discardReport', tmp);
      this.setData({
        discardReport: tmp
      });
      // console.log(wx.getStorageSync('discardNotifications'));
    } else if (e.detail == "cell") {}
  },
  reportToConceal: function (e) {
    // console.log("reportToConceal");
    var reportClass = this.data.reportClass;
    wx.navigateTo({
      //实现跳转到test界面的函数，url附带跳转时传送的数据
      url: '/pages/info/discards/discards?reportClass=' + encodeURIComponent(JSON.stringify(reportClass)),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      icon: 'loading',
      duration: 100000
    });
    console.log("onLoad");
    const loginInfo = wx.getStorageSync('loginInfo');
    if (!loginInfo) {
      wx.navigateBack({
        delta: 0,
        complete: () => {
          wx.showToast({
            title: `未授权登录`,
            icon: 'none'
          });
        }
      });
      return;
    }

    this.setData({
      discardReport: wx.getStorageSync('discardReport') || [],
    });
    const that = this;
    // 登录
    wx.request({
      url: 'http://localhost:3000/info/login',
      data: {
        username: loginInfo.username,
      },
      method: "POST",
      dataType: 'JSON',
      responseType: 'text',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'authorization': loginInfo.token,
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
            username: loginInfo.username
          },
          method: "POST",
          dataType: 'JSON',
          responseType: 'text',
          header: {
            'content-type': 'application/x-www-form-urlencoded',
            'authorization': loginInfo.token,
          },
          success: (res) => {
            var jsonRes = JSON.parse(res.data);
            if (jsonRes["msg"] == "ok") {
              // that.setData({
              //   report: jsonRes["report"]
              // });
              // console.log("report success");
              var report = jsonRes["report"]
              var reportClass_ = Object.create(null);
              for (var i in report) { //遍历数组
                // console.log(report[i], report[i].semester);
                if (report[i].semester in reportClass_) {
                  reportClass_[report[i].semester].push(report[i]);
                } else {
                  reportClass_[report[i].semester] = new Array(report[i]);
                }
              }
              var average_ = Object.create(null);
              for (var key in reportClass_) {
                var point = 0;
                var credit = 0;
                for (var i in reportClass_[key]) {
                  if (reportClass_[key][i].point) {
                    point = point + reportClass_[key][i].point * reportClass_[key][i].credit;
                    credit = credit + reportClass_[key][i].credit;
                  }
                }
                if (credit === 0) {
                  average_[key] = "N/A";
                } else {
                  average_[key] = (point / credit).toFixed(4);
                }
              };
              that.setData({
                reportClass: reportClass_,
                average: average_
              });
            } else {
              console.log(jsonRes);
            }
            wx.hideLoading();
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