// app.js

App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  globalData: {
    // userInfo: null,
    modules: [{
        text: "网络学堂",
        url: "/pages/learn/index",
        icon_name: "home-o",
        icon_color: "blue",
        status: true
      },
      {
        text: "GPA",
        url: "/pages/info/index",
        icon_name: "search",
        icon_color: "red",
        status: true
      }
    ]
  }
})