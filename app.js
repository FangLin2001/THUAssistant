// app.js
import { Learn2018Helper } from 'thu-learn-lib';
import {InfoHelper} from "thu-info-lib";

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    LearnHelper: new Learn2018Helper(),
    InfoHelper: new InfoHelper()
  }
})
