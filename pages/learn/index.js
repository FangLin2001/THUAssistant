// pages/learn/index.js

Component({
  data: {
    active: 0,
    notifications: [],
    discardNotifications: [],
    homeworks: [],
    discardHomeworks: [],
    courses: [],
    discardCourses: [],

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
      console.log(e.currentTarget);
      var id = e.currentTarget.dataset.id;
      var name = e.currentTarget.dataset.name;
      // console.log(id, name);
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/notification/course?id=' + id + '&name=' + name,
      })
    },

    hwToTap: function (e) {
      console.log(e.currentTarget);
      var id = e.currentTarget.dataset.id;
      var name = e.currentTarget.dataset.name;
      // console.log(id, name);
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/course/course?id=' + id + '&name=' + name,
      })
    },
    courseToTap: function (e) {
      console.log(e.currentTarget);
      var id = e.currentTarget.dataset.id;
      var name = e.currentTarget.dataset.name;
      // console.log(id, name);
      wx.navigateTo({
        //实现跳转到test界面的函数，url附带跳转时传送的数据
        url: '/pages/learn/course/course?id=' + id + '&name=' + name,
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
      wx.setNavigationBarTitle({
        title: "网络学堂"
      });
      const that = this;
      // 最初获取数据
      wx.request({
        url: 'http://localhost:3000/learn/login',
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
        }
      });
      wx.request({
        url: 'http://localhost:3000/learn/notification',
        data: {
          username: "2018013402",
          semesterId: "2021-2022-2"
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
            var jsonNoti = jsonRes["notification"];
            var _notis = [];
            for (var i in jsonNoti) {
              // console.log(i + "=" + jsonNoti[i]);
              _notis = _notis.concat(jsonNoti[i]);
              // 筛选
            }
            _notis.sort(function (a, b) {
              if (a.hasRead ^ b.hasRead) {
                return (a.hasRead) ? 1 : -1
              } else {
                return (that.rTime(a.publishTime) > that.rTime(b.publishTime)) ? -1 : 1;
              }
            });
            this.setData({
              notifications: _notis,
            });
            console.log("notifications:", this.data.notifications);
          } else {
            console.log(jsonRes);
          }
        }
      });
      wx.request({
        url: 'http://localhost:3000/learn/homework',
        data: {
          username: "2018013402",
          semesterId: "2021-2022-2"
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
            var jsonHw = jsonRes["homework"];
            var _hws = [];
            for (var i in jsonHw) {
              // console.log(i + "=" + jsonHw[i]);
              _hws = _hws.concat(jsonHw[i]);
              // 筛选
            }
            _hws.sort(function (a, b) {
              if (a.submitted ^ b.submitted) {
                return (a.submitted) ? 1 : -1
              } else {
                return (that.rTime(a.deadline) > that.rTime(b.deadline)) ? 1 : -1;
              }
            });
            this.setData({
              homeworks: _hws,
            });
            console.log("homeworks:", this.data.homeworks);
          } else {
            console.log(jsonRes);
          }
        }
      });
      wx.request({
        url: 'http://localhost:3000/learn/courses',
        data: {
          username: "2018013402",
          semesterId: "2021-2022-2"
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
            this.setData({
              courses: jsonRes["courses"]
            });
            // console.log("courses:", this.data.courses);
          } else {
            console.log(jsonRes);
          }
        }
      });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      console.log("onShow");
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