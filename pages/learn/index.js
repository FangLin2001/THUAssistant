// pages/learn/index.js

Component({
  data: {
    active: 0,
    currentSemester: "2021-2022-2",
    notifications: [],
    discardNotifications: [],
    homeworks: [],
    discardHomeworks: [],
    courses: [],
    discardCourses: [],
    id2name: {},

    tabDatas: [{
        "text": "公告"
      },
      {
        "text": "作业"
      },
      {
        "text": "课程"
      }
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
      // console.log(e);
      if (e.detail == "right") {
        var tmp = wx.getStorageSync('discardNotifications') || [];
        tmp.push(e.currentTarget.dataset.id);
        wx.setStorageSync('discardNotifications', tmp);
        this.setData({
          discardNotifications: tmp
        });
        // console.log(wx.getStorageSync('discardNotifications'));
      } else if (e.detail == "cell") {
        var notification = e.currentTarget.dataset.noti;
        // console.log(notification);
        wx.navigateTo({
          //实现跳转到test界面的函数，url附带跳转时传送的数据
          url: '/pages/learn/notification/notification?json=' + encodeURIComponent(JSON.stringify(notification)) + "&coursename=" + this.data.id2name[notification.courseid],
        })
      }
    },
    notiToArchive: function (e) {
      console.log("notiToArchive");
      var notis = e.currentTarget.dataset.notis;
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/notification/discards/discards?notis=' + encodeURIComponent(JSON.stringify(notis)) + "&type=" + e.currentTarget.dataset.type,
      })
    },

    hwToTap: function (e) {
      // console.log(e);
      if (e.detail == "right") {
        var tmp = wx.getStorageSync('discardHomeworks') || [];
        tmp.push(e.currentTarget.dataset.id);
        wx.setStorageSync('discardHomeworks', tmp);
        this.setData({
          discardHomeworks: tmp
        });
      } else if (e.detail == "cell") {
        var hw = e.currentTarget.dataset.hw;
        // console.log(hw);
        wx.navigateTo({
          //实现跳转到test界面的函数，url附带跳转时传送的数据
          url: '/pages/learn/homework/homework?json=' + encodeURIComponent(JSON.stringify(hw)) + "&coursename=" + this.data.id2name[hw.courseid],
        })
      }
    },
    hwToArchive: function (e) {
      console.log("hwToArchive");
      var hws = e.currentTarget.dataset.hws;
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/homework/discards/discards?hws=' + encodeURIComponent(JSON.stringify(hws)) + "&type=" + e.currentTarget.dataset.type,
      })
    },

    courseToTap: function (e) {
      // console.log(e);
      if (e.detail == "right") {
        var tmp = wx.getStorageSync('discardCourses') || [];
        tmp.push(e.currentTarget.dataset.id);
        wx.setStorageSync('discardCourses', tmp);
        this.setData({
          discardCourses: tmp
        });
      } else if (e.detail == "cell") {
        var id = e.currentTarget.dataset.id;
        var name = e.currentTarget.dataset.name;
        wx.navigateTo({
          //实现跳转到test界面的函数，url附带跳转时传送的数据
          url: '/pages/learn/course/course?id=' + id + '&name=' + name,
        })
      }
    },
    courseToArchive: function (e) {
      console.log("courseToArchive");
      var courses = e.currentTarget.dataset.courses;
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/course/discards/discards?courses=' + encodeURIComponent(JSON.stringify(courses)),
      })
    },

    rTime: function (date) {
      var json_date = new Date(date).toJSON();
      return new Date(+new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log("onLoad");
      const loginInfo = wx.getStorageSync('loginInfo') || {};
      if (Object.keys(loginInfo).length == 0) {
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
        discardNotifications: wx.getStorageSync('discardNotifications') || [],
        discardHomeworks: wx.getStorageSync('discardHomeworks') || [],
        discardCourses: wx.getStorageSync('discardCourses') || [],
      })
      // console.log(this.data.discardNotifications);

      const that = this;
      // 登录
      wx.request({
        url: 'http://localhost:3000/learn/login',
        data: {
          username: loginInfo.username,
          // password: "20010120FangLin"
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
            wx.setStorageSync('cookies', jsonRes.cookieJar.cookies);
          };

          // 获取课程和缓存id2name
          wx.request({
            url: 'http://localhost:3000/learn/courses',
            data: {
              username: loginInfo.username,
              semesterId: that.data.currentSemester
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
              var id2name_ = {};
              for (var i in jsonRes["courses"]) {
                id2name_[jsonRes["courses"][i]["id"]] = jsonRes["courses"][i]["name"];
              }
              wx.setStorageSync('id2name', id2name_);
              if (jsonRes["msg"] == "ok") {
                that.setData({
                  courses: jsonRes["courses"],
                  id2name: id2name_
                });
                // console.log("courses:", this.data.courses);
              } else {
                console.log(jsonRes);
              }
            }
          });
          // 获取通知
          wx.request({
            url: 'http://localhost:3000/learn/notification',
            data: {
              username: loginInfo.username,
              semesterId: that.data.currentSemester
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
                var jsonNoti = jsonRes["notification"];
                var _notis = [];
                for (var courseid in jsonNoti) {
                  // console.log(courseid + "=" + jsonNoti[courseid]);
                  for (var i = 0, len = jsonNoti[courseid].length; i < len; i++) {
                    jsonNoti[courseid][i]["courseid"] = courseid;
                  }
                  _notis = _notis.concat(jsonNoti[courseid]);
                  // 筛选
                }
                _notis.sort(function (a, b) {
                  if (a.hasRead ^ b.hasRead) {
                    return (a.hasRead) ? 1 : -1
                  } else {
                    return (that.rTime(a.publishTime) > that.rTime(b.publishTime)) ? -1 : 1;
                  }
                });
                that.setData({
                  notifications: _notis,
                });
                // console.log("notifications:", this.data.notifications);
              } else {
                console.log(jsonRes);
              }
            }
          });
          // 获取作业
          wx.request({
            url: 'http://localhost:3000/learn/homework',
            data: {
              username: loginInfo.username,
              semesterId: that.data.currentSemester
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
                var jsonHw = jsonRes["homework"];
                var _hws = [];
                for (var courseid in jsonHw) {
                  // console.log(courseid + "=" + jsonHw[courseid]);
                  for (var i = 0, len = jsonHw[courseid].length; i < len; i++) {
                    jsonHw[courseid][i]["courseid"] = courseid;
                  }
                  _hws = _hws.concat(jsonHw[courseid]);
                  // 筛选
                }
                _hws.sort(function (a, b) {
                  if (a.submitted ^ b.submitted) {
                    return (a.submitted) ? 1 : -1
                  } else {
                    return (that.rTime(a.deadline) > that.rTime(b.deadline)) ? 1 : -1;
                  }
                });
                that.setData({
                  homeworks: _hws,
                });
              } else {
                console.log(jsonRes);
              }
            }
          });
        }
      });

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      console.log("onShow");
      wx.setNavigationBarTitle({
        title: "网络学堂"
      });
      this.setData({
        discardNotifications: wx.getStorageSync('discardNotifications') || [],
        discardHomeworks: wx.getStorageSync('discardHomeworks') || [],
        discardCourses: wx.getStorageSync('discardCourses') || [],
      });
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      console.log("onUnload");
      wx.setNavigationBarTitle({
        title: "THUAssistant"
      });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
  }
});