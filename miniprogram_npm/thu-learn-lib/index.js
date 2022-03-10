module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646914021216, function(require, module, exports) {
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Learn2018Helper_provider, _Learn2018Helper_rawFetch, _Learn2018Helper_myFetch, _Learn2018Helper_myFetchWithToken, _Learn2018Helper_csrfToken, _Learn2018Helper_withReAuth;
var __TEMP__ = require('cheerio');var cheerio = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('js-base64');var Base64 = __TEMP__['Base64'];
var __TEMP__ = require('cross-fetch');var fetch = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./urls.js');var URL = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./types.js');var ContentType = __TEMP__['ContentType'];var FailReason = __TEMP__['FailReason'];var CourseType = __TEMP__['CourseType'];
var __TEMP__ = require('./utils.js');var decodeHTML = __TEMP__['decodeHTML'];var mapGradeToLevel = __TEMP__['mapGradeToLevel'];var parseSemesterType = __TEMP__['parseSemesterType'];var trimAndDefine = __TEMP__['trimAndDefine'];var JSONP_EXTRACTOR_NAME = __TEMP__['JSONP_EXTRACTOR_NAME'];var extractJSONPResult = __TEMP__['extractJSONPResult'];
// .d.ts files are in types/
var __TEMP__ = require('real-isomorphic-fetch');var IsomorphicFetch = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('tough-cookie-no-native');var tough = __REQUIRE_DEFAULT__(__TEMP__);
const CHEERIO_CONFIG = {
    _useHtmlParser2: true,
    decodeEntities: false,
};
const $ = (html) => {
    /* eslint-disable */
    // `cheerio.load` has two prototypes:
    // 1. `(html: string | Buffer, options?: CheerioParserOptions | undefined): Root`
    // 2. `(element: Element | Element[], options?: CheerioParserOptions | undefined): Root`
    // TypeScript cannot handle this, so we must workaround this.
    // @ts-ignore: No overload matches this call
    return cheerio.load(html, CHEERIO_CONFIG);
    /* eslint-enable */
};
const noLogin = (res) => res.url.includes('login_timeout') || res.status == 403;
/** add CSRF token to any request URL as parameters */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var addCSRFTokenToUrl = exports.addCSRFTokenToUrl = (url, token) => {
    if (url.includes('?')) {
        url += `&_csrf=${token}`;
    }
    else {
        url += `?_csrf=${token}`;
    }
    return url;
};
/** the main helper class */
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });class Learn2018Helper {
    /** you can provide a CookieJar and / or CredentialProvider in the configuration */
    constructor(config) {
        var _a, _b;
        _Learn2018Helper_provider.set(this, void 0);
        _Learn2018Helper_rawFetch.set(this, void 0);
        _Learn2018Helper_myFetch.set(this, void 0);
        _Learn2018Helper_myFetchWithToken.set(this, async (...args) => {
            if (__classPrivateFieldGet(this, _Learn2018Helper_csrfToken, "f") == '') {
                await this.login();
            }
            const [url, ...remaining] = args;
            return __classPrivateFieldGet(this, _Learn2018Helper_myFetch, "f").call(this, addCSRFTokenToUrl(url, __classPrivateFieldGet(this, _Learn2018Helper_csrfToken, "f")), ...remaining);
        });
        _Learn2018Helper_csrfToken.set(this, '');
        _Learn2018Helper_withReAuth.set(this, (rawFetch) => {
            const login = this.login.bind(this);
            return async function wrappedFetch(...args) {
                const retryAfterLogin = async () => {
                    await login();
                    return await rawFetch(...args).then((res) => {
                        if (noLogin(res)) {
                            return Promise.reject({
                                reason: FailReason.NOT_LOGGED_IN,
                            });
                        }
                        else if (res.status != 200) {
                            return Promise.reject({
                                reason: FailReason.UNEXPECTED_STATUS,
                                extra: {
                                    code: res.status,
                                    text: res.statusText,
                                },
                            });
                        }
                        else {
                            return res;
                        }
                    });
                };
                return await rawFetch(...args).then((res) => (noLogin(res) ? retryAfterLogin() : res));
            };
        });
        this.previewFirstPage = (_a = config === null || config === void 0 ? void 0 : config.generatePreviewUrlForFirstPage) !== null && _a !== void 0 ? _a : true;
        this.cookieJar = (_b = config === null || config === void 0 ? void 0 : config.cookieJar) !== null && _b !== void 0 ? _b : new tough.CookieJar();
        __classPrivateFieldSet(this, _Learn2018Helper_provider, config === null || config === void 0 ? void 0 : config.provider, "f");
        __classPrivateFieldSet(this, _Learn2018Helper_rawFetch, new IsomorphicFetch(fetch, this.cookieJar), "f");
        __classPrivateFieldSet(this, _Learn2018Helper_myFetch, __classPrivateFieldGet(this, _Learn2018Helper_provider, "f")
            ? __classPrivateFieldGet(this, _Learn2018Helper_withReAuth, "f").call(this, __classPrivateFieldGet(this, _Learn2018Helper_rawFetch, "f"))
            : async (...args) => {
                const result = await __classPrivateFieldGet(this, _Learn2018Helper_rawFetch, "f").call(this, ...args);
                if (noLogin(result))
                    return Promise.reject({
                        reason: FailReason.NOT_LOGGED_IN,
                    });
                return result;
            }, "f");
    }
    /** fetch CSRF token from helper (invalid after login / re-login), might be '' if not logged in */
    getCSRFToken() {
        return __classPrivateFieldGet(this, _Learn2018Helper_csrfToken, "f");
    }
    /** login is necessary if you do not provide a `CredentialProvider` */
    async login(username, password) {
        if (!username || !password) {
            if (!__classPrivateFieldGet(this, _Learn2018Helper_provider, "f"))
                return Promise.reject({
                    reason: FailReason.NO_CREDENTIAL,
                });
            const credential = await __classPrivateFieldGet(this, _Learn2018Helper_provider, "f").call(this);
            username = credential.username;
            password = credential.password;
        }
        const ticketResponse = await __classPrivateFieldGet(this, _Learn2018Helper_rawFetch, "f").call(this, URL.ID_LOGIN(), {
            body: URL.ID_LOGIN_FORM_DATA(username, password),
            method: 'POST',
        });
        if (!ticketResponse.ok) {
            return Promise.reject({
                reason: FailReason.ERROR_FETCH_FROM_ID,
            });
        }
        // check response from id.tsinghua.edu.cn
        const ticketResult = await ticketResponse.text();
        const body = $(ticketResult);
        const targetURL = body('a').attr('href');
        const ticket = targetURL.split('=').slice(-1)[0];
        if (ticket === 'BAD_CREDENTIALS') {
            return Promise.reject({
                reason: FailReason.BAD_CREDENTIAL,
            });
        }
        const loginResponse = await __classPrivateFieldGet(this, _Learn2018Helper_rawFetch, "f").call(this, URL.LEARN_AUTH_ROAM(ticket));
        if (loginResponse.ok !== true) {
            return Promise.reject({
                reason: FailReason.ERROR_ROAMING,
            });
        }
        const courseListPageSource = await (await __classPrivateFieldGet(this, _Learn2018Helper_rawFetch, "f").call(this, URL.LEARN_STUDENT_COURSE_LIST_PAGE())).text();
        const tokenRegex = /^.*&_csrf=(\S*)".*$/gm;
        const matches = [...courseListPageSource.matchAll(tokenRegex)];
        if (matches.length == 0) {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: 'cannot fetch CSRF token from source',
            });
        }
        __classPrivateFieldSet(this, _Learn2018Helper_csrfToken, matches[0][1], "f");
    }
    /**  logout (to make everyone happy) */
    async logout() {
        await __classPrivateFieldGet(this, _Learn2018Helper_rawFetch, "f").call(this, URL.LEARN_LOGOUT(), { method: 'POST' });
    }
    /**
     * Get calendar items during the specified period (in yyyymmdd format).
     * @param startDate start date (inclusive)
     * @param endDate end date (inclusive)
     * If the API returns any error, this function will throw `FailReason.INVALID_RESPONSE`,
     * and we currently observe a limit of no more that 29 days.
     * Otherwise it will return the parsed data (might be empty if the period is too far away from now)
     */
    async getCalendar(startDate, endDate, graduate = false) {
        const ticketResponse = await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.REGISTRAR_TICKET(), {
            method: 'POST',
            body: URL.REGISTRAR_TICKET_FORM_DATA(),
        });
        let ticket = (await ticketResponse.text());
        ticket = ticket.substring(1, ticket.length - 1);
        await __classPrivateFieldGet(this, _Learn2018Helper_myFetch, "f").call(this, URL.REGISTRAR_AUTH(ticket));
        const response = await __classPrivateFieldGet(this, _Learn2018Helper_myFetch, "f").call(this, URL.REGISTRAR_CALENDAR(startDate, endDate, graduate, JSONP_EXTRACTOR_NAME));
        if (!response.ok) {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
            });
        }
        const result = extractJSONPResult(await response.text());
        return result.map((i) => ({
            location: i.dd,
            status: i.fl,
            startTime: i.kssj,
            endTime: i.jssj,
            date: i.nq,
            courseName: i.nr,
        }));
    }
    async getSemesterIdList() {
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_SEMESTER_LIST())).json();
        if (!Array.isArray(json)) {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const semesters = json;
        // sometimes web learning returns null, so confusing...
        return semesters.filter((s) => s != null);
    }
    async getCurrentSemester() {
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_CURRENT_SEMESTER())).json();
        if (json.message !== 'success') {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const result = json.result;
        return {
            id: result.id,
            startDate: new Date(result.kssj),
            endDate: new Date(result.jssj),
            startYear: Number(result.xnxq.slice(0, 4)),
            endYear: Number(result.xnxq.slice(5, 9)),
            type: parseSemesterType(Number(result.xnxq.slice(10, 11))),
        };
    }
    /** get all courses in the specified semester */
    async getCourseList(semesterID, courseType = CourseType.STUDENT) {
        var _a;
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_COURSE_LIST(semesterID, courseType))).json();
        if (json.message !== 'success' || !Array.isArray(json.resultList)) {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const result = ((_a = json.resultList) !== null && _a !== void 0 ? _a : []);
        const courses = [];
        await Promise.all(result.map(async (c) => {
            var _a;
            courses.push({
                id: c.wlkcid,
                name: c.kcm,
                englishName: c.ywkcm,
                timeAndLocation: await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_COURSE_TIME_LOCATION(c.wlkcid))).json(),
                url: URL.LEARN_COURSE_URL(c.wlkcid, courseType),
                teacherName: (_a = c.jsm) !== null && _a !== void 0 ? _a : '',
                teacherNumber: c.jsh,
                courseNumber: c.kch,
                courseIndex: Number(c.kxh),
                courseType,
            });
        }));
        return courses;
    }
    /**
     * Get certain type of content of all specified courses.
     * It actually wraps around other `getXXX` functions. You can ignore the failure caused by certain courses.
     */
    async getAllContents(courseIDs, type, courseType = CourseType.STUDENT, allowFailure = false) {
        let fetchFunc;
        switch (type) {
            case ContentType.NOTIFICATION:
                fetchFunc = this.getNotificationList;
                break;
            case ContentType.FILE:
                fetchFunc = this.getFileList;
                break;
            case ContentType.HOMEWORK:
                fetchFunc = this.getHomeworkList;
                break;
            case ContentType.DISCUSSION:
                fetchFunc = this.getDiscussionList;
                break;
            case ContentType.QUESTION:
                fetchFunc = this.getAnsweredQuestionList;
                break;
        }
        const contents = {};
        const results = await Promise.allSettled(courseIDs.map(async (id) => {
            contents[id] = await fetchFunc.bind(this)(id, courseType);
        }));
        if (!allowFailure) {
            for (const r of results) {
                if (r.status == 'rejected') {
                    return Promise.reject({
                        reason: FailReason.INVALID_RESPONSE,
                        extra: {
                            reason: r.reason,
                        },
                    });
                }
            }
        }
        return contents;
    }
    /** Get all notifications （课程公告） of the specified course. */
    async getNotificationList(courseID, courseType = CourseType.STUDENT) {
        var _a, _b, _c, _d;
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_NOTIFICATION_LIST(courseID, courseType))).json();
        if (json.result !== 'success') {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const result = ((_d = (_b = (_a = json.object) === null || _a === void 0 ? void 0 : _a.aaData) !== null && _b !== void 0 ? _b : (_c = json.object) === null || _c === void 0 ? void 0 : _c.resultsList) !== null && _d !== void 0 ? _d : []);
        const notifications = [];
        await Promise.all(result.map(async (n) => {
            var _a;
            const notification = {
                id: n.ggid,
                content: decodeHTML(Base64.decode((_a = n.ggnr) !== null && _a !== void 0 ? _a : '')),
                title: decodeHTML(n.bt),
                url: URL.LEARN_NOTIFICATION_DETAIL(courseID, n.ggid, courseType),
                publisher: n.fbrxm,
                hasRead: n.sfyd === '是',
                markedImportant: Number(n.sfqd) === 1,
                publishTime: new Date(n.fbsj && typeof n.fbsj === 'string' ? n.fbsj : n.fbsjStr),
            };
            let detail = {};
            const attachmentName = courseType === CourseType.STUDENT ? n.fjmc : n.fjbt;
            if (attachmentName) {
                detail = await this.parseNotificationDetail(courseID, notification.id, courseType, attachmentName);
            }
            notifications.push({ ...notification, ...detail });
        }));
        return notifications;
    }
    /** Get all files （课程文件） of the specified course. */
    async getFileList(courseID, courseType = CourseType.STUDENT) {
        var _a;
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_FILE_LIST(courseID, courseType))).json();
        if (json.result !== 'success') {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        let result = [];
        if (Array.isArray((_a = json.object) === null || _a === void 0 ? void 0 : _a.resultsList)) {
            // teacher
            result = json.object.resultsList;
        }
        else if (Array.isArray(json.object)) {
            // student
            result = json.object;
        }
        const files = [];
        await Promise.all(result.map(async (f) => {
            var _a, _b;
            const title = decodeHTML(f.bt);
            const downloadUrl = URL.LEARN_FILE_DOWNLOAD(courseType === CourseType.STUDENT ? f.wjid : f.id, courseType, courseID);
            const previewUrl = URL.LEARN_FILE_PREVIEW(ContentType.FILE, f.wjid, courseType, this.previewFirstPage);
            files.push({
                id: f.wjid,
                title: decodeHTML(f.bt),
                description: decodeHTML(f.ms),
                rawSize: f.wjdx,
                size: f.fileSize,
                uploadTime: new Date(f.scsj),
                downloadUrl,
                previewUrl,
                isNew: f.isNew,
                markedImportant: f.sfqd === 1,
                visitCount: (_a = f.llcs) !== null && _a !== void 0 ? _a : 0,
                downloadCount: (_b = f.xzcs) !== null && _b !== void 0 ? _b : 0,
                fileType: f.wjlx,
                remoteFile: {
                    id: f.wjid,
                    name: title,
                    downloadUrl,
                    previewUrl,
                    size: f.fileSize,
                },
            });
        }));
        return files;
    }
    /** Get all homeworks （课程作业） of the specified course (support student version only). */
    async getHomeworkList(courseID, courseType = CourseType.STUDENT) {
        if (courseType === CourseType.TEACHER) {
            return Promise.reject({
                reason: FailReason.NOT_IMPLEMENTED,
                extra: 'currently getting homework list of TA courses is not supported',
            });
        }
        const allHomework = [];
        await Promise.all(URL.LEARN_HOMEWORK_LIST_SOURCE(courseID).map(async (s) => {
            const homeworks = await this.getHomeworkListAtUrl(s.url, s.status);
            allHomework.push(...homeworks);
        }));
        return allHomework;
    }
    /** Get all discussions （课程讨论） of the specified course. */
    async getDiscussionList(courseID, courseType = CourseType.STUDENT) {
        var _a, _b;
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_DISCUSSION_LIST(courseID, courseType))).json();
        if (json.result !== 'success') {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const result = ((_b = (_a = json.object) === null || _a === void 0 ? void 0 : _a.resultsList) !== null && _b !== void 0 ? _b : []);
        const discussions = [];
        await Promise.all(result.map(async (d) => {
            discussions.push({
                ...this.parseDiscussionBase(d),
                boardId: d.bqid,
                url: URL.LEARN_DISCUSSION_DETAIL(d.wlkcid, d.bqid, d.id, courseType),
            });
        }));
        return discussions;
    }
    /**
     * Get all notifications （课程答疑） of the specified course.
     * The student version supports only answered questions, while the teacher version supports all questions.
     */
    async getAnsweredQuestionList(courseID, courseType = CourseType.STUDENT) {
        var _a, _b;
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_QUESTION_LIST_ANSWERED(courseID, courseType))).json();
        if (json.result !== 'success') {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const result = ((_b = (_a = json.object) === null || _a === void 0 ? void 0 : _a.resultsList) !== null && _b !== void 0 ? _b : []);
        const questions = [];
        await Promise.all(result.map(async (q) => {
            questions.push({
                ...this.parseDiscussionBase(q),
                question: Base64.decode(q.wtnr),
                url: URL.LEARN_QUESTION_DETAIL(q.wlkcid, q.id, courseType),
            });
        }));
        return questions;
    }
    async getHomeworkListAtUrl(url, status) {
        var _a, _b;
        const json = await (await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, url)).json();
        if (json.result !== 'success') {
            return Promise.reject({
                reason: FailReason.INVALID_RESPONSE,
                extra: json,
            });
        }
        const result = ((_b = (_a = json.object) === null || _a === void 0 ? void 0 : _a.aaData) !== null && _b !== void 0 ? _b : []);
        const homeworks = [];
        await Promise.all(result.map(async (h) => {
            homeworks.push({
                id: h.zyid,
                studentHomeworkId: h.xszyid,
                title: decodeHTML(h.bt),
                url: URL.LEARN_HOMEWORK_DETAIL(h.wlkcid, h.zyid, h.xszyid),
                deadline: new Date(h.jzsj),
                submitUrl: URL.LEARN_HOMEWORK_SUBMIT(h.wlkcid, h.xszyid),
                submitTime: h.scsj === null ? undefined : new Date(h.scsj),
                grade: h.cj === null ? undefined : h.cj,
                gradeLevel: mapGradeToLevel(h.cj),
                graderName: trimAndDefine(h.jsm),
                gradeContent: trimAndDefine(h.pynr),
                gradeTime: h.pysj === null ? undefined : new Date(h.pysj),
                ...status,
                ...(await this.parseHomeworkDetail(h.wlkcid, h.zyid, h.xszyid)),
            });
        }));
        return homeworks;
    }
    async parseNotificationDetail(courseID, id, courseType, attachmentName) {
        /// from JSON (backup, currently not used)
        // const postParams = new FormData();
        // postParams.append('id', id);
        // postParams.append('wlkcid', courseID);
        // const metadata = await (await this.#myFetchWithToken(URL.LEARN_NOTIFICATION_EDIT(courseType), {
        //   'method': 'POST',
        //   'body': postParams,
        // })).json();
        // const attachmentId = metadata.ggfjid as string;
        /// parsed from HTML
        const response = await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_NOTIFICATION_DETAIL(courseID, id, courseType));
        const result = $(await response.text());
        let path = '';
        if (courseType === CourseType.STUDENT) {
            path = result('.ml-10').attr('href');
        }
        else {
            path = result('#wjid').attr('href');
        }
        const size = trimAndDefine(result('div#attachment > div.fl > span[class^="color"]').first().text());
        const params = new URLSearchParams(path.split('?').slice(-1)[0]);
        const attachmentId = params.get('wjid');
        if (!path.startsWith(URL.LEARN_PREFIX)) {
            path = URL.LEARN_PREFIX + path;
        }
        return {
            attachment: {
                name: attachmentName,
                id: attachmentId,
                downloadUrl: path,
                previewUrl: URL.LEARN_FILE_PREVIEW(ContentType.NOTIFICATION, attachmentId, courseType, this.previewFirstPage),
                size,
            },
        };
    }
    async parseHomeworkDetail(courseID, id, studentHomeworkID) {
        const response = await __classPrivateFieldGet(this, _Learn2018Helper_myFetchWithToken, "f").call(this, URL.LEARN_HOMEWORK_DETAIL(courseID, id, studentHomeworkID));
        const result = $(await response.text());
        const fileDivs = result('div.list.fujian.clearfix');
        return {
            description: trimAndDefine(result('div.list.calendar.clearfix > div.fl.right > div.c55').slice(0, 1).html()),
            answerContent: trimAndDefine(result('div.list.calendar.clearfix > div.fl.right > div.c55').slice(1, 2).html()),
            submittedContent: trimAndDefine($(result('div.boxbox').slice(1, 2).toArray())('div.right').slice(2, 3).html()),
            attachment: this.parseHomeworkFile(fileDivs[0]),
            answerAttachment: this.parseHomeworkFile(fileDivs[1]),
            submittedAttachment: this.parseHomeworkFile(fileDivs[2]),
            gradeAttachment: this.parseHomeworkFile(fileDivs[3]),
        };
    }
    parseHomeworkFile(fileDiv) {
        var _a;
        const fileNode = ((_a = $(fileDiv)('.ftitle').children('a')[0]) !== null && _a !== void 0 ? _a : $(fileDiv)('.fl').children('a')[0]);
        if (fileNode !== undefined) {
            const size = trimAndDefine($(fileDiv)('.fl > span[class^="color"]').first().text());
            const params = new URLSearchParams(fileNode.attribs.href.split('?').slice(-1)[0]);
            const attachmentId = params.get('fileId');
            // so dirty here...
            let downloadUrl = URL.LEARN_PREFIX + fileNode.attribs.href;
            if (params.has('downloadUrl')) {
                downloadUrl = URL.LEARN_PREFIX + params.get('downloadUrl');
            }
            return {
                id: attachmentId,
                name: fileNode.children[0].data,
                downloadUrl,
                previewUrl: URL.LEARN_FILE_PREVIEW(ContentType.HOMEWORK, attachmentId, CourseType.STUDENT, this.previewFirstPage),
                size,
            };
        }
        else {
            return undefined;
        }
    }
    parseDiscussionBase(d) {
        var _a;
        return {
            id: d.id,
            title: decodeHTML(d.bt),
            publisherName: d.fbrxm,
            publishTime: new Date(d.fbsj),
            lastReplyTime: new Date(d.zhhfsj),
            lastReplierName: d.zhhfrxm,
            visitCount: (_a = d.djs) !== null && _a !== void 0 ? _a : 0,
            replyCount: d.hfcs,
        };
    }
};exports.Learn2018Helper = Learn2018Helper
_Learn2018Helper_provider = new WeakMap(), _Learn2018Helper_rawFetch = new WeakMap(), _Learn2018Helper_myFetch = new WeakMap(), _Learn2018Helper_myFetchWithToken = new WeakMap(), _Learn2018Helper_csrfToken = new WeakMap(), _Learn2018Helper_withReAuth = new WeakMap();

}, function(modId) {var map = {"./urls.js":1646914021217,"./types.js":1646914021218,"./utils.js":1646914021219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646914021217, function(require, module, exports) {
var __TEMP__ = require('form-data');var FormData = __REQUIRE_DEFAULT__(__TEMP__);
var __TEMP__ = require('./types.js');var CourseType = __TEMP__['CourseType'];
var __TEMP__ = require('./utils.js');var getMkFromType = __TEMP__['getMkFromType'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_PREFIX = exports.LEARN_PREFIX = 'https://learn.tsinghua.edu.cn';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var REGISTRAR_PREFIX = exports.REGISTRAR_PREFIX = 'https://zhjw.cic.tsinghua.edu.cn';
const MAX_SIZE = 200;
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var ID_LOGIN = exports.ID_LOGIN = () => {
    return 'https://id.tsinghua.edu.cn/do/off/ui/auth/login/post/bb5df85216504820be7bba2b0ae1535b/0?/login.do';
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var ID_LOGIN_FORM_DATA = exports.ID_LOGIN_FORM_DATA = (username, password) => {
    const credential = new FormData();
    credential.append('i_user', username);
    credential.append('i_pass', password);
    credential.append('atOnce', String(true));
    return credential;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_AUTH_ROAM = exports.LEARN_AUTH_ROAM = (ticket) => {
    return `${LEARN_PREFIX}/b/j_spring_security_thauth_roaming_entry?ticket=${ticket}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_LOGOUT = exports.LEARN_LOGOUT = () => {
    return `${LEARN_PREFIX}/f/j_spring_security_logout`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_STUDENT_COURSE_LIST_PAGE = exports.LEARN_STUDENT_COURSE_LIST_PAGE = () => {
    return `${LEARN_PREFIX}/f/wlxt/index/course/student/`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_SEMESTER_LIST = exports.LEARN_SEMESTER_LIST = () => {
    return `${LEARN_PREFIX}/b/wlxt/kc/v_wlkc_xs_xktjb_coassb/queryxnxq`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_CURRENT_SEMESTER = exports.LEARN_CURRENT_SEMESTER = () => {
    return `${LEARN_PREFIX}/b/kc/zhjw_v_code_xnxq/getCurrentAndNextSemester`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_COURSE_LIST = exports.LEARN_COURSE_LIST = (semester, courseType) => {
    if (courseType === CourseType.STUDENT) {
        return `${LEARN_PREFIX}/b/wlxt/kc/v_wlkc_xs_xkb_kcb_extend/student/loadCourseBySemesterId/${semester}`;
    }
    else {
        return `${LEARN_PREFIX}/b/kc/v_wlkc_kcb/queryAsorCoCourseList/${semester}/0`;
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_COURSE_URL = exports.LEARN_COURSE_URL = (courseID, courseType) => {
    return `${LEARN_PREFIX}/f/wlxt/index/course/${courseType}/course?wlkcid=${courseID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_COURSE_TIME_LOCATION = exports.LEARN_COURSE_TIME_LOCATION = (courseID) => {
    return `${LEARN_PREFIX}/b/kc/v_wlkc_xk_sjddb/detail?id=${courseID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_TEACHER_COURSE_URL = exports.LEARN_TEACHER_COURSE_URL = (courseID) => {
    return `${LEARN_PREFIX}/f/wlxt/index/course/teacher/course?wlkcid=${courseID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_FILE_LIST = exports.LEARN_FILE_LIST = (courseID, courseType) => {
    if (courseType === CourseType.STUDENT) {
        return `${LEARN_PREFIX}/b/wlxt/kj/wlkc_kjxxb/student/kjxxbByWlkcidAndSizeForStudent?wlkcid=${courseID}&size=${MAX_SIZE}`;
    }
    else {
        return `${LEARN_PREFIX}/b/wlxt/kj/v_kjxxb_wjwjb/teacher/queryByWlkcid?wlkcid=${courseID}&size=${MAX_SIZE}`;
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_FILE_DOWNLOAD = exports.LEARN_FILE_DOWNLOAD = (fileID, courseType, courseID) => {
    if (courseType === CourseType.STUDENT) {
        return `${LEARN_PREFIX}/b/wlxt/kj/wlkc_kjxxb/student/downloadFile?sfgk=0&wjid=${fileID}`;
    }
    else {
        return `${LEARN_PREFIX}/f/wlxt/kj/wlkc_kjxxb/teacher/beforeView?id=${fileID}&wlkcid=${courseID}`;
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_FILE_PREVIEW = exports.LEARN_FILE_PREVIEW = (type, fileID, courseType, firstPageOnly = false) => {
    return `${LEARN_PREFIX}/f/wlxt/kc/wj_wjb/${courseType}/beforePlay?wjid=${fileID}&mk=${getMkFromType(type)}&browser=-1&sfgk=0&pageType=${firstPageOnly ? 'first' : 'all'}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_NOTIFICATION_LIST = exports.LEARN_NOTIFICATION_LIST = (courseID, courseType) => {
    if (courseType === CourseType.STUDENT) {
        return `${LEARN_PREFIX}/b/wlxt/kcgg/wlkc_ggb/student/kcggListXs?wlkcid=${courseID}&size=${MAX_SIZE}`;
    }
    else {
        return `${LEARN_PREFIX}/b/wlxt/kcgg/wlkc_ggb/teacher/kcggList?wlkcid=${courseID}&size=${MAX_SIZE}`;
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_NOTIFICATION_DETAIL = exports.LEARN_NOTIFICATION_DETAIL = (courseID, notificationID, courseType) => {
    if (courseType === CourseType.STUDENT) {
        return `${LEARN_PREFIX}/f/wlxt/kcgg/wlkc_ggb/student/beforeViewXs?wlkcid=${courseID}&id=${notificationID}`;
    }
    else {
        return `${LEARN_PREFIX}/f/wlxt/kcgg/wlkc_ggb/teacher/beforeViewJs?wlkcid=${courseID}&id=${notificationID}`;
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_NOTIFICATION_EDIT = exports.LEARN_NOTIFICATION_EDIT = (courseType) => {
    return `${LEARN_PREFIX}/b/wlxt/kcgg/wlkc_ggb/${courseType}/editKcgg`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_LIST_SOURCE = exports.LEARN_HOMEWORK_LIST_SOURCE = (courseID) => {
    return [
        {
            url: LEARN_HOMEWORK_LIST_NEW(courseID),
            status: {
                submitted: false,
                graded: false,
            },
        },
        {
            url: LEARN_HOMEWORK_LIST_SUBMITTED(courseID),
            status: {
                submitted: true,
                graded: false,
            },
        },
        {
            url: LEARN_HOMEWORK_LIST_GRADED(courseID),
            status: {
                submitted: true,
                graded: true,
            },
        },
    ];
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_LIST_NEW = exports.LEARN_HOMEWORK_LIST_NEW = (courseID) => {
    return `${LEARN_PREFIX}/b/wlxt/kczy/zy/student/index/zyListWj?wlkcid=${courseID}&size=${MAX_SIZE}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_LIST_SUBMITTED = exports.LEARN_HOMEWORK_LIST_SUBMITTED = (courseID) => {
    return `${LEARN_PREFIX}/b/wlxt/kczy/zy/student/index/zyListYjwg?wlkcid=${courseID}&size=${MAX_SIZE}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_LIST_GRADED = exports.LEARN_HOMEWORK_LIST_GRADED = (courseID) => {
    return `${LEARN_PREFIX}/b/wlxt/kczy/zy/student/index/zyListYpg?wlkcid=${courseID}&size=${MAX_SIZE}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_DETAIL = exports.LEARN_HOMEWORK_DETAIL = (courseID, homeworkID, studentHomeworkID) => {
    return `${LEARN_PREFIX}/f/wlxt/kczy/zy/student/viewCj?wlkcid=${courseID}&zyid=${homeworkID}&xszyid=${studentHomeworkID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_DOWNLOAD = exports.LEARN_HOMEWORK_DOWNLOAD = (courseID, attachmentID) => {
    return `${LEARN_PREFIX}/b/wlxt/kczy/zy/student/downloadFile/${courseID}/${attachmentID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_HOMEWORK_SUBMIT = exports.LEARN_HOMEWORK_SUBMIT = (courseID, studentHomeworkID) => {
    return `${LEARN_PREFIX}/f/wlxt/kczy/zy/student/tijiao?wlkcid=${courseID}&xszyid=${studentHomeworkID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_DISCUSSION_LIST = exports.LEARN_DISCUSSION_LIST = (courseID, courseType) => {
    return `${LEARN_PREFIX}/b/wlxt/bbs/bbs_tltb/${courseType}/kctlList?wlkcid=${courseID}&size=${MAX_SIZE}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_DISCUSSION_DETAIL = exports.LEARN_DISCUSSION_DETAIL = (courseID, boardID, discussionID, courseType, tabId = 1) => {
    return `${LEARN_PREFIX}/f/wlxt/bbs/bbs_tltb/${courseType}/viewTlById?wlkcid=${courseID}&id=${discussionID}&tabbh=${tabId}&bqid=${boardID}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_QUESTION_LIST_ANSWERED = exports.LEARN_QUESTION_LIST_ANSWERED = (courseID, courseType) => {
    return `${LEARN_PREFIX}/b/wlxt/bbs/bbs_tltb/${courseType}/kcdyList?wlkcid=${courseID}&size=${MAX_SIZE}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var LEARN_QUESTION_DETAIL = exports.LEARN_QUESTION_DETAIL = (courseID, questionID, courseType) => {
    if (courseType === CourseType.STUDENT) {
        return `${LEARN_PREFIX}/f/wlxt/bbs/bbs_kcdy/student/viewDyById?wlkcid=${courseID}&id=${questionID}`;
    }
    else {
        return `${LEARN_PREFIX}/f/wlxt/bbs/bbs_kcdy/teacher/beforeEditDy?wlkcid=${courseID}&id=${questionID}`;
    }
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var REGISTRAR_TICKET_FORM_DATA = exports.REGISTRAR_TICKET_FORM_DATA = () => {
    const form = new FormData();
    form.append('appId', 'ALL_ZHJW');
    return form;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var REGISTRAR_TICKET = exports.REGISTRAR_TICKET = () => {
    return `${LEARN_PREFIX}/b/wlxt/common/auth/gnt`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var REGISTRAR_AUTH = exports.REGISTRAR_AUTH = (ticket) => {
    return `${REGISTRAR_PREFIX}/j_acegi_login.do?url=/&ticket=${ticket}`;
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var REGISTRAR_CALENDAR = exports.REGISTRAR_CALENDAR = (startDate, endDate, graduate = false, callbackName = 'unknown') => {
    return `${REGISTRAR_PREFIX}/jxmh_out.do?m=${graduate ? 'yjs' : 'bks'}_jxrl_all&p_start_date=${startDate}&p_end_date=${endDate}&jsoncallback=${callbackName}`;
};

}, function(modId) { var map = {"./types.js":1646914021218,"./utils.js":1646914021219}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646914021218, function(require, module, exports) {
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var FailReason = exports.FailReason = undefined;
(function (FailReason) {
    FailReason["NO_CREDENTIAL"] = "no credential provided";
    FailReason["ERROR_FETCH_FROM_ID"] = "could not fetch ticket from id.tsinghua.edu.cn";
    FailReason["BAD_CREDENTIAL"] = "bad credential";
    FailReason["ERROR_ROAMING"] = "could not roam to learn.tsinghua.edu.cn";
    FailReason["NOT_LOGGED_IN"] = "not logged in or login timeout";
    FailReason["NOT_IMPLEMENTED"] = "not implemented";
    FailReason["INVALID_RESPONSE"] = "invalid response";
    FailReason["UNEXPECTED_STATUS"] = "unexpected status";
})(FailReason || (FailReason = {}));
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var SemesterType = exports.SemesterType = undefined;
(function (SemesterType) {
    SemesterType["FALL"] = "\u79CB\u5B63\u5B66\u671F";
    SemesterType["SPRING"] = "\u6625\u5B63\u5B66\u671F";
    SemesterType["SUMMER"] = "\u590F\u5B63\u5B66\u671F";
    SemesterType["UNKNOWN"] = "";
})(SemesterType || (SemesterType = {}));
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var ContentType = exports.ContentType = undefined;
(function (ContentType) {
    ContentType["NOTIFICATION"] = "notification";
    ContentType["FILE"] = "file";
    ContentType["HOMEWORK"] = "homework";
    ContentType["DISCUSSION"] = "discussion";
    ContentType["QUESTION"] = "question";
})(ContentType || (ContentType = {}));
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var CourseType = exports.CourseType = undefined;
(function (CourseType) {
    CourseType["STUDENT"] = "student";
    CourseType["TEACHER"] = "teacher";
})(CourseType || (CourseType = {}));

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646914021219, function(require, module, exports) {
var __TEMP__ = require('entities');var _decodeHTML = __TEMP__['decodeHTML'];
var __TEMP__ = require('./types.js');var SemesterType = __TEMP__['SemesterType'];var FailReason = __TEMP__['FailReason'];var ContentType = __TEMP__['ContentType'];
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function parseSemesterType(n) {
    if (n === 1) {
        return SemesterType.FALL;
    }
    else if (n === 2) {
        return SemesterType.SPRING;
    }
    else if (n === 3) {
        return SemesterType.SUMMER;
    }
    else {
        return SemesterType.UNKNOWN;
    }
};exports.parseSemesterType = parseSemesterType
const CONTENT_TYPE_MK_MAP = new Map([
    [ContentType.NOTIFICATION, 'kcgg'],
    [ContentType.FILE, 'kcwj'],
    [ContentType.HOMEWORK, 'kczy'],
    [ContentType.DISCUSSION, ''],
    [ContentType.QUESTION, ''],
]);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function getMkFromType(type) {
    var _a;
    return 'mk_' + ((_a = CONTENT_TYPE_MK_MAP.get(type)) !== null && _a !== void 0 ? _a : 'UNKNOWN');
};exports.getMkFromType = getMkFromType
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function decodeHTML(html) {
    const text = _decodeHTML(html);
    // remove strange prefixes returned by web learning
    return text.startsWith('\xC2\x9E\xC3\xA9\x65')
        ? text.substr(5)
        : text.startsWith('\x9E\xE9\x65')
            ? text.substr(3)
            : text.startsWith('\xE9\x65')
                ? text.substr(2)
                : text;
};exports.decodeHTML = decodeHTML
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function trimAndDefine(text) {
    if (text === undefined || text === null) {
        return undefined;
    }
    const trimmed = text.trim();
    return trimmed === '' ? undefined : decodeHTML(trimmed);
};exports.trimAndDefine = trimAndDefine
const GRADE_LEVEL_MAP = new Map([
    [-100, '已阅'],
    [-99, 'A+'],
    [-98, 'A'],
    [-92, 'A-'],
    [-87, 'B+'],
    [-85, '优秀'],
    [-82, 'B'],
    [-78, 'B-'],
    [-74, 'C+'],
    [-71, 'C'],
    [-68, 'C-'],
    [-67, 'G'],
    [-66, 'D+'],
    [-64, 'D'],
    [-65, '免课'],
    [-63, 'P'],
    [-62, 'EX'],
    [-61, '免修'],
    [-60, '通过'],
    [-59, '不通过'],
    [-55, 'W'],
    [-51, 'I'],
    [-50, '缓考'],
    [-31, 'NA'],
    [-30, 'F'],
]);
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function mapGradeToLevel(grade) {
    if (grade !== null && GRADE_LEVEL_MAP.has(grade)) {
        return GRADE_LEVEL_MAP.get(grade);
    }
    else {
        return undefined;
    }
};exports.mapGradeToLevel = mapGradeToLevel
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });var JSONP_EXTRACTOR_NAME = exports.JSONP_EXTRACTOR_NAME = 'thu_learn_lib_jsonp_extractor';
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function extractJSONPResult(jsonp) {
    // check jsonp format
    if (!jsonp.startsWith(JSONP_EXTRACTOR_NAME)) {
        throw FailReason.INVALID_RESPONSE;
    }
    // evaluate the result
    return Function(`"use strict";const ${JSONP_EXTRACTOR_NAME}=(s)=>s;return ${jsonp};`)();
};exports.extractJSONPResult = extractJSONPResult

}, function(modId) { var map = {"./types.js":1646914021218}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646914021216);
})()
//miniprogram-npm-outsideDeps=["cheerio","js-base64","cross-fetch","real-isomorphic-fetch","tough-cookie-no-native","form-data","entities"]
//# sourceMappingURL=index.js.map