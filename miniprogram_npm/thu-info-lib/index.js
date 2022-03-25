module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646969312973, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Water = exports.InfoHelper = void 0;
const basics_1 = require("./lib/basics");
const core_1 = require("./lib/core");
const dorm_1 = require("./lib/dorm");
const water_1 = require("./lib/water");
const library_1 = require("./lib/library");
const news_1 = require("./lib/news");
const schedule_1 = require("./lib/schedule");
const sports_1 = require("./lib/sports");
const cr_1 = require("./lib/cr");
const gitlab_1 = require("./lib/gitlab");
class InfoHelper {
    constructor() {
        this.userId = "";
        this.password = "";
        this.dormPassword = "";
        this.MOCK = "8888";
        this.mocked = () => this.userId === this.MOCK && this.password === this.MOCK;
        this.graduate = () => this.userId.length > 4 ? (this.userId[4] === "2" || this.userId[4] === "3") : false;
        this.clearCookieHandler = async () => {
        };
        this.login = async (auth) => { var _a, _b, _c; return (0, core_1.login)(this, (_a = auth.userId) !== null && _a !== void 0 ? _a : this.userId, (_b = auth.password) !== null && _b !== void 0 ? _b : this.password, (_c = auth.dormPassword) !== null && _c !== void 0 ? _c : this.dormPassword); };
        this.logout = async () => (0, core_1.logout)(this);
        this.getUserInfo = async () => (0, basics_1.getUserInfo)(this);
        this.getReport = (bx, newGPA, flag = 1) => (0, basics_1.getReport)(this, bx, newGPA, flag);
        this.getAssessmentList = () => (0, basics_1.getAssessmentList)(this);
        this.getAssessmentForm = (url) => (0, basics_1.getAssessmentForm)(this, url);
        this.postAssessmentForm = (form) => (0, basics_1.postAssessmentForm)(this, form);
        this.getPhysicalExamResult = () => (0, basics_1.getPhysicalExamResult)(this);
        this.getExpenditures = (beg, end) => (0, basics_1.getExpenditures)(this, beg, end);
        this.getClassroomState = (name, week) => (0, basics_1.getClassroomState)(this, name, week);
        this.loseCard = async () => (0, basics_1.loseCard)(this);
        this.getBankPayment = async () => (0, basics_1.getBankPayment)(this);
        this.getCalendar = async () => (0, basics_1.getCalendar)(this);
        this.getCountdown = async () => (0, basics_1.countdown)();
        this.getEleRechargePayCode = async (money) => (0, dorm_1.getEleRechargePayCode)(this, money);
        this.getElePayRecord = async () => (0, dorm_1.getElePayRecord)(this);
        this.getEleRemainder = async () => (0, dorm_1.getEleRemainder)(this);
        this.getLibraryList = async () => (0, library_1.getLibraryList)(this);
        this.getLibrarySectionList = async (libraryFloor, dateChoice) => (0, library_1.getLibrarySectionList)(this, libraryFloor, dateChoice);
        this.getLibraryFloorList = async (library, dateChoice) => (0, library_1.getLibraryFloorList)(this, library, dateChoice);
        this.getLibrarySeatList = async (librarySection, dateChoice) => (0, library_1.getLibrarySeatList)(this, librarySection, dateChoice);
        this.bookLibrarySeat = async (librarySeat, section, dateChoice) => (0, library_1.bookLibrarySeat)(this, librarySeat, section, dateChoice);
        this.getBookingRecords = async () => (0, library_1.getBookingRecords)(this);
        this.cancelBooking = async (id) => (0, library_1.cancelBooking)(this, id);
        this.getLibraryRoomBookingResourceList = async (date) => (0, library_1.getLibraryRoomBookingResourceList)(this, date);
        this.fuzzySearchLibraryId = async (keyword) => (0, library_1.fuzzySearchLibraryId)(this, keyword);
        this.bookLibraryRoom = async (roomRes, start, // yyyy-MM-dd HH:mm
        end, // yyyy-MM-dd HH:mm
        memberList) => (0, library_1.bookLibraryRoom)(this, roomRes, start, end, memberList);
        this.getLibraryRoomBookingRecord = async () => (0, library_1.getLibraryRoomBookingRecord)(this);
        this.cancelLibraryRoomBooking = async (id) => (0, library_1.cancelLibraryRoomBooking)(this, id);
        this.getNewsList = async (channel, page) => (0, news_1.getNewsList)(this, channel, page);
        this.getNewsDetail = async (url) => (0, news_1.getNewsDetail)(this, url);
        this.getSchedule = async () => (0, schedule_1.getSchedule)(this);
        this.getCrCaptchaUrl = async () => (0, cr_1.getCrCaptchaUrlMethod)();
        this.loginCr = async (captcha) => (0, cr_1.loginCr)(this, captcha);
        this.getCrAvailableSemesters = async () => (0, cr_1.getCrAvailableSemestersMethod)();
        this.getCrCoursePlan = async (semester) => (0, cr_1.getCoursePlan)(this, semester);
        this.searchCrRemaining = async (params) => (0, cr_1.searchCrRemaining)(this, params);
        this.searchCrPrimaryOpen = async (params) => (0, cr_1.searchCrPrimaryOpen)(this, params);
        this.searchCrCourses = async (params) => (0, cr_1.searchCrCourses)(this, params);
        this.getSportsResources = async (gymId, itemId, date) => (0, sports_1.getSportsResources)(this, gymId, itemId, date);
        this.updateSportsPhoneNumber = async (phone) => (0, sports_1.updateSportsPhoneNumber)(this, phone);
        this.getSportsCaptchaUrl = () => (0, sports_1.getSportsCaptchaUrlMethod)();
        this.makeSportsReservation = async (totalCost, phone, receiptTitle, gymId, itemId, date, // yyyy-MM-dd
        captcha, fieldId) => (0, sports_1.makeSportsReservation)(this, totalCost, phone, receiptTitle, gymId, itemId, date, captcha, fieldId);
        this.getSportsReservationRecords = async () => (0, sports_1.getSportsReservationRecords)(this);
        this.unsubscribeSportsReservation = async (bookId) => (0, sports_1.unsubscribeSportsReservation)(this, bookId);
        this.getGitNamespaces = async (page) => (0, gitlab_1.getNamespaces)(this, page);
        this.getGitRecentProjects = async (page) => (0, gitlab_1.getRecentProjects)(this, page);
        this.getGitOwnedProjects = async (name, page) => (0, gitlab_1.getPersonalProjects)(this, name, page);
        this.searchGitProjects = async (search, page) => (0, gitlab_1.searchProjects)(this, search, page);
        this.getGitStarredProjects = async (page) => (0, gitlab_1.getStarredProjects)(this, page);
        this.getGitProjectDetail = async (id) => (0, gitlab_1.getProjectDetail)(this, id);
        this.getGitProjectTree = async (id, path, ref, page) => (0, gitlab_1.getProjectTree)(this, id, path, ref, page);
        this.getGitProjectBranches = async (id) => (0, gitlab_1.getProjectBranches)(this, id);
        this.getGitProjectFileBlob = async (id, sha) => (0, gitlab_1.getProjectFileBlob)(this, id, sha);
        this.renderGitMarkdown = async (text) => (0, gitlab_1.renderMarkdown)(this, text);
    }
}
exports.InfoHelper = InfoHelper;
class Water {
    constructor() {
        this.id = ""; // 档案号
        this.num = ""; // 订水量
        this.num1 = ""; // 订水票量
        this.lid = ""; // 水种类
        this.address = ""; // 地址
        this.phone = ""; // 电话
        /*
        "6":清紫源泉矿泉水（高端）
        "10":燕园泉矿泉水（高端）
        "12":农夫山泉桶装水（19L）
        "11":清紫源泉矿泉水
        "8":喜士天然矿泉水（大）
        "9":喜士天然矿泉水（小）
        "1":娃哈哈矿泉水
        "7":娃哈哈纯净水
        "5":清紫源泉纯净水
        */
        this.getUserInformation = async (id) => (0, water_1.getUserInformation)(this, id);
        this.getUserInformationAndStore = async (id) => (0, water_1.getUserInformationAndStore)(this, id);
        this.postWaterSubmission = async (num, num1, lid) => (0, water_1.postWaterSubmission)(this, num, num1, lid);
    }
}
exports.Water = Water;

}, function(modId) {var map = {"./lib/basics":1646969312974,"./lib/core":1646969312975,"./lib/dorm":1646969312982,"./lib/water":1646969312985,"./lib/library":1646969312986,"./lib/news":1646969312989,"./lib/schedule":1646969313002,"./lib/sports":1646969313005,"./lib/cr":1646969313007,"./lib/gitlab":1646969313008}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312974, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countdown = exports.getCalendar = exports.getBankPayment = exports.loseCard = exports.getClassroomState = exports.getExpenditures = exports.getPhysicalExamResult = exports.postAssessmentForm = exports.getAssessmentForm = exports.getAssessmentList = exports.getReport = exports.getUserInfo = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const core_1 = require("./core");
const strings_1 = require("../constants/strings");
const cheerio_2 = require("../utils/cheerio");
const assessment_1 = require("../models/home/assessment");
const xlsx_1 = __importDefault(require("xlsx"));
const dayjs_1 = __importDefault(require("dayjs"));
const network_1 = require("../utils/network");
const basics_1 = require("../mocks/basics");
const error_1 = require("../utils/error");
const getUserInfo = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "F315577F5BF20E1B1668EDD594B2C04F", async (param) => {
    if (param === undefined) {
        throw new error_1.LibError();
    }
    else {
        const $ = cheerio_1.default.load(param);
        const fullName = $(".account").text();
        const email = $(".email").text();
        const emailRes = /<(.+?)@mails.tsinghua.edu.cn>/g.exec(email);
        if (emailRes === null || emailRes[1] === undefined) {
            throw new error_1.UserInfoError();
        }
        return { fullName, emailName: emailRes[1] };
    }
}, {
    fullName: "",
    emailName: "",
});
exports.getUserInfo = getUserInfo;
const gradeToOldGPA = new Map([
    ["A-", 3.7],
    ["B+", 3.3],
    ["B", 3.0],
    ["B-", 2.7],
    ["C+", 2.3],
    ["C", 2.0],
    ["C-", 1.7],
    ["D+", 1.3],
    ["D", 1.0],
]);
const getReport = (helper, bx, newGPA, flag = 1) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "B7EF0ADF9406335AD7905B30CD7B49B1", () => Promise.all([
    (0, network_1.uFetch)(helper.graduate() ? strings_1.GET_YJS_REPORT_URL : (`${strings_1.GET_BKS_REPORT_URL}&flag=di${flag}`)),
    bx && flag === 1
        ? (0, network_1.uFetch)(helper.graduate() ? strings_1.YJS_REPORT_BXR_URL : strings_1.BKS_REPORT_BXR_URL)
        : undefined,
]).then(([str, bxStr]) => {
    const bxSet = new Set();
    if (bxStr) {
        const childrenOriginal = (0, cheerio_1.default)(".table-striped tr", bxStr);
        const children = childrenOriginal.slice(1, childrenOriginal.length - 1);
        children.each((index, element) => {
            if (element.type === "tag" && element.children.length === 25) {
                const transformedElement = (0, cheerio_1.default)(element);
                const type = (0, cheerio_2.getCheerioText)(transformedElement.children()[8], 0);
                if (type === "必修" || type === "限选") {
                    bxSet.add((0, cheerio_2.getCheerioText)(transformedElement.children()[0], 0));
                }
            }
        });
    }
    const graduate = helper.graduate();
    const result = (0, cheerio_1.default)("[cellspacing=1] tr", str)
        .slice(1)
        .map((_, element) => {
        var _a;
        const grade = (0, cheerio_2.getCheerioText)(element, graduate ? 9 : 7);
        let point = Number((0, cheerio_2.getCheerioText)(element, graduate ? 11 : 9));
        if (!newGPA) {
            point = (_a = gradeToOldGPA.get(grade)) !== null && _a !== void 0 ? _a : point;
        }
        return bxStr === undefined ||
            bxSet.has((0, cheerio_2.getCheerioText)(element, 1))
            ? {
                name: (0, cheerio_2.getCheerioText)(element, 3),
                credit: Number((0, cheerio_2.getCheerioText)(element, 5)),
                grade,
                point,
                semester: (0, cheerio_2.getCheerioText)(element, graduate ? 13 : 11),
                // eslint-disable-next-line no-mixed-spaces-and-tabs
            }
            : undefined;
    })
        .get();
    if (result.length === 0 && str.indexOf("table1") === -1) {
        throw new error_1.ReportError();
    }
    return result;
}), basics_1.MOCK_REPORT);
exports.getReport = getReport;
const getAssessmentList = (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "0D8B99BA23FD2BA22428D9C8AA0AB508", () => (0, network_1.uFetch)(strings_1.ASSESSMENT_LIST_URL).then((str) => {
    const result = (0, cheerio_1.default)("tbody", str)
        .children()
        .map((index, element) => {
        const onclick = element
            .children[11].firstChild.attribs
            .onclick;
        const href = strings_1.ASSESSMENT_BASE_URL +
            onclick.substring(onclick.indexOf("Body('") + 6, onclick.indexOf("') })"));
        return [
            [
                (0, cheerio_2.getCheerioText)(element, 5),
                (0, cheerio_2.getCheerioText)(element, 9) === "是",
                href,
            ],
        ];
    })
        .get();
    if (result.length === 0) {
        throw new error_1.AssessmentError();
    }
    return result;
}), basics_1.MOCK_ASSESSMENT_LIST);
exports.getAssessmentList = getAssessmentList;
const getAssessmentForm = (helper, url) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "0D8B99BA23FD2BA22428D9C8AA0AB508", () => (0, network_1.uFetch)(url).then((str) => {
    const $ = cheerio_1.default.load(str);
    const basics = $("#xswjtxFormid > input")
        .map((_, element) => new assessment_1.InputTag(element))
        .get();
    const overallSuggestion = new assessment_1.InputTag("kcpgjgDtos[0].jtjy", (0, cheerio_2.getCheerioText)($("textarea")[1]));
    const overallScore = new assessment_1.InputTag($("#kcpjfs")[0]);
    const overall = new assessment_1.Overall(overallSuggestion, overallScore);
    const tabPanes = $(".tab-pane");
    const teachers = (0, assessment_1.toPersons)(tabPanes.first());
    const assistants = (0, assessment_1.toPersons)(tabPanes.first().next().next());
    return new assessment_1.Form(basics, overall, teachers, assistants);
}), (0, basics_1.MOCK_ASSESSMENT_FORM)(url));
exports.getAssessmentForm = getAssessmentForm;
const postAssessmentForm = (helper, form) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "0D8B99BA23FD2BA22428D9C8AA0AB508", () => (0, network_1.uFetch)(strings_1.ASSESSMENT_SUBMIT_URL, form.serialize()).then((res) => {
    if (JSON.parse(res).result !== "success") {
        throw new error_1.AssessmentError(JSON.parse(res).msg);
    }
}), undefined);
exports.postAssessmentForm = postAssessmentForm;
const physicalExamResultTotal = (json) => Number(json.fhltzfs) * 0.15 +
    Number(json.wsmpfs) * 0.2 +
    Number(json.zwtqqfs) * 0.1 +
    Number(json.ldtyfs) * 0.1 +
    Number(json.ytxsfs) * 0.1 +
    Number(json.yqmpfs) * 0.2 +
    Number(json.ywqzfs) * 0.1 +
    Number(json.bbmpfs) * 0.2 +
    Number(json.sgtzfs) * 0.15;
const getPhysicalExamResult = (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "8BF4F9A706589060488B6B6179E462E5", () => (0, network_1.uFetch)(strings_1.PHYSICAL_EXAM_URL).then((s) => {
    const json = JSON.parse(
    // eslint-disable-next-line quotes
    s.replace(/'/g, '"'));
    if (json.success === "false") {
        return [["状态", "暂无可查成绩"]];
    }
    else {
        return [
            ["是否免测", json.sfmc],
            ["免测原因", json.mcyy],
            ["总分", json.zf],
            ["标准分", json.bzf],
            ["附加分", json.fjf],
            ["长跑附加分", json.cpfjf],
            [
                "参考成绩（APP自动结算，仅供参考）",
                physicalExamResultTotal(json),
            ],
            ["身高", json.sg],
            ["体重", json.tz],
            ["身高体重分数", json.sgtzfs],
            ["肺活量", json.fhl],
            ["肺活量分数", json.fhltzfs],
            ["800M跑", json.bbmp],
            ["800M跑分数", json.bbmpfs],
            ["1000M跑", json.yqmp],
            ["1000M跑分数", json.yqmpfs],
            ["50M跑", json.wsmp],
            ["50M跑分数", json.wsmpfs],
            ["立定跳远", json.ldty],
            ["立定跳远分数", json.ldtyfs],
            ["坐位体前屈", json.zwtqq],
            ["坐位体前屈分数", json.zwtqqfs],
            ["仰卧起坐", json.ywqz],
            ["仰卧起坐分数", json.ywqzfs],
            ["引体向上", json.ytxs],
            ["引体向上分数", json.ytxsfs],
            ["体育课成绩", json.tykcj],
        ];
    }
}), basics_1.MOCK_PHYSICAL_EXAM_RESULT);
exports.getPhysicalExamResult = getPhysicalExamResult;
const getExpenditures = (helper, beg, end) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "2B56CC9B3BFFA26932C4110E0C5FB35A", () => (0, network_1.uFetch)(strings_1.EXPENDITURE_URL).then((data) => {
    const workbook = xlsx_1.default.read(data, { sheetStubs: true, cellDates: true });
    const sheet = xlsx_1.default.utils.sheet_to_json(workbook.Sheets.Sheet1, { header: ["index", "locale", "category", "terminal", "date", "value"] });
    const result = sheet.slice(1, sheet.length - 1);
    result.forEach((record) => {
        record.value = Number(record.value);
        if (record.category.match(/^(消费|自助缴费.*|取消充值|领取旧卡余额)$/)) {
            record.value *= -1;
        }
    });
    const remainder = result.reduce((prev, curr) => prev + (curr.category === "领取旧卡余额" ? 0 : curr.value), 0);
    let income = 0;
    let outgo = 0;
    const filtered = result
        .filter((it) => {
        const d = (0, dayjs_1.default)(it.date.split(" ")[0], "YYYY-MM-DD")
            .toDate()
            .valueOf();
        const valid = d >= beg.valueOf() - 86400000 && d <= end.valueOf(); // Locales are nasty.
        if (valid && it.category !== "领取旧卡余额") {
            if (it.value > 0) {
                income += it.value;
            }
            else {
                outgo -= it.value;
            }
        }
        return valid;
    })
        .reverse();
    return [filtered, income, outgo, remainder];
}), basics_1.MOCK_EXPENDITURES);
exports.getExpenditures = getExpenditures;
const getClassroomState = (helper, name, week) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "40470BB47E0849E9EF717983490BC964", () => (0, network_1.uFetch)(strings_1.CLASSROOM_STATE_PREFIX + (0, network_1.arbitraryEncode)(name, "gb2312") + strings_1.CLASSROOM_STATE_MIDDLE + week).then((s) => {
    const result = (0, cheerio_1.default)("#scrollContent>table>tbody", s)
        .map((_, element) => element.children
        .filter((it) => it.type === "tag" && it.tagName === "tr")
        .map((tr) => {
        var _a, _b;
        const id = (_b = (_a = tr.children[1].children[2].data) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
        const status = tr.children
            .slice(3)
            .filter((it) => it.type === "tag" && it.tagName === "td")
            .map((td) => {
            var _a, _b, _c;
            const classNames = (_c = (_b = (_a = td.attribs.class) === null || _a === void 0 ? void 0 : _a.split(" ")) === null || _b === void 0 ? void 0 : _b.filter((it) => it !== "colBound")) !== null && _c !== void 0 ? _c : [];
            if (classNames.length > 1) {
                return 0;
            }
            else {
                switch (classNames[0]) {
                    case "onteaching":
                        return 0;
                    case "onexam":
                        return 1;
                    case "onborrowed":
                        return 2;
                    case "ondisabled":
                        return 3;
                    case undefined:
                        return 5;
                    default:
                        return 4;
                }
            }
        });
        return [id, status];
    }))
        .get();
    if (result.length === 0 && s.indexOf("scrollContent") === -1) {
        throw new error_1.ClassroomStateError();
    }
    return result;
}), basics_1.MOCK_CLASSROOM_STATE);
exports.getClassroomState = getClassroomState;
const loseCard = (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "2B56CC9B3BFFA26932C4110E0C5FB35A", () => (0, network_1.uFetch)(strings_1.LOSE_CARD_URL).then((s) => {
    const index = s.indexOf("var result");
    const left = s.indexOf("=", index) + 1;
    const right = s.indexOf("\n", left);
    const value = s.substring(left, right).trim();
    if (value === "null") {
        throw new error_1.LoseCardError();
    }
    else {
        return Number(value);
    }
}), basics_1.MOCK_LOSE_CARD_CODE);
exports.loseCard = loseCard;
const getBankPayment = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "2A5182CB3F36E80395FC2091001BDEA6", async (s) => {
    if (s === undefined) {
        throw new error_1.LibError();
    }
    const options = (0, cheerio_1.default)("option", s).map((_, e) => e.attribs.value).get();
    const form = options.map((o) => `year=${encodeURIComponent(o)}`).join("&");
    const result = await (0, network_1.uFetch)(strings_1.BANK_PAYMENT_SEARCH_URL, form, 60000, "UTF-8", true);
    const $ = cheerio_1.default.load(result);
    const titles = $("div strong")
        .map((_, e) => {
        var _a;
        const text = (_a = e.children[0].data) === null || _a === void 0 ? void 0 : _a.trim();
        if (text === undefined) {
            return undefined;
        }
        const res = /(\d+年\d+月)银行代发结果/g.exec(text);
        if (res === null || res[1] === undefined) {
            return undefined;
        }
        return res[1];
    })
        .get()
        .filter((text) => text !== undefined);
    return $("div table tbody")
        .filter(index => index < titles.length)
        .map((index, e) => {
        const rows = (0, cheerio_1.default)(e).children();
        const data = rows.slice(1, rows.length - 1);
        return {
            month: titles[index],
            payment: data.map((_, row) => {
                const columns = (0, cheerio_1.default)(row).children();
                return {
                    department: (0, cheerio_2.getCheerioText)(columns[1], 0),
                    project: (0, cheerio_2.getCheerioText)(columns[2], 0),
                    usage: (0, cheerio_2.getCheerioText)(columns[3], 0),
                    description: (0, cheerio_2.getCheerioText)(columns[4], 0),
                    bank: (0, cheerio_2.getCheerioText)(columns[5], 0),
                    time: (0, cheerio_2.getCheerioText)(columns[6], 0),
                    total: (0, cheerio_2.getCheerioText)(columns[7].children[0], 0),
                    deduction: (0, cheerio_2.getCheerioText)(columns[8].children[0], 0),
                    actual: (0, cheerio_2.getCheerioText)(columns[9].children[0], 0),
                    deposit: (0, cheerio_2.getCheerioText)(columns[10].children[0], 0),
                    cash: (0, cheerio_2.getCheerioText)(columns[11].children[0], 0),
                };
            }).get(),
        };
    })
        .get();
}, basics_1.MOCK_BANK_PAYMENT);
exports.getBankPayment = getBankPayment;
const getCalendar = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "", async () => {
    const { object } = await (0, network_1.uFetch)(`${strings_1.CALENDAR_URL}?_csrf=${await (0, core_1.getCsrfToken)()}`).then(JSON.parse);
    const firstDay = object.jyzdyt;
    const semesterId = object.xnxq;
    const semesterCode = semesterId[semesterId.length - 1];
    const weekCount = semesterCode === "3" ? 12 : 18;
    return { firstDay, semesterId, weekCount };
}, basics_1.MOCK_CALENDAR_DATA);
exports.getCalendar = getCalendar;
const countdown = async () => {
    const $ = cheerio_1.default.load(await (0, network_1.uFetch)(strings_1.COUNT_DOWN_URL));
    const data = $(".countdown li");
    return data.map((_, e) => (0, cheerio_1.default)(e).text()).get();
};
exports.countdown = countdown;

}, function(modId) { var map = {"./core":1646969312975,"../constants/strings":1646969312976,"../utils/cheerio":1646969312979,"../models/home/assessment":1646969312980,"../utils/network":1646969312977,"../mocks/basics":1646969312981,"../utils/error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312975, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roamingWrapperWithMocks = exports.roamingWrapper = exports.roam = exports.logout = exports.login = exports.getCsrfToken = void 0;
const strings_1 = require("../constants/strings");
const cheerio_1 = __importDefault(require("cheerio"));
const network_1 = require("../utils/network");
const network_2 = require("../utils/network");
const error_1 = require("../utils/error");
const HOST_MAP = {
    "zhjw.cic": "77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290",
    "jxgl.cic": "77726476706e69737468656265737421faef469069336153301c9aa596522b20e33c1eb39606919f",
    "ecard": "77726476706e69737468656265737421f5f4408e237e7c4377068ea48d546d303341e9882a",
    "learn": "77726476706e69737468656265737421fcf2408e297e7c4377068ea48d546d30ca8cc97bcc",
    "mails": "77726476706e69737468656265737421fdf64890347e7c4377068ea48d546d3011ff591d40",
    "50": "77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00",
    "166.111.14.8": "77726476706e69737468656265737421a1a117d27661391e2f5cc7f4",
};
const parseUrl = (urlIn) => {
    const rawRes = /http:\/\/(\d+.\d+.\d+.\d+):(\d+)\/(.+)/g.exec(urlIn);
    if (rawRes !== null && rawRes[1] !== undefined && rawRes[2] !== undefined && rawRes[3] !== undefined) {
        return `https://webvpn.tsinghua.edu.cn/http-${rawRes[2]}/${HOST_MAP[rawRes[1]]}/${rawRes[3]}`;
    }
    const protocol = urlIn.substring(0, urlIn.indexOf(":"));
    const regRes = /:\/\/(.+?).tsinghua.edu.cn\/(.+)/.exec(urlIn);
    if (regRes === null || regRes[1] === undefined || regRes[2] === undefined) {
        throw new error_1.UrlError();
    }
    const host = regRes[1];
    const path = regRes[2];
    return `https://webvpn.tsinghua.edu.cn/${protocol}/${HOST_MAP[host]}/${path}`;
};
const getCsrfToken = async () => {
    const cookie = await (0, network_2.uFetch)(strings_1.GET_COOKIE_URL);
    const q = /XSRF-TOKEN=(.+?);/.exec(cookie + ";");
    if (q === null || q[1] === undefined) {
        throw new Error("Failed to get csrf token.");
    }
    return q[1];
};
exports.getCsrfToken = getCsrfToken;
const login = async (helper, userId, password, dormPassword) => {
    helper.userId = userId;
    helper.password = password;
    helper.dormPassword = dormPassword;
    if (!helper.mocked()) {
        (0, network_1.clearCookies)();
        await helper.clearCookieHandler();
        const loginResponse = await (0, network_2.uFetch)(strings_1.DO_LOGIN_URL, {
            auth_type: "local",
            username: userId,
            sms_code: "",
            password: password,
        }).then(JSON.parse);
        if (!loginResponse.success) {
            switch (loginResponse.error) {
                case "NEED_CONFIRM":
                    await (0, network_2.uFetch)(strings_1.CONFIRM_LOGIN_URL, {});
                    break;
                default:
                    throw new error_1.LoginError(loginResponse.message);
            }
        }
        try {
            await (0, exports.roam)(helper, "id", "10000ea055dd8d81d09d5a1ba55d39ad");
        }
        catch (e) {
            throw new error_1.LoginError(e === null || e === void 0 ? void 0 : e.message);
        }
    }
};
exports.login = login;
const logout = async (helper) => {
    if (!helper.mocked()) {
        await (0, network_2.uFetch)(strings_1.LOGOUT_URL);
    }
};
exports.logout = logout;
const roam = async (helper, policy, payload) => {
    switch (policy) {
        case "default": {
            const csrf = await (0, exports.getCsrfToken)();
            const { object } = await (0, network_2.uFetch)(`${strings_1.ROAMING_URL}?yyfwid=${payload}&_csrf=${csrf}&machine=p`, {}).then(JSON.parse);
            const url = parseUrl(object.roamingurl.replace(/&amp;/g, "&"));
            return await (0, network_2.uFetch)(url);
        }
        case "id": {
            await (0, network_2.uFetch)(strings_1.ID_BASE_URL + payload);
            let response = await (0, network_2.uFetch)(strings_1.ID_LOGIN_URL, {
                i_user: helper.userId,
                i_pass: helper.password,
                i_captcha: "",
            });
            if (!response.includes("登录成功。正在重定向到")) {
                await (0, network_2.uFetch)(strings_1.ID_BASE_URL + payload);
                response = await (0, network_2.uFetch)(strings_1.ID_LOGIN_URL, {
                    i_user: helper.userId,
                    i_pass: helper.password,
                    i_captcha: "",
                });
                if (!response.includes("登录成功。正在重定向到")) {
                    throw new error_1.IdAuthError();
                }
            }
            const redirectUrl = (0, cheerio_1.default)("a", response).attr().href;
            return await (0, network_2.uFetch)(redirectUrl);
        }
        case "cab": {
            return await (0, network_2.uFetch)(strings_1.LIBRARY_ROOM_BOOKING_LOGIN_URL, {
                id: helper.userId,
                pwd: helper.password,
                act: "login",
            });
        }
        case "myhome": {
            const validChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz =+-/_()<>,.'`~");
            const password = helper.dormPassword || helper.password;
            let tempPassword = "";
            for (let i = 0; i < password.length; i++) {
                if (validChars.has(password.charAt(i))) {
                    tempPassword += password.charAt(i);
                }
            }
            const $ = cheerio_1.default.load(await (0, network_2.uFetch)(strings_1.TSINGHUA_HOME_LOGIN_URL));
            return await (0, network_2.uFetch)(strings_1.TSINGHUA_HOME_LOGIN_URL, {
                __VIEWSTATE: $("#__VIEWSTATE").attr().value,
                __VIEWSTATEGENERATOR: $("#__VIEWSTATEGENERATOR").attr().value,
                net_Default_LoginCtrl1$txtUserName: helper.userId,
                net_Default_LoginCtrl1$txtUserPwd: tempPassword,
                "net_Default_LoginCtrl1$lbtnLogin.x": 17,
                "net_Default_LoginCtrl1$lbtnLogin.y": 10,
                net_Default_LoginCtrl1$txtSearch1: "",
                Home_Img_NewsCtrl1$hfJsImg: "",
                Home_Img_ActivityCtrl1$hfScript: "",
                Home_Vote_InfoCtrl1$Repeater1$ctl01$hfID: 52,
                Home_Vote_InfoCtrl1$Repeater1$ctl01$rdolstSelect: 221,
            });
        }
        case "gitlab": {
            const data = await (0, network_2.uFetch)(strings_1.GITLAB_LOGIN_URL);
            if (data.includes("sign_out"))
                return data;
            const authenticity_token = cheerio_1.default.load(data)("[name=authenticity_token]").attr().value;
            await (0, network_2.uFetch)(strings_1.GITLAB_AUTH_URL, { authenticity_token });
            const response = await (0, network_2.uFetch)(strings_1.ID_LOGIN_URL, {
                i_user: helper.userId,
                i_pass: helper.password,
                i_captcha: "",
            });
            if (!response.includes("登录成功。正在重定向到")) {
                throw new error_1.IdAuthError();
            }
            const redirectUrl = (0, cheerio_1.default)("a", response).attr().href;
            return await (0, network_2.uFetch)(redirectUrl);
        }
    }
};
exports.roam = roam;
const verifyAndReLogin = async (helper) => {
    try {
        const { object } = await (0, network_2.uFetch)(`${strings_1.USER_DATA_URL}?_csrf=${await (0, exports.getCsrfToken)()}`).then(JSON.parse);
        if (object.ryh === helper.userId) {
            return false;
        }
    }
    catch (_a) {
        //
    }
    const { userId, password, dormPassword } = helper;
    await (0, exports.login)(helper, userId, password, dormPassword);
    return true;
};
const roamingWrapper = async (helper, policy, payload, operation) => {
    try {
        if (policy) {
            try {
                return await operation();
            }
            catch (_a) {
                const result = await (0, exports.roam)(helper, policy, payload);
                return await operation(result);
            }
        }
        else {
            return await operation();
        }
    }
    catch (e) {
        if (await verifyAndReLogin(helper)) {
            if (policy) {
                const result = await (0, exports.roam)(helper, policy, payload);
                return await operation(result);
            }
            else {
                return await operation();
            }
        }
        else {
            throw e;
        }
    }
};
exports.roamingWrapper = roamingWrapper;
const roamingWrapperWithMocks = async (helper, policy, payload, operation, fallback) => helper.mocked()
    ? Promise.resolve(fallback)
    : (0, exports.roamingWrapper)(helper, policy, payload, operation);
exports.roamingWrapperWithMocks = roamingWrapperWithMocks;

}, function(modId) { var map = {"../constants/strings":1646969312976,"../utils/network":1646969312977,"../utils/error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312976, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LIBRARY_ROOM_BOOKING_RECORD_URL = exports.LIBRARY_ROOM_BOOKING_ACTION_URL = exports.LIBRARY_FUZZY_SEARCH_ID_URL = exports.LIBRARY_ROOM_BOOKING_RESOURCE_LIST_URL_SUFFIX = exports.LIBRARY_ROOM_BOOKING_RESOURCE_LIST_URL_PREFIX = exports.LIBRARY_ROOM_BOOKING_LOGIN_URL = exports.LIBRARY_DAYS_URL = exports.LIBRARY_SEATS_URL = exports.LIBRARY_AREAS_URL = exports.LIBRARY_LIST_URL = exports.LIBRARY_HOME_URL = exports.BANK_PAYMENT_SEARCH_URL = exports.LOSE_CARD_URL = exports.CLASSROOM_STATE_MIDDLE = exports.CLASSROOM_STATE_PREFIX = exports.KYTZ_MAIN_PREFIX = exports.HB_MAIN_PREFIX = exports.BGTZ_MAIN_PREFIX = exports.JWGG_MAIN_PREFIX = exports.SECONDARY_URL = exports.JXRL_SUFFIX = exports.JXRL_MIDDLE = exports.JXRL_YJS_PREFIX = exports.JXRL_BKS_PREFIX = exports.EXPENDITURE_URL = exports.ASSESSMENT_SUBMIT_URL = exports.ASSESSMENT_BASE_URL = exports.ASSESSMENT_LIST_URL = exports.ELE_REMAINDER_URL = exports.ALIPAY_URL_PREFIX = exports.ELE_PAY_RECORD_URL = exports.RECHARGE_PAY_ELE_URL = exports.RECHARGE_ELE_URL = exports.TSINGHUA_HOME_LOGIN_URL = exports.YJS_REPORT_BXR_URL = exports.BKS_REPORT_BXR_URL = exports.GET_YJS_REPORT_URL = exports.GET_BKS_REPORT_URL = exports.COUNT_DOWN_URL = exports.CALENDAR_URL = exports.LOGOUT_URL = exports.ROAMING_URL = exports.USER_DATA_URL = exports.GET_COOKIE_URL = exports.ID_LOGIN_URL = exports.ID_BASE_URL = exports.CONFIRM_LOGIN_URL = exports.DO_LOGIN_URL = exports.USER_AGENT = exports.CONTENT_TYPE_FORM = void 0;
exports.WATER_SUB_URL = exports.WATER_USER_URL = exports.GITLAB_API_BASE_URL = exports.GITLAB_AUTH_URL = exports.GITLAB_LOGIN_URL = exports.SPORTS_PAYMENT_ACTION_URL = exports.SPORTS_PAYMENT_CHECK_URL = exports.SPORTS_MAKE_PAYMENT_URL = exports.SPORTS_MAKE_ORDER_URL = exports.SPORTS_CAPTCHA_BASE_URL = exports.SPORTS_UPDATE_PHONE_URL = exports.SPORTS_QUERY_PHONE_URL = exports.SPORTS_UNSUBSCRIBE_URL = exports.SPORTS_DETAIL_URL = exports.SPORTS_BASE_URL = exports.CR_TREE_URL = exports.CR_MAIN_URL = exports.COURSE_PLAN_URL_PREFIX = exports.CR_SEARCH_URL = exports.CR_LOGIN_SUBMIT_URL = exports.CR_LOGIN_HOME_URL = exports.CR_CAPTCHA_URL = exports.PHYSICAL_EXAM_URL = exports.CANCEL_BOOKING_URL = exports.LIBRARY_BOOK_RECORD_URL = exports.LIBRARY_BOOK_URL_SUFFIX = exports.LIBRARY_BOOK_URL_PREFIX = exports.LIBRARY_CANCEL_BOOKING_URL = void 0;
exports.CONTENT_TYPE_FORM = "application/x-www-form-urlencoded";
exports.USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36";
exports.DO_LOGIN_URL = "https://webvpn.tsinghua.edu.cn/do-login";
exports.CONFIRM_LOGIN_URL = "https://webvpn.tsinghua.edu.cn/do-confirm-login";
exports.ID_BASE_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f9f30f8834396657761d88e29d51367bcfe7/do/off/ui/auth/login/form/";
exports.ID_LOGIN_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f9f30f8834396657761d88e29d51367bcfe7/do/off/ui/auth/login/check";
exports.GET_COOKIE_URL = "https://webvpn.tsinghua.edu.cn/wengine-vpn/cookie?method=get&host=info2021.tsinghua.edu.cn&scheme=https&path=/f/info/gxfw_fg/common/index";
exports.USER_DATA_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f9f9479375603a01301c9aa596522b208e9cd9c9e383ff3f/b/info/gxfw_fg/common/grjbxx";
exports.ROAMING_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f9f9479375603a01301c9aa596522b208e9cd9c9e383ff3f/b/yyfw/vyyfwxx/info/portal_fg/common/onlineAppRedirect";
exports.LOGOUT_URL = "https://webvpn.tsinghua.edu.cn/logout";
exports.CALENDAR_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f9f9479375603a01301c9aa596522b208e9cd9c9e383ff3f/b/info/gxfw_fg/common/xl";
exports.COUNT_DOWN_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/portal3rd.do?url=/portal3rd.do&m=tsxx";
exports.GET_BKS_REPORT_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/cj.cjCjbAll.do?m=bks_cjdcx&cjdlx=zw";
exports.GET_YJS_REPORT_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/cj.cjCjbAll.do?m=yjs_cjdcx&cjdlx=zw";
exports.BKS_REPORT_BXR_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/cj.cjCjbAll.do?m=bks_yxkccj";
exports.YJS_REPORT_BXR_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/cj.cjCjbAll.do?m=yjs_yxkccj";
exports.TSINGHUA_HOME_LOGIN_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fdee49932a3526446d0187ab9040227bca90a6e14cc9/default.aspx";
exports.RECHARGE_ELE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fdee49932a3526446d0187ab9040227bca90a6e14cc9/netweb_user/recharge_ele.aspx";
exports.RECHARGE_PAY_ELE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fdee49932a3526446d0187ab9040227bca90a6e14cc9/netweb_user/recharge_pay_ele.aspx";
exports.ELE_PAY_RECORD_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fdee49932a3526446d0187ab9040227bca90a6e14cc9/Netweb_List/netweb_ele_pay_record.aspx";
exports.ALIPAY_URL_PREFIX = "alipayqr://platformapi/startapp?saId=10000007&qrcode=https%3A%2F%2Fqr.alipay.com%2F";
exports.ELE_REMAINDER_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fdee49932a3526446d0187ab9040227bca90a6e14cc9/Netweb_List/Netweb_Home_electricity_Detail.aspx";
exports.ASSESSMENT_LIST_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421faef469069336153301c9aa596522b20e33c1eb39606919f/jxpg/f/jxpg/wj/xs/pgkcList";
exports.ASSESSMENT_BASE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421faef469069336153301c9aa596522b20e33c1eb39606919f";
exports.ASSESSMENT_SUBMIT_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421faef469069336153301c9aa596522b20e33c1eb39606919f/jxpg/b/jxpg/pgjg/xs/zancunjs";
exports.EXPENDITURE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f5f4408e237e7c4377068ea48d546d303341e9882a/user/ExDetailsDown.do";
exports.JXRL_BKS_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/jxmh_out.do?m=bks_jxrl_all&p_start_date=";
exports.JXRL_YJS_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/jxmh_out.do?m=yjs_jxrl_all&p_start_date=";
exports.JXRL_MIDDLE = "&p_end_date=";
exports.JXRL_SUFFIX = "&jsoncallback=m";
exports.SECONDARY_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/portal3rd.do?m=bks_ejkbSearch";
exports.JWGG_MAIN_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8/f/jiaowugonggao/more?page=";
exports.BGTZ_MAIN_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8/f/bangongtongzhi/more?field_bgtz_fl_tid=All&page=";
exports.HB_MAIN_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8/f/haibao/more?page=";
exports.KYTZ_MAIN_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8/f/keyantongzhi/more?field_kytz_fl_tid=All&page=";
exports.CLASSROOM_STATE_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/pk.classroomctrl.do?m=qyClassroomState&classroom=";
exports.CLASSROOM_STATE_MIDDLE = "&weeknumber=";
exports.LOSE_CARD_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f5f4408e237e7c4377068ea48d546d303341e9882a/user/RambleConsumeLog.do?losscard=true";
exports.BANK_PAYMENT_SEARCH_URL = "https://webvpn.tsinghua.edu.cn/http-8080/77726476706e69737468656265737421a1a117d27661391e2f5cc7f4/info/search.do";
exports.LIBRARY_HOME_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/home/web/f_second";
exports.LIBRARY_LIST_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/api.php/areas/1/tree/1";
exports.LIBRARY_AREAS_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/api.php/areas/";
exports.LIBRARY_SEATS_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/api.php/spaces_old";
exports.LIBRARY_DAYS_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/api.php/areadays/";
exports.LIBRARY_ROOM_BOOKING_LOGIN_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f3f643d22f23265c770ac7b88b5c2d325e4285a3fcff91f772dc/ClientWeb/pro/ajax/login.aspx";
exports.LIBRARY_ROOM_BOOKING_RESOURCE_LIST_URL_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f3f643d22f23265c770ac7b88b5c2d325e4285a3fcff91f772dc/ClientWeb/pro/ajax/device.aspx?dev_order=&kind_order=&classkind=1&display=cld&md=d&purpose=&selectOpenAty=&cld_name=default&date=";
exports.LIBRARY_ROOM_BOOKING_RESOURCE_LIST_URL_SUFFIX = "&act=get_rsv_sta";
exports.LIBRARY_FUZZY_SEARCH_ID_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f3f643d22f23265c770ac7b88b5c2d325e4285a3fcff91f772dc/ClientWeb/pro/ajax/data/searchAccount.aspx?term=";
exports.LIBRARY_ROOM_BOOKING_ACTION_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f3f643d22f23265c770ac7b88b5c2d325e4285a3fcff91f772dc/ClientWeb/pro/ajax/reserve.aspx";
exports.LIBRARY_ROOM_BOOKING_RECORD_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f3f643d22f23265c770ac7b88b5c2d325e4285a3fcff91f772dc/ClientWeb/pro/ajax/center.aspx?act=get_History_resv&strat=90&StatFlag=New";
exports.LIBRARY_CANCEL_BOOKING_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f3f643d22f23265c770ac7b88b5c2d325e4285a3fcff91f772dc/ClientWeb/pro/ajax/reserve.aspx?act=del_resv&id=";
exports.LIBRARY_BOOK_URL_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/api.php/spaces/";
exports.LIBRARY_BOOK_URL_SUFFIX = "/book";
exports.LIBRARY_BOOK_RECORD_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/user/index/book";
exports.CANCEL_BOOKING_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e3f24088693c6152301c9aa596522b204c02212b859d0a19/api.php/profile/books/";
exports.PHYSICAL_EXAM_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b69336153301c9aa596522b20bc86e6e559a9b290/tyjx.tyjx_tc_xscjb.do?m=jsonCj";
exports.CR_CAPTCHA_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/login-jcaptcah.jpg?vpn-1&captchaflag=login1";
exports.CR_LOGIN_HOME_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/xklogin.do";
exports.CR_LOGIN_SUBMIT_URL = "https://webvpn.tsinghua.edu.cn/https-443/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/j_acegi_formlogin_xsxk.do";
exports.CR_SEARCH_URL = "https://webvpn.tsinghua.edu.cn/https-443/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/xkBks.vxkBksJxjhBs.do";
exports.COURSE_PLAN_URL_PREFIX = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/jhBks.vjhBksPyfakcbBs.do?m=showBksZxZdxjxjhXmxqkclist&pathContent=%B1%BE%D1%A7%C6%DA%BD%CC%D1%A7%BC%C6%BB%AE&p_xnxq=";
exports.CR_MAIN_URL = "https://webvpn.tsinghua.edu.cn/https-443/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/xkBks.vxkBksXkbBs.do?m=main";
exports.CR_TREE_URL = "https://webvpn.tsinghua.edu.cn/https-443/77726476706e69737468656265737421eaff4b8b3f3b2653770bc7b88b5c2d320506b1aec738590a49ba/xkBks.vxkBksXkbBs.do?m=showTree&p_xnxq=";
exports.SPORTS_BASE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/gymbook/gymBookAction.do?ms=viewGymBook&viewType=m";
exports.SPORTS_DETAIL_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/gymsite/cacheAction.do?ms=viewBook&userType=1";
exports.SPORTS_UNSUBSCRIBE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/gymbook/gymBookAction.do?ms=unsubscribe";
exports.SPORTS_QUERY_PHONE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/gymbook/gymBookAction.do?ms=hadContactOrNot";
exports.SPORTS_UPDATE_PHONE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/gymbook/gymBookAction.do?ms=doUpdateContactInformation&cell_phone=";
exports.SPORTS_CAPTCHA_BASE_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/Kaptcha.jpg";
exports.SPORTS_MAKE_ORDER_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/gymbook/gymbook/gymBookAction.do?vpn-12-o1-50.tsinghua.edu.cn=&ms=saveGymBook";
exports.SPORTS_MAKE_PAYMENT_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421a5a70f8834396657761d88e29d51367b6a00/pay/payAction.do?ms=newPay";
exports.SPORTS_PAYMENT_CHECK_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f6f60c93293c615e7b469dbf915b243daf0f96e17deaf447b4/zjjsfw/zjjs/check.do";
exports.SPORTS_PAYMENT_ACTION_URL = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f6f60c93293c615e7b469dbf915b243daf0f96e17deaf447b4/zjjsfw/zjjs/webPay.do";
exports.GITLAB_LOGIN_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f7fe55d23323615e79009cadd6502720b178f0/users/sign_in";
exports.GITLAB_AUTH_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f7fe55d23323615e79009cadd6502720b178f0/users/auth/thuid";
exports.GITLAB_API_BASE_URL = "https://webvpn.tsinghua.edu.cn/https/77726476706e69737468656265737421f7fe55d23323615e79009cadd6502720b178f0/api/v4";
exports.WATER_USER_URL = "http://dingshui.bjqzhd.com/auser/getuser.html";
exports.WATER_SUB_URL = "http://dingshui.bjqzhd.com/buy/subs.html";

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312977, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uFetch = exports.stringify = exports.arbitraryEncode = exports.clearCookies = exports.cookies = void 0;
const strings_1 = require("../constants/strings");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const abort_controller_1 = __importDefault(require("abort-controller"));
const error_1 = require("./error");
exports.cookies = {};
/**
 * Clear the cookies.
 */
const clearCookies = () => {
    Object.keys(exports.cookies).forEach((key) => delete exports.cookies[key]);
};
exports.clearCookies = clearCookies;
/**
 * An enhanced implementation of `encodeURIComponent`, which supports
 * arbitrary charset.
 */
const arbitraryEncode = (s, encoding = "UTF-8") => encoding === "UTF-8" ? encodeURIComponent(s) : String(s)
    .split("")
    .map((ch) => RegExp(/^[\u4e00-\u9fa5]*$/).test(ch)
    ? iconv_lite_1.default.encode(ch, encoding).reduce((a, b) => a + "%" + b.toString(16), "")
    : ch)
    .join("");
exports.arbitraryEncode = arbitraryEncode;
/**
 * Converts form data into url-encoded format (utf-8).
 */
const stringify = (form, paramEncoding = "UTF-8") => Object.keys(form)
    .map((key) => `${(0, exports.arbitraryEncode)(key, paramEncoding)}=${(0, exports.arbitraryEncode)(form[key], paramEncoding)}`)
    .join("&");
exports.stringify = stringify;
/**
 * Gets the response data from the given `url`.
 *
 * If param `post` is provided, a `POST` request with the given post form will
 * be sent. Otherwise, a `GET` request will be sent.
 *
 * The `timeout` is `60000` by default, in milliseconds.
 *
 * The `paramEncoding` is `UTF-8` by default, used to encode post form params.
 *
 * If `serialized` is `true`, the method will treat `post` as a string that has
 * already been serialized.
 */
const uFetch = async (url, post, timeout = 60000, paramEncoding = "UTF-8", serialized = false, requestContentType = strings_1.CONTENT_TYPE_FORM) => {
    // Prepare request headers
    const defaultHeaders = {
        // Setup content-type and user-agent
        "Content-Type": requestContentType,
        "User-Agent": strings_1.USER_AGENT,
    };
    const headers = global.FileReader === undefined ? {
        ...defaultHeaders,
        // Cookie should be manually set in Node.js
        Cookie: Object.keys(exports.cookies).map((key) => `${key}=${exports.cookies[key]}`).join(";"),
    } : defaultHeaders;
    // Handle timeout abortion
    const controller = new abort_controller_1.default();
    const timeoutEvent = setTimeout(() => {
        controller.abort();
    }, timeout);
    const defaultInit = {
        headers: headers,
        signal: controller.signal,
    };
    // Switch method to `POST` if post-body is provided
    const init = post === undefined
        ? defaultInit
        : {
            ...defaultInit,
            method: "POST",
            body: serialized ? post : (0, exports.stringify)(post, paramEncoding),
        };
    // Perform the network request
    try {
        const response = await (0, cross_fetch_1.default)(url, init);
        if (response.status !== 200 && response.status !== 201) {
            throw new error_1.ResponseStatusError(`Unexpected response status code: ${response.status}`);
        }
        // Manage cookies
        response.headers.forEach((value, key) => {
            if (key === "set-cookie") {
                const segment = value.split(";")[0];
                const [item, val] = segment.split("=");
                exports.cookies[item] = val;
            }
        });
        // Detect charset based on content-type
        const contentType = response.headers.get("Content-Type");
        let base64 = false;
        let charset = "UTF-8";
        if (contentType) {
            if (contentType.includes("application/octet-stream")) {
                base64 = true;
            }
            else {
                /charset=(.*?);/.test(contentType + ";");
                if (RegExp.$1)
                    charset = RegExp.$1;
            }
        }
        if (global.FileReader) {
            // For browser and react-native
            const blob = await response.blob();
            return await new Promise(((resolve, reject) => {
                // Use FileReader to read blob data
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (typeof reader.result === "string") {
                        if (base64) {
                            // Simply return the string data with the MIME header removed
                            resolve(reader.result.substr("data:application/octet-stream;base64,".length));
                        }
                        else {
                            // The value stored in `reader.result` has already been parsed with the correct encoding
                            resolve(reader.result);
                        }
                    }
                    else {
                        // This should not happen
                        reject(new Error("Blob parsing error."));
                    }
                };
                // Read and transform
                if (base64) {
                    reader.readAsDataURL(blob);
                }
                else {
                    reader.readAsText(blob, charset);
                }
            }));
        }
        else {
            // For node.js
            const arrayBuffer = await response.arrayBuffer();
            // Use iconv-lite to transform arrayBuffer into string
            return iconv_lite_1.default.decode(Buffer.from(arrayBuffer), charset);
        }
    }
    finally {
        // We have to clear the timeout
        clearTimeout(timeoutEvent);
    }
};
exports.uFetch = uFetch;

}, function(modId) { var map = {"../constants/strings":1646969312976,"./error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312978, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleError = exports.GitLabApiError = exports.ResponseStatusError = exports.UserInfoError = exports.CabError = exports.IdAuthError = exports.SportsError = exports.LibraryError = exports.EleError = exports.LoseCardError = exports.ClassroomStateError = exports.AssessmentError = exports.ReportError = exports.UrlError = exports.LoginError = exports.LibError = void 0;
class LibError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.LibError = LibError;
class LoginError extends LibError {
    constructor(message) {
        super(message);
    }
}
exports.LoginError = LoginError;
class UrlError extends LibError {
}
exports.UrlError = UrlError;
class ReportError extends LibError {
}
exports.ReportError = ReportError;
class AssessmentError extends LibError {
    constructor(message) {
        super(message);
    }
}
exports.AssessmentError = AssessmentError;
class ClassroomStateError extends LibError {
}
exports.ClassroomStateError = ClassroomStateError;
class LoseCardError extends LibError {
}
exports.LoseCardError = LoseCardError;
class EleError extends LibError {
}
exports.EleError = EleError;
class LibraryError extends LibError {
    constructor(message) {
        super(message);
    }
}
exports.LibraryError = LibraryError;
class SportsError extends LibError {
    constructor(message) {
        super(message);
    }
}
exports.SportsError = SportsError;
class IdAuthError extends LibError {
}
exports.IdAuthError = IdAuthError;
class CabError extends LibError {
}
exports.CabError = CabError;
class UserInfoError extends LibError {
}
exports.UserInfoError = UserInfoError;
class ResponseStatusError extends LibError {
    constructor(message) {
        super(message);
    }
}
exports.ResponseStatusError = ResponseStatusError;
class GitLabApiError extends LibError {
}
exports.GitLabApiError = GitLabApiError;
class ScheduleError extends LibError {
}
exports.ScheduleError = ScheduleError;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312979, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCheerioText = void 0;
const getCheerioText = (element, index) => {
    var _a, _b, _c, _d, _e, _f;
    return index === undefined
        ? (_c = (_b = (_a = element.firstChild) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : ""
        : (_f = (_e = (_d = element.children[index].firstChild) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.trim()) !== null && _f !== void 0 ? _f : "";
};
exports.getCheerioText = getCheerioText;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312980, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.toPersons = exports.Form = exports.Person = exports.Overall = exports.InputTag = void 0;
const error_1 = require("../../utils/error");
const flatMap = (arr, transform) => arr.reduce((prev, curr, id) => prev.concat(transform(curr, id)), []);
/**
 * The minimal component of a form to be posted to the school server.
 *
 * Nobody knows what `name` stands for, but it is certain that `value`
 * stands for the score of a question in some occasions.
 */
class InputTag {
    constructor(input, value) {
        this.toPair = () => [this.name, this.value];
        this.outOfRange = () => {
            const val = parseInt(this.value, 10);
            return val < 1 || val > 7;
        };
        const inputTag = input;
        if (typeof input === "string") {
            this.name = input;
            this.value = value || "";
        }
        else {
            this.name = inputTag.attribs.name;
            this.value = inputTag.attribs.value || "";
        }
    }
}
exports.InputTag = InputTag;
class Overall {
    constructor(suggestionTag, score) {
        this.suggestionTag = suggestionTag;
        this.score = score;
    }
    get suggestion() {
        return this.suggestionTag.value;
    }
    set suggestion(text) {
        this.suggestionTag.value = text;
    }
    toPairs() {
        return [this.suggestionTag.toPair(), this.score.toPair()];
    }
}
exports.Overall = Overall;
class Person {
    constructor(name, inputGroups) {
        this.name = name;
        this.inputGroups = inputGroups;
        this.outOfRange = () => this.inputGroups.some((inputGroup) => inputGroup.score.outOfRange());
    }
    autoScore(score = 7) {
        this.inputGroups.forEach((inputGroup) => (inputGroup.score.value = score.toString()));
    }
    get suggestion() {
        return this.inputGroups[0].suggestion.value;
    }
    set suggestion(text) {
        this.inputGroups.forEach((inputGroup) => {
            inputGroup.suggestion.value = text;
        });
    }
    toPairs() {
        return flatMap(this.inputGroups, (item) => item.others
            .concat(item.suggestion)
            .concat(item.score)
            .map((inputTag) => inputTag.toPair()));
    }
}
exports.Person = Person;
class Form {
    constructor(basics, overall, teachers, assistants) {
        this.basics = basics;
        this.overall = overall;
        this.teachers = teachers;
        this.assistants = assistants;
        /**
         * Check whether this form is valid to post.
         *
         * Returns a reason as a `string` if invalid, or `undefined` if else.
         */
        this.invalid = () => {
            try {
                if (this.overall.score.outOfRange()) {
                    return "overallOutOfRange";
                }
                else if (this.teachers.some((person) => person.outOfRange())) {
                    return "teachersOutOfRange";
                }
                else if (this.assistants.length > 0 &&
                    this.assistants.every((person) => person.outOfRange())) {
                    return "assistantsOutOfRange";
                }
                else {
                    return undefined;
                }
            }
            catch (e) {
                console.error(e);
                return "exceptionOccurred";
            }
        };
        /**
         * The form has to be serialized in order to be posted.
         */
        this.serialize = () => {
            const obj = Object.create(null);
            this.basics
                .map((inputTag) => inputTag.toPair())
                .forEach(([key, value]) => (obj[key] = value));
            this.overall.toPairs().forEach(([key, value]) => (obj[key] = value));
            flatMap(this.teachers, (person) => person.toPairs())
                .forEach(([key, value]) => (obj[key] = value));
            flatMap(this.assistants, (person) => person.toPairs())
                .forEach(([key, value]) => (obj[key] = value));
            return obj;
        };
    }
}
exports.Form = Form;
const assert = (exp) => {
    if (!exp) {
        throw new error_1.AssessmentError("Assertion failed!");
    }
};
/**
 * Read persons data from their corresponding html tables.
 */
const toPersons = (tables) => {
    const persons = [];
    let table = tables.children("table").first();
    while (table.children().length > 0) {
        let tr = table.children("tbody").children().first();
        const name = tr.children().first().text();
        let children;
        const inputGroups = [];
        while ((children = tr.children()).length > 0) {
            const question = children.length === 4
                ? children.first().next().text().trim()
                : children.first().text().trim();
            let inputs = children.find("input");
            const suggestions = inputs.filter("[class]");
            assert(suggestions.length === 1);
            const suggestion = new InputTag(suggestions[0]);
            inputs = inputs.filter(":not([class])");
            const scores = inputs.filter("ul > input");
            assert(scores.length === 1);
            const score = new InputTag(scores[0]);
            inputs = inputs.filter(":not([avgfs])");
            const others = inputs.map((_, ele) => new InputTag(ele)).get();
            const inputGroup = {
                question,
                suggestion,
                score,
                others,
            };
            inputGroups.push(inputGroup);
            tr = tr.next();
        }
        persons.push(new Person(name, inputGroups));
        table = table.next();
    }
    return persons;
};
exports.toPersons = toPersons;

}, function(modId) { var map = {"../../utils/error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312981, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_CALENDAR_DATA = exports.MOCK_BANK_PAYMENT = exports.MOCK_LOSE_CARD_CODE = exports.MOCK_CLASSROOM_STATE = exports.MOCK_EXPENDITURES = exports.MOCK_PHYSICAL_EXAM_RESULT = exports.MOCK_ASSESSMENT_FORM = exports.MOCK_ASSESSMENT_LIST = exports.MOCK_REPORT = void 0;
const assessment_1 = require("../models/home/assessment");
exports.MOCK_REPORT = [
    {
        credit: 2,
        grade: "A+",
        name: "军事理论",
        point: 4,
        semester: "2019-夏",
    },
    {
        credit: 2,
        grade: "A+",
        name: "军事技能",
        point: 4,
        semester: "2019-夏",
    },
    {
        credit: 5,
        grade: "A+",
        name: "微积分A(1)",
        point: 4,
        semester: "2019-秋",
    },
    {
        credit: 4,
        grade: "A+",
        name: "线性代数",
        point: 4,
        semester: "2019-秋",
    },
    {
        credit: 3,
        grade: "A+",
        name: "思想道德修养与法律基础",
        point: 4,
        semester: "2019-秋",
    },
    {
        credit: 1,
        grade: "A+",
        name: "体育(1)",
        point: 4,
        semester: "2019-秋",
    },
    {
        credit: 5,
        grade: "A+",
        name: "微积分A(2)",
        point: 4,
        semester: "2020-春",
    },
    {
        credit: 4,
        grade: "A+",
        name: "大学物理B(1)",
        point: 4,
        semester: "2020-春",
    },
    {
        credit: 3,
        grade: "A+",
        name: "中国近现代史纲要",
        point: 4,
        semester: "2020-春",
    },
    {
        credit: 1,
        grade: "A+",
        name: "形势与政策",
        point: 4,
        semester: "2020-春",
    },
    {
        credit: 1,
        grade: "A+",
        name: "体育(2)",
        point: 4,
        semester: "2020-春",
    },
];
exports.MOCK_ASSESSMENT_LIST = [
    ["微积分A(2)", true, "Mr. Z"],
    ["高等线性代数选讲", true, "Mr. L"],
    ["大学物理B(1)", true, "Mr. L"],
    ["中国近代史纲要", true, "Ms. S"],
    ["形势与政策", true, "Mr. L"],
    ["一年级男生体育(2)", true, "Mr. Y"],
    ["离散数学(2)", true, "Mr. Z"],
    ["面向对象的程序设计基础", true, "Mr. H"],
];
const makeMockQuestion = (question) => ({
    question,
    suggestion: new assessment_1.InputTag("", ""),
    score: new assessment_1.InputTag("", "7"),
    others: [],
});
const MOCK_ASSESSMENT_FORM = (url) => new assessment_1.Form([], new assessment_1.Overall(new assessment_1.InputTag("", ""), new assessment_1.InputTag("", "7")), [
    new assessment_1.Person(url, [
        makeMockQuestion("老师教学态度认真负责"),
        makeMockQuestion("老师讲解清楚，深入浅出"),
        makeMockQuestion("老师关注我们和我们的学习"),
        makeMockQuestion("老师严格要求，促使我认真学习"),
        makeMockQuestion("老师教学注重师生互动"),
        makeMockQuestion("老师教学能让我体会学科特点和思维方式"),
        makeMockQuestion("课程教学符合教学大纲"),
        makeMockQuestion("老师的教学有效激发我的学习志趣"),
    ]),
], []);
exports.MOCK_ASSESSMENT_FORM = MOCK_ASSESSMENT_FORM;
exports.MOCK_PHYSICAL_EXAM_RESULT = [
    ["是否免测", "否"],
    ["免测原因", ""],
    ["总分", "300"],
    ["标准分", "300"],
    ["附加分", "0"],
    ["长跑附加分", "0"],
    ["身高", "175"],
    ["体重", "66"],
    ["身高体重分数", "40"],
    ["肺活量", "2000"],
    ["肺活量分数", "20"],
    ["800M跑", "3'40"],
    ["800M跑分数", "50"],
    ["1000M跑", ""],
    ["1000M跑分数", ""],
    ["50M跑", "8.7"],
    ["50M跑分数", "40"],
    ["立定跳远", "1.9"],
    ["立定跳远分数", "20"],
    ["坐位体前屈", "10"],
    ["坐位体前屈分数", "30"],
    ["仰卧起坐", ""],
    ["仰卧起坐分数", ""],
    ["引体向上", "10"],
    ["引体向上分数", "20"],
    ["体育课成绩", ""],
];
exports.MOCK_EXPENDITURES = [
    [
        {
            category: "消费",
            date: "2020-09-19 11:38",
            locale: "饮食中心",
            value: -6.45,
        },
        {
            category: "消费",
            date: "2020-09-19 07:12",
            locale: "饮食中心",
            value: -3.2,
        },
        {
            category: "消费",
            date: "2020-09-18 18:02",
            locale: "饮食中心",
            value: -8,
        },
        {
            category: "消费",
            date: "2020-09-18 07:30",
            locale: "饮食中心",
            value: -4.5,
        },
        {
            category: "消费",
            date: "2020-09-17 17:52",
            locale: "饮食中心",
            value: -8.8,
        },
        {
            category: "消费",
            date: "2020-09-17 11:46",
            locale: "饮食中心",
            value: -6.5,
        },
        {
            category: "消费",
            date: "2020-09-17 08:33",
            locale: "饮食中心",
            value: -4,
        },
        {
            category: "消费",
            date: "2020-09-16 18:01",
            locale: "饮食中心",
            value: -6.45,
        },
        {
            category: "消费",
            date: "2020-09-16 11:45",
            locale: "饮食中心",
            value: -8,
        },
        {
            category: "消费",
            date: "2020-09-16 07:25",
            locale: "饮食中心",
            value: -4.7,
        },
        {
            category: "消费",
            date: "2020-09-15 11:55",
            locale: "饮食中心",
            value: -5.7,
        },
        {
            category: "消费",
            date: "2020-09-15 07:08",
            locale: "饮食中心",
            value: -2.5,
        },
        {
            category: "自助缴费(学生公寓水费)",
            date: "2020-09-14 18:37",
            locale: "桃李园西门厅左",
            value: -20,
        },
        {
            category: "领取圈存",
            date: "2020-09-14 18:37",
            locale: "桃李园西门厅左",
            value: 300,
        },
        {
            category: "消费",
            date: "2020-09-14 18:00",
            locale: "饮食中心",
            value: -12,
        },
        {
            category: "消费",
            date: "2020-09-14 12:01",
            locale: "饮食中心",
            value: -9,
        },
        {
            category: "消费",
            date: "2020-09-14 07:22",
            locale: "饮食中心",
            value: -4.2,
        },
        {
            category: "消费",
            date: "2020-09-13 18:34",
            locale: "饮食中心",
            value: -15,
        },
        {
            category: "消费",
            date: "2020-09-13 12:19",
            locale: "饮食中心",
            value: -4.5,
        },
        {
            category: "消费",
            date: "2020-09-13 07:22",
            locale: "饮食中心",
            value: -3.1,
        },
        {
            category: "消费",
            date: "2020-09-12 18:03",
            locale: "饮食中心",
            value: -6.8,
        },
        {
            category: "消费",
            date: "2020-09-12 12:17",
            locale: "饮食中心",
            value: -15,
        },
        {
            category: "消费",
            date: "2020-09-12 07:56",
            locale: "饮食中心",
            value: -4,
        },
        {
            category: "消费",
            date: "2020-09-11 18:23",
            locale: "饮食中心",
            value: -6,
        },
        {
            category: "消费",
            date: "2020-09-11 12:04",
            locale: "饮食中心",
            value: -6.7,
        },
        {
            category: "消费",
            date: "2020-09-11 07:56",
            locale: "饮食中心",
            value: -5.2,
        },
        {
            category: "消费",
            date: "2020-09-10 17:21",
            locale: "饮食中心",
            value: -8.4,
        },
        {
            category: "消费",
            date: "2020-09-10 11:37",
            locale: "饮食中心",
            value: -6.5,
        },
        {
            category: "消费",
            date: "2020-09-10 08:36",
            locale: "饮食中心",
            value: -4.5,
        },
        {
            category: "消费",
            date: "2020-09-09 17:54",
            locale: "饮食中心",
            value: -8.8,
        },
        {
            category: "消费",
            date: "2020-09-09 11:27",
            locale: "饮食中心",
            value: -5,
        },
        {
            category: "消费",
            date: "2020-09-08 18:26",
            locale: "饮食中心",
            value: -8.5,
        },
        {
            category: "消费",
            date: "2020-09-08 12:14",
            locale: "饮食中心",
            value: -10,
        },
        {
            category: "消费",
            date: "2020-09-08 08:23",
            locale: "饮食中心",
            value: -3.1,
        },
        {
            category: "消费",
            date: "2020-09-07 17:47",
            locale: "饮食中心",
            value: -8,
        },
        {
            category: "消费",
            date: "2020-09-07 12:04",
            locale: "饮食中心",
            value: -11.61,
        },
        {
            category: "消费",
            date: "2020-09-07 08:02",
            locale: "饮食中心",
            value: -2.3,
        },
        {
            category: "消费",
            date: "2020-09-06 18:28",
            locale: "饮食中心",
            value: -4,
        },
        {
            category: "消费",
            date: "2020-09-06 12:03",
            locale: "饮食中心",
            value: -5.2,
        },
        {
            category: "消费",
            date: "2020-09-06 08:02",
            locale: "饮食中心",
            value: -5.9,
        },
    ],
    300,
    272.11,
    27.89,
];
const basePatterns = [
    [5, 0, 0, 0, 2, 5],
    [0, 0, 0, 5, 0, 5],
    [0, 0, 0, 2, 2, 5],
    [5, 0, 0, 0, 0, 2],
    [5, 0, 0, 2, 2, 0],
    [0, 0, 0, 0, 5, 0],
    [5, 0, 0, 5, 5, 2],
];
const rand = () => Math.floor(Math.random() * basePatterns.length);
const generateWeek = () => basePatterns[rand()]
    .concat(basePatterns[rand()])
    .concat(basePatterns[rand()])
    .concat(basePatterns[rand()])
    .concat(basePatterns[rand()])
    .concat(basePatterns[rand()])
    .concat(basePatterns[rand()]);
const generatedPattern = [
    ["101:240", generateWeek()],
    ["102:40", generateWeek()],
    ["103:40", generateWeek()],
    ["104:240", generateWeek()],
    ["201:150", generateWeek()],
    ["202:40", generateWeek()],
    ["203:40", generateWeek()],
    ["204:40", generateWeek()],
    ["205:150", generateWeek()],
];
exports.MOCK_CLASSROOM_STATE = generatedPattern;
exports.MOCK_LOSE_CARD_CODE = 2;
exports.MOCK_BANK_PAYMENT = [{
        month: "2021年12月",
        payment: [{
                department: "024 计算机系",
                project: "1234567890 元宇宙项目开发",
                usage: "勤工俭学",
                description: "",
                bank: "中国银行",
                time: "20771225 15:07:37",
                total: "500.00",
                deduction: "0.00",
                actual: "500.00",
                deposit: "500.00",
                cash: "0.00",
            }, {
                department: "024 计算机系",
                project: "1145142333 学术科技赛事",
                usage: "勤工俭学",
                description: "",
                bank: "中国银行",
                time: "20771211 11:24:51",
                total: "200.00",
                deduction: "0.00",
                actual: "200.00",
                deposit: "200.00",
                cash: "0.00",
            }],
    }, {
        month: "2021年10月",
        payment: [{
                department: "999 清华大学",
                project: "100000077 防疫物资专项",
                usage: "医疗费",
                description: "医疗费",
                bank: "中国银行",
                time: "20211024 10:24:28",
                total: "120.00",
                deduction: "0.00",
                actual: "120.00",
                deposit: "120.00",
                cash: "0.00",
            }],
    }];
exports.MOCK_CALENDAR_DATA = {
    firstDay: "2021-09-13",
    semesterId: "2021-2022-1",
    weekCount: 18,
};

}, function(modId) { var map = {"../models/home/assessment":1646969312980}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312982, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEleRemainder = exports.getElePayRecord = exports.getEleRechargePayCode = void 0;
const core_1 = require("./core");
const strings_1 = require("../constants/strings");
const cheerio_1 = __importDefault(require("cheerio"));
const alipay_1 = require("../utils/alipay");
const cheerio_2 = require("../utils/cheerio");
const network_1 = require("../utils/network");
const dorm_1 = require("../mocks/dorm");
const error_1 = require("../utils/error");
const getEleRechargePayCode = async (helper, money) => {
    await (0, core_1.roam)(helper, "myhome", "");
    const $ = await (0, network_1.uFetch)(strings_1.RECHARGE_ELE_URL).then(cheerio_1.default.load);
    const redirect = await (0, network_1.uFetch)(strings_1.RECHARGE_PAY_ELE_URL, {
        __EVENTTARGET: "",
        __EVENTARGUMENT: "",
        __VIEWSTATE: $("#__VIEWSTATE").attr().value,
        __VIEWSTATEGENERATOR: $("#__VIEWSTATEGENERATOR").attr().value,
        recharge_eleCtrl1$RadioButtonList1: "支付宝支付",
        write_money: money,
        username: $("input[name=username]").attr().value,
        louhao: $("input[name=louhao]").attr().value,
        room: $("input[name=room]").attr().value,
        student_id: $("input[name=student_id]").attr().value,
        banktype: "alipay",
    }, 60000, "GBK").then((s) => (0, cheerio_1.default)("#banksubmit", s));
    return (0, alipay_1.generalGetPayCode)(await (0, network_1.uFetch)(redirect.attr().action, redirect.serialize(), 60000, "UTF-8", true), "GBK");
};
exports.getEleRechargePayCode = getEleRechargePayCode;
const getElePayRecord = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "myhome", "", async () => {
    const data = (await (0, network_1.uFetch)(strings_1.ELE_PAY_RECORD_URL).then(cheerio_1.default.load))(".myTable tr");
    if (data.length === 0)
        throw new error_1.EleError();
    return data.slice(1, data.length - 1)
        .map((index, element) => [
        element.children
            .filter((it) => it.type === "tag" && it.tagName === "td")
            .map((it) => (0, cheerio_2.getCheerioText)(it, 1)),
    ])
        .get();
}, dorm_1.MOCK_ELE_PAY_RECORD);
exports.getElePayRecord = getElePayRecord;
const getEleRemainder = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "myhome", "", async () => {
    const $ = await (0, network_1.uFetch)(strings_1.ELE_REMAINDER_URL).then(cheerio_1.default.load);
    if ($("#net_Default_LoginCtrl1_txtUserName").length === 1)
        throw new error_1.EleError();
    return Number($("#Netweb_Home_electricity_DetailCtrl1_lblele").text().trim());
}, dorm_1.MOCK_ELE_REMAINDER);
exports.getEleRemainder = getEleRemainder;

}, function(modId) { var map = {"./core":1646969312975,"../constants/strings":1646969312976,"../utils/alipay":1646969312983,"../utils/cheerio":1646969312979,"../utils/network":1646969312977,"../mocks/dorm":1646969312984,"../utils/error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312983, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genAlipayUrl = exports.generalGetPayCode = void 0;
const network_1 = require("./network");
const cheerio_1 = __importDefault(require("cheerio"));
const strings_1 = require("../constants/strings");
const generalGetPayCode = async (paymentHtml, encoding) => {
    const $ = cheerio_1.default.load(paymentHtml);
    const url = $("form").attr().action;
    const form = $("[name=biz_content]").attr().value;
    // Get pay code
    return (0, network_1.uFetch)(url + "&biz_content=" + (0, network_1.arbitraryEncode)(form, encoding)).then((s) => {
        const qrCode = (0, cheerio_1.default)("input[name=qrCode]", s).attr().value;
        return qrCode.substring(qrCode.lastIndexOf("/") + 1);
    });
};
exports.generalGetPayCode = generalGetPayCode;
const genAlipayUrl = (payCode) => strings_1.ALIPAY_URL_PREFIX + payCode;
exports.genAlipayUrl = genAlipayUrl;

}, function(modId) { var map = {"./network":1646969312977,"cheerio":1646969312979,"../constants/strings":1646969312976}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312984, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_ELE_REMAINDER = exports.MOCK_ELE_PAY_RECORD = void 0;
exports.MOCK_ELE_PAY_RECORD = [
    ["", "0", "2020-09-15 11:24:07", "", "10.00", "已成功"],
    ["", "1", "2020-09-06 17:38:57", "", "5.00", "已成功"],
    ["", "2", "2020-09-03 15:47:29", "", "20.00", "已成功"],
    ["", "3", "2020-08-30 09:17:38", "", "1.00", "已成功"],
    ["", "4", "2020-08-30 09:14:36", "", "4.00", "已成功"],
    ["", "5", "2020-08-24 11:43:00", "", "10.00", "已成功"],
    ["", "6", "2020-08-22 23:12:49", "", "5.00", "已成功"],
];
exports.MOCK_ELE_REMAINDER = 88;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312985, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.postWaterSubmission = exports.getUserInformationAndStore = exports.getUserInformation = void 0;
const strings_1 = require("../constants/strings");
const network_1 = require("../utils/network");
const getUserInformation = (water, id) => {
    water.id = id;
    return (0, network_1.uFetch)(strings_1.WATER_USER_URL, {
        name: "pw",
        param: water.id,
    }).then(JSON.parse);
};
exports.getUserInformation = getUserInformation;
const getUserInformationAndStore = (water, id) => {
    return (0, exports.getUserInformation)(water, id).then(res => {
        water.address = res.address;
        water.phone = res.phone;
    });
};
exports.getUserInformationAndStore = getUserInformationAndStore;
const postWaterSubmission = (water, num, num1, lid) => (0, network_1.uFetch)(strings_1.WATER_SUB_URL, {
    pw: water.id,
    num: num,
    num1: num1,
    lid: lid,
    address: water.address,
}).then(res => {
    if (!res.includes("成功")) {
        throw new Error("Submitting failed");
    }
});
exports.postWaterSubmission = postWaterSubmission;

}, function(modId) { var map = {"../constants/strings":1646969312976,"../utils/network":1646969312977}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312986, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelLibraryRoomBooking = exports.getLibraryRoomBookingRecord = exports.bookLibraryRoom = exports.fuzzySearchLibraryId = exports.getLibraryRoomBookingResourceList = exports.cancelBooking = exports.getBookingRecords = exports.bookLibrarySeat = exports.getLibrarySeatList = exports.getLibraryFloorList = exports.getLibrarySectionList = exports.getLibraryList = void 0;
/* eslint-disable quotes */
const core_1 = require("./core");
const strings_1 = require("../constants/strings");
const library_1 = require("../models/home/library");
const cheerio_1 = __importDefault(require("cheerio"));
const cheerio_2 = require("../utils/cheerio");
const dayjs_1 = __importDefault(require("dayjs"));
const network_1 = require("../utils/network");
const library_2 = require("../mocks/library");
const error_1 = require("../utils/error");
const fetchJson = (url, referer, post) => (0, network_1.uFetch)(url, post).then((s) => JSON.parse(s).data.list);
// This function needs to be updated periodically to avoid bugs
const getLibName = (name, kindName) => {
    if (name.indexOf("北馆") !== -1 || kindName.indexOf("北馆") !== -1) {
        return "NORTH";
    }
    else if (name.indexOf("西馆") !== -1 || kindName.indexOf("西馆") !== -1) {
        return "WEST";
    }
    else if (name.indexOf("文科馆") !== -1 || kindName.indexOf("文科馆") !== -1) {
        return "SOCIAL";
    }
    else {
        return "LAW";
    }
};
const getLibraryList = (helper) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", () => fetchJson(strings_1.LIBRARY_LIST_URL, strings_1.LIBRARY_HOME_URL).then((r) => r.map((node) => ({
    id: node.id,
    zhName: node.name,
    zhNameTrace: node.nameMerge,
    enName: node.enname,
    enNameTrace: node.ennameMerge,
    valid: node.isValid === 1,
}))), library_2.MOCK_LIBRARY_LIST);
exports.getLibraryList = getLibraryList;
const getLibrarySectionList = (helper, { id, zhNameTrace, enNameTrace }, dateChoice) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", () => fetchJson(strings_1.LIBRARY_AREAS_URL +
    id +
    "/date/" +
    (0, dayjs_1.default)().add(dateChoice, "day").format("YYYY-MM-DD")).then((r) => r.childArea
    .map((node) => ({
    id: node.id,
    zhName: node.name,
    zhNameTrace: `${zhNameTrace} - ${node.name}`,
    enName: node.enname,
    enNameTrace: `${enNameTrace} - ${node.enname}`,
    valid: node.isValid === 1,
    total: node.TotalCount,
    available: node.TotalCount - node.UnavailableSpace,
    posX: node.point_x2,
    posY: node.point_y2,
}))
    .sort(library_1.byId)), []);
exports.getLibrarySectionList = getLibrarySectionList;
const getLibraryFloorList = async (helper, { id, zhName, enName }, dateChoice) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", () => fetchJson(strings_1.LIBRARY_AREAS_URL + id, strings_1.LIBRARY_HOME_URL)
    .then((r) => Promise.all(r.childArea.map(async (node) => {
    const floor = {
        id: node.id,
        zhName: node.name,
        zhNameTrace: `${zhName} - ${node.name}`,
        enName: node.enname,
        enNameTrace: `${enName} - ${node.enname}`,
        valid: node.isValid === 1,
        parentId: id,
        available: 0,
        total: 0,
    };
    const [available, total] = (await Promise.all(await (0, exports.getLibrarySectionList)(helper, floor, dateChoice))).reduce(([px, py], curr) => curr.valid ? [px + curr.available, py + curr.total] : [px, py], [0, 0]);
    floor.available = available;
    floor.total = total;
    return floor;
})))
    .then((floors) => floors.sort(library_1.byId)), (0, library_2.MOCK_LIBRARY_FLOOR_LIST)(id, dateChoice));
exports.getLibraryFloorList = getLibraryFloorList;
const getLibraryDay = (sectionId, choice) => fetchJson(strings_1.LIBRARY_DAYS_URL + sectionId).then((r) => {
    const { day, startTime, endTime, id } = r.find((it) => it.day === (0, dayjs_1.default)().add(choice, "day").format("YYYY-MM-DD"));
    const transformDate = ({ date }) => date.substring(11, 16);
    return {
        day,
        startTime: transformDate(startTime),
        endTime: transformDate(endTime),
        segmentId: id,
        today: choice === 0,
    };
});
const pad = (ori, length) => {
    let result = String(ori);
    while (result.length < length) {
        result = "0" + result;
    }
    return result;
};
const currentTime = (coerce) => {
    const date = new Date();
    const result = `${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}`;
    return coerce > result ? coerce : result;
};
const getLibrarySeatList = (helper, { id, zhNameTrace, enNameTrace }, dateChoice) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", () => getLibraryDay(id, dateChoice).then(({ day, startTime, endTime, segmentId, today }) => fetchJson(strings_1.LIBRARY_SEATS_URL + "?" + (0, network_1.stringify)({
    area: id,
    segment: segmentId,
    day,
    startTime: today ? currentTime(startTime) : startTime,
    endTime,
}))
    .then((r) => r
    .map((node) => ({
    id: node.id,
    zhName: node.name,
    zhNameTrace: zhNameTrace + " - " + node.name,
    enName: node.name,
    enNameTrace: enNameTrace + " - " + node.name,
    valid: node.status === 1,
    type: node.area_type,
}))
    .sort((a, b) => (0, library_1.weightedValidityAndId)(a) - (0, library_1.weightedValidityAndId)(b)))), []);
exports.getLibrarySeatList = getLibrarySeatList;
const getAccessToken = (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "id", "ef84f6d6784f6b834e5214f432d6173f/0?/api/id_tsinghua_callback", () => (0, network_1.uFetch)(strings_1.LIBRARY_HOME_URL).then((response) => {
    if (helper.mocked()) {
        return "";
    }
    const leftmost = response.indexOf("access_token");
    const left = response.indexOf('"', leftmost) + 1;
    const right = response.indexOf('"', left);
    const token = response.substring(left, right);
    if (token.trim() === "") {
        throw new error_1.LibraryError("Getting library token failed.");
    }
    return token;
}), library_2.MOCK_LIBRARY_ACCESS_TOKEN);
const bookLibrarySeat = async (helper, { id, type }, section, dateChoice) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", async () => JSON.parse(await getLibraryDay(section.id, dateChoice).then(async ({ segmentId }) => (0, network_1.uFetch)(strings_1.LIBRARY_BOOK_URL_PREFIX + id + strings_1.LIBRARY_BOOK_URL_SUFFIX, {
    access_token: await getAccessToken(helper),
    userid: helper.userId,
    segment: segmentId,
    type,
}))), library_2.MOCK_LIBRARY_BOOK_SEAT_RESPONSE);
exports.bookLibrarySeat = bookLibrarySeat;
const getBookingRecords = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", async () => {
    await getAccessToken(helper);
    const html = await (0, network_1.uFetch)(strings_1.LIBRARY_BOOK_RECORD_URL);
    const result = (0, cheerio_1.default)("tbody", html)
        .children()
        .map((index, element) => {
        var _a, _b;
        const delOnclick = (_b = (_a = element.children[15]
            .children[3]) === null || _a === void 0 ? void 0 : _a.attribs) === null || _b === void 0 ? void 0 : _b.onclick;
        const delStrIndex = delOnclick ? delOnclick.indexOf("menuDel") + 9 : 0;
        const rightIndex = delOnclick === null || delOnclick === void 0 ? void 0 : delOnclick.indexOf("'", delStrIndex);
        return {
            id: (0, cheerio_2.getCheerioText)(element, 3),
            pos: (0, cheerio_2.getCheerioText)(element, 5),
            time: (0, cheerio_2.getCheerioText)(element, 7),
            status: (0, cheerio_2.getCheerioText)(element, 11),
            delId: (delOnclick === null || delOnclick === void 0 ? void 0 : delOnclick.includes("menuDel"))
                ? delOnclick === null || delOnclick === void 0 ? void 0 : delOnclick.substring(delStrIndex, rightIndex)
                : undefined,
        };
    })
        .get();
    if (result.length === 0 && html.indexOf("tbody") === -1) {
        throw new error_1.LibraryError();
    }
    return result;
}, library_2.MOCK_LIBRARY_BOOKING_RECORDS);
exports.getBookingRecords = getBookingRecords;
const cancelBooking = async (helper, id) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "ef84f6d6784f6b834e5214f432d6173f", () => getAccessToken(helper)
    .then((token) => (0, network_1.uFetch)(strings_1.CANCEL_BOOKING_URL + id, {
    _method: "delete",
    id,
    userid: helper.userId,
    access_token: token,
}))
    .then(JSON.parse)
    .then((data) => {
    var _a;
    if (!data.status) {
        throw new error_1.LibraryError((_a = data.message) !== null && _a !== void 0 ? _a : data.msg);
    }
}), undefined);
exports.cancelBooking = cancelBooking;
const getLibraryRoomBookingResourceList = async (helper, date) => (0, core_1.roamingWrapperWithMocks)(helper, "cab", "", async () => {
    const result = await (0, network_1.uFetch)(`${strings_1.LIBRARY_ROOM_BOOKING_RESOURCE_LIST_URL_PREFIX}${date}${strings_1.LIBRARY_ROOM_BOOKING_RESOURCE_LIST_URL_SUFFIX}`).then(JSON.parse);
    return result.data.map((item) => ({
        id: item.id,
        name: item.name,
        loc: getLibName(item.name, item.kindName),
        devId: Number(item.devId),
        devName: item.devName,
        kindId: Number(item.kindId),
        kindName: item.kindName,
        classId: Number(item.classId),
        className: item.className,
        labId: Number(item.labId),
        labName: item.labName,
        roomId: Number(item.roomId),
        roomName: item.roomName,
        buildingId: Number(item.buildingId),
        buildingName: item.buildingName,
        limit: item.limit,
        maxMinute: item.max,
        minMinute: item.min,
        cancelMinute: item.cancel,
        maxUser: item.maxUser,
        minUser: item.minUser,
        openStart: item.openStart,
        openEnd: item.openEnd,
        usage: item.ts.map((ts) => ({
            start: ts.start.substring(11),
            end: ts.end.substring(11),
            state: ts.state,
            title: ts.title,
            occupy: ts.occupy,
        })),
    }));
}, library_2.MOCK_LIB_ROOM_RES_LIST);
exports.getLibraryRoomBookingResourceList = getLibraryRoomBookingResourceList;
const fuzzySearchLibraryId = async (helper, keyword) => (0, core_1.roamingWrapperWithMocks)(helper, "cab", "", async () => (0, network_1.uFetch)(strings_1.LIBRARY_FUZZY_SEARCH_ID_URL + encodeURIComponent(keyword)).then(JSON.parse), (0, library_2.MOCK_LIB_SEARCH_RES)(keyword));
exports.fuzzySearchLibraryId = fuzzySearchLibraryId;
const bookLibraryRoom = async (helper, roomRes, start, // yyyy-MM-dd HH:mm
end, // yyyy-MM-dd HH:mm
memberList) => (0, core_1.roamingWrapperWithMocks)(helper, "cab", "", async () => {
    const middle = memberList.length === 0 ? "" : `&min_user=${roomRes.minUser}&max_user=${roomRes.maxUser}&mb_list=$${memberList.join(',')}`;
    const result = await (0, network_1.uFetch)(`${strings_1.LIBRARY_ROOM_BOOKING_ACTION_URL}?dialogid=&dev_id=${roomRes.devId}&lab_id=${roomRes.labId}&kind_id=${roomRes.kindId}&room_id=${roomRes.roomId}&type=dev&prop=&test_id=&term=&Vnumber=&classkind=&test_name=${middle}&start=${start}&end=${end}&start_time=${start.substring(11, 13)}${start.substring(14, 16)}&end_time=${end.substring(11, 13)}${end.substring(14, 16)}&up_file=&memo=&act=set_resv`).then(JSON.parse);
    if (result.ret === -1) {
        throw new error_1.CabError(result.msg);
    }
    return { success: result.ret === 1, msg: result.msg };
}, { success: true, msg: "操作成功！" });
exports.bookLibraryRoom = bookLibraryRoom;
const getLibraryRoomBookingRecord = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "cab", "", async () => {
    const result = await (0, network_1.uFetch)(strings_1.LIBRARY_ROOM_BOOKING_RECORD_URL).then(s => JSON.parse(s).msg);
    if (result.includes("没有数据"))
        return [];
    const tables = (0, cheerio_1.default)("tbody", result);
    return tables.map((_, table) => {
        var _a, _b;
        const tableElement = (0, cheerio_1.default)(table);
        const tableAttr = tableElement.attr();
        const tableRow = (0, cheerio_1.default)(tableElement.find("tr").get()[1]).children("td");
        const textPrimary = (0, cheerio_1.default)(tableRow[3]).find(".text-primary").get();
        return {
            regDate: tableAttr.date,
            over: tableAttr.over === "true",
            status: ((_a = tableElement.find(".orange")[0]) !== null && _a !== void 0 ? _a : tableElement.find(".green")[0]).children[0].data,
            name: (0, cheerio_1.default)(tableRow[0]).find(".box > a").text(),
            category: (0, cheerio_1.default)(tableRow[0]).find(".grey").text(),
            owner: tableRow[1].children[0].data,
            members: (0, cheerio_1.default)(tableRow[2]).text(),
            begin: (0, cheerio_1.default)(textPrimary[0]).text(),
            end: (0, cheerio_1.default)(textPrimary[1]).text(),
            description: (0, cheerio_1.default)(tableRow[4]).text(),
            rsvId: (_b = (0, cheerio_1.default)(tableRow[5]).find("[rsvId]").attr()) === null || _b === void 0 ? void 0 : _b.rsvid,
        };
    }).get();
}, library_2.MOCK_LIB_ROOM_RECORD);
exports.getLibraryRoomBookingRecord = getLibraryRoomBookingRecord;
const cancelLibraryRoomBooking = async (helper, id) => (0, core_1.roamingWrapperWithMocks)(helper, "cab", "", async () => {
    const result = await (0, network_1.uFetch)(strings_1.LIBRARY_CANCEL_BOOKING_URL + id).then(JSON.parse);
    if (result.ret === -1) {
        throw new error_1.CabError(result.msg);
    }
    return { success: result.ret === 1, msg: result.msg };
}, { success: true, msg: "操作成功！" });
exports.cancelLibraryRoomBooking = cancelLibraryRoomBooking;

}, function(modId) { var map = {"./core":1646969312975,"../constants/strings":1646969312976,"../models/home/library":1646969312987,"../utils/cheerio":1646969312979,"../utils/network":1646969312977,"../mocks/library":1646969312988,"../utils/error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312987, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.validLibName = exports.byId = exports.weightedValidityAndId = void 0;
const weightedValidityAndId = (lib) => (lib.valid ? 0 : 1000) + lib.id;
exports.weightedValidityAndId = weightedValidityAndId;
const byId = (a, b) => Number(a.id) - Number(b.id);
exports.byId = byId;
exports.validLibName = [
    "NORTH", "WEST", "LAW", "SOCIAL"
];

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312988, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_LIB_ROOM_RECORD = exports.MOCK_LIB_SEARCH_RES = exports.MOCK_LIB_ROOM_RES_LIST = exports.MOCK_LIBRARY_BOOKING_RECORDS = exports.MOCK_LIBRARY_BOOK_SEAT_RESPONSE = exports.MOCK_LIBRARY_ACCESS_TOKEN = exports.MOCK_LIBRARY_FLOOR_LIST = exports.MOCK_LIBRARY_LIST = void 0;
exports.MOCK_LIBRARY_LIST = [
    {
        enName: "Main Library North Section",
        enNameTrace: "Main Library North Section",
        id: 35,
        valid: true,
        zhName: "北馆(李文正馆)",
        zhNameTrace: "北馆(李文正馆)",
    },
    {
        enName: "Humanities and Social Sciences Library",
        enNameTrace: "Humanities and Social Sciences Library",
        id: 89,
        valid: true,
        zhName: "文科图书馆",
        zhNameTrace: "文科图书馆",
    },
];
const MOCK_LIBRARY_FLOOR_LIST = (id, dateChoice) => {
    if (id === 89 && dateChoice === 0) {
        return [
            {
                // @ts-ignore
                available: 0,
                enName: "1 st Floor",
                enNameTrace: "Humanities and Social Sciences Library - 1 st Floor",
                id: 90,
                parentId: 89,
                total: 76,
                valid: true,
                zhName: "一层 ",
                zhNameTrace: "文科图书馆 - 一层 ",
            },
            {
                // @ts-ignore
                available: 1,
                enName: "2 nd Floor",
                enNameTrace: "Humanities and Social Sciences Library - 2 nd Floor",
                id: 91,
                parentId: 89,
                total: 138,
                valid: true,
                zhName: "二层",
                zhNameTrace: "文科图书馆 - 二层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "3 rd Floor",
                enNameTrace: "Humanities and Social Sciences Library - 3 rd Floor",
                id: 92,
                parentId: 89,
                total: 172,
                valid: true,
                zhName: "三层",
                zhNameTrace: "文科图书馆 - 三层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "4 th Floor",
                enNameTrace: "Humanities and Social Sciences Library - 4 th Floor",
                id: 93,
                parentId: 89,
                total: 88,
                valid: true,
                zhName: "四层",
                zhNameTrace: "文科图书馆 - 四层",
            },
        ];
    }
    else if (id === 89 && dateChoice === 1) {
        return [
            {
                // @ts-ignore
                available: 8,
                enName: "1 st Floor",
                enNameTrace: "Humanities and Social Sciences Library - 1 st Floor",
                id: 90,
                parentId: 89,
                total: 76,
                valid: true,
                zhName: "一层 ",
                zhNameTrace: "文科图书馆 - 一层 ",
            },
            {
                // @ts-ignore
                available: 8,
                enName: "2 nd Floor",
                enNameTrace: "Humanities and Social Sciences Library - 2 nd Floor",
                id: 91,
                parentId: 89,
                total: 138,
                valid: true,
                zhName: "二层",
                zhNameTrace: "文科图书馆 - 二层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "3 rd Floor",
                enNameTrace: "Humanities and Social Sciences Library - 3 rd Floor",
                id: 92,
                parentId: 89,
                total: 172,
                valid: true,
                zhName: "三层",
                zhNameTrace: "文科图书馆 - 三层",
            },
            {
                // @ts-ignore
                available: 27,
                enName: "4 th Floor",
                enNameTrace: "Humanities and Social Sciences Library - 4 th Floor",
                id: 93,
                parentId: 89,
                total: 88,
                valid: true,
                zhName: "四层",
                zhNameTrace: "文科图书馆 - 四层",
            },
        ];
    }
    else if (id === 35 && dateChoice === 0) {
        return [
            {
                // @ts-ignore
                available: 0,
                enName: "1 st Floor",
                enNameTrace: "Main Library North Section - 1 st Floor",
                id: 36,
                parentId: 35,
                total: 33,
                valid: true,
                zhName: "一层",
                zhNameTrace: "北馆(李文正馆) - 一层",
            },
            {
                // @ts-ignore
                available: 1,
                enName: "2 nd Floor",
                enNameTrace: "Main Library North Section - 2 nd Floor",
                id: 37,
                parentId: 35,
                total: 312,
                valid: true,
                zhName: "二层",
                zhNameTrace: "北馆(李文正馆) - 二层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "3 rd Floor",
                enNameTrace: "Main Library North Section - 3 rd Floor",
                id: 38,
                parentId: 35,
                total: 266,
                valid: true,
                zhName: "三层",
                zhNameTrace: "北馆(李文正馆) - 三层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "4 th Floor",
                enNameTrace: "Main Library North Section - 4 th Floor",
                id: 39,
                parentId: 35,
                total: 240,
                valid: true,
                zhName: "四层",
                zhNameTrace: "北馆(李文正馆) - 四层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "5 th Floor",
                enNameTrace: "Main Library North Section - 5 th Floor",
                id: 40,
                parentId: 35,
                total: 100,
                valid: true,
                zhName: "五层",
                zhNameTrace: "北馆(李文正馆) - 五层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "G Floor",
                enNameTrace: "Main Library North Section - G Floor",
                id: 103,
                parentId: 35,
                total: 0,
                valid: false,
                zhName: "G层(现场选位)",
                zhNameTrace: "北馆(李文正馆) - G层(现场选位)",
            },
        ];
    }
    else if (id === 35 && dateChoice === 1) {
        return [
            {
                // @ts-ignore
                available: 17,
                enName: "1 st Floor",
                enNameTrace: "Main Library North Section - 1 st Floor",
                id: 36,
                parentId: 35,
                total: 33,
                valid: true,
                zhName: "一层",
                zhNameTrace: "北馆(李文正馆) - 一层",
            },
            {
                // @ts-ignore
                available: 148,
                enName: "2 nd Floor",
                enNameTrace: "Main Library North Section - 2 nd Floor",
                id: 37,
                parentId: 35,
                total: 312,
                valid: true,
                zhName: "二层",
                zhNameTrace: "北馆(李文正馆) - 二层",
            },
            {
                // @ts-ignore
                available: 129,
                enName: "3 rd Floor",
                enNameTrace: "Main Library North Section - 3 rd Floor",
                id: 38,
                parentId: 35,
                total: 266,
                valid: true,
                zhName: "三层",
                zhNameTrace: "北馆(李文正馆) - 三层",
            },
            {
                // @ts-ignore
                available: 128,
                enName: "4 th Floor",
                enNameTrace: "Main Library North Section - 4 th Floor",
                id: 39,
                parentId: 35,
                total: 240,
                valid: true,
                zhName: "四层",
                zhNameTrace: "北馆(李文正馆) - 四层",
            },
            {
                // @ts-ignore
                available: 6,
                enName: "5 th Floor",
                enNameTrace: "Main Library North Section - 5 th Floor",
                id: 40,
                parentId: 35,
                total: 16,
                valid: true,
                zhName: "五层",
                zhNameTrace: "北馆(李文正馆) - 五层",
            },
            {
                // @ts-ignore
                available: 0,
                enName: "G Floor",
                enNameTrace: "Main Library North Section - G Floor",
                id: 103,
                parentId: 35,
                total: 0,
                valid: false,
                zhName: "G层(现场选位)",
                zhNameTrace: "北馆(李文正馆) - G层(现场选位)",
            },
        ];
    }
    else {
        return [];
    }
};
exports.MOCK_LIBRARY_FLOOR_LIST = MOCK_LIBRARY_FLOOR_LIST;
exports.MOCK_LIBRARY_ACCESS_TOKEN = "dummy";
exports.MOCK_LIBRARY_BOOK_SEAT_RESPONSE = { status: 0, msg: "Testing account cannot book a seat." };
exports.MOCK_LIBRARY_BOOKING_RECORDS = [
    {
        delId: undefined,
        id: "202009111837",
        pos: "文科图书馆-四层-C区:F4C083",
        status: "已使用",
        time: "2020-09-11 12:15:52",
    },
    {
        delId: undefined,
        id: "202009070209",
        pos: "文科图书馆-二层-A区:F2A008",
        status: "用户取消",
        time: "2020-09-08 08:00:00",
    },
    {
        delId: undefined,
        id: "202009062358",
        pos: "文科图书馆-三层-A区:F3A018",
        status: "已使用",
        time: "2020-09-07 08:00:00",
    },
    {
        delId: undefined,
        id: "202009021093",
        pos: "文科图书馆-三层-B区:F3B018",
        status: "已关闭",
        time: "2020-09-02 10:57:25",
    },
    {
        delId: undefined,
        id: "202008310485",
        pos: "北馆(李文正馆)-四层-B阅览区:NF4B093",
        status: "已使用",
        time: "2020-08-31 08:31:03",
    },
];
exports.MOCK_LIB_ROOM_RES_LIST = [
    {
        id: "10352_10323",
        name: "F2-13",
        devId: 10352,
        devName: "F2-13",
        kindId: 10314,
        kindName: "文科馆团体研讨间-4人间8人间",
        classId: 10313,
        className: "文科馆团体研讨间-4人间8人间",
        labId: 10323,
        labName: "文科馆团体研讨间",
        roomId: 10351,
        roomName: "F2-13",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 4,
        minUser: 3,
        openStart: "08:00",
        openEnd: "22:00",
        usage: [{
                start: "18:00",
                end: "22:00",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "09:00",
                end: "13:00",
                state: "undo",
                title: "张*",
                occupy: true
            }]
    },
    {
        id: "2071787_2071770",
        name: "北馆2F-04",
        devId: 2071787,
        devName: "北馆2F-04",
        kindId: 2071757,
        kindName: "北馆团体研讨间",
        classId: 10313,
        className: "北馆团体研讨间",
        labId: 2071770,
        labName: "北馆团体间(二层)",
        roomId: 2071786,
        roomName: "北馆2F-04",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 10,
        minUser: 3,
        openStart: "08:00",
        openEnd: "22:00",
        usage: [{
                start: "17:00",
                end: "19:00",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "19:30",
                end: "21:30",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "10:00",
                end: "13:00",
                state: "undo",
                title: "张*",
                occupy: true
            }]
    },
    {
        id: "2071791_2071770",
        name: "北馆2F-03",
        devId: 2071791,
        devName: "北馆2F-03",
        kindId: 2071757,
        kindName: "北馆团体研讨间",
        classId: 10313,
        className: "北馆团体研讨间",
        labId: 2071770,
        labName: "北馆团体间(二层)",
        roomId: 2071790,
        roomName: "北馆2F-03",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 10,
        minUser: 3,
        openStart: "08:00",
        openEnd: "22:00",
        usage: [{
                start: "18:00",
                end: "21:00",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "13:10",
                end: "17:10",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "08:00",
                end: "09:30",
                state: "undo",
                title: "张*",
                occupy: true
            }]
    },
    {
        id: "10370_10323",
        name: "F2-16",
        devId: 10370,
        devName: "F2-16",
        kindId: 10314,
        kindName: "文科馆团体研讨间-4人间8人间",
        classId: 10313,
        className: "文科馆团体研讨间-4人间8人间",
        labId: 10323,
        labName: "文科馆团体研讨间",
        roomId: 10369,
        roomName: "F2-16",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 4,
        minUser: 3,
        openStart: "08:00",
        openEnd: "22:00",
        usage: [{
                start: "11:00",
                end: "15:00",
                state: "undo",
                title: "张*",
                occupy: true
            }]
    },
    {
        id: "2071874_2071780",
        name: "北馆3F-01",
        devId: 2071874,
        devName: "北馆3F-01",
        kindId: 2071759,
        kindName: "北馆单人研读间",
        classId: 10313,
        className: "北馆单人研读间",
        labId: 2071780,
        labName: "北馆单人间(三层)",
        roomId: 2071873,
        roomName: "北馆3F-01",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 1,
        minUser: 1,
        openStart: "08:00",
        openEnd: "22:00",
        usage: []
    },
    {
        id: "10494_10321",
        name: "文科馆F3-21",
        devId: 10494,
        devName: "文科馆F3-21",
        kindId: 10312,
        kindName: "文科馆单人间（三层）",
        classId: 10313,
        className: "文科馆单人间（三层）",
        labId: 10321,
        labName: "文科馆单人间（三层）",
        roomId: 10493,
        roomName: "文科馆F3-21",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 1,
        minUser: 1,
        openStart: "08:00",
        openEnd: "22:00",
        usage: [{
                start: "16:00",
                end: "18:30",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "09:50",
                end: "11:50",
                state: "undo",
                title: "张*",
                occupy: true
            }]
    },
    {
        id: "10498_10321",
        name: "文科馆F3-22",
        devId: 10498,
        devName: "文科馆F3-22",
        kindId: 10312,
        kindName: "文科馆单人间（三层）",
        classId: 10313,
        className: "文科馆单人间（三层）",
        labId: 10321,
        labName: "文科馆单人间（三层）",
        roomId: 10497,
        roomName: "文科馆F3-22",
        buildingId: 0,
        buildingName: "",
        limit: 4,
        maxMinute: 240,
        minMinute: 30,
        cancelMinute: 20,
        maxUser: 1,
        minUser: 1,
        openStart: "08:00",
        openEnd: "22:00",
        usage: [{
                start: "13:00",
                end: "17:00",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "18:10",
                end: "20:30",
                state: "undo",
                title: "张*",
                occupy: true
            },
            {
                start: "09:00",
                end: "11:50",
                state: "undo",
                title: "张*",
                occupy: true
            }]
    },
];
const MOCK_LIB_SEARCH_RES = (keyword) => [{ id: keyword, label: `张三(${keyword})` }];
exports.MOCK_LIB_SEARCH_RES = MOCK_LIB_SEARCH_RES;
exports.MOCK_LIB_ROOM_RECORD = [
    {
        regDate: "2021-10-04 23:57",
        over: false,
        status: "预约成功",
        name: "北馆2F-03",
        category: "北馆团体间(二层)",
        owner: "张三",
        members: "张三(2019000000),李四(2019000001),王五(2019000002)",
        begin: "10-06 08:00",
        end: "10-06 09:30",
        description: "预约成功,未生效,审核通过",
        rsvId: "12925688"
    },
    {
        regDate: "2021-10-04 23:56",
        over: false,
        status: "预约成功",
        name: "北馆3F-03",
        category: "北馆单人间(三层)",
        owner: "张三",
        members: "个人预约",
        begin: "10-05 12:00",
        end: "10-05 16:00",
        description: "预约成功,未生效,审核通过",
        rsvId: "12925682"
    }
];

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312989, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewsDetail = exports.getNewsList = void 0;
const network_1 = require("../utils/network");
const cheerio_1 = __importDefault(require("cheerio"));
const newsHtml_1 = require("../mocks/source/newsHtml");
const cheerio_2 = require("../utils/cheerio");
const core_1 = require("./core");
const news_1 = require("../mocks/news");
const strings_1 = require("../constants/strings");
const channelToUrl = {
    "JWGG": strings_1.JWGG_MAIN_PREFIX,
    "BGTZ": strings_1.BGTZ_MAIN_PREFIX,
    "KYTZ": strings_1.KYTZ_MAIN_PREFIX,
    "HB": strings_1.HB_MAIN_PREFIX,
};
const getNewsList = (helper, channel, page) => (0, core_1.roamingWrapperWithMocks)(helper, undefined, "", () => (0, network_1.uFetch)(channelToUrl[channel] + page).then((str) => {
    const $ = cheerio_1.default.load(str);
    const newsList = [];
    $("ul.cont_list > li", str).each((_, item) => {
        var _a, _b, _c;
        if (item.type === "tag" && item.children[3].type === "tag") {
            let newsUrl = item.children[3].attribs.href;
            if (newsUrl[0] === "/") {
                newsUrl = "https://webvpn.tsinghua.edu.cn" + newsUrl;
            }
            newsList.push({
                name: (0, cheerio_2.getCheerioText)(item, 3),
                url: newsUrl,
                date: (0, cheerio_2.getCheerioText)(item, 7),
                source: (_c = (_a = item.children[4].data) === null || _a === void 0 ? void 0 : _a.substr(3, ((_b = item.children[4].data) === null || _b === void 0 ? void 0 : _b.length) - 5)) !== null && _c !== void 0 ? _c : "",
                channel,
            });
        }
    });
    return newsList;
}), (0, news_1.MOCK_NEWS_LIST)(channel));
exports.getNewsList = getNewsList;
const policyList = [
    ["jwcbg", [".TD4", "td[colspan=4]:not(td[height])"]],
    [
        "kybg",
        [".style1", "table[width='95%'][cellpadding='3'] tr:nth-child(3)"],
    ],
    ["gjc", [".style11", "[width='85%'] td"]],
    [
        "77726476706e69737468656265737421f2fa598421322653770bc7b88b5c2d32530b094045c3bd5cabf3",
        [".TD1", "td[colspan=4]:not(td[height])"],
    ],
    [
        "77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8",
        [".cont_doc_box h5 span", "div.field-item"],
    ],
    [
        "77726476706e69737468656265737421e9fd528569336153301c9aa596522b20735d12f268e561f0",
        [
            "h3",
            "[style='text-align:left; width:90%; magin:0px auto; padding-top:20px;  padding-bottom:20px;word-break:break-all;']",
        ],
    ],
    [
        "77726476706e69737468656265737421f8e60f8834396657761d88e29d51367b523e",
        ["h1", ".r_cont > ul"],
    ],
    [
        "77726476706e69737468656265737421e8ef439b69336153301c9aa596522b20e1a870705b76e399",
        ["", ".td4"],
    ],
    ["rscbg", ["[height=40]", "[width='95%'] > tr:nth-child(3)"]],
    [
        "77726476706e69737468656265737421e7e056d234297b437c0bc7b88b5c2d3212b31e4d37621d4714d6",
        ["", "[style='text-align:left']"],
    ],
    ["ghxt", ["", "[valign=top]:not([class])"]],
    [
        "fgc",
        [
            ".title_b",
            "[style='width:647px;margin-left:6px;font-size:13px;line-height:20px;text-align:justify']",
        ],
    ],
    [
        "77726476706e69737468656265737421e8e442d23323615e79009cadd6502720f9b87b",
        [
            ".bt",
            ".xqbox",
        ],
    ],
    [
        "77726476706e69737468656265737421e4ff459d207e6b597d469dbf915b243de94c4812e5c2e1599f",
        [
            ".TD_right > font",
            "td[colspan=4]:not(td[height])",
        ],
    ],
    [
        "jdbsc",
        [
            ".TD1",
            "[width=95%]:nth-child(2) > tr:nth-child(1)",
        ],
    ],
];
const getNewsDetailPolicy = (url) => {
    for (let i = 0; i < policyList.length; ++i) {
        if (url.indexOf(policyList[i][0]) !== -1) {
            return policyList[i][1];
        }
    }
    return [undefined, undefined];
};
const getNewsDetail = async (helper, url) => {
    var _a, _b;
    const [title, content] = getNewsDetailPolicy(url);
    const html = helper.mocked() ? (_a = newsHtml_1.newsHtml[url]) !== null && _a !== void 0 ? _a : "" : await (0, network_1.uFetch)(url);
    if (title !== undefined && content) {
        const r = (0, cheerio_1.default)(content, html);
        return [
            (0, cheerio_1.default)(title, html).text(),
            (_b = r.html()) !== null && _b !== void 0 ? _b : "",
            r.text().replace(/\s/g, ""),
        ];
    }
    else {
        return ["", html, ""];
    }
};
exports.getNewsDetail = getNewsDetail;

}, function(modId) { var map = {"../utils/network":1646969312977,"../mocks/source/newsHtml":1646969312990,"../utils/cheerio":1646969312979,"./core":1646969312975,"../mocks/news":1646969313001,"../constants/strings":1646969312976}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312990, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsHtml = exports.url9 = exports.url8 = exports.url7 = exports.url6 = exports.url5 = exports.url4 = exports.url3 = exports.url2 = exports.url1 = exports.url0 = void 0;
const _0_1 = __importDefault(require("./0"));
const _1_1 = __importDefault(require("./1"));
const _2_1 = __importDefault(require("./2"));
const _3_1 = __importDefault(require("./3"));
const _4_1 = __importDefault(require("./4"));
const _5_1 = __importDefault(require("./5"));
const _6_1 = __importDefault(require("./6"));
const _7_1 = __importDefault(require("./7"));
const _8_1 = __importDefault(require("./8"));
const _9_1 = __importDefault(require("./9"));
exports.url0 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e9fd528569336153301c9aa596522b20735d12f268e561f0/boarddetail_cat.jsp?columnId=0010106&itemSeq=46224";
exports.url1 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fae0429e207e6b597d469dbf915b243d8ae9128e1cdcffb247/jwcbg/detail_cat.jsp?boardid=57&seq=7632";
exports.url2 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fae0429e207e6b597d469dbf915b243d8ae9128e1cdcffb247/jwcbg/detail_cat.jsp?boardid=57&seq=7631";
exports.url3 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421fae0429e207e6b597d469dbf915b243d8ae9128e1cdcffb247/jwcbg/detail_cat.jsp?boardid=57&seq=7627";
exports.url4 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f2fa598421322653770bc7b88b5c2d32530b094045c3bd5cabf3/boarddetail_cat.jsp?columnId=xtw01&itemSeq=124715";
exports.url5 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f2fa598421322653770bc7b88b5c2d32530b094045c3bd5cabf3/boarddetail_cat.jsp?columnId=xtw01&itemSeq=124712";
exports.url6 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e2e442d23323615e79009cadd650272001f8dd/rscbg/detail.jsp?boardid=22&seq=5182";
exports.url7 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8/node/279771";
exports.url8 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421f2fa598421322653770bc7b88b5c2d32530b094045c3bd5cabf3/boarddetail_cat.jsp?columnId=dwxcb01&itemSeq=124530";
exports.url9 = "https://webvpn.tsinghua.edu.cn/http/77726476706e69737468656265737421e0f852882e3e6e5f301c9aa596522b2043f84ba24ebecaf8/node/279661";
exports.newsHtml = {};
exports.newsHtml[exports.url0] = _0_1.default;
exports.newsHtml[exports.url1] = _1_1.default;
exports.newsHtml[exports.url2] = _2_1.default;
exports.newsHtml[exports.url3] = _3_1.default;
exports.newsHtml[exports.url4] = _4_1.default;
exports.newsHtml[exports.url5] = _5_1.default;
exports.newsHtml[exports.url6] = _6_1.default;
exports.newsHtml[exports.url7] = _7_1.default;
exports.newsHtml[exports.url8] = _8_1.default;
exports.newsHtml[exports.url9] = _9_1.default;

}, function(modId) { var map = {"./0":1646969312991,"./1":1646969312992,"./2":1646969312993,"./3":1646969312994,"./4":1646969312995,"./5":1646969312996,"./6":1646969312997,"./7":1646969312998,"./8":1646969312999,"./9":1646969313000}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312991, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `







<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title>研究生院办公网内网</title>

<link href="/docinfo/css/page.css" rel="stylesheet" type="text/css"/>



</head>


<script language="javascript">
<!--
function commentCheck(){
	if(document.forms(0).content.value==""){
		alert("评论内容不能为空!");
		document.forms(0).content.focus();
		return false;
	}
	if(document.forms(0).anonymous.value=="1"&&
	document.forms(0).nickName.value==""){
		document.forms(0).nickName.value="匿名";
	}
	return true;
}
-->
</script>
<!-- 得到请求参数 -->










<!-- 得到infoColumnVo -->


<!-- 得到参数VO -->



  <!-- 文档计数+1 -->






<body >







<script type="text/javascript" src="/js/jquery-recent.min.js"></script>
<script type="text/javascript" src="/js/jxrl-1.0.js"></script>


<script type="text/JavaScript">
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
</script>
<script type="text/javascript">
function search(){
		var searchValue = document.getElementById('searchValue').value.replace(/^\s+|\s+$/g,"");;
		if(searchValue == '请输入您要查找的关键字...')searchValue = '';
		if(searchValue == ''){
          alert("请输入您要查找的关键字");
          document.getElementById('searchValue').focus();
        }else{
		  var str = "/docinfo/search.jsp?searchTitle=" + escape(searchValue);
		  window.open(str);
		  //window.location.href(str);
		}
}

function searchFocus(text){
		text.value = '';
}

function searchBlur(text){
		if(text.value == '')
			text.value = '请输入您要查找的关键字...';
}

</Script>























	<script>
	$(document).ready(function(){
		getCal_json("/portal/proxy/tsxx",function(Cal_json){
			jQuery('#line1').html(Cal_json.begin_year+"-"+Cal_json.end_year+Cal_json.season);
			jQuery('#line2').html("第"+Cal_json.zhou_num+"周");
			jQuery('#line3').html(Cal_json.date);
			jQuery('#line4').html(Cal_json.week);
		});
	});
	</script>
   <div id="banner">



       		<img id="img_change" src="/docinfo/img/banner.jpg" width="947" height="103" />

    </div>
    <div id="weather">
        <ul>
            <li id="line1"></li>
            <li class="red" id="line2"></li>
            <li id="line3"></li>
            <li id="line4"></li>
        </ul>
    </div>

    <div id="search">
    	<ul>
		  <li>
            <input id="searchValue" type="text"  size="40" value="请输入您要查找的关键字..." style="vertical-align:middle;" onFocus="searchFocus(this)" onBlur="searchBlur(this)"/>&nbsp;
            <input type="image" style="vertical-align:middle;" onClick="search()" src="/docinfo/img/button_search.gif" width="82" height="21" />
          </li>
        </ul>
    </div>


<div id="center">
    <!-- 导航部分 -->








<div id="nav2">
    <ul>
       <li><span>当前位置:</span>
       </li>












            <li>&gt;&gt;<a href="../index.jsp">首页</a>
            </li>










            <li>&gt;&gt;<a href="/docinfo/board1/boardlist.jsp?columnId=0010106&parentColumnId=001">教务通知</a>
            </li>






     </ul>
</div>
    <!-- 导航部分结束 -->



    <h3>
	    <span>
	        <font color="">
	          博士生思政课“中国马克思主义与当代”扩容通知
	        </font>

	    </span>
    </h3>

    <div style="width:90%; margin:10px auto; padding-bottom:10px; border-bottom:#dcdcdc 1px solid; overflow:hidden; ">
        	<ul>
            	<li><span class="left" style="padding-top:30px;">
            	     发布时间:2020-09-16
            	     &nbsp;&nbsp;
            	     访问计数:1722
            	     </span></li>
                <li><span class="left"></span></li>

                 <li>
                   <a href="javascript:window.close()"><span class="right">[关闭窗口]</span></a>

                 </li>
            </ul>
    </div>

     <div style="text-align:left; width:90%; magin:0px auto; padding-top:20px;  padding-bottom:20px;word-break:break-all;">
     <span><P class=MsoNormal style="MARGIN: 0cm 0cm 7.8pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-para-margin-bottom: .5gd; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><FONT size=4><FONT color=#000080>为尽量满足学生选课需求，拟对博士生思政课“中国马克思主义与当代”（课程号<SPAN lang=EN-US>90680032</SPAN></FONT><FONT color=#000080>）进行扩容，共扩</FONT><SPAN lang=EN-US><FONT color=#000080>150</FONT></SPAN><FONT color=#000080>个名额。具体信息如下：<SPAN lang=EN-US><?xml:namespace prefix = "o" ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></SPAN></FONT></FONT></SPAN></P>
<P>
<TABLE class=MsoNormalTable style="WIDTH: 418.2pt; BORDER-COLLAPSE: collapse; MARGIN: auto auto auto 5.4pt; mso-yfti-tbllook: 1184; mso-padding-alt: 0cm 5.4pt 0cm 5.4pt" cellSpacing=0 cellPadding=0 width=558 border=0>
<TBODY>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 0; mso-yfti-firstrow: yes">
<TD style="BORDER-TOP: windowtext 1pt solid; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-alt: solid windowtext .5pt" width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>课程号<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: windowtext 1pt solid; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>课程名<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: windowtext 1pt solid; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>课序号<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: windowtext 1pt solid; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>上课时间<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: windowtext 1pt solid; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>扩容名额<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 1">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>2<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周一，第<SPAN lang=EN-US>4</SPAN></FONT><FONT color=#000080>、</FONT><SPAN lang=EN-US><FONT color=#000080>5</FONT></SPAN><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>10<o:p></o:p></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 2">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=top width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>3<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周三，第<SPAN lang=EN-US>4</SPAN></FONT><FONT color=#000080>、</FONT><SPAN lang=EN-US><FONT color=#000080>5</FONT></SPAN><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>40<o:p></o:p></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 3">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=top width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>4<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周三，第<SPAN lang=EN-US>4</SPAN></FONT><FONT color=#000080>、</FONT><SPAN lang=EN-US><FONT color=#000080>5</FONT></SPAN><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>40<o:p></o:p></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 4">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=top width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>5<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周三，第<SPAN lang=EN-US>4</SPAN></FONT><FONT color=#000080>、</FONT><SPAN lang=EN-US><FONT color=#000080>5</FONT></SPAN><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>20<o:p></o:p></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 5">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=top width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>6<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周三，第<SPAN lang=EN-US>4</SPAN></FONT><FONT color=#000080>、</FONT><SPAN lang=EN-US><FONT color=#000080>5</FONT></SPAN><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>20<o:p></o:p></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 6">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=top width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>7<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周四，第<SPAN lang=EN-US>2</SPAN></FONT><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>10<o:p></o:p></FONT></FONT></SPAN></P></TD></TR>
<TR style="HEIGHT: 20.1pt; mso-yfti-irow: 7; mso-yfti-lastrow: yes">
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 58.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: windowtext 1pt solid; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=top width=78 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>90680032<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 132.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-top-alt: solid windowtext .5pt; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=177>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>中国马克思主义与当代<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 49.6pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt; mso-border-left-alt: solid windowtext .5pt" vAlign=bottom width=66 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>8<o:p></o:p></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 4cm; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=top width=151 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT size=4><FONT color=#000080>周四，第<SPAN lang=EN-US>2</SPAN></FONT><FONT color=#000080>大节<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P></TD>
<TD style="BORDER-TOP: #ffffff; HEIGHT: 20.1pt; BORDER-RIGHT: windowtext 1pt solid; WIDTH: 63.8pt; BORDER-BOTTOM: windowtext 1pt solid; PADDING-BOTTOM: 0cm; PADDING-TOP: 0cm; PADDING-LEFT: 5.4pt; BORDER-LEFT: #ffffff; PADDING-RIGHT: 5.4pt; BACKGROUND-COLOR: transparent; mso-border-bottom-alt: solid windowtext .5pt; mso-border-right-alt: solid windowtext .5pt" vAlign=bottom width=85 noWrap>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; mso-pagination: widow-orphan" align=center><SPAN lang=EN-US style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; mso-bidi-font-family: Arial; mso-font-kerning: 0pt"><FONT color=#000080><FONT size=4>10<o:p></o:p></FONT></FONT></SPAN></P></TD></TR></TBODY></TABLE></P>
<P class=MsoNormal style="MARGIN: 7.8pt 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly; mso-para-margin-top: .5gd"><SPAN style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><FONT size=4><FONT color=#000080>请有选课需求的同学于<SPAN lang=EN-US>9</SPAN></FONT><FONT color=#000080>月</FONT><SPAN lang=EN-US><FONT color=#000080>21</FONT></SPAN><FONT color=#000080>日（周一）</FONT><SPAN lang=EN-US><FONT color=#000080>13:00 -- 9</FONT></SPAN><FONT color=#000080>月</FONT><SPAN lang=EN-US><FONT color=#000080>25</FONT></SPAN><FONT color=#000080>日（周五）</FONT><SPAN lang=EN-US><FONT color=#000080>17:00</FONT></SPAN><FONT color=#000080>网上申请特殊原因补选期间提交申请。操作方法如下：</FONT></FONT></SPAN></P>
<P class=MsoNormal style="MARGIN: 7.8pt 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly; mso-para-margin-top: .5gd"><SPAN style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><FONT size=4><FONT color=#000080><SPAN lang=EN-US><o:p><A href="/download.jsp?attachSeq=9932">网上特殊原因补选课申请审批系统规则及操作说明（学生篇）.doc</A></o:p></SPAN></FONT></FONT></SPAN></P>
<P class=MsoNormal style="MARGIN: 7.8pt 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly; mso-para-margin-top: .5gd"><SPAN lang=EN-US style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><o:p><FONT color=#000080 size=4>&nbsp;</FONT></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><FONT color=#000080><FONT size=4>特此通知。<SPAN lang=EN-US><o:p></o:p></SPAN></FONT></FONT></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><o:p><FONT color=#000080 size=4>&nbsp;</FONT></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><FONT color=#000080><FONT size=4><SPAN lang=EN-US style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><SPAN style="mso-spacerun: yes">&nbsp;</SPAN><SPAN style="mso-spacerun: yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN><SPAN style="mso-spacerun: yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SPAN><SPAN style="mso-spacerun: yes">&nbsp;</SPAN></SPAN><SPAN style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体">马克思主义学院<SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></FONT></FONT></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 22pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><FONT size=4><SPAN lang=EN-US style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><FONT color=#000080><SPAN style="mso-spacerun: yes">&nbsp;</SPAN><SPAN style="mso-spacerun: yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </SPAN></FONT><FONT color=#000080>2020</FONT></SPAN><SPAN style="FONT-SIZE: 14pt; FONT-FAMILY: 宋体"><FONT color=#000080>年<SPAN lang=EN-US>9</SPAN></FONT><FONT color=#000080>月</FONT><SPAN lang=EN-US><FONT color=#000080>16</FONT></SPAN><FONT color=#000080>日</FONT><SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></FONT></P>
<P><FONT size=4></FONT>&nbsp;</P></span>
     </div>

     <!-- <div class="clear" style="magin:20px auto;">&nbsp;</div> -->
    <div style="width:90%; margin:20px auto; padding-top:10px; border-top:#dcdcdc 1px solid">

    </div>

</div>



<div id="footer_s"><!-- 底部区域开始 -->
    	<p>版权所有:清华大学研究生院&nbsp;&nbsp;&nbsp;&nbsp;技术支持:清华大学信息化技术中心</p>
        <p style="font-family:Arial;">Copyright&nbsp;&nbsp;<span style="font-size:16px;">&copy;</span>&nbsp;&nbsp;2009 Tsinghua University All Rights Reserved.</p>
</div><!-- 底部区域结束 -->


</body>
</html>
`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312992, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `










<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>教务处办公信息系统</title>
<link href="/jwcbg/css/index.css" rel="stylesheet" type="text/css">

<style type="text/css">
<!--
body {
	background-color: #EFEFEF;
}
-->
</style></head>

<body background="images/1_r7_c2.gif" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="992" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="98" background="/jwcbg/images/ban_wdh.gif" bgcolor="#FFFFFF"></td>
  </tr>
  <tr>
    <td height="4" background="/jwcbg/images/bg_ban_wdh.gif" bgcolor="1C82D1"></td>
  </tr>
</table>

<table width="992" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td valign="top"><div align="center"><br><table width="992" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td> <td width="60">&nbsp;</td>
  </tr>
</table>
		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
			  <tr>
             <td >
             	<div align="center" class="TD4">研究生补退选时间安排（2020-2021秋）</div>
             	</td>
  </tr>
  <tr>
    <td height="10" colspan="4"></td>
    </tr>
</table>
		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
			 <tr >
              <td align=center>
                  	【分类: 注册中心】&nbsp;&nbsp;【发布时间: 2020-09-14】&nbsp;&nbsp;【访问计数:2019】

                  			</td>

  </tr>
			  <tr >
             <td align="right">
                    <SCRIPT language=JavaScript type=text/JavaScript>
							function shutwin(){
							window.close();
							return;}
					  </SCRIPT>
                    &nbsp;&nbsp;<A
            href="javascript:shutwin();" ><font color="#0066cc">【关闭窗口】</font></A></td>
  </tr>
</table>
      <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="#F2F2F2" style="border-left:#B7B6B6 1px solid;border-right:#B7B6B6 1px solid;border-top:#B7B6B6 1px solid;border-bottom:#B7B6B6 1px solid;"><table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tr>
                        <td height="9"></td>
                      </tr>
                    </table>
                      <table width="98%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>

			    <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">

              <tr>
                <td height="15" ></td>
              </tr>
            </table>
              <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="4"><TABLE style='FONT-FAMILY: 宋体, "Times New Roman", Arial; WORD-SPACING: 0px; TEXT-TRANSFORM: none; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' cellSpacing=0 cellPadding=0 width="90%" align=center border=0>
<TBODY>
<TR>
<TD style="FONT-SIZE: 12px; COLOR: rgb(0,0,0); LINE-HEIGHT: 20px" colSpan=4>
<P><FONT style="BACKGROUND-COLOR: rgb(255,255,187)" color=#333333 size=4 face=微软雅黑><SPAN style="BORDER-LEFT-WIDTH: 0px; FONT-SIZE: 18px; FONT-FAMILY: inherit; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; PADDING-RIGHT: 0px; BORDER-TOP-WIDTH: 0px; text-size-adjust: none"><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="http://announce.cic.tsinghua.edu.cn/node/26952">2020-2021 Autumn Semester Graduates' Course Registration Calendar</A></SPAN></FONT></P><FONT color=#000000>
<DIV align=left>
<DIV><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" color=#000000 size=3>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial>-----------------------------------------------------------------------------</FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=center><FONT color=#0000ff size=4 face=Arial><STRONG>2020-2021秋季学期 研究生补退选时间安排</STRONG></FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=center><STRONG><FONT color=#0000ff size=3 face=Arial></FONT></STRONG>&nbsp;</DIV></FONT></DIV></DIV></FONT>
<DIV class="field-item even" property="content:encoded">
<P><FONT size=3><FONT face=Arial><STRONG>补退选（第一阶段）：<U>9月14</U></STRONG><STRONG><U>日（周一）13:00&nbsp;-- 9月21日（周一）<FONT color=#ff0000>8:00</FONT></U></STRONG><BR>&nbsp;&nbsp;*<SPAN><FONT size=3 face=Arial>&nbsp;</FONT></SPAN>所有课程均可选可删，先选先得，选满为止</FONT></FONT></P>
<P><FONT size=3><FONT face=Arial><STRONG>补退选（第二阶段）：<U>9月</U></STRONG><STRONG><U>21日（周一）13:00&nbsp;--<FONT size=3 face=宋体><SPAN>&nbsp;</SPAN></FONT></U></STRONG><FONT color=#000000><STRONG><U>9月25日（周五）16:00</U></STRONG></FONT></FONT></FONT><FONT color=#000000><BR></FONT><FONT size=3><FONT face=Arial>&nbsp;&nbsp;*<SPAN><FONT size=3 face=Arial>&nbsp;</FONT></SPAN><SPAN style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; COLOR: rgb(0,0,0); FONT: 10.5pt/16px 宋体; WIDOWS: 1; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px">不可选课，只允许删除已选课程，所删课程不记录在成绩单上</SPAN></FONT></FONT></P><SPAN style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; COLOR: rgb(0,0,0); FONT: 10.5pt/16px 宋体; WIDOWS: 1; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px">
<P><SPAN style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; COLOR: rgb(0,0,0); FONT: 10.5pt/16px 宋体; WIDOWS: 1; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px"><FONT size=3><FONT face=Arial><STRONG>网上申请特殊原因补选：</STRONG><STRONG><U>9月</U></STRONG><STRONG><U>21日（周一）13:00&nbsp;--<FONT size=3 face=宋体><SPAN>&nbsp;</SPAN></FONT></U></STRONG><FONT color=#000000><STRONG><U>9月25日（周五）</U></STRONG></FONT><FONT color=#000000><STRONG><U>17:00</U></STRONG></FONT></FONT></FONT></SPAN><SPAN style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; COLOR: rgb(0,0,0); FONT: 10.5pt/16px 宋体; WIDOWS: 1; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px"><FONT color=#000000><BR><FONT size=3><FONT face=Arial>&nbsp; *</FONT><FONT face=Arial><FONT size=3><SPAN>&nbsp;</SPAN><IMG border=0 src="/editor_new/sysimage/file/doc.gif"></FONT></FONT></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="/download.jsp?attachSeq=3332"><FONT color=#0000ff size=3 face=Arial>网上特殊原因补选课申请审批系统规则及操作说明（学生篇）.doc</FONT></A><BR></FONT></SPAN></P></SPAN>
<P><FONT size=3 face=Arial>-------------------------------------------------------------------------<BR>-------------------------------------------------------------------------</FONT></P>
<P><FONT size=3><FONT face=Arial><FONT color=#1a6be6><STRONG>浏览器要求：</STRONG></FONT>选课系统适用于谷歌chrome浏览器、IE浏览器。使用其他浏览器进行选退课操作，有可能出现异常情况导致选退课失败。</FONT></FONT></P>
<DIV align=left><FONT size=3 face=Arial></FONT></DIV>
<DIV align=left>
<DIV><FONT color=#1a6be6><FONT size=3><FONT face=Arial><B>选课登录入口</B>：</FONT></FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial>清华大学信息门户（</FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="http://info.tsinghua.edu.cn/"><FONT color=#0066cc size=3 face=Arial>http://info.tsinghua.edu.cn</FONT></A><FONT size=3 face=Arial>），选课系统分为中、英文两种语言，同学们可选择其中一种语言进入选课系统。</FONT></DIV>
<DIV><FONT size=3 face=Arial></FONT>&nbsp;</DIV></DIV>
<DIV align=left><FONT color=#000000>
<DIV><FONT color=#1a6be6><FONT size=3><FONT face=Arial><B>校外网络登录信息门户的方法：（请使用电脑进行选课，不建议使用手机）</B><B></B></FONT></FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial>使用校外网络选课，需先打开信息门户info.tsinghua.edu.cn，访问页面有两个登录入口：</FONT></DIV>
<DIV><FONT size=3><FONT face=Arial><STRONG>入口一（推荐）</STRONG>：“WebVPN登录入口”，输入账号密码后可选择 “选课系统”或“Course Registration”进入选课系统。</FONT></FONT></DIV>
<DIV><FONT size=3><FONT face=Arial><STRONG>入口二</STRONG>：“SSL VPN登录入口”：输入账号密码后需使用“客户端应用程序会话”方式，连接成功后再登录信息门户。不要点击“web书签”中的信息门户链接！</FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial><IMG border=0 src="/editor_new/sysimage/file/pdf.gif"></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="/download.jsp?attachSeq=3333"><FONT color=#0000ff size=3 face=Arial>关于校外选课的网络操作说明2020.pdf</FONT></A></DIV></FONT>
<DIV><FONT face=Arial><FONT color=#000000><FONT size=3></FONT></FONT><FONT color=#ff0000><FONT color=#111111><FONT style="BACKGROUND-COLOR: rgb(213,157,213)"></FONT></FONT></FONT></FONT>&nbsp;</DIV></DIV><FONT color=#ff0000><FONT color=#111111><FONT style="BACKGROUND-COLOR: rgb(213,157,213)">
<DIV><FONT color=#1a6be6><FONT style="BACKGROUND-COLOR: rgb(255,255,255)"><FONT size=3><FONT face=Arial><B>咨询电话：</B><B></B></FONT></FONT></FONT></FONT></DIV>
<DIV><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" size=3 face=Arial>校外网络登录问题，请致电信息化技术中心：62784859</FONT></DIV>
<DIV><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" size=3 face=Arial>选课问题，请致电注册中心：62794721，62787169</FONT></DIV>
<DIV><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" size=3 face=Arial>培养方案问题，请致电所在院系研究生办公室</FONT></DIV>
<DIV><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV><FONT color=#1a6be6><FONT style="BACKGROUND-COLOR: rgb(255,255,255)"><FONT size=3><FONT face=Arial><B>选课须知：</B><B></B></FONT></FONT></FONT></FONT></DIV>
<DIV><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" size=3 face=Arial>研究生选课需先行制定个人培养计划，方可进行选课。</FONT></DIV></FONT></FONT></FONT>
<DIV><FONT color=#ff0000><FONT color=#111111><FONT style="BACKGROUND-COLOR: rgb(213,157,213)"></FONT></FONT></FONT><FONT style="BACKGROUND-COLOR: rgb(255,255,255)" color=#000000 size=3 face=Arial>-------------------------------------------------------------------------</FONT></DIV>
<P><FONT size=3><FONT face=Arial>每学期<STRONG><FONT color=#0000ff>选课时间安排</FONT></STRONG>可在教学门户(</FONT><SPAN><FONT size=3 face=Arial>&nbsp;</FONT></SPAN></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="http://academic.tsinghua.edu.cn/"><FONT size=3 face=Arial>http://academic.tsinghua.edu.cn</FONT></A><FONT size=3><FONT face=Arial><SPAN><FONT size=3 face=Arial>&nbsp;</FONT></SPAN>)首页的“选课专栏”中查看，也可关注“学在清华”教务处官方微信。</FONT></FONT></P>
<P><FONT size=3><FONT face=Arial>新学期<STRONG><FONT color=#0000ff>课程开课信息查询</FONT></STRONG>方法详见</FONT><SPAN><FONT size=3 face=Arial>&nbsp;</FONT></SPAN></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="/jwcbg/detail_cat.jsp?boardid=57&amp;seq=4424"><FONT size=3 face=Arial>课程信息查询方法介绍</FONT></A></P>
<P><FONT size=3 face=Arial>&nbsp;注册中心<BR>&nbsp;2020年9月14日</FONT></P></DIV></TD></TR></TBODY></TABLE></td>
                </tr>
                <tr>
                  <td height="30" colspan="4"></td>
                </tr>
            </table>

						  </td>
                        </tr>
                        <tr>
                          <td  height="8"></td>
                        </tr>
                    </table>

                    <table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                          <td height="9"></td>
                        </tr>
                    </table></td>
                </tr>
          </table>
                              		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
  <tr align="center">
   <td width="10%"></td>
                  <td colspan="2" width=75% align=right>
                <A
            href="javascript:shutwin();" ><font color="#0066cc">【关闭窗口】</font></A></td>
  </tr>
  <tr>
    <td height="10" colspan="4"></td>
    </tr>
</table>
        <br>


    </div></td>
  </tr>
</table>

<script language="javascript">

function chuanold(oldid,nrid)
{
 document.forms[0].oldseq.value=oldid;
 document.forms[0].temp_content.value=nrid;
}

</script>

<table width="992" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
    <td height="3" background="/jwcbg/images/bg_ban_wdh.gif" bgcolor="#1C82D1"></td>
  </tr>
  <tr>
    <td height="24" bgcolor="#B1DDFF"><div align="center">版权所有：清华大学教务处&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 技术支持：信息化技术中心</div></td>
  </tr>

</table>

</body>
</html>
`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312993, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `










<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>教务处办公信息系统</title>
<link href="/jwcbg/css/index.css" rel="stylesheet" type="text/css">

<style type="text/css">
<!--
body {
	background-color: #EFEFEF;
}
-->
</style></head>

<body background="images/1_r7_c2.gif" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="992" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="98" background="/jwcbg/images/ban_wdh.gif" bgcolor="#FFFFFF"></td>
  </tr>
  <tr>
    <td height="4" background="/jwcbg/images/bg_ban_wdh.gif" bgcolor="1C82D1"></td>
  </tr>
</table>

<table width="992" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td valign="top"><div align="center"><br><table width="992" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td> <td width="60">&nbsp;</td>
  </tr>
</table>
		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
			  <tr>                
             <td >
             	<div align="center" class="TD4">本科生补退选时间安排（2020-2021秋）</div>
             	</td>
  </tr>
  <tr>
    <td height="10" colspan="4"></td>
    </tr>
</table>
		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
			 <tr >
              <td align=center>
                  	【分类: 注册中心】&nbsp;&nbsp;【发布时间: 2020-09-14】&nbsp;&nbsp;【访问计数:2463】
                  			
                  			</td>
                 
  </tr>
			  <tr >               
             <td align="right">
                    <SCRIPT language=JavaScript type=text/JavaScript>
							function shutwin(){
							window.close();
							return;}
					  </SCRIPT>
                    &nbsp;&nbsp;<A
            href="javascript:shutwin();" ><font color="#0066cc">【关闭窗口】</font></A></td>
  </tr>
</table>
      <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="#F2F2F2" style="border-left:#B7B6B6 1px solid;border-right:#B7B6B6 1px solid;border-top:#B7B6B6 1px solid;border-bottom:#B7B6B6 1px solid;"><table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tr>
                        <td height="9"></td>
                      </tr>
                    </table>
                      <table width="98%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>

			    <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                           
              <tr>
                <td height="15" ></td>
              </tr>
            </table>
              <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="4"><P>&nbsp;</P>
<P>
<TABLE style='FONT-FAMILY: 宋体, "Times New Roman", Arial; WORD-SPACING: 0px; TEXT-TRANSFORM: none; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' cellSpacing=0 cellPadding=0 width="90%" align=center border=0>
<TBODY>
<TR>
<TD style="FONT-SIZE: 12px; COLOR: rgb(0,0,0); LINE-HEIGHT: 20px" colSpan=4>
<DIV align=left>
<TABLE style='FONT-FAMILY: 宋体, "Times New Roman", Arial; WORD-SPACING: 0px; TEXT-TRANSFORM: none; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' cellSpacing=0 cellPadding=0 width="90%" align=left border=0>
<TBODY>
<TR>
<TD style="FONT-SIZE: 12px; COLOR: rgb(0,0,0); LINE-HEIGHT: 20px" colSpan=4>
<TABLE style='FONT-FAMILY: 宋体, "Times New Roman", Arial; WORD-SPACING: 0px; TEXT-TRANSFORM: none; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' cellSpacing=0 cellPadding=0 width="90%" align=center border=0>
<TBODY>
<TR>
<TD style="FONT-SIZE: 12px; COLOR: rgb(0,0,0); LINE-HEIGHT: 20px" colSpan=4>
<DIV align=left><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; COLOR: black"><SPAN style="BORDER-LEFT-WIDTH: 0px; FONT-SIZE: 18px; FONT-FAMILY: inherit; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; PADDING-RIGHT: 0px; BORDER-TOP-WIDTH: 0px; text-size-adjust: none"><STRONG><FONT style="BACKGROUND-COLOR: rgb(255,255,170)" color=#333333 size=3 face=Arial><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="http://announce.cic.tsinghua.edu.cn/node/26951">2020-2021 Autumn Semester Undergraduates Course Registration Calendar</A></FONT></STRONG></SPAN></SPAN></DIV>
<DIV align=left><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: 宋体; COLOR: black"><SPAN style="BORDER-LEFT-WIDTH: 0px; FONT-SIZE: 18px; FONT-FAMILY: inherit; BORDER-RIGHT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; PADDING-LEFT: 0px; MARGIN: 0px; PADDING-RIGHT: 0px; BORDER-TOP-WIDTH: 0px; text-size-adjust: none"><STRONG><FONT style="BACKGROUND-COLOR: rgb(255,255,170)" color=#333333></FONT></STRONG></SPAN></SPAN>&nbsp;</DIV>
<DIV align=left><FONT color=#000000>
<DIV><FONT size=3 face=Arial>-----------------------------------------------------------------------------</FONT></DIV></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=center><FONT color=#a91313 size=3 face=Arial><STRONG>关于本科生一年级至三年级实行选课学分限制的通知</STRONG></FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=center><STRONG><FONT color=#ff0000 size=3 face=Arial></FONT></STRONG>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT color=#000000 size=3 face=Arial>&nbsp;&nbsp;&nbsp; 根据学校关于学风建设的指导意见，倡导学生加强深度学习，提高学习质量，本科生每学期选修的学分数应适当有所限制，如果超过一定标准需要通过班主任等院系相关负责教师把关批准后才可突破。自2020-2021学年度秋季学期开始，本科生一年级至三年级学生每学期的选课学分实行上限控制，学生应在选课学分限制范围内进行选课。具体规则如下：<BR>1、选课学分限制标准。本科一年级每学期选课学分不超过26学分；本科二、三年级每学期选课学分不超过30学分；四年级及以上年级本科生没有选课学分限制。<BR>2、课程范围。必修、限选、任选课程的选课受选课学分限制，其总学分不得超过学分限制标准。重修课和体育课的选课不受选课学分限制。<BR>3、确有特殊原因需要超过学分限制选课的学生，可在网上申请特批学分，由学生所在班级的班主任审批通过后，方可继续选课。<BR>4、特批学分申请方法。<BR>&nbsp;&nbsp;(1) 特批学分申请入口：登录本科生选课系统，在“选课操作”列表中点击“特批学分申请”，即可进入申请页面。<BR>&nbsp; (2) 特批学分申请开放时间：与本科生预选同时开始，至开学后第二周周五结束。</FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT color=#000000 size=3 face=Arial></FONT>&nbsp;</DIV><FONT color=#000000 size=3 face=Arial>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial>-----------------------------------------------------------------------------</FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=center><FONT color=#0000ff size=3><STRONG>2020-2021秋季学期 本科生补退选时间安排</STRONG></FONT></DIV></FONT>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT color=#000000 size=3 face=Arial><FONT size=3 face=Arial></FONT></FONT>&nbsp;</DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV align=left><FONT face=Arial><FONT size=3><STRONG>补退选（第一阶段）：<FONT color=#000000><U>9月14日（周一）13:00&nbsp;-- 9月21日（周一）<FONT color=#ff0000>8:00</FONT></U></FONT></STRONG></FONT></FONT></DIV>
<DIV align=left><FONT face=Arial><FONT size=3>* 所有课程均可选可删，先选先得，<FONT color=#000000>实行Waiting List方案</FONT></FONT></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial>* 北京大学通识核心课开放选课，详见《<A style='FONT-SIZE: 12px; TEXT-DECORATION: none; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px' href="/jwcbg/detail_cat.jsp?boardid=57&amp;seq=7615"><FONT color=#0000ff size=3 face=Arial>关于北京大学部分通识核心课面向我校本科生开放选课的通知</FONT></A><FONT style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial" size=3 face=Arial>》，北大课程的学习按照北大的教学安排进行。</FONT></FONT></DIV>
<DIV align=left><STRONG><FONT color=#ff0000 size=3 face=Arial>* 一至三年级实行选课学分限制</FONT></STRONG></DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV align=left><FONT face=Arial><FONT size=3><STRONG>英语水平考试报名：</STRONG><STRONG><U>9月14日（周一）13:00&nbsp;-- 9月21日（周一）<FONT color=#ff0000>8:00</FONT></U></STRONG></FONT></FONT></DIV>
<DIV align=left><FONT color=#ff0000 size=3 face=Arial><FONT color=#000000><STRONG>*</STRONG><SPAN style="FONT-SIZE: 12px; FONT-FAMILY: Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FLOAT: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; DISPLAY: inline !important; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial">&nbsp;</SPAN></FONT><FONT style="FONT-FAMILY: Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial" size=3>英语水平考试时间另行通知</FONT></FONT></DIV>
<DIV align=left><U><FONT color=#ff0000 size=3 face=Arial></FONT></U>&nbsp;</DIV>
<DIV align=left><FONT face=Arial><FONT size=3><STRONG>实验课二级选课（第二次）：</STRONG><STRONG><U>9月14日（周一）13:00&nbsp;-- 9月21日（周一）<FONT color=#ff0000>8:00</FONT></U></STRONG></FONT></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV align=left><FONT size=3 face=Arial>-----------------------------------------------------------------------------</FONT></DIV>
<DIV align=left><FONT size=3><STRONG><FONT face=Arial></FONT></STRONG></FONT>&nbsp;</DIV>
<DIV align=left><FONT size=3><STRONG><FONT face=Arial>补退选（第二阶段）：<U>9月21日（周一）13:00&nbsp;-- 9月25日（周五）16:00</U></FONT></STRONG></FONT></DIV>
<DIV align=left><FONT face=Arial><FONT size=3>*<FONT color=#000000>&nbsp;体育课程不可选，亦不可删</FONT></FONT></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial>* 其他课程均不可选课，只允许删除已选课程，所删课程不记录在成绩单上</FONT></DIV>
<DIV align=left>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT face=Arial><FONT size=3><STRONG>重补修体育课分项II：</STRONG><STRONG><U>9月21日（周一）13:00&nbsp;-- 9月24日（周四）16:00</U></STRONG></FONT></FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial>* 已选重补修体育课的同学，须上网进一步选择有余量的体育课，确定上课时间及课项</FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial>* <FONT size=3><FONT face=Arial>操作详见：</FONT><A style='FONT-SIZE: 12px; TEXT-DECORATION: none; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px' href="/jwcbg/detail_cat.jsp?boardid=57&amp;seq=6378"><FONT color=#0000ff size=3 face=Arial>体育课重补修分项系统操作说明</FONT></A></FONT><BR class=Apple-interchange-newline></FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT face=Arial><FONT size=3><STRONG>网上申请特殊原因补选：</STRONG><STRONG><U>9月21日（周一）13:00&nbsp;-- 9月25日（周五）17:00</U></STRONG></FONT></FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><STRONG><FONT color=#ff0000 size=3 face=Arial>* 一至三年级实行选课学分限制</FONT></STRONG><SPAN style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; COLOR: rgb(0,0,0); FONT: 10.5pt/16px 宋体; WIDOWS: 1; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px"><FONT color=#000000><BR><FONT size=3 face=Arial>*<FONT size=3><FONT face=Arial><SPAN>&nbsp;</SPAN><IMG border=0 src="/editor_new/sysimage/file/doc.gif"></FONT></FONT></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="/download.jsp?attachSeq=3332"><FONT color=#0000ff size=3 face=Arial>网上特殊原因补选课申请审批系统规则及操作说明（学生篇）.doc</FONT></A></FONT></SPAN></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial>-----------------------------------------------------------------------------</FONT></DIV>
<DIV style='FONT-SIZE: 12px; FONT-FAMILY: 宋体, "Times New Roman", Arial; WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FONT-WEIGHT: 400; COLOR: rgb(0,0,0); FONT-STYLE: normal; ORPHANS: 2; WIDOWS: 2; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; font-variant-ligatures: normal; font-variant-caps: normal; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial' align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV></DIV>
<DIV align=left><FONT face=Arial><FONT size=3>
<DIV align=left><FONT size=3 face=Arial>-----------------------------------------------------------------------------</FONT></DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV></FONT></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial><FONT face=Arial><FONT size=3><FONT color=#1a6be6><STRONG>浏览器要求：</STRONG></FONT>选课系统适用于谷歌chrome浏览器、IE浏览器。使用其他浏览器进行选退课操作，有可能出现异常情况导致选退课失败。</FONT></FONT> 
<DIV align=left><FONT size=3 face=Arial>&nbsp;</FONT> 
<DIV><FONT color=#1a6be6><FONT face=Arial><FONT size=3><B>选课登录入口</B>：</FONT></FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial>清华大学信息门户（</FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="http://info.tsinghua.edu.cn/"><FONT color=#0066cc size=3 face=Arial>http://info.tsinghua.edu.cn</FONT></A><FONT size=3 face=Arial>），选课系统分为中、英文两种语言，同学们可选择其中一种语言进入选课系统。</FONT></DIV>
<DIV><FONT size=3 face=Arial></FONT>&nbsp;</DIV></DIV>
<DIV align=left>
<DIV><FONT color=#1a6be6><FONT face=Arial><FONT size=3><B>校外网络登录信息门户的方法：（请使用电脑进行选课，不建议使用手机）</B><B></B></FONT></FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial>使用校外网络选课，需先打开信息门户info.tsinghua.edu.cn，访问页面有两个登录入口：</FONT></DIV>
<DIV><FONT face=Arial><FONT size=3><STRONG>入口一（推荐）</STRONG>：“WebVPN登录入口”，输入账号密码后可选择 “选课系统”或“Course Registration”进入选课系统。</FONT></FONT></DIV>
<DIV><FONT face=Arial><FONT size=3><STRONG>入口二</STRONG>：“SSL VPN登录入口”：输入账号密码后需使用“客户端应用程序会话”方式，连接成功后再登录信息门户。不要点击“web书签”中的信息门户链接！</FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial><IMG border=0 src="/editor_new/sysimage/file/pdf.gif"></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="/download.jsp?attachSeq=3333"><FONT color=#0000ff size=3 face=Arial>关于校外选课的网络操作说明2020.pdf</FONT></A></DIV>
<DIV><FONT size=3 face=Arial></FONT><FONT color=#000000><FONT color=#1a6be6><B></B></FONT></FONT>&nbsp;</DIV></DIV><FONT color=#000000></FONT>
<DIV><FONT color=#000000>
<DIV><FONT color=#1a6be6><FONT face=Arial><FONT size=3><B>咨询电话：</B><B></B></FONT></FONT></FONT></DIV>
<DIV><FONT size=3 face=Arial>校外网络登录问题，请致电信息化技术中心：62784859</FONT></DIV>
<DIV><FONT size=3 face=Arial>选课问题，请致电注册中心：62794721，62787169</FONT></DIV></FONT></DIV></FONT></DIV>
<DIV align=left>
<DIV align=left>
<DIV align=left>
<DIV align=left>
<DIV align=left>
<DIV align=left><FONT face=Arial><FONT size=3></FONT></FONT>&nbsp;</DIV>
<DIV align=left><FONT face=Arial><FONT size=3>-----------------------------------------------------------------------------</FONT></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV></DIV></DIV></DIV></DIV></DIV>
<DIV align=left><FONT face=Arial><FONT size=3>每学期<B>选课时间安排</B>可在教学门户(</FONT></FONT><FONT size=3 face=Arial><SPAN>&nbsp;</SPAN></FONT><A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="http://academic.tsinghua.edu.cn/"><FONT size=3 face=Arial>http://academic.tsinghua.edu.cn</FONT></A><FONT face=Arial><FONT size=3><SPAN><FONT size=3 face=Arial>&nbsp;</FONT></SPAN>)首页的“选课专栏”中查看，也可关注“学在清华”教务处官方微信。</FONT></FONT></DIV>
<DIV align=left><FONT size=3 face=Arial></FONT>&nbsp;</DIV>
<DIV align=left><FONT face=Arial><FONT size=3>新学期<B>课程开课信息查询</B>方法详见《<A style="TEXT-DECORATION: none; COLOR: rgb(0,0,0)" href="/jwcbg/detail_cat.jsp?boardid=57&amp;seq=4424"><FONT color=#0033ff size=3 face=Arial>开课信息查询方法介绍》</FONT></A> 
<DIV align=left><U><FONT size=3></FONT></U>&nbsp;</DIV><FONT face=Arial><FONT size=3><U><IMG src="/UploadFile/a/8/2b02fc0b89a31c1e318eff53f5b5438a.jpg" width=254 height=157></U>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</FONT></FONT></FONT></FONT><FONT face=Arial><FONT size=3><SPAN>&nbsp;</SPAN><IMG style="HEIGHT: 155px; WIDTH: 140px" src="/UploadFile/7/2/16238b7c1ac6863198e537ee570dd727.jpg" width=159 height=187></FONT></FONT></DIV>
<DIV align=left>&nbsp;</DIV>
<DIV align=left>&nbsp;</DIV>
<DIV align=left><FONT size=3 face=Arial>&nbsp;注册中心</FONT></DIV>
<DIV align=left><FONT size=3 face=Arial>2020年9月14日</FONT></DIV></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></DIV></TD></TR></TBODY></TABLE></P></td>
                </tr>
                <tr>
                  <td height="30" colspan="4"></td>
                </tr>
            </table>
						  
						  </td>
                        </tr>
                        <tr>
                          <td  height="8"></td>
                        </tr>
                    </table>

                    <table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                          <td height="9"></td>
                        </tr>
                    </table></td>
                </tr>
          </table>
                              		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
  <tr align="center">
   <td width="10%"></td>
                  <td colspan="2" width=75% align=right>
                <A
            href="javascript:shutwin();" ><font color="#0066cc">【关闭窗口】</font></A></td>
  </tr>
  <tr>
    <td height="10" colspan="4"></td>
    </tr>
</table>
        <br>


    </div></td>
  </tr>
</table> 

<script language="javascript">

function chuanold(oldid,nrid)
{
 document.forms[0].oldseq.value=oldid;
 document.forms[0].temp_content.value=nrid;
}

</script>

<table width="992" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
    <td height="3" background="/jwcbg/images/bg_ban_wdh.gif" bgcolor="#1C82D1"></td>
  </tr>
  <tr>
    <td height="24" bgcolor="#B1DDFF"><div align="center">版权所有：清华大学教务处&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 技术支持：信息化技术中心</div></td>
  </tr>

</table>

</body>
</html>
    
`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312994, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `










<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>教务处办公信息系统</title>
<link href="/jwcbg/css/index.css" rel="stylesheet" type="text/css">

<style type="text/css">
<!--
body {
	background-color: #EFEFEF;
}
-->
</style></head>

<body background="images/1_r7_c2.gif" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="992" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="98" background="/jwcbg/images/ban_wdh.gif" bgcolor="#FFFFFF"></td>
  </tr>
  <tr>
    <td height="4" background="/jwcbg/images/bg_ban_wdh.gif" bgcolor="1C82D1"></td>
  </tr>
</table>

<table width="992" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td valign="top"><div align="center"><br><table width="992" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td> <td width="60">&nbsp;</td>
  </tr>
</table>
		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
			  <tr>                
             <td >
             	<div align="center" class="TD4">2020-2021学年秋季学期SRT立项通知</div>
             	</td>
  </tr>
  <tr>
    <td height="10" colspan="4"></td>
    </tr>
</table>
		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
			 <tr >
              <td align=center>
                  	【分类: 实践教学办公室】&nbsp;&nbsp;【发布时间: 2020-09-14】&nbsp;&nbsp;【访问计数:1485】
                  			
                  			</td>
                 
  </tr>
			  <tr >               
             <td align="right">
                    <SCRIPT language=JavaScript type=text/JavaScript>
							function shutwin(){
							window.close();
							return;}
					  </SCRIPT>
                    &nbsp;&nbsp;<A
            href="javascript:shutwin();" ><font color="#0066cc">【关闭窗口】</font></A></td>
  </tr>
</table>
      <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td bgcolor="#F2F2F2" style="border-left:#B7B6B6 1px solid;border-right:#B7B6B6 1px solid;border-top:#B7B6B6 1px solid;border-bottom:#B7B6B6 1px solid;"><table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tr>
                        <td height="9"></td>
                      </tr>
                    </table>
                      <table width="98%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                        <tr>
                          <td>&nbsp;</td>
                        </tr>
                        <tr>
                          <td>

			    <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                           
              <tr>
                <td height="15" ></td>
              </tr>
            </table>
              <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="4"><DIV align=center><FONT size=3>2020-2021学年秋季学期SRT立项通知</FONT></DIV>
<DIV align=center>&nbsp;</DIV>
<DIV align=left><FONT size=3></FONT></DIV>
<DIV align=left><FONT size=3>&nbsp;&nbsp;&nbsp;2020-2021学年秋季学期SRT立项申请工作现已开始，根据SRT管理办法，本学期SRT立项申请只有1个批次，SRT报名也只有1次。每批次立项中，每位教师立项不超过2项，每位学生立项不超过1项。本次立项申请时间为9月14日至<FONT face="Times New Roman, serif">9</FONT>月<FONT face="Times New Roman, serif">27</FONT>日，请老师或同学使用工作证号或学号登录清华大学信息门户（http://info.tsinghua.edu.cn/），在系统开放期间申请立项。</FONT></DIV>
<DIV align=left><FONT size=3></FONT>&nbsp;</DIV>
<DIV align=left><FONT size=3>&nbsp;&nbsp;&nbsp;&nbsp;学生立项项目务必请指导教师在9月28日至9月30日进行导师审核。</FONT></DIV>
<DIV align=left><FONT size=3>&nbsp;&nbsp;&nbsp;&nbsp;申请过程中如有问题，请联系教务处实践办62785589。</FONT></DIV>
<DIV align=right><FONT size=3>教务处实践办</FONT></DIV>
<DIV align=right><FONT size=3>2020年9月14日</FONT></DIV></td>
                </tr>
                <tr>
                  <td height="30" colspan="4"></td>
                </tr>
            </table>
						  
						  </td>
                        </tr>
                        <tr>
                          <td  height="8"></td>
                        </tr>
                    </table>

                    <table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                          <td height="9"></td>
                        </tr>
                    </table></td>
                </tr>
          </table>
                              		<table width="90%" border="0" cellspacing="0" cellpadding="0" >
  <tr align="center">
   <td width="10%"></td>
                  <td colspan="2" width=75% align=right>
                <A
            href="javascript:shutwin();" ><font color="#0066cc">【关闭窗口】</font></A></td>
  </tr>
  <tr>
    <td height="10" colspan="4"></td>
    </tr>
</table>
        <br>


    </div></td>
  </tr>
</table> 

<script language="javascript">

function chuanold(oldid,nrid)
{
 document.forms[0].oldseq.value=oldid;
 document.forms[0].temp_content.value=nrid;
}

</script>

<table width="992" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
    <td height="3" background="/jwcbg/images/bg_ban_wdh.gif" bgcolor="#1C82D1"></td>
  </tr>
  <tr>
    <td height="24" bgcolor="#B1DDFF"><div align="center">版权所有：清华大学教务处&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 技术支持：信息化技术中心</div></td>
  </tr>

</table>

</body>
</html>

`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312995, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
 






<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>清华大学</title>
		<style type="text/css">
<!--
@import url("/template/css/default.css");
@import url("/css/detail.css");
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-image: url(/images/bg.gif);
}
-->
</style>

<style type="text/css">
<!--
body {
	background-color: #EFEFEF;
}
-->
</style></head>

<!-- 得到请求参数 -->




	

	
<!-- 得到infoColumnVo -->


<!-- 得到参数VO -->

 

  <!-- 文档计数+1 -->






<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">




	<div align="center">
			<table cellpadding="0" cellspacing="0"><tr><td>
		<P><IMG height=141 src="/UploadFile/6/6/73683f6c56b5e72ba11504bec882d266.gif" width=776 border=0></P>

		</td></tr></table>
	</div>
<table width="776" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td valign="top"><div align="center">
        <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="90%"  valign="top"><br>
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">   
              <tr>
                <td height="35"><div align="left">  当前位置： 
                  
                  
                  
                  
                  
                  
                  	
                  		首页
                  		<script>document.title='首页';</script>
                  	
                  	
                  
                  
                  
                  	
                  	
                  &gt;&gt; <a href="/docinfo/board1/boardlist.jsp?columnId=xtw01&parentColumnId=xtw">办公通知</a>
                  	
                  
                  
                  
                </td>
              </tr>              
            </table>
            
            
             
			<table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td height="35">
                <div align="center" class="TD1">
                     <font color="">
                     第二十二届清华大学创业大赛参赛报名通知
                     </font>
                     
                 </div></td>
              </tr>              
              <tr>
                <td height="15" align="center">
                【发布时间:2020-09-17】&nbsp;&nbsp;
                  【访问计数:566】	
                </td>
              </tr>
            </table>
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="4"><P class=MsoNormalCxSpFirst style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; TEXT-ALIGN: center; BORDER-RIGHT-STYLE: none; MARGIN: 6pt 0cm; LINE-HEIGHT: 150%; mso-add-space: auto; mso-para-margin-top: .5gd; mso-para-margin-right: 0cm; mso-para-margin-bottom: .5gd; mso-para-margin-left: 0cm; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm" align=center><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 16pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 黑体; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 11.0pt; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-bidi-theme-font: minor-bidi'>第二十二届清华大学创业大赛参赛报名通知</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 16pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 11.0pt; mso-bidi-theme-font: minor-bidi; mso-fareast-font-family: 黑体'><?xml:namespace prefix = "o" ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></SPAN></P>
<P class=MsoNormalCxSpMiddle style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>清华大学创业大赛是由清华大学团委主办，清华大学学生创业协会以及清华创</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>+</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>创业教育与服务平台承办的校级创业比赛，是清华大</SPAN><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 仿宋; mso-font-kerning: 0pt">学实践创新创</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>业教育、培养创新创业人</SPAN><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 仿宋; mso-font-kerning: 0pt">才、培养优质创业团队的重要平</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>台。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>1998</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>年，清华大学学生创业协会举办了亚洲范围内首个高校大学生创业计划大赛；</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>1999</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>年，比赛推向全国，成为首届“挑战杯”中国大学生创业计划竞赛。此后比赛经过不断发展，紧跟清华大学创新创业教育要求，定名为清华大学创业大赛，参赛项目涉及信息、通信、能源、制造、交通、金融、快消等多个行业。数以千计的清华学子在大赛中获得了创新创业素养提升，众多杰出团队积极投身市场，并发展成为视美乐、中文在线、慧点科技等知名企业。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>为进一步培养和提高学生创意、创新、创业的意识和能力，引导和激励学生将所学知识与经济社会发展紧密结合、提升创业实践技能，第二十二届清华大学创业大赛定于</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>2020</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>年</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>9</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>月至</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>12</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>月期间举办。大赛设创业实践组、公益创业组和</SPAN><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 仿宋; mso-font-kerning: 0pt">创业企划组</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>等多条赛道，分组进行赛事报名、资格审核、实践指导、路演培训、初赛决赛、评奖与后期资源支持等工作，详情参见《第二十二届清华大学创业大赛章程》。参赛资格与报名方式等说明如下：</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm; mso-outline-level: 1"><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 黑体; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 18.0pt; mso-bidi-font-weight: bold; mso-bidi-font-family: 宋体; mso-font-kerning: 18.0pt; mso-ascii-theme-font: major-fareast; mso-fareast-theme-font: major-fareast; mso-hansi-theme-font: major-fareast">一、参赛资格<SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>凡成员含有清华大学在读的本科生、研究生（含国际学生和交换生）、在职教师或毕业三年内校友的团队，均可以团队形式报名参加本届大赛。处于创业实践阶段的项目，团队中清华大学学生、教师或校友所占总股份不得少于</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>30%</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>。各参赛团队应根据项目及团队的具体情况，申报对应组别参与比赛。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm; mso-outline-level: 1"><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 黑体; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 18.0pt; mso-bidi-font-weight: bold; mso-bidi-font-family: 宋体; mso-font-kerning: 18.0pt; mso-ascii-theme-font: major-fareast; mso-fareast-theme-font: major-fareast; mso-hansi-theme-font: major-fareast">二、参赛要求<SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>本届大赛面向团队展开报名，团队参赛项目需处于天使轮融资及之前规模，其中：</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>（</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>）拥有或授权拥有产品或服务，并已经在工商、民政等政府部门注册登记为企业、个体工商户、民办非企业单位等组织形式，且符合参赛资格的项目，可申报【创业实践组】。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>（</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>2</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>）拥有或授权拥有产品或服务，具有创业性、非营利性、实践性，已系统性开展相关公益志愿活动，旨在成立非营利性组织或兼顾社会价值的营利性企业，符合《第二十二届清华大学创业大赛公益创业赛参赛指南》（附件二）中相关要求的公益创业类项目，可申报【公益创业组】。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>（</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>3</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>）拥有创新创业想法及计划，或从产业挖掘潜在需求引导技术创新的团队，项目已具备实施创业基本条件，但未在工</SPAN><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 仿宋; mso-font-kerning: 0pt">商、民政等政府部门注册登记为企</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>业、个体工</SPAN><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 仿宋; mso-font-kerning: 0pt">商户、民办非企业单位等组织形式，可申报【创业企划组</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>】。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm; mso-outline-level: 1"><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 黑体; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 18.0pt; mso-bidi-font-weight: bold; mso-bidi-font-family: 宋体; mso-font-kerning: 18.0pt; mso-ascii-theme-font: major-fareast; mso-fareast-theme-font: major-fareast; mso-hansi-theme-font: major-fareast">三、奖励信息<SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>【创业实践组】将决出：</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>金奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，银奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，铜奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，优胜奖若干名。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>【公益创业组】将决出：</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>金奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，银奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，铜奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，优胜奖若干名。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>【</SPAN><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 仿宋; mso-font-kerning: 0pt">创业企划组</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>】将决出：</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>金奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，银奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，铜奖</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>名，优胜奖若干名。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=1 style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>获奖团队将获得一定数额的奖金，并在赛事结束后有机会入驻清华创</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>+</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>创业教育与服务平台，根据后续运营情况获得清华大学创</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'>+</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>种子基金支持。创业大赛与校友三创大赛对接，获奖优秀团队后续将有机会直接晋级参加第六届校友三创大赛，并获得成果转化落地等相应资源支持。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm; mso-outline-level: 1"><SPAN style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 黑体; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 18.0pt; mso-bidi-font-weight: bold; mso-bidi-font-family: 宋体; mso-font-kerning: 18.0pt; mso-ascii-theme-font: major-fareast; mso-fareast-theme-font: major-fareast; mso-hansi-theme-font: major-fareast">四、报名方式<SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>（</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>）报名材料</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>1</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>、报名表（附件三）。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>2</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>、报名【创业实践组】的项目需提交营业执照复印件或照片等注册证明。</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>（</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>2</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>）提交方式</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>申请参赛的团队请于</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>2020</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>年</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>10</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>月</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>11</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>日</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>24:00</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>前，将报名材料电子版发送至：</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>chuangye@mail.tsinghua.edu.cn</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>，邮件命名为：【第二十二届清华大学创业大赛报名】</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>_</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>参赛组别</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>_</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑; mso-font-kerning: 0pt'>项目名称</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-family: 微软雅黑; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN lang=EN-US style="BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 黑体; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-bidi-font-size: 18.0pt; mso-bidi-font-weight: bold; mso-bidi-font-family: 宋体; mso-font-kerning: 18.0pt; mso-ascii-theme-font: major-fareast; mso-fareast-theme-font: major-fareast; mso-hansi-theme-font: major-fareast"><o:p>&nbsp;</o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><FONT size=4><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'>联系人：</SPAN><SPAN lang=EN-AU style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'><o:p></o:p></SPAN></FONT></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><FONT face="Times New Roman"><FONT size=4><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'>段娅楠</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'> <FONT size=6><SPAN style="mso-spacerun: yes">&nbsp;</SPAN></FONT><SPAN lang=EN-AU><FONT size=4>18810889005<SPAN style="mso-spacerun: yes">&nbsp; </SPAN>duanyn17@mails.tsinghua.edu.cn<o:p></o:p></FONT></SPAN></SPAN></FONT></FONT></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><FONT face="Times New Roman"><FONT size=4><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'>王云飞</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'> <SPAN style="mso-spacerun: yes">&nbsp;</SPAN><SPAN lang=EN-AU><FONT size=4>18811395216 <SPAN style="mso-spacerun: yes">&nbsp;</SPAN>wangyunf20@mails.tsinghua.edu.cn<o:p></o:p></FONT></SPAN></SPAN></FONT></FONT></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><FONT face="Times New Roman"><FONT size=4><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'>刘隽甫</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'> <SPAN lang=EN-AU><FONT size=4><SPAN style="mso-spacerun: yes">&nbsp;</SPAN>18810775696<SPAN style="mso-spacerun: yes">&nbsp; </SPAN>liujunfu96@163.com<o:p></o:p></FONT></SPAN></SPAN></FONT></FONT></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm"><SPAN lang=EN-AU style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt; mso-ansi-language: EN-AU'><o:p>&nbsp;</o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; TEXT-ALIGN: right; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm" align=right><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>共青团清华大学委员会</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; TEXT-ALIGN: right; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm" align=right><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>清华大学学生创业协会</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; TEXT-ALIGN: right; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm" align=right><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>清华创</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>+</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>创业教育与服务平台</SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; TEXT-ALIGN: right; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm" align=right><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'></SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>2020</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>年</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>9</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>月</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'>17</SPAN><SPAN style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: 仿宋; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>日</SPAN><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BORDER-TOP-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; TEXT-ALIGN: right; BORDER-RIGHT-STYLE: none; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-pagination: widow-orphan; mso-padding-alt: 0cm 0cm 0cm 0cm" align=right><SPAN lang=EN-US style='BORDER-TOP-STYLE: none; FONT-SIZE: 14pt; BORDER-LEFT-STYLE: none; FONT-FAMILY: "Times New Roman",serif; BORDER-BOTTOM-STYLE: none; COLOR: windowtext; BORDER-RIGHT-STYLE: none; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p><FONT face=宋体>&nbsp;</FONT></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: 仿宋; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: 微软雅黑'><FONT size=4 face="Times New Roman"><IMG border=0 src="/editor_new/sysimage/file/doc.gif"></FONT><A href="/download.jsp?attachSeq=15203"><FONT size=4 face="Times New Roman">附件一：第二十二届清华大学创业大赛章程-0917.doc</FONT></A></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: 仿宋; LINE-HEIGHT: 150%; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'></SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; LINE-HEIGHT: 150%; mso-fareast-font-family: 仿宋'><o:p><FONT size=4><IMG border=0 src="/editor_new/sysimage/file/doc.gif"></FONT><A href="/download.jsp?attachSeq=15204"><FONT size=4>附件二：第二十二届清华大学创业大赛公益创业组参赛指南-0917.doc</FONT></A></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 150%; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0"><FONT size=4 face="Times New Roman"><IMG border=0 src="/editor_new/sysimage/file/doc.gif"></FONT><A href="/download.jsp?attachSeq=15205"><FONT size=4 face="Times New Roman">附件三：第二十二届清华大学创业大赛报名表-0917.doc</FONT></A></P></td>
                </tr>
                <tr>
                  <td height="30" colspan="4"></td>
                </tr>
                <tr>
                  <td width="10%"></td>
                  <td colspan="2" width="75%" align="right">&nbsp;
                  </td>
                  <td width="15%" height="25" >
                    &nbsp;&nbsp;<A href="javascript:window.close()" ><font color="#0066cc">【关闭窗口】</font></A></td>
                </tr>
            </table></td>
        </tr>
      </table>
    </div></td>
  </tr>

   
<table width="776" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="5"><img src="/images/footer_top.jpg" width="776" height="5" /></td>
  </tr>
      <tr>
        <td height="29"><div align="center">
        <P align=center>共青团清华大学委员会&nbsp; 电话：62786244 <BR>传真：62797505&nbsp; Email：<A href="mailto:twinfo@tsinghua.edu.cn">twinfo@tsinghua.edu.cn</A></P>
	
        </div></td>
      </tr>
</table>
 
</table> 
</body>
</html>

`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312996, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
 






<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>清华大学</title>
		<style type="text/css">
<!--
@import url("/template/css/default.css");
@import url("/css/detail.css");
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-image: url(/images/bg.gif);
}
-->
</style>

<style type="text/css">
<!--
body {
	background-color: #EFEFEF;
}
-->
</style></head>

<!-- 得到请求参数 -->




	

	
<!-- 得到infoColumnVo -->


<!-- 得到参数VO -->

 

  <!-- 文档计数+1 -->






<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">




	<div align="center">
			<table cellpadding="0" cellspacing="0"><tr><td>
		<P><IMG height=141 src="/UploadFile/6/6/73683f6c56b5e72ba11504bec882d266.gif" width=776 border=0></P>

		</td></tr></table>
	</div>
<table width="776" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td valign="top"><div align="center">
        <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="90%"  valign="top"><br>
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">   
              <tr>
                <td height="35"><div align="left">  当前位置： 
                  
                  
                  
                  
                  
                  
                  	
                  		首页
                  		<script>document.title='首页';</script>
                  	
                  	
                  
                  
                  
                  	
                  	
                  &gt;&gt; <a href="/docinfo/board1/boardlist.jsp?columnId=xtw01&parentColumnId=xtw">办公通知</a>
                  	
                  
                  
                  
                </td>
              </tr>              
            </table>
            
            
             
			<table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td height="35">
                <div align="center" class="TD1">
                     <font color="">
                     清华大学“启·创”学生创业人才培育计划八期公开招募通知
                     </font>
                     
                 </div></td>
              </tr>              
              <tr>
                <td height="15" align="center">
                【发布时间:2020-09-17】&nbsp;&nbsp;
                  【访问计数:343】	
                </td>
              </tr>
            </table>
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="4"><P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 18pt; mso-pagination: widow-orphan" align=center><B><SPAN style='FONT-SIZE: 18pt; FONT-FAMILY: 宋体; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>清华大学</SPAN></B><B><SPAN lang=EN-US style='FONT-SIZE: 18pt; FONT-FAMILY: "Times New Roman",serif; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-fareast-font-family: 宋体; mso-font-kerning: 0pt'>“</SPAN></B><B><SPAN style='FONT-SIZE: 18pt; FONT-FAMILY: 宋体; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>启</SPAN></B><B><SPAN lang=EN-US style='FONT-SIZE: 18pt; FONT-FAMILY: "Times New Roman",serif; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-fareast-font-family: 宋体; mso-font-kerning: 0pt'>·</SPAN></B><B><SPAN style='FONT-SIZE: 18pt; FONT-FAMILY: 宋体; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>创</SPAN></B><B><SPAN lang=EN-US style='FONT-SIZE: 18pt; FONT-FAMILY: "Times New Roman",serif; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-fareast-font-family: 宋体; mso-font-kerning: 0pt'>”</SPAN></B><B><SPAN style='FONT-SIZE: 18pt; FONT-FAMILY: 宋体; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>学生创业人才培育计划八期公开招募通知</SPAN></B></P>
<P class=MsoNormal style="TEXT-ALIGN: center; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 18pt; mso-pagination: widow-orphan" align=center><B><SPAN style='FONT-SIZE: 18pt; FONT-FAMILY: 宋体; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'></SPAN></B><B><SPAN lang=EN-US style='FONT-SIZE: 18pt; FONT-FAMILY: "Times New Roman",serif; COLOR: #3172ca; mso-bidi-font-size: 12.0pt; mso-fareast-font-family: 宋体; mso-font-kerning: 0pt'><?xml:namespace prefix = "o" ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></SPAN></B>&nbsp;</P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>清华大学</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>·</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>创</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>学生创业人才培育计划（简称</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启创计划</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>）是在教务处和校团委共同承担的</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>国家大学生创新创业计划</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>” </SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>基础上发起并设立的人才培养计划。本计划紧密围绕清华</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>三位一体</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>的育人理念与</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>兴业之将</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>的育人目标，每年选拔一批具有创新创业精神与潜质的优秀学员，通过个性化匹配多方位资源，从创业人才成长的环境要素和环节要素着手，重实践、重实际、重实干，致力面向未来培养具有社会责任感、颠覆性创新思维和优秀商业意识的创新创业人才。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启创计划</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>于</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>2013</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>年开始实施，前七期共招收</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>220</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>余名学员，现启动第八期的选拔招募工作。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BACKGROUND: white; TEXT-ALIGN: left; MARGIN: 6pt 0cm 0pt; LINE-HEIGHT: 25pt; TEXT-INDENT: 30.05pt; mso-pagination: widow-orphan" align=left><B><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: 仿宋; COLOR: black; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>一、培养方案</SPAN></B><B><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; COLOR: black; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'> <SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></B></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启创计划</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>实行通识化培养和专业化培养环节设计。通识培养环节，关注学员基本创新创业素质培养和能力提升；专业培养环节，根据学员特定需求匹配导师和能力培养。学员将接受包括创业课程、项目拓展、创业实践、创业实训与学员考核五个模块培养，共</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>15</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>个培养环节。详见附件一：《</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>·</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>创</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>学生创业人才培育计划第八期培养方案》。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BACKGROUND: white; TEXT-ALIGN: left; MARGIN: 6pt 0cm 0pt; LINE-HEIGHT: 25pt; TEXT-INDENT: 30.05pt; mso-pagination: widow-orphan" align=left><B><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: 仿宋; COLOR: black; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>二、申请要求</SPAN></B><B><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; COLOR: black; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'> <SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></B></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>1. </SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>大二年级以上本科生、研究生（毕业年级需获得本校推荐免试攻读研究生资格）；</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>2. </SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>具有强烈的社会责任感、创新意识和创业热情；</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>3. </SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>具有从事创业活动的意愿；</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>4. </SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>具有较强的执行力，能认真完成</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启创计划</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>培养方案的各项培养环节。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BACKGROUND: white; TEXT-ALIGN: left; MARGIN: 6pt 0cm 0pt; LINE-HEIGHT: 25pt; TEXT-INDENT: 30.05pt; mso-pagination: widow-orphan" align=left><B><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: 仿宋; COLOR: black; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"; mso-font-kerning: 0pt'>三、选拔方案</SPAN></B><B><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; COLOR: black; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'> <SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></B></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>1.</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>申请材料</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>（</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>1</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>）《</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>·</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>创</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>学生创业人才培育计划第八期申请表》（见附件二）；</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>（</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>2</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>）《</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>·</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>创</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>学生创业人才培育计划第八期个人信息简表》（见附件三）。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>2.</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>申请流程</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>申请人须于</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>2020</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>年</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>10</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>月</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>5</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>日（星期一）</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>23:59</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>前将所有申请材料的电子版打包后命名为</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启创八期申请</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>_</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>院系</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>_</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>姓名</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>_</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>学号</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>发送至</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>chuangye@tsinghua.edu.cn,</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>并报名参加第二十二届清华大学创业大赛并至少通过初赛阶段。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>校团委创业中心将对申请材料及创业大赛初赛阶段表现进行初评并择期举行面试，根据初评及面试结果确定</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>“</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>启创计划</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>”</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>第八期学员名单，最终名单将在公示后确定。</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="BACKGROUND: white; TEXT-ALIGN: left; MARGIN: 6pt 0cm 0pt; LINE-HEIGHT: 25pt; TEXT-INDENT: 30.05pt; mso-pagination: widow-orphan" align=left><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; COLOR: black; mso-bidi-font-weight: bold; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p>&nbsp;</o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>联系人：</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'> <SPAN lang=EN-US><o:p></o:p></SPAN></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>薛烨扬</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'> <FONT size=6><SPAN style="mso-spacerun: yes">&nbsp;</SPAN><SPAN lang=EN-US><FONT size=4>18600750366&nbsp;&nbsp; </FONT><A href="mailto:xueyy17@mails.tsinghua.edu.cn"><FONT size=4>xueyy17@mails.tsinghua.edu.cn</FONT></A><o:p></o:p></SPAN></FONT></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>孙亚鹏</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'> <SPAN lang=EN-US><FONT size=5><SPAN style="mso-spacerun: yes">&nbsp;</SPAN></FONT><FONT size=4>15911081702 &nbsp; sunyp20@mails.tsinghua.edu.cn<o:p></o:p></FONT></SPAN></SPAN></P>
<P class=MsoNormal style="TEXT-ALIGN: right; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly" align=right><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p>&nbsp;</o:p></SPAN></P>
<P class=MsoNormal style="TEXT-ALIGN: right; MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly" align=right><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>共青团清华大学委员会</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="TEXT-ALIGN: right; MARGIN: 0cm 28pt 0pt 0cm; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly" align=right><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>2020</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>年</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'>9</SPAN><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'>月</SPAN><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></P>
<P class=MsoNormal style="TEXT-ALIGN: right; MARGIN: 0cm 28pt 0pt 0cm; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly" align=right><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p>&nbsp;</o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style="mso-bookmark: _Hlk51103560"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'></SPAN></SPAN><SPAN style="mso-bookmark: _Hlk51103560"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p><FONT size=4><IMG border=0 src="/editor_new/sysimage/file/unknow.gif"></FONT><A href="/download.jsp?attachSeq=15197"><FONT size=4>附件1：“启·创”学生创业人才培育计划第八期培养方案.docx</FONT></A></o:p></SPAN></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style="mso-bookmark: _Hlk51103560"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'><FONT size=4 face="Times New Roman"><IMG border=0 src="/editor_new/sysimage/file/unknow.gif"></FONT><A href="/download.jsp?attachSeq=15202"><FONT size=4 face="Times New Roman">附件2：“启·创”学生创业人才培育计划第八期申请表.docx</FONT></A></SPAN></SPAN></P><SPAN style="mso-bookmark: _Hlk51103560"><SPAN style='FONT-SIZE: 14pt; FONT-FAMILY: FangSong; mso-ascii-font-family: "Times New Roman"; mso-hansi-font-family: "Times New Roman"; mso-bidi-font-family: "Times New Roman"'></SPAN></SPAN>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style="mso-bookmark: _Hlk51103560"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p><FONT size=4><IMG border=0 src="/editor_new/sysimage/file/unknow.gif"></FONT><A href="/download.jsp?attachSeq=15199"><FONT size=4>附件3：“启·创”学生创业人才培育计划第八期个人信息简表.xlsx</FONT></A></o:p></SPAN></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; LINE-HEIGHT: 26pt; TEXT-INDENT: 28pt; mso-char-indent-count: 2.0; mso-line-height-rule: exactly"><SPAN style="mso-bookmark: _Hlk51103560"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; mso-fareast-font-family: FangSong'><o:p></o:p></SPAN></SPAN>&nbsp;</P><SPAN style="mso-bookmark: _Hlk51103560"></SPAN>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; TEXT-INDENT: 21pt; mso-char-indent-count: 2.0"><SPAN lang=EN-AU style='FONT-FAMILY: "Times New Roman",serif; mso-ansi-language: EN-AU'><o:p><FONT size=3>&nbsp;</FONT></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; TEXT-INDENT: 21pt; mso-char-indent-count: 2.0"><SPAN lang=EN-AU style='FONT-FAMILY: "Times New Roman",serif; mso-ansi-language: EN-AU'><o:p><FONT size=3>&nbsp;</FONT></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt; TEXT-INDENT: 21pt; mso-char-indent-count: 2.0"><SPAN lang=EN-AU style='FONT-FAMILY: "Times New Roman",serif; mso-ansi-language: EN-AU'><o:p><FONT size=3>&nbsp;</FONT></o:p></SPAN></P>
<P class=MsoNormal style="MARGIN: 0cm 0cm 0pt"><SPAN lang=EN-US style='FONT-SIZE: 14pt; FONT-FAMILY: "Times New Roman",serif; COLOR: black; mso-bidi-font-weight: bold; mso-fareast-font-family: 仿宋; mso-font-kerning: 0pt'><o:p>&nbsp;</o:p></SPAN></P></td>
                </tr>
                <tr>
                  <td height="30" colspan="4"></td>
                </tr>
                <tr>
                  <td width="10%"></td>
                  <td colspan="2" width="75%" align="right">&nbsp;
                  </td>
                  <td width="15%" height="25" >
                    &nbsp;&nbsp;<A href="javascript:window.close()" ><font color="#0066cc">【关闭窗口】</font></A></td>
                </tr>
            </table></td>
        </tr>
      </table>
    </div></td>
  </tr>

   
<table width="776" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="5"><img src="/images/footer_top.jpg" width="776" height="5" /></td>
  </tr>
      <tr>
        <td height="29"><div align="center">
        <P align=center>共青团清华大学委员会&nbsp; 电话：62786244 <BR>传真：62797505&nbsp; Email：<A href="mailto:twinfo@tsinghua.edu.cn">twinfo@tsinghua.edu.cn</A></P>
	
        </div></td>
      </tr>
</table>
 
</table> 
</body>
</html>`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312997, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `










<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>人事处办公信息网</title>
<style type="text/css">
<!--
@import url("css/index.css");
-->
</style>
</head>

<body bgcolor="#ffffff" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="774" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr> 
    <td colspan="3"><img src="/rscbg/imgs/s_r1_c2.gif" width="774" height="8"></td>
  </tr>
  <tr> 
    <td width="6" background="/rscbg/imgs/s_r2_c2.gif">&nbsp;</td>
    <td width="762" height="121" valign="bottom"><table width="752" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr> 
          <td width="177"><img src="/rscbg/imgs/d_r1_c1.jpg" width="752" height="119"></td>
        </tr>
    </table></td>
    <td width="6" background="/rscbg/imgs/s_r2_c55.gif"></td>
  </tr>
</table>
</td>
<table width="774" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr> 
    <td width="6" background="imgs/s_r2_c2.gif">&nbsp;</td>
    <td width="762" bgcolor="#FFFFFF"><table width="752" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#F6F6F6">
      <tr>
        <td height="33" valign="bottom" background="imgs/d_r3_c2.jpg"></td>
      </tr>
      <tr>
        <td height="10"></td>
      </tr>
      <tr>
        <td>          <table width="90%"  border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
          <tr>
            <td><table width="95%"  border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td height="40"><div align="center"><span class="td11">关于召开2020年度人事工作会的通知</span></div></td>
                </tr>
              </table>
                <table width="95%"  border="0" align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td height="30" style="border-bottom:#cccccc 1px solid;"><div align="right">发布时间: 2020-09-17　访问计数: 992 <img src="imgs/spacer.gif" width="170" height="8">
                   <SCRIPT language=JavaScript type=text/JavaScript>
							function shutwin(){
							window.close();
							return;}
					</SCRIPT><A href="javascript:shutwin();" >【关闭】</div></td>
                  </tr>
                  <tr>
                    <td height="10"></td>
                  </tr>
                  <tr>
                    <td><DIV><FONT size=3>各单位：<B></B></FONT></DIV>
<DIV align=left><FONT size=3>&nbsp;&nbsp;&nbsp; 兹定于2020年9月24日（星期四）召开2020年度人事工作会。</FONT></DIV>
<DIV align=left><FONT size=3>会议采用“主会场+线上”的方式进行，主会场设在廖凯原楼（法学院）一层报告厅。</FONT></DIV>
<DIV align=left><FONT size=3><B>一、会议时间：</B>2020年9月24日（星期四）9:00-12:00</FONT></DIV>
<DIV><B><FONT size=3>二、主要内容</FONT></B></DIV>
<DIV><FONT size=3>1. 副校长郑力介绍人事工作</FONT></DIV>
<DIV><FONT size=3>2. 人事处处长王宏伟布置下半年人事重点工作</FONT></DIV>
<DIV><B><FONT size=3>三、参会人员</FONT></B></DIV>
<DIV><FONT size=3>（一）主会场：</FONT></DIV>
<DIV align=left><FONT size=3>各院（系）、机关部处、后勤、支撑服务机构及直属或附属单位的主管人事领导。欢迎各单位党政正职领导参加！</FONT></DIV>
<DIV align=left><FONT size=3>凡是参加组织部“管理能力培训班”调训的干部，请按组织部要求扫荷塘雨课堂二维码签到记考勤。</FONT></DIV>
<DIV><FONT size=3>（二）线上：</FONT></DIV>
<DIV align=left><FONT size=3>各院（系）、机关部处、后勤、支撑服务机构及直属或附属单位的人事干部。<B></B></FONT></DIV>
<DIV><B><FONT size=3>四、注意事项</FONT></B></DIV>
<DIV><FONT size=3>1.请主会场参会人员遵照疫情防控要求佩戴口罩，配合测量体温，提前10分钟入场，扫码签到。</FONT></DIV>
<DIV><FONT size=3>2.请各单位于9月18日（星期五）16:00前将本单位主会场及线上参会人员回执（附件1）报人事处邮箱（</FONT><A href="mailto:rscbgs@tsinghua.edu.cn"><FONT size=3>rscbgs@tsinghua.edu.cn</FONT></A><FONT size=3>）。邮件标题格式为：XX单位2020年人事工作会参会回执。</FONT></DIV>
<DIV><FONT size=3>3.线上采用荷塘雨课堂进行，课程链接将于会议当天推送给大家，请参会人员关注并安排好工作，提前10分钟进入课堂参会。</FONT></DIV>
<DIV><FONT size=3>联系电话：62782857</FONT></DIV>
<DIV><FONT size=3>邮 &nbsp;&nbsp;&nbsp;箱：</FONT><A href="mailto:rscbgs@tsinghua.edu.cn"><FONT size=3>rscbgs@tsinghua.edu.cn</FONT></A></DIV>
<DIV><B><FONT size=3></FONT></B>&nbsp;</DIV>
<DIV><B><FONT size=3></FONT></B>&nbsp;</DIV>
<DIV><B><FONT size=3></FONT></B>&nbsp;</DIV>
<DIV align=right><FONT size=3>人事处</FONT></DIV>
<DIV align=right><FONT size=3>2020年9月17日</FONT></DIV>
<DIV align=right>&nbsp;</DIV>
<DIV align=right><IMG border=0 src="/editor_new/sysimage/file/doc.gif"><A href="/download.jsp?attachSeq=5045">关于召开2020年人事工作会的通知.doc</A></DIV></td>
                  </tr>
                  <tr>
                    <td  style="border-bottom:#cccccc 1px solid;" height="10">&nbsp;</td>
                  </tr>
                  <tr>
                    <td height="30"><div align="right"> <SCRIPT language=JavaScript type=text/JavaScript>
							function shutwin(){
							window.close();
							return;}
					</SCRIPT><A href="javascript:shutwin();" >【关闭】</div></td>
                  </tr>
              </table></td>
          </tr>
        </table>          </td>
      </tr>
      <tr>
        <td height="10"></td>
      </tr>
      <tr>
        <td width="176" valign="top"></td>
      </tr>
    </table>      <br>    </td>
    <td width="6" background="imgs/s_r2_c55.gif"></td>
  </tr>
</table> 
<table width="774" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td>
<table width="774" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr> 
    <td width="6" background="/rscbg/imgs/s_r2_c2.gif">&nbsp;</td>
    <td width="762"><div align="center">
      <table width="752" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td height="22" background="/rscbg/imgs/f_bg.jpg"><div align="center">版权所有：清华大学人事处<img src="imgs/spacer.gif" width="50" height="8">技术支持：清华大学信息化技术中心</div></td>
        </tr>
      </table>
      </div></td>
    <td width="6" background="/rscbg/imgs/s_r2_c55.gif"></td>
  </tr>
  <tr> 
    <td background="/rscbg/imgs/s_r2_c2.gif"></td>
    <td height="3"></td>
    <td background="/rscbg/imgs/s_r2_c55.gif"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="/rscbg/imgs/s_r58_c2.gif" width="774" height="10"></td>
  </tr>
</table>
</td>
  </tr>
</table>
`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312998, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-hans" version="XHTML+RDFa 1.0" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">

<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="http://postinfo.tsinghua.edu.cn/misc/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="shortlink" href="/node/279771" />
<link rel="canonical" href="/node/279771" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
  <title>2020年10月三场“LIVE 逍遥夜”演出开票公告 | 清华大学内网信息发布平台</title>
  <style type="text/css" media="all">
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.base.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.menus.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.messages.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.theme.css?pybtla");
</style>
<style type="text/css" media="all">
@import url("http://postinfo.tsinghua.edu.cn/modules/comment/comment.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/field/theme/field.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/node/node.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/search/search.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/user/user.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/sites/all/modules/views/css/views.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/sites/all/modules/ckeditor/css/ckeditor.css?pybtla");
</style>
<style type="text/css" media="all">
@import url("http://postinfo.tsinghua.edu.cn/sites/all/modules/ctools/css/ctools.css?pybtla");
</style>
  <script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/jquery.js?v=1.9.1"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/jquery.once.js?v=1.2"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/drupal.js?pybtla"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/jquery-migrate-1.2.1.min.js?v=1.2.1"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/sites/default/files/languages/zh-hans_LSBoseMAZxQGu4ZnLrci8YcqyXFOA2rIJGhhgz2rOT4.js?pybtla"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"infoCms","theme_token":"fLopNqheDcQZh_EoXSMgDHU7YYcFFXcnaYA05KWt--E","js":{"misc\/jquery.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"misc\/jquery-migrate-1.2.1.min.js":1,"public:\/\/languages\/zh-hans_LSBoseMAZxQGu4ZnLrci8YcqyXFOA2rIJGhhgz2rOT4.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"modules\/comment\/comment.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/views\/css\/views.css":1,"sites\/all\/modules\/ckeditor\/css\/ckeditor.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1}}});
//--><!]]>
</script>
  <link href="/sites/all/themes/infoCms/css/reset.css" rel="stylesheet" type="text/css" />
	<link href="/sites/all/themes/infoCms/css/nav.css" rel="stylesheet" type="text/css" />
	<link href="/sites/all/themes/infoCms/css/templet.css" rel="stylesheet" type="text/css" />
	<!-- IE8 兼容 -->
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
	<!-–[if IE]>
	<script src="/sites/all/themes/infoCms/js/html5.js"></script>
	<![endif]–->
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/jquery-1.8.1.min.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/jquery-ui-1.8.23.custom.min.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/gototop.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/effect.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/effect.js"></script>
	<script type="text/javascript" language="javascript" src="/sites/all/themes/infoCms/js/jquery.jfontsize-1.0.js"></script>
	
</head>

<body>
	
  ﻿<!-- 整体区域开始 -->
<div class="wrapper">
      <!-- 中部区域开始 -->
      <div class="content">
				
<!-- 内容区域 start -->
<section class="cont_box some-class-name">
	
    <!-- start -->
    <div class="m_nav">
    	<ul class="mnav_left">
          <li><a href="/node/279771">2020年10月三场“LIVE 逍遥夜”演出开票公告</a>
        </ul>
    	<ul class="mnav_right">
        	<li><a href="/node/279771/edit" class="">编&nbsp;&nbsp;辑</a></li>
            <li><a href="/node/279771/delete" class="">删&nbsp;&nbsp;除</a></li>
            <!--li><a href="#" class="">< 上篇</a></li>
            <li><a href="#" class="">下篇 ></a></li-->
            <!--li><a href="/f/jiaowugonggao/more" class="">返回</a></li-->
        </ul>
        
    </div>
    <!-- end -->
    
    <!-- 文章区域 start -->
    <div class="cont_doc_box">
    	<h5><span>2020年10月三场“LIVE 逍遥夜”演出开票公告</span>&nbsp;&nbsp;&nbsp; [艺教中心办公室&nbsp;&nbsp;&nbsp;2020-09-17]</h5>
      <div style="clear:left;">
      	<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><p>【9月17日开票公告】10月三场“Live 逍遥夜”乐队现场</p>
<p>演出名称：LIVE逍遥夜——李高阳爵士四重奏/一三乐队/亚冬的蓝调之旅</p>
<p>演出时间：2020年10月16/23/30日（周五）19:00</p>
<p>演出地点：新清华学堂实验剧场</p>
<p>演出票价：100元（校内师生享8折优惠）</p>
<p>开票时间：9月17日（周四）14:00</p>
<p>购票方式：请关注“清华大学新清华学堂”微信公众号在线选座购票</p>
<p>售票电话：010-62781984</p>
<p>温馨提示：本场演出时长约90分钟，身高1米以下儿童谢绝入场</p>
<p>本场演出不对号入座，需佩戴口罩隔位就座</p>
<p>疫情管控期间售票仅面向校内师生</p>
<p>票厅时间现调整为12:30-19:30（周二除外）</p>
<p> </p>
<p><strong>10</strong><strong>月16</strong><strong>日 </strong><strong>李高阳爵士四重奏</strong></p>
<p>Sax—李高阳</p>
<p>亚洲首位登上联合国“国际爵士乐日全球全明星音乐会”的萨克斯大师；中国首位登上联合国“国际爵士乐日全球全明星音乐会”的管乐器大师。“华语金曲奖”首位“杰出华人演奏家奖”获得者。</p>
<p>“全球华语金曲奖”首位“最佳爵士曲目”获得者。</p>
<p>中国顶尖级爵士萨克斯大师、教育家、作曲家，代表着中国爵士萨克斯面向国际的最高水准。</p>
<p>Piano—牛天宇</p>
<p>爵士钢琴演奏家，作曲家。2012年离开北京前往美国洛杉矶求学。常年旅居海外的经历极大丰富了他的音乐背景。2015年毕业于加州大学洛杉矶分校经济学专业，并于次年考入伯克利音乐学院爵士钢琴演奏专业。多年来在美国和欧洲等地求学演出的经历让他在多种文化的碰撞下，吸纳了不同音乐形式的同时逐渐形成了独特的音乐风格。</p>
<p>Bass—胡浩</p>
<p>爵士低音提琴演奏家 毕业于美国波特兰州立大学。学习爵士乐低音提琴演奏和乐队编曲和乐队指挥，师从Darrell Grant,George Colligan,Tim Gilson. 并以专业课全A的优秀成绩获得硕士学位.和包括Charles Mcpherson，Darrell Grant ，George Colligan，Jerry Bergonzi，Adam Nussbaum，Barry Harris，Billy kerr. 等爵士大师合作演出并获得高度评价。</p>
<p> </p>
<p>Drums—杨宸</p>
<p>中国青年爵士鼓手，毕业于北京现代音乐学院，12岁学习爵士鼓，16岁来到北京开始跟随美国爵士鼓音乐家Anthony Vanacore学习爵士乐，曾带领自己的乐队参加北京爵士音乐节，北京国际鼓手节等活动，与John Riley，Dave weckl，Jim White，Dennis Chambers，Joey Taylor等大师同台演出，合作过的音乐家有李高阳，胡浩，牛天宇，石喻吉，张晶，大中，刘晓光，王晨淮 ，Ah-Q爵士乐团等，演奏风格充满激情和创造力，深受Elvin Jones ，Mark Guiliana，Tony Williams，Adam Nussbaum等爵士鼓大师的影响。</p>
<p> </p>
<p><strong>10</strong><strong>月23</strong><strong>日 </strong><strong>一三乐队</strong></p>
<p>主唱、吉他——王朕、王明明</p>
<p>二胡——季骅</p>
<p> </p>
<p>独立乐队一三由两名王姓青年组成，现居苏州。 目前独立发行两张全长专辑《一三》（2017）、《小镇青年》（2018）。一三的作品充满了时代使命感，力求通过表达去引发别人思考。他们的作品不仅包含了一个青年内在本我情绪的释放，同时从人文角度衍生出了一系列对于周身环境社会以及同类生存群体的思考。既关照个体也思考群体，是小众，但所传递的却是大众。</p>
<p>可以说拥有这样一种责任感的所谓民谣乐队在当下是不多见的。 时代在迅速的变快，交流，文字，思想，甚至恋爱婚姻，都在变快。越来越快带来的后果就是越来越淡漠，越来越习以为常的麻木。人们习惯于消费简短的内容，不再有时间去详细的了解，去思考。因为太快了，稍微一停留就给别人甩开，落下来。高楼真的是拔地而起，物价飞涨，汽车突然就堵住了原本觉得很宽敞的道路。如此快的发展只能逼着所有人追着向前，与之俱来的便会是大多数的疲劳与麻木。</p>
<p>但愿所有迷惘的人，可以通过一三的音乐，重新解构面对的生活。</p>
<p> </p>
<p><strong>10</strong><strong>月30</strong><strong>日 </strong><strong>亚冬的蓝调之旅</strong></p>
<p>Singer/Guitar/harmonica: 亚冬</p>
<p>Bassist: 王铮</p>
<p>Drummer：吴志军</p>
<p> </p>
<p>亚冬（Alex Yadong），生于南京</p>
<p>歌手、吉他手、词曲创作人、独奏音乐人</p>
<p>风格：布鲁斯、摇滚、乡村、流行</p>
<p>乐器：吉他、口琴</p>
<p>2004年成为职业歌手后在酒吧驻唱。</p>
<p>2012年学习吉他，受到Bob Dylan，The Rolling Stones等60年代音乐影响。</p>
<p>2013年组建乐队Not There， 2014年末解散。</p>
<p>2014年开始创作，于同年9月独自前往美国田纳西州孟菲斯和当地知名布鲁斯音乐人Brad Webb学习。</p>
<p>2015年在孟菲斯Brad Webb Studio和纳什维尔Denny Martin Studio录制了第一张专辑《人生没有排练》，于停留期间在当地餐厅、酒吧和街头表演。</p>
<p>2016年11月前往孟菲斯和纳什维尔录制第二张专辑《那些粗糙的东西》</p>
<p>2018年4月签约台湾Welcome Music洧诚唱片公司，并在台湾发行首张专辑《在路上》</p>
<p>2018年推出在纳什维尔录制的第三张专辑《生活是部电影》</p>
<p>2018年4月出版自传《找到回到的路》</p>
<p>2018年12月编写并主演同名音乐话剧《找到回家的路》</p>
<p>2019年前往德克萨斯奥斯汀以及纳什维尔和当地音乐人学习布鲁斯和乡村音乐并在大学、教堂、图书馆、GED补习中心学习英文。年底在纳什维尔录制第四张专辑《Desire》</p>
</div></div></div>      	<br/><br/>
				<!--附件start-->
    		<div style="margin-left:25px;"></div>
				<!--附件end-->
    	</div>
  	</div>
    <!-- 文章区域 end -->
</section>
<!-- 内容区域 end --> 

                 
    	</div>
      <!-- 中部区域结束 -->
      
      <!-- 返回顶部 start -->
      <div id="topcontrol" title="返回顶部"></div>
      <!-- 返回顶部 end -->
      
</div>
<!-- 整体区域结束 -->


  
	
</body>
<script>
			//搜索回车
			document.onkeydown = function(e){ 
				  var ev = document.all ? window.event : e;
					if(ev.keyCode==13&&$("#edit-key").length>0) {
 						$('#edit-submit').trigger("click");
					}
			}
  		$("#edit-submit").click(function(){
  				if($("#edit-key").length>0) {
		  				var key = $("#edit-key").val();
		  				var type = $("#edit-type").val();
		  				if(key == null || key.length == 0){
		  					 alert('请输入关键字!');	
		  				}else{
		  					 var searchUrl = "/search/site/"+key+"?f[0]=bundle:"+type+"&retain-filters=1&solrsort=ds_created%20desc";
		  					 window.open(searchUrl);
		  				}
  				}
  		});

  		//将title替换为形如“办公通知 | 清华大学内网信息发布平台”的样子
  		$( document ).ready(function() {
  		  var h3s = $(".cont_list_box > h3 > span");
  		  if(h3s.length > 0 && $.trim(h3s[0].innerText)){
  			document.title = h3s[0].innerText.replace(/列表$/,'') + ' | ' + document.title;
  		  }
		});
</script>

</html>

`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312999, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
 






<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
		<title>清华大学</title>
		<style type="text/css">
<!--
@import url("/template/css/default.css");
@import url("/css/detail.css");
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-image: url(/images/bg.gif);
}
-->
</style>

<style type="text/css">
<!--
body {
	background-color: #EFEFEF;
}
-->
</style></head>

<!-- 得到请求参数 -->




	

	
<!-- 得到infoColumnVo -->


<!-- 得到参数VO -->

 

  <!-- 文档计数+1 -->






<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">




	<div align="center">
			<table cellpadding="0" cellspacing="0"><tr><td>
		<P><IMG border=0 src="/UploadFile/a/a/c53e8bfdf7f24f004ac5f42be99ee1aa.jpg" width=776 height=113></P>

		</td></tr></table>
	</div>
<table width="776" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td valign="top"><div align="center">
        <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td width="90%"  valign="top"><br>
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">   
              <tr>
                <td height="35"><div align="left">  当前位置： 
                  
                  
                  
                  
                  
                  
                  	
                  		首页
                  		<script>document.title='首页';</script>
                  	
                  	
                  
                  
                  
                  	
                  	
                  &gt;&gt; <a href="/docinfo/board1/boardlist.jsp?columnId=dwxcb01&parentColumnId=dwxcb">办公通知</a>
                  	
                  
                  
                  
                </td>
              </tr>              
            </table>
            
            
             
			<table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td height="35">
                <div align="center" class="TD1">
                     <font color="">
                     清华大学“唯真讲坛”系列在线理论宣讲活动第二十讲 当前的国际形势与热点问题
                     </font>
                     
                 </div></td>
              </tr>              
              <tr>
                <td height="15" align="center">
                【发布时间:2020-09-15】&nbsp;&nbsp;
                  【访问计数:835】	
                </td>
              </tr>
            </table>
            <table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td colspan="4"><DIV align=center><B><FONT size=3></FONT></B>&nbsp;</DIV>
<DIV align=right><FONT size=3>清宣通［2020］45号</FONT></DIV>
<DIV><FONT size=3>【讲座信息】</FONT></DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 时 &nbsp;间：2020年9月17日（周四）14:00-16:00</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 方 &nbsp;式：荷塘雨课堂直播</FONT></DIV>
<DIV>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 主讲人：赵可金，清华大学社会科学学院副院长、</FONT><FONT size=3>国际关系学系主任</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 清华大学“唯真讲坛”系列在线理论宣讲第二十讲暨干部时事政治专题学习班第4讲</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>【讲座内容】</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 当今世界正在经历百年未有之大变局，国际局势变化很快，新冠疫情、大国关系、地区热点、气候变化等深刻变化，对整个世界都产生了深远影响。同时，中国也步入了两个一百年的历史交汇期，与百年大变局彼此交织，相互激荡，中国发展面临着众多风险和机遇。</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 如何抓住机遇，管控风险，正确认识当今世界的深刻变化，精准谋划十四五，本课程将邀请社会科学学院副院长、国际关系学系主任赵可金教授为您做出专业解读。</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 请各单位组织动员师生党员参与荷塘雨课堂听课。</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 荷塘雨课堂邀请码：OLYT8A，二维码请见附件通知。</FONT></DIV>
<DIV>&nbsp;</DIV>
<DIV><FONT size=3>【主 讲 人】</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; 赵可金，清华大学社会科学学院副院长、国际关系学系主任、教授，清华大学全球共同发展研究院副院长，兼任教育部区域国别研究基地专家委员会委员、中国高校国际政治学会常务理事、中国人民争取和平与裁军协会理事等学术职务。主要从事外交学理论、中国外交、中美关系等研究。出版各类著作18部，发表SSCI和CSSCI论文80多篇，先后荣获省部级奖励5项，入选教育部新世纪优秀人才、北京市“四个一批”优秀人才等支持计划。</FONT></DIV>
<DIV><FONT size=3></FONT>&nbsp;</DIV>
<DIV><FONT size=3>&nbsp;&nbsp; <IMG border=0 src="/editor_new/sysimage/file/unknow.gif"></FONT><A href="/download.jsp?attachSeq=15181"><FONT size=3>清宣通2020-45号 “唯真讲坛”第二十讲：当前的国际形势与热点问题.docx</FONT></A></DIV></td>
                </tr>
                <tr>
                  <td height="30" colspan="4"></td>
                </tr>
                <tr>
                  <td width="10%"></td>
                  <td colspan="2" width="75%" align="right">&nbsp;
                  </td>
                  <td width="15%" height="25" >
                    &nbsp;&nbsp;<A href="javascript:window.close()" ><font color="#0066cc">【关闭窗口】</font></A></td>
                </tr>
            </table></td>
        </tr>
      </table>
    </div></td>
  </tr>

   
<table width="776" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
      <tr>
        <td height="5"><img src="/images/footer_top.jpg" width="776" height="5" /></td>
  </tr>
      <tr>
        <td height="29"><div align="center">
        <P align=center>联系我们： 电话：010-62784524&nbsp;&nbsp;传真：62797837&nbsp; Email:xcb@tsinghua.edu.cn<BR>版权所有<FONT color=#000000>&copy;清华大学党委宣传部&nbsp;&nbsp;技术支持：清华大学信息化技术中心</FONT></P>
	
        </div></td>
      </tr>
</table>
 
</table> 
</body>
</html>

`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313000, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `

<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-hans" version="XHTML+RDFa 1.0" dir="ltr"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/terms/"
  xmlns:foaf="http://xmlns.com/foaf/0.1/"
  xmlns:og="http://ogp.me/ns#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:sioc="http://rdfs.org/sioc/ns#"
  xmlns:sioct="http://rdfs.org/sioc/types#"
  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">

<head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="http://postinfo.tsinghua.edu.cn/misc/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="shortlink" href="/node/279661" />
<link rel="canonical" href="/node/279661" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
  <title>金融科技还是科技金融？——数字刀如何切开金融蛋糕|清华五道口云课堂之金融大家评·华尔街热线（第15期） | 清华大学内网信息发布平台</title>
  <style type="text/css" media="all">
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.base.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.menus.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.messages.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/system/system.theme.css?pybtla");
</style>
<style type="text/css" media="all">
@import url("http://postinfo.tsinghua.edu.cn/modules/comment/comment.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/field/theme/field.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/node/node.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/search/search.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/modules/user/user.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/sites/all/modules/views/css/views.css?pybtla");
@import url("http://postinfo.tsinghua.edu.cn/sites/all/modules/ckeditor/css/ckeditor.css?pybtla");
</style>
<style type="text/css" media="all">
@import url("http://postinfo.tsinghua.edu.cn/sites/all/modules/ctools/css/ctools.css?pybtla");
</style>
  <script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/jquery.js?v=1.9.1"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/jquery.once.js?v=1.2"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/drupal.js?pybtla"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/misc/jquery-migrate-1.2.1.min.js?v=1.2.1"></script>
<script type="text/javascript" src="http://postinfo.tsinghua.edu.cn/sites/default/files/languages/zh-hans_LSBoseMAZxQGu4ZnLrci8YcqyXFOA2rIJGhhgz2rOT4.js?pybtla"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"infoCms","theme_token":"ZFoyPNqrLaaCE6H3MduT-lVnvSJX4Ok1Aedbhf5_E7I","js":{"misc\/jquery.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"misc\/jquery-migrate-1.2.1.min.js":1,"public:\/\/languages\/zh-hans_LSBoseMAZxQGu4ZnLrci8YcqyXFOA2rIJGhhgz2rOT4.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"modules\/comment\/comment.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/views\/css\/views.css":1,"sites\/all\/modules\/ckeditor\/css\/ckeditor.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1}}});
//--><!]]>
</script>
  <link href="/sites/all/themes/infoCms/css/reset.css" rel="stylesheet" type="text/css" />
	<link href="/sites/all/themes/infoCms/css/nav.css" rel="stylesheet" type="text/css" />
	<link href="/sites/all/themes/infoCms/css/templet.css" rel="stylesheet" type="text/css" />
	<!-- IE8 兼容 -->
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
	<!-–[if IE]>
	<script src="/sites/all/themes/infoCms/js/html5.js"></script>
	<![endif]–->
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/jquery-1.8.1.min.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/jquery-ui-1.8.23.custom.min.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/gototop.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/effect.js"></script>
	<script type="text/javascript" src="/sites/all/themes/infoCms/js/effect.js"></script>
	<script type="text/javascript" language="javascript" src="/sites/all/themes/infoCms/js/jquery.jfontsize-1.0.js"></script>
	
</head>

<body>
	
  ﻿<!-- 整体区域开始 -->
<div class="wrapper">
      <!-- 中部区域开始 -->
      <div class="content">
				
<!-- 内容区域 start -->
<section class="cont_box some-class-name">
	
    <!-- start -->
    <div class="m_nav">
    	<ul class="mnav_left">
          <li><a href="/node/279661">金融科技还是科技金融？——数字刀如何切开金融蛋糕|清华五道口云课堂之金融大家评·华尔街热线（第15期）</a>
        </ul>
    	<ul class="mnav_right">
        	<li><a href="/node/279661/edit" class="">编&nbsp;&nbsp;辑</a></li>
            <li><a href="/node/279661/delete" class="">删&nbsp;&nbsp;除</a></li>
            <!--li><a href="#" class="">< 上篇</a></li>
            <li><a href="#" class="">下篇 ></a></li-->
            <!--li><a href="/f/jiaowugonggao/more" class="">返回</a></li-->
        </ul>
        
    </div>
    <!-- end -->
    
    <!-- 文章区域 start -->
    <div class="cont_doc_box">
    	<h5><span>金融科技还是科技金融？——数字刀如何切开金融蛋糕|清华五道口云课堂之金融大家评·华尔街热线（第15期）</span>&nbsp;&nbsp;&nbsp; [五道口金融学院综合办公室&nbsp;&nbsp;&nbsp;2020-09-14]</h5>
      <div style="clear:left;">
      	<div class="field field-name-body field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even" property="content:encoded"><p><strong>直播入口：详见海报二维码，扫描直接进入直播间。</strong></p>
<p> </p>
<p>9月16日（周三）9:00，华尔街热线（第15期）特邀BANKS STREET ADVISORY创始人、美国消费者金融保护署（CFPB）主管金融科技前高级官员全丹、度小满金融首席风险科学家、前Discover信用卡首席信贷风险官张俊，与清华GIX北美中心特聘金融顾问杨苹、美国欧洛律师事务所亚太区主席律师叶梦艺展开对话，分享金融科技的新技术、新模式，以及金融科技在疫情后助力小微企业的实践应用！</p>
<p>欢迎您报名参与“华尔街热线”直播活动，开启不间断的深入分享与交流！</p>
<p> </p>
<p><strong>第15期</strong></p>
<p><strong>【主题】金融科技还是科技金融？——数字刀如何切开金融蛋糕</strong></p>
<ul><li>智能终端为支点，创新科技撬动传统金融</li>
<li>疫情下暗雷浮出，挑战者银行模式被挑战</li>
<li>小微企业渡难关，金融科技能否云端助力</li>
</ul><p><strong>【时间】</strong><strong>9</strong><strong>月16日（周三）9:00-10:30</strong></p>
<p><strong>【嘉宾】</strong></p>
<p><strong>全丹，BANKS STREET ADVISORY创始人、麦肯锡全球银行咨询业务高级顾问、美国消费者金融保护署（CFPB）主管金融科技前高级官员</strong></p>
<p>全丹，BANKS STREET ADVISORY的创始人和执行合伙人，麦肯锡公司(MCKINSEY &amp; COMPANY)全球银行咨询业务高级顾问,美国知名智库卡托研究所(CATO INSTITUTE)客座学者。BANKS STREET ADVISORY作为一家精品咨询公司，为金融科技公司提供企业战略，产品开发，监管政策等方面的咨询，客户包括了硅谷发展最快和最有颠覆性的公司。全丹先生在麦肯锡服务的客户涵盖了大型金融机构，独角兽金融科技公司，私募资金，以及中央银行。在卡托研究所（CATO INSTITUTE），全丹先生致力于推动监管科技和普惠金融的研究。作为美国公认的金融科技思想领袖，他加强硅谷和华盛顿之间的沟通，文章曾发布于斯坦福大学及美国银行权威媒体AMERICAN BANKER。</p>
<p>在此之前，全丹先生是美国消费者金融保护署（CFPB）的高级官员。为促成良性发展的金融科技环境,他积极而成功地推行了一系列政策，包括金融数据共享/开放式银行业务以及人工智能和替代数据在风控模型中的应用。在加入CFPB之前，全丹先生是哈佛商学院（HBS）的研究员。他曾为PETER TUFANO教授 (现为牛津大学萨伊商学院院长)工作，共同研究金融脆弱性，低收入家庭储蓄，消费者行为和监管影响等问题。全丹先生拥有对外经济贸易大学的本科学位，德雷塞尔大学的工商管理硕士学位以及哈佛大学肯尼迪政府学院的公共管理硕士学位，持有注册金融分析师(CFA)证书。</p>
<p> </p>
<p><strong>张俊，度小满金融首席风险科学家、前Discover信用卡首席信贷风险官</strong></p>
<p>张俊，度小满金融首席风险科学家。资深信贷风险管理专家、金融风险模型分析专家，在风险管理领域有近30年的专业经验。1994年获得美国俄克拉荷马州立大学农业经济学及计量经济学博士学位，加入美国运通公司(American Express)持续服务10年，历任风险管理系统改良副总裁、决策科学副总裁、信贷催收系统副总裁等职务。之后加入美国发现金融服务公司(Discover Financial Services) 持续服务13年，历任发现信用卡首席信贷风险官、信息分析功能资深副总裁、市场与利率管理资深副总裁、信用卡利率管理委员会主席、决策科学副总裁兼高沃信息技术（上海）有限公司董事长。2018年2月开始以咨询顾问方式为度小满提供服务，2020年正式加入度小满担任首席风险科学家。</p>
<p> </p>
<p><strong>杨苹，</strong><strong>清华GIX北美中心特聘金融顾问</strong><strong>、前复星集团金融服务部执行总经理</strong></p>
<p>杨苹女士现任清华GIX北美中心特聘金融顾问。她早年一直从事结构化金融行业，先后就职于穆迪分析，安永会计师事务所，法国农业信贷银行和日本瑞穗证券。2009年加入刚开始拓展北美市场的中国工商银行搭建其公司和金融机构客户营销平台并担任金融机构部执行总经理。2015至2017年曾担任复星集团金融服务部执行总经理。杨苹女士本科毕业于清华大学经济管理学院，拥有美国密歇根大学金融工程硕士学位。</p>
<p> </p>
<p><strong>叶梦艺，美国欧洛律师事务所亚太区主席律师</strong></p>
<p>叶梦艺，现任美国欧洛律师事务所亚太区主席律师、美国罗格斯大学法学院公司法中心顾问委员会委员。获得法学博士学位后, 叶律师专注于提供跨国公司与资本市场交易的法律服务，曾先后代表来自美国、中国大陆、中国香港、新加坡、马来西亚、加拿大和韩国的众多国际性公司，并为投行承销商、机构投资者提供资本市场相关法律服务。叶律师常年为众多上市公司提供美国联邦证券法合规及企业管治的法律顾问服务，曾受邀参加世界各地关于美国资本市场的交流讲座，也曾多次接受路透社、新浪财经、华尔街多媒体等主流媒体采访。叶律师在2020年被《超级律师》杂志选为大纽约地区“希望之星律师”，此项荣誉仅颁发给全纽约地区2.5％的律师。</p>
<p> </p>
<p><strong>……关于 《清华金融评论》·金融大家评……</strong></p>
<p><strong>天下人评天下金融</strong></p>
<p><strong>针对当前经济金融的重要政策、热点话题进行深度探讨、交流和解读</strong></p>
<p>金融大家评是《清华金融评论》三大品牌活动之一，是《清华金融评论》搭建起来的一个以讲座形式为主的公开品牌活动，邀请知名专家、广大读者、各界人士共同参与，针对当前经济金融的重要政策、热点话题进行深度探讨、交流和解读，从而能把握现实的经济金融现状，看清事件背后的原因，探出经济金融未来发展的脉络。自2020年3月起，作为“清华五道口云课堂”平台的重要组成部分之一，金融大家评线上专题直播活动正式启动，先后推出了“战‘疫’情”和“华尔街热线”专题，探讨全球最新经济金融发展形势。</p>
<p> </p>
</div></div></div>      	<br/><br/>
				<!--附件start-->
    		<div style="margin-left:25px;"><div class="field field-name-field-fj field-type-file field-label-above"><div class="field-label">附件:&nbsp;</div><div class="field-items"><div class="field-item even"><span class="file"><img class="file-icon" alt="Image icon" title="image/jpeg" src="/modules/file/icons/image-x-generic.png" /> <a href="http://postinfo.tsinghua.edu.cn/sites/default/files/%E7%AC%AC15%E6%9C%9F%E6%B5%B7%E6%8A%A5.jpg" type="image/jpeg; length=1965176">第15期海报.jpg</a></span></div></div></div></div>
				<!--附件end-->
    	</div>
  	</div>
    <!-- 文章区域 end -->
</section>
<!-- 内容区域 end --> 

                 
    	</div>
      <!-- 中部区域结束 -->
      
      <!-- 返回顶部 start -->
      <div id="topcontrol" title="返回顶部"></div>
      <!-- 返回顶部 end -->
      
</div>
<!-- 整体区域结束 -->


  
	
</body>
<script>
			//搜索回车
			document.onkeydown = function(e){ 
				  var ev = document.all ? window.event : e;
					if(ev.keyCode==13&&$("#edit-key").length>0) {
 						$('#edit-submit').trigger("click");
					}
			}
  		$("#edit-submit").click(function(){
  				if($("#edit-key").length>0) {
		  				var key = $("#edit-key").val();
		  				var type = $("#edit-type").val();
		  				if(key == null || key.length == 0){
		  					 alert('请输入关键字!');	
		  				}else{
		  					 var searchUrl = "/search/site/"+key+"?f[0]=bundle:"+type+"&retain-filters=1&solrsort=ds_created%20desc";
		  					 window.open(searchUrl);
		  				}
  				}
  		});

  		//将title替换为形如“办公通知 | 清华大学内网信息发布平台”的样子
  		$( document ).ready(function() {
  		  var h3s = $(".cont_list_box > h3 > span");
  		  if(h3s.length > 0 && $.trim(h3s[0].innerText)){
  			document.title = h3s[0].innerText.replace(/列表$/,'') + ' | ' + document.title;
  		  }
		});
</script>

</html>

`;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313001, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_NEWS_LIST = void 0;
const newsHtml_1 = require("./source/newsHtml");
const MOCK_NEWS_LIST = (channel) => {
    switch (channel) {
        case "JWGG":
            return [
                {
                    channel: "JWGG",
                    date: "2020.09.16",
                    name: "博士生思政课“中国马克思主义与当代”扩容通知",
                    source: "研究生院",
                    url: newsHtml_1.url0,
                },
                {
                    channel: "JWGG",
                    date: "2020.09.14",
                    name: "研究生补退选时间安排（2020-2021秋）",
                    source: "教务处",
                    url: newsHtml_1.url1,
                },
                {
                    channel: "JWGG",
                    date: "2020.09.14",
                    name: "本科生补退选时间安排（2020-2021秋）",
                    source: "教务处",
                    url: newsHtml_1.url2,
                },
                {
                    channel: "JWGG",
                    date: "2020.09.14",
                    name: "2020-2021学年秋季学期SRT立项通知",
                    source: "教务处",
                    url: newsHtml_1.url3,
                },
            ];
        case "BGTZ":
            return [
                {
                    channel: "BGTZ",
                    date: "2020.09.17",
                    name: "第二十二届清华大学创业大赛参赛报名通知",
                    source: "校团委",
                    url: newsHtml_1.url4,
                },
                {
                    channel: "BGTZ",
                    date: "2020.09.17",
                    name: "清华大学“启·创”学生创业人才培育计划八期公开招募通知",
                    source: "校团委",
                    url: newsHtml_1.url5,
                },
                {
                    channel: "BGTZ",
                    date: "2020.09.17",
                    name: "关于召开2020年度人事工作会的通知",
                    source: "人事处",
                    url: newsHtml_1.url6,
                },
            ];
        case "HB":
            return [
                {
                    channel: "HB",
                    date: "2020.09.17",
                    name: "2020年10月三场“LIVE 逍遥夜”演出开票公告",
                    source: "艺教中心办公室",
                    url: newsHtml_1.url7,
                },
                {
                    channel: "HB",
                    date: "2020.09.15",
                    name: "清华大学“唯真讲坛”系列在线理论宣讲活动第二十讲 当前的国际形势与热点问题",
                    source: "党委宣传部",
                    url: newsHtml_1.url8,
                },
                {
                    channel: "HB",
                    date: "2020.09.14",
                    name: "金融科技还是科技金融？——数字刀如何切开金融蛋糕|清华五道口云课堂之金融大家评·华尔街热线（第15期）",
                    source: "五道口金融学院综合办公室",
                    url: newsHtml_1.url9,
                },
            ];
        default:
            return [];
    }
};
exports.MOCK_NEWS_LIST = MOCK_NEWS_LIST;

}, function(modId) { var map = {"./source/newsHtml":1646969312990}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313002, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchedule = void 0;
const core_1 = require("./core");
const strings_1 = require("../constants/strings");
const schedule_1 = require("../models/schedule/schedule");
const network_1 = require("../utils/network");
const schedule_2 = require("../mocks/schedule");
const error_1 = require("../utils/error");
const basics_1 = require("./basics");
const dayjs_1 = __importDefault(require("dayjs"));
const GROUP_SIZE = 3; // Make sure that `GROUP_SIZE` is a divisor of `weekCount`.
const getPrimary = (helper, { firstDay, weekCount }) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "287C0C6D90ABB364CD5FDF1495199962", () => Promise.all(Array.from(new Array(weekCount / GROUP_SIZE), (_, id) => (0, network_1.uFetch)((helper.graduate() ? strings_1.JXRL_YJS_PREFIX : strings_1.JXRL_BKS_PREFIX) +
    (0, dayjs_1.default)(firstDay).add((id * GROUP_SIZE) * 7, "day").format("YYYYMMDD") +
    strings_1.JXRL_MIDDLE +
    (0, dayjs_1.default)(firstDay).add(((id + 1) * GROUP_SIZE - 1) * 7 + 6, "day").format("YYYYMMDD") +
    strings_1.JXRL_SUFFIX)))
    .then((results) => results
    .map((s) => {
    if (s[0] !== "m") {
        throw new error_1.ScheduleError();
    }
    return s.substring(s.indexOf("[") + 1, s.lastIndexOf("]"));
})
    .filter((s) => s.trim().length > 0)
    .join(","))
    .then((str) => (0, schedule_1.parseJSON)(JSON.parse(`[${str}]`), firstDay)), schedule_2.MOCK_PRIMARY_SCHEDULE);
const getSecondary = (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "287C0C6D90ABB364CD5FDF1495199962", () => (0, network_1.uFetch)(strings_1.SECONDARY_URL).then((str) => {
    const lowerBound = str.indexOf("function setInitValue");
    const upperBound = str.indexOf("}", lowerBound);
    return (0, schedule_1.parseScript)(str.substring(lowerBound, upperBound));
}), schedule_2.MOCK_SECONDARY_SCHEDULE);
const getSchedule = async (helper) => {
    const calendarData = await (0, basics_1.getCalendar)(helper);
    let scheduleList = (await getPrimary(helper, calendarData)).concat(await getSecondary(helper));
    scheduleList = (0, schedule_1.mergeSchedules)(scheduleList);
    scheduleList.forEach(schedule_1.mergeTimeBlocks);
    return scheduleList;
};
exports.getSchedule = getSchedule;

}, function(modId) { var map = {"./core":1646969312975,"../constants/strings":1646969312976,"../models/schedule/schedule":1646969313003,"../utils/network":1646969312977,"../mocks/schedule":1646969313004,"../utils/error":1646969312978,"./basics":1646969312974}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313003, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseScript = exports.parseSecondaryWeek = exports.parseJSON = exports.getOverlappedBlock = exports.addActiveTimeBlocks = exports.mergeTimeBlocks = exports.mergeSchedules = exports.activeWeek = exports.ScheduleType = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
var ScheduleType;
(function (ScheduleType) {
    ScheduleType[ScheduleType["PRIMARY"] = 0] = "PRIMARY";
    ScheduleType[ScheduleType["SECONDARY"] = 1] = "SECONDARY";
    ScheduleType[ScheduleType["EXAM"] = 2] = "EXAM";
    ScheduleType[ScheduleType["CUSTOM"] = 3] = "CUSTOM";
})(ScheduleType = exports.ScheduleType || (exports.ScheduleType = {}));
const beginMap = {
    "08:00": 1,
    "08:50": 2,
    "09:50": 3,
    "10:40": 4,
    "11:30": 5,
    "13:30": 6,
    "14:20": 7,
    "15:20": 8,
    "16:10": 9,
    "17:05": 10,
    "17:55": 11,
    "19:20": 12,
    "20:10": 13,
    "21:00": 14,
};
const endMap = {
    "08:45": 1,
    "09:35": 2,
    "10:35": 3,
    "11:25": 4,
    "12:15": 5,
    "14:15": 6,
    "15:05": 7,
    "16:05": 8,
    "16:55": 9,
    "17:50": 10,
    "18:40": 11,
    "20:05": 12,
    "20:55": 13,
    "21:45": 14,
};
const examBeginMap = {
    "9:00": 2,
    "2:30": 7,
    "14:30": 7,
    "7:00": 12,
    "19:00": 12,
};
const examEndMap = {
    "11:00": 4,
    "4:30": 9,
    "16:30": 9,
    "9:00": 13,
    "21:00": 13,
};
const activeWeek = (week, schedule) => {
    let res = false;
    schedule.activeTime.forEach((val) => (res = res || week === val.week));
    return res;
};
exports.activeWeek = activeWeek;
const mergeSchedules = (base) => {
    const existName = [];
    const processedScheduleList = [];
    base.forEach((schedule) => {
        const index = existName.indexOf(schedule.name);
        if (index === -1) {
            existName.push(schedule.name);
            processedScheduleList.push(schedule);
        }
        else {
            schedule.activeTime.forEach((time) => {
                const isExistedTime = processedScheduleList[index]
                    .activeTime
                    .reduce((prev, curr) => {
                    return prev || (curr.week === time.week &&
                        curr.dayOfWeek === time.dayOfWeek &&
                        curr.begin === time.begin &&
                        curr.end === time.end);
                }, false);
                if (!isExistedTime) {
                    processedScheduleList[index].activeTime.push(time);
                }
            });
        }
    });
    return processedScheduleList;
};
exports.mergeSchedules = mergeSchedules;
const mergeTimeBlocks = (schedule) => {
    schedule.activeTime.sort((a, b) => (a.week - b.week) * 10000 +
        (a.dayOfWeek - b.dayOfWeek) * 100 +
        (a.begin - b.begin));
    let flag = 0;
    while (flag < schedule.activeTime.length) {
        if (flag !== schedule.activeTime.length - 1 &&
            schedule.activeTime[flag].end + 1 ===
                schedule.activeTime[flag + 1].begin &&
            schedule.activeTime[flag].week === schedule.activeTime[flag + 1].week &&
            schedule.activeTime[flag].dayOfWeek ===
                schedule.activeTime[flag + 1].dayOfWeek) {
            schedule.activeTime[flag].end = schedule.activeTime[flag + 1].end;
            schedule.activeTime.splice(flag + 1, 1);
        }
        else {
            ++flag;
        }
    }
};
exports.mergeTimeBlocks = mergeTimeBlocks;
const addActiveTimeBlocks = (week, dayOfWeek, begin, end, schedule) => {
    schedule.activeTime.push({
        week: week,
        dayOfWeek: dayOfWeek,
        begin: begin,
        end: end,
    });
};
exports.addActiveTimeBlocks = addActiveTimeBlocks;
const getOverlappedBlock = (tester, base) => {
    const res = [];
    const isBlockOverlap = (_a, _b) => _a.week === _b.week &&
        _a.dayOfWeek === _b.dayOfWeek &&
        ((_a.begin > _b.begin && _a.begin <= _b.end) ||
            (_a.begin < _b.begin && _b.begin <= _a.end) ||
            _a.begin === _b.begin);
    tester.activeTime.forEach((test) => {
        base.forEach((val) => val.activeTime.forEach((block) => {
            if (isBlockOverlap(block, test)) {
                res.push([block, val.name, val.type === ScheduleType.CUSTOM]);
            }
        }));
    });
    return res;
};
exports.getOverlappedBlock = getOverlappedBlock;
const parseJSON = (json, firstDay) => {
    const scheduleList = [];
    json.forEach((o) => {
        try {
            const current = (0, dayjs_1.default)(o.nq);
            const weekNumber = Math.floor(current.diff(firstDay) / 604800000) + 1;
            const dayOfWeek = current.day() === 0 ? 7 : current.day();
            switch (o.fl) {
                case "上课": {
                    const lessonList = scheduleList.filter((val) => val.name === o.nr);
                    let lesson;
                    if (lessonList.length) {
                        lesson = lessonList[0];
                    }
                    else {
                        scheduleList.push({
                            name: o.nr,
                            location: o.dd || "",
                            activeTime: [],
                            delOrHideTime: [],
                            delOrHideDetail: [],
                            type: ScheduleType.PRIMARY,
                        });
                        lesson = scheduleList[scheduleList.length - 1];
                    }
                    lesson.activeTime.push({
                        week: weekNumber,
                        dayOfWeek: dayOfWeek,
                        begin: beginMap[o.kssj],
                        end: endMap[o.jssj],
                    });
                    break;
                }
                case "考试": {
                    scheduleList.push({
                        name: "[考试]" + o.nr,
                        location: o.dd || "",
                        activeTime: [],
                        delOrHideTime: [],
                        delOrHideDetail: [],
                        type: ScheduleType.EXAM,
                    });
                    scheduleList[scheduleList.length - 1].activeTime.push({
                        week: weekNumber,
                        dayOfWeek: dayOfWeek,
                        begin: examBeginMap[o.kssj.replace("：", ":")],
                        end: examEndMap[o.jssj.replace("：", ":")],
                    });
                    break;
                }
            }
        }
        catch (e) {
            console.error(e);
        }
    });
    return scheduleList;
};
exports.parseJSON = parseJSON;
const parseSecondaryWeek = (src, callback) => {
    let healthy = true;
    src.split(",").forEach((segment) => {
        if (segment.indexOf("-") === -1) {
            const week = Number(segment);
            if (isNaN(week)) {
                healthy = false;
            }
            else {
                callback(week);
            }
        }
        else {
            const partials = segment.split("-");
            if (partials.length === 2) {
                const x = Number(partials[0]);
                const y = Number(partials[1]);
                if (isNaN(x) || isNaN(y) || x > y) {
                    healthy = false;
                }
                else {
                    for (let i = x; i <= y; i++) {
                        callback(i);
                    }
                }
            }
            else {
                healthy = false;
            }
        }
    });
    return healthy;
};
exports.parseSecondaryWeek = parseSecondaryWeek;
// Note: no '}' at the end.
const parseScript = (script, verbose = false) => {
    const result = [];
    const verboseResult = [];
    const segments = script.split("strHTML =").slice(1);
    const beginList = [1, 3, 6, 8, 10, 12];
    const endList = [2, 5, 7, 9, 11, 14];
    const reg = /"<span onmouseover=\\"return overlib\('(.+?)'\);\\" onmouseout='return nd\(\);'>(.+?)<\/span>";[ \n\t\r]+?document.getElementById\('(.+?)'\).innerHTML \+= strHTML\+"<br>";/;
    segments.forEach((seg) => {
        reg.test(seg);
        const basic = RegExp.$3;
        const dayOfWeek = Number(basic[3]);
        const sessionIndex = Number(basic[1]);
        const begin = beginList[sessionIndex - 1];
        const end = endList[sessionIndex - 1];
        const title = RegExp.$2;
        const detail = RegExp.$1.replace(/\s/g, "");
        // TODO: ugly resolution, maybe better
        /[^(]+?\(([^，]+?)，.+?/.test(detail);
        const location = RegExp.$1;
        const add = (week) => {
            const lessonList = result.filter((val) => val.name === title);
            let lesson;
            if (lessonList.length) {
                lesson = lessonList[0];
            }
            else {
                result.push({
                    name: title,
                    location: location,
                    activeTime: [],
                    delOrHideTime: [],
                    delOrHideDetail: [],
                    type: ScheduleType.SECONDARY,
                });
                lesson = result[result.length - 1];
            }
            lesson.activeTime.push({
                week: week,
                dayOfWeek: dayOfWeek,
                begin: begin,
                end: end,
            });
        };
        if (detail.indexOf("单周") !== -1) {
            [1, 3, 5, 7, 9, 11, 13, 15].forEach(add);
            verboseResult.push([title, "单周", true]);
        }
        else if (detail.indexOf("双周") !== -1) {
            [2, 4, 6, 8, 10, 12, 14, 16].forEach(add);
            verboseResult.push([title, "双周", true]);
        }
        else if (detail.indexOf("全周") !== -1) {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].forEach(add);
            verboseResult.push([title, "全周", true]);
        }
        else if (detail.indexOf("前八周") !== -1 ||
            detail.indexOf("前8周") !== -1) {
            [1, 2, 3, 4, 5, 6, 7, 8].forEach(add);
            verboseResult.push([title, "前八周", true]);
        }
        else if (detail.indexOf("后八周") !== -1 ||
            detail.indexOf("后8周") !== -1) {
            [9, 10, 11, 12, 13, 14, 15, 16].forEach(add);
            verboseResult.push([title, "后八周", true]);
        }
        else {
            const res = /第([\d\-~,]+)周/.exec(detail);
            if (res !== null && res[1]) {
                const healthy = (0, exports.parseSecondaryWeek)(res[1], add);
                verboseResult.push([title, res[1], healthy]);
            }
            else {
                const resEn = /Week([\d\-~,]+)/i.exec(detail);
                if (resEn !== null && resEn[1]) {
                    const healthy = (0, exports.parseSecondaryWeek)(resEn[1], add);
                    verboseResult.push([title, resEn[1], healthy]);
                }
                else {
                    verboseResult.push([title, detail, false]);
                }
            }
        }
    });
    return verbose ? verboseResult : result;
};
exports.parseScript = parseScript;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313004, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_SECONDARY_SCHEDULE = exports.MOCK_PRIMARY_SCHEDULE = void 0;
const schedule_1 = require("../models/schedule/schedule");
exports.MOCK_PRIMARY_SCHEDULE = [
    {
        name: "回笼觉设计与梦境工程",
        location: "2.0*0.9的宿舍床",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 1,
            begin: 1,
            end: 2,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "摸鱼学导论",
        location: "实验室和社工组织",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 1,
            begin: 6,
            end: 7,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "临时进出校基本原理",
        location: "学生部、研工部",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 2,
            begin: 3,
            end: 5,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "学婊艺术欣赏",
        location: "院系年级微信群",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 2,
            begin: 8,
            end: 9,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "社畜学的想象力：拖延、甩锅与膜人",
        location: "桃李一层",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 2,
            begin: 12,
            end: 13,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "初级校园新闻采写",
        location: "知乎",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 3,
            begin: 6,
            end: 7,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "退学案例分析研讨课",
        location: "教务处",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 4,
            begin: 6,
            end: 7,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "打包、取件与排队论",
        location: "紫荆14号楼北快递点",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 4,
            begin: 10,
            end: 11,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "淘宝优惠数值计算",
        location: "智能手机",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 4,
            begin: 12,
            end: 13,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "游戏氪金理论与实践",
        location: "PC/主机/智能设备",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            .map((val) => ({
            week: val,
            dayOfWeek: 5,
            begin: 3,
            end: 5,
        }))
            .concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 6,
            begin: 1,
            end: 2,
        }))),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
    {
        name: "树洞文学中的清华形象",
        location: "THUHole",
        activeTime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((val) => ({
            week: val,
            dayOfWeek: 5,
            begin: 8,
            end: 9,
        })),
        delOrHideTime: [],
        delOrHideDetail: [],
        type: schedule_1.ScheduleType.PRIMARY,
    },
];
exports.MOCK_SECONDARY_SCHEDULE = [];

}, function(modId) { var map = {"../models/schedule/schedule":1646969313003}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313005, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sportsIdInfoList = exports.unsubscribeSportsReservation = exports.getSportsReservationRecords = exports.makeSportsReservation = exports.getSportsCaptchaUrlMethod = exports.getSportsResources = exports.updateSportsPhoneNumber = exports.VALID_RECEIPT_TITLES = void 0;
const core_1 = require("./core");
const network_1 = require("../utils/network");
const strings_1 = require("../constants/strings");
const sports_1 = require("../mocks/sports");
const cheerio_1 = __importDefault(require("cheerio"));
const alipay_1 = require("../utils/alipay");
const cheerio_2 = require("../utils/cheerio");
const error_1 = require("../utils/error");
exports.VALID_RECEIPT_TITLES = ["清华大学", "清华大学工会", "清华大学教育基金会"];
const getSportsResourceLimit = async (helper, gymId, itemId, date) => {
    const rawHtml = await (0, network_1.uFetch)(`${strings_1.SPORTS_BASE_URL}&gymnasium_id=${gymId}&item_id=${itemId}&time_date=${date}`);
    const countSearch = /var limitBookCount = '(\d+?)';/.exec(rawHtml);
    const initSearch = /var limitBookInit = '(\d+?)';/.exec(rawHtml);
    if (countSearch === null || initSearch === null) {
        throw new error_1.SportsError("Exception occurred during getting sports resource limit");
    }
    return { count: Number(countSearch[1]), init: Number(initSearch[1]) };
};
const getSportsResourceData = async (helper, gymId, itemId, date) => {
    const rawHtml = await (0, network_1.uFetch)(`${strings_1.SPORTS_DETAIL_URL}&gymnasium_id=${gymId}&item_id=${itemId}&time_date=${date}`);
    const result = {};
    // Step one: get total resources
    const p1 = /resourceArray.push\({id:'(.*?)',time_session:'(.*?)',field_name:'(.*?)',overlaySize:'(.*?)',can_net_book:'(.*?)'}\);/g;
    for (let r1 = p1.exec(rawHtml); r1 != null; r1 = p1.exec(rawHtml)) {
        result[r1[1]] = {
            resId: r1[1],
            timeSession: r1[2],
            fieldName: r1[3],
            overlaySize: Number(r1[4]),
            canNetBook: r1[5] === "1",
        };
    }
    // Step two: update cost
    const p2 = /addCost\('(.*?)','(.*?)'\);/g;
    for (let r2 = p2.exec(rawHtml); r2 != null; r2 = p2.exec(rawHtml)) {
        if (result[r2[1]] !== undefined) {
            result[r2[1]].cost = Number(r2[2]);
        }
    }
    // Step three: mark res status
    const p3 = /markResStatus\('(.*?)','(.*?)','(.*?)'\);/g;
    for (let r3 = p3.exec(rawHtml); r3 != null; r3 = p3.exec(rawHtml)) {
        if (result[r3[2]] !== undefined) {
            result[r3[2]].bookId = r3[1];
            result[r3[2]].locked = r3[3] === "1";
        }
    }
    // Step four: mark status color
    const p4 = /markStatusColor\('(.*?)','(.*?)','(.*?)','(.*?)'\);/g;
    for (let r4 = p4.exec(rawHtml); r4 != null; r4 = p4.exec(rawHtml)) {
        if (result[r4[1]] !== undefined) {
            result[r4[1]].userType = r4[2];
            result[r4[1]].paymentStatus = r4[3] === "1";
        }
    }
    return Object.keys(result).map(key => result[key]);
};
const getSportsPhoneNumber = async () => (0, network_1.uFetch)(strings_1.SPORTS_QUERY_PHONE_URL).then((msg) => msg === "do_not" ? undefined : msg);
const updateSportsPhoneNumber = async (helper, phone) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "5539ECF8CD815C7D3F5A8EE0A2D72441", async () => {
    if (!/^(1[3-9][0-9]|15[036789]|18[89])\d{8}$/.test(phone)) {
        throw new error_1.SportsError("请正确填写手机号码!");
    }
    const response = await (0, network_1.uFetch)(`${strings_1.SPORTS_UPDATE_PHONE_URL}${phone}&gzzh=${helper.userId}`, {});
    if (response.includes("找回密码")) {
        throw new error_1.LibError();
    }
}, undefined);
exports.updateSportsPhoneNumber = updateSportsPhoneNumber;
const getSportsResources = async (helper, gymId, itemId, date) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "5539ECF8CD815C7D3F5A8EE0A2D72441", async () => Promise.all([
    getSportsResourceLimit(helper, gymId, itemId, date),
    getSportsPhoneNumber(),
    getSportsResourceData(helper, gymId, itemId, date),
]).then(([{ count, init }, phone, data]) => ({ count, init, phone, data })), sports_1.MOCK_RESOURCES);
exports.getSportsResources = getSportsResources;
const getSportsCaptchaUrlMethod = () => `${strings_1.SPORTS_CAPTCHA_BASE_URL}?${Math.floor(Math.random() * 100)}=`;
exports.getSportsCaptchaUrlMethod = getSportsCaptchaUrlMethod;
const makeSportsReservation = async (helper, totalCost, phone, receiptTitle, gymId, itemId, date, // yyyy-MM-dd
captcha, fieldId) => {
    if (helper.mocked()) {
        return undefined;
    }
    const orderResult = await (0, network_1.uFetch)(strings_1.SPORTS_MAKE_ORDER_URL, {
        "bookData.totalCost": totalCost,
        "bookData.book_person_zjh": "",
        "bookData.book_person_name": "",
        "bookData.book_person_phone": phone,
        "bookData.book_mode": "from-phone",
        "item_idForCache": itemId,
        "time_dateForCache": date,
        "userTypeNumForCache": 1,
        "putongRes": "putongRes",
        "code": captcha,
        "selectedPayWay": 1,
        "allFieldTime": `${fieldId}#${date}`,
    }).then(JSON.parse);
    if (orderResult.msg !== "预定成功") {
        throw new error_1.SportsError(orderResult.msg);
    }
    if (totalCost === 0)
        return undefined;
    const paymentResultForm = await (0, network_1.uFetch)(strings_1.SPORTS_MAKE_PAYMENT_URL, {
        is_jsd: receiptTitle === undefined ? "0" : "1",
        xm: receiptTitle,
        gymnasium_idForCache: gymId,
        item_idForCache: itemId,
        time_dateForCache: date,
        userTypeNumForCache: 1,
        allFieldTime: `${fieldId}#${date}`,
    }, 60000, "GBK").then((s) => cheerio_1.default.load(s)("form"));
    const paymentApiHtml = await (0, network_1.uFetch)(paymentResultForm.attr().action, paymentResultForm.serialize(), 60000, "UTF-8", true);
    const searchResult = /var id = '(.*)?';\s*?var token = '(.*)?';/.exec(paymentApiHtml);
    if (searchResult === null) {
        throw new error_1.SportsError("id and token not found.");
    }
    const paymentCheckResult = await (0, network_1.uFetch)(strings_1.SPORTS_PAYMENT_CHECK_URL, {
        id: searchResult[1],
        token: searchResult[2],
    }).then(JSON.parse);
    if (paymentCheckResult.code !== "0") {
        throw new error_1.SportsError("Payment check failed: " + paymentCheckResult.message);
    }
    const inputs = cheerio_1.default.load(paymentApiHtml)("#payForm input");
    const postForm = {};
    inputs.each((_, element) => {
        const { attribs } = element;
        postForm[attribs.name] = attribs.value;
    });
    postForm.channelId = "0101";
    return (0, alipay_1.generalGetPayCode)(await (0, network_1.uFetch)(strings_1.SPORTS_PAYMENT_ACTION_URL, postForm));
};
exports.makeSportsReservation = makeSportsReservation;
const getSportsReservationRecords = async (helper) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "5539ECF8CD815C7D3F5A8EE0A2D72441", async () => {
    const $ = await (0, network_1.uFetch)(strings_1.SPORTS_BASE_URL + "&gymnasium_id=4836273").then(cheerio_1.default.load);
    const tables = $("table");
    if (tables.length === 0) {
        throw new error_1.SportsError();
    }
    const rows = (0, cheerio_1.default)(tables.toArray()[tables.length - 1]).find("tbody tr");
    const getId = (e) => {
        try {
            const s0 = (e.children[9].children[1].attribs.onclick);
            const res0 = /unsubscribe\('(.+?)'/.exec(s0);
            if (res0 === null) {
                const s1 = (e.children[9].children[4].children[3].attribs.onclick);
                const res1 = /unsubscribeOnline\('(.+?)'/.exec(s1);
                if (res1 === null)
                    return undefined;
                return res1[1];
            }
            return res0[1];
        }
        catch (_a) {
            return undefined;
        }
    };
    return rows.toArray().map((e) => ({
        name: (0, cheerio_2.getCheerioText)(e, 1),
        field: (0, cheerio_2.getCheerioText)(e, 3),
        time: (0, cheerio_2.getCheerioText)(e, 5),
        price: (0, cheerio_2.getCheerioText)(e, 7),
        bookId: getId(e),
    }));
}, sports_1.MOCK_RECORDS);
exports.getSportsReservationRecords = getSportsReservationRecords;
const unsubscribeSportsReservation = async (helper, bookId) => (0, core_1.roamingWrapperWithMocks)(helper, "default", "5539ECF8CD815C7D3F5A8EE0A2D72441", async () => {
    await (0, network_1.uFetch)(strings_1.SPORTS_UNSUBSCRIBE_URL, { bookId });
}, undefined);
exports.unsubscribeSportsReservation = unsubscribeSportsReservation;
exports.sportsIdInfoList = [
    {
        name: "气膜馆羽毛球场",
        gymId: "3998000",
        itemId: "4045681",
    },
    {
        name: "气膜馆乒乓球场",
        gymId: "3998000",
        itemId: "4037036",
    },
    {
        name: "综体篮球场",
        gymId: "4797914",
        itemId: "4797898",
    },
    {
        name: "综体羽毛球场",
        gymId: "4797914",
        itemId: "4797899",
    },
    {
        name: "西体羽毛球场",
        gymId: "4836273",
        itemId: "4836196",
    },
    {
        name: "西体台球",
        gymId: "4836273",
        itemId: "14567218",
    },
    {
        name: "紫荆网球场",
        gymId: "5843934",
        itemId: "5845263",
    },
    {
        name: "西网球场",
        gymId: "5843934",
        itemId: "10120539",
    },
];

}, function(modId) { var map = {"./core":1646969312975,"../utils/network":1646969312977,"../constants/strings":1646969312976,"../mocks/sports":1646969313006,"../utils/alipay":1646969312983,"../utils/cheerio":1646969312979,"../utils/error":1646969312978}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313006, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_RECORDS = exports.MOCK_RESOURCES = void 0;
exports.MOCK_RESOURCES = {
    count: 1,
    init: 1,
    phone: "88888888888",
    data: [
        {
            resId: "14567229",
            timeSession: "20:00-21:00",
            fieldName: "台1",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567231",
            timeSession: "19:00-20:00",
            fieldName: "台1",
            overlaySize: 2,
            canNetBook: true,
            cost: 0,
            bookId: "15674139",
            locked: true,
            userType: "学生",
            paymentStatus: true
        },
        {
            resId: "14567233",
            timeSession: "18:00-19:00",
            fieldName: "台1",
            overlaySize: 2,
            canNetBook: true,
            cost: 0,
            bookId: "15674132",
            locked: true,
            userType: "学生",
            paymentStatus: true
        },
        {
            resId: "14567235",
            timeSession: "17:00-18:00",
            fieldName: "台1",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567279",
            timeSession: "20:00-21:00",
            fieldName: "台2",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567281",
            timeSession: "19:00-20:00",
            fieldName: "台2",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567283",
            timeSession: "18:00-19:00",
            fieldName: "台2",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567285",
            timeSession: "17:00-18:00",
            fieldName: "台2",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567329",
            timeSession: "20:00-21:00",
            fieldName: "台3",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567331",
            timeSession: "19:00-20:00",
            fieldName: "台3",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567333",
            timeSession: "18:00-19:00",
            fieldName: "台3",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567335",
            timeSession: "17:00-18:00",
            fieldName: "台3",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567379",
            timeSession: "20:00-21:00",
            fieldName: "台4",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567381",
            timeSession: "19:00-20:00",
            fieldName: "台4",
            overlaySize: 2,
            canNetBook: true,
            cost: 0,
            bookId: "15670874",
            locked: true,
            userType: "老师",
            paymentStatus: true
        },
        {
            resId: "14567383",
            timeSession: "18:00-19:00",
            fieldName: "台4",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567385",
            timeSession: "17:00-18:00",
            fieldName: "台4",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567429",
            timeSession: "20:00-21:00",
            fieldName: "台5",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567431",
            timeSession: "19:00-20:00",
            fieldName: "台5",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567433",
            timeSession: "18:00-19:00",
            fieldName: "台5",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567435",
            timeSession: "17:00-18:00",
            fieldName: "台5",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567479",
            timeSession: "20:00-21:00",
            fieldName: "台6",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567481",
            timeSession: "19:00-20:00",
            fieldName: "台6",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567483",
            timeSession: "18:00-19:00",
            fieldName: "台6",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567485",
            timeSession: "17:00-18:00",
            fieldName: "台6",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567529",
            timeSession: "20:00-21:00",
            fieldName: "台7",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567531",
            timeSession: "19:00-20:00",
            fieldName: "台7",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567533",
            timeSession: "18:00-19:00",
            fieldName: "台7",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        },
        {
            resId: "14567535",
            timeSession: "17:00-18:00",
            fieldName: "台7",
            overlaySize: 2,
            canNetBook: true,
            cost: 0
        }
    ]
};
exports.MOCK_RECORDS = [
    {
        name: "西体育馆",
        field: "西体台球 (台7)",
        time: "2021-10-06  20:00-21:00",
        price: "15.0",
        bookId: undefined
    },
    {
        name: "西体育馆",
        field: "西体羽毛球场 (羽4)",
        time: "2021-10-07  7:00-8:00",
        price: "0.0",
        bookId: undefined
    },
    {
        name: "西体育馆",
        field: "西体羽毛球场 (羽8)",
        time: "2021-10-08  7:00-8:00",
        price: "0.0",
        bookId: undefined
    }
];

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313007, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCrCourses = exports.searchCrPrimaryOpen = exports.searchCrRemaining = exports.getCoursePlan = exports.getCrAvailableSemestersMethod = exports.loginCr = exports.getCrCaptchaUrlMethod = void 0;
const strings_1 = require("../constants/strings");
const network_1 = require("../utils/network");
const cheerio_1 = __importDefault(require("cheerio"));
const cheerio_2 = require("../utils/cheerio");
const getCrCaptchaUrlMethod = async () => {
    await (0, network_1.uFetch)(strings_1.CR_LOGIN_HOME_URL);
    return strings_1.CR_CAPTCHA_URL;
};
exports.getCrCaptchaUrlMethod = getCrCaptchaUrlMethod;
const loginCr = async (helper, captcha) => {
    const res = await (0, network_1.uFetch)(strings_1.CR_LOGIN_SUBMIT_URL, {
        j_username: helper.userId,
        j_password: helper.password,
        captchaflag: "login1",
        _login_image_: captcha.toUpperCase(),
    });
    if (!res.includes("本科生选课") && !res.includes("研究生选课")) {
        throw new Error("Failed to login to course registration.");
    }
};
exports.loginCr = loginCr;
const getCrAvailableSemestersMethod = async () => {
    const root = await (0, network_1.uFetch)(strings_1.CR_MAIN_URL);
    const baseSemIdRes = /m=showTree&p_xnxq=(\d\d\d\d-\d\d\d\d-\d)/.exec(root);
    if (baseSemIdRes === null) {
        throw new Error("Please login");
    }
    const $ = await (0, network_1.uFetch)(strings_1.CR_TREE_URL + baseSemIdRes[1]).then(cheerio_1.default.load);
    return $("option").toArray().map((e) => {
        var _a;
        return ({
            id: e.attribs.value,
            name: (_a = e.children[0].data) === null || _a === void 0 ? void 0 : _a.trim(),
        });
    });
};
exports.getCrAvailableSemestersMethod = getCrAvailableSemestersMethod;
const getCoursePlan = async (helper, semester) => {
    const data = await (0, network_1.uFetch)(strings_1.COURSE_PLAN_URL_PREFIX + semester);
    const courses = (0, cheerio_1.default)(".trr2", data);
    const result = [];
    courses.each((_, element) => {
        if (element.type === "tag") {
            const rawItems = (0, cheerio_1.default)(element).children();
            const items = rawItems.length === 7 ? rawItems.slice(2) : rawItems;
            result.push({
                id: (0, cheerio_2.getCheerioText)(items[0], 1),
                name: (0, cheerio_1.default)((0, cheerio_1.default)((0, cheerio_1.default)((0, cheerio_1.default)(items[1]).children()[0]).children()[0]).children()[0]).text().trim(),
                property: (0, cheerio_2.getCheerioText)(items[2], 1),
                credit: Number((0, cheerio_2.getCheerioText)(items[3], 1)),
                group: (0, cheerio_2.getCheerioText)(items[4], 1),
            });
        }
    });
    return result;
};
exports.getCoursePlan = getCoursePlan;
const getText = (e, index) => {
    return (0, cheerio_1.default)(e.children[index]).text().trim();
};
const parseFooter = ($) => {
    const footerText = $("p.yeM").toArray()[0].children[5].data.trim();
    const regResult = /第 (\d+) ?页 \/ 共 (\d+) 页（共 (\d+) 条记录）/.exec(footerText);
    if (regResult === null || regResult.length !== 4) {
        throw new Error("cannot parse cr remaining footer data");
    }
    return regResult.slice(1, 4).map(s => Number(s));
};
const searchCrRemaining = async (helper, { page, semester, id, name, dayOfWeek, period }) => {
    const $ = await (0, network_1.uFetch)(strings_1.CR_SEARCH_URL, {
        m: "kylSearch",
        page: page !== null && page !== void 0 ? page : -1,
        "p_sort.p1": "",
        "p_sort.p2": "",
        "p_sort.asc1": "true",
        "p_sort.asc2": "true",
        p_xnxq: semester,
        pathContent: "课余量查询",
        p_kch: id !== null && id !== void 0 ? id : "",
        p_kxh: "",
        p_kcm: name !== null && name !== void 0 ? name : "",
        p_skxq: dayOfWeek !== null && dayOfWeek !== void 0 ? dayOfWeek : "",
        p_skjc: period !== null && period !== void 0 ? period : "",
        goPageNumber: page !== null && page !== void 0 ? page : 1,
    }, 60000, "GBK").then(cheerio_1.default.load);
    const [currPage, totalPage, totalCount] = parseFooter($);
    const courses = $(".trr2").toArray().map((e) => {
        return {
            id: getText(e, 1),
            seq: Number(getText(e, 3)),
            name: getText(e, 5),
            capacity: Number(getText(e, 7)),
            remaining: Number(getText(e, 9)),
            queue: Number(getText(e, 11)),
            teacher: getText(e, 13),
            time: getText(e, 15),
        };
    });
    return {
        currPage,
        totalPage,
        totalCount,
        courses,
    };
};
exports.searchCrRemaining = searchCrRemaining;
const searchCrPrimaryOpen = async (helper, { page, semester, id, name, dayOfWeek, period }) => {
    const $ = await (0, network_1.uFetch)(strings_1.CR_SEARCH_URL, {
        m: "kkxxSearch",
        page: page !== null && page !== void 0 ? page : -1,
        "p_sort.p1": "",
        "p_sort.p2": "",
        "p_sort.asc1": "true",
        "p_sort.asc2": "true",
        p_xnxq: semester,
        pathContent: "一级课开课信息",
        showtitle: "",
        p_rxklxm: "",
        p_kch: id !== null && id !== void 0 ? id : "",
        p_kcm: name !== null && name !== void 0 ? name : "",
        p_zjjsxm: "",
        p_kkdwnm: "",
        p_kcflm: "",
        p_skxq: dayOfWeek !== null && dayOfWeek !== void 0 ? dayOfWeek : "",
        p_skjc: period !== null && period !== void 0 ? period : "",
        p_xkwzsm: "",
        p_kctsm: "",
        p_ssnj: "",
        goPageNumber: page !== null && page !== void 0 ? page : 1,
    }, 60000, "GBK").then(cheerio_1.default.load);
    const [currPage, totalPage, totalCount] = parseFooter($);
    const courses = $(".trr2").toArray().map((e) => {
        return {
            department: getText(e, 1),
            id: getText(e, 3),
            seq: Number(getText(e, 5)),
            name: getText(e, 7),
            credits: Number(getText(e, 9)),
            teacher: getText(e, 11),
            bksCap: Number(getText(e, 13)),
            yjsCap: Number(getText(e, 15)),
            time: getText(e, 17),
            note: getText(e, 19),
            feature: getText(e, 21),
            year: getText(e, 23),
            secondary: getText(e, 25),
            reUseCap: getText(e, 29),
            restrict: getText(e, 31),
            culture: getText(e, 33),
        };
    });
    return {
        currPage,
        totalPage,
        totalCount,
        courses,
    };
};
exports.searchCrPrimaryOpen = searchCrPrimaryOpen;
const searchCrCourses = async (helper, params) => {
    const [remaining, primaryOpen] = await Promise.all([(0, exports.searchCrRemaining)(helper, params), (0, exports.searchCrPrimaryOpen)(helper, params)]);
    return {
        currPage: remaining.currPage,
        totalPage: remaining.totalPage,
        totalCount: remaining.totalCount,
        courses: primaryOpen.courses.map((e, i) => ({
            ...e,
            capacity: remaining.courses[i].capacity,
            remaining: remaining.courses[i].remaining,
            queue: remaining.courses[i].queue,
        })),
    };
};
exports.searchCrCourses = searchCrCourses;

}, function(modId) { var map = {"../constants/strings":1646969312976,"../utils/network":1646969312977,"../utils/cheerio":1646969312979}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313008, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMarkdown = exports.getProjectFileBlob = exports.getProjectBranches = exports.getProjectTree = exports.getProjectDetail = exports.searchProjects = exports.getStarredProjects = exports.getPersonalProjects = exports.getRecentProjects = exports.getNamespaces = void 0;
const core_1 = require("./core");
const network_1 = require("../utils/network");
const strings_1 = require("../constants/strings");
const error_1 = require("../utils/error");
const gitlab_1 = require("../mocks/gitlab");
const fetchGitLabRaw = async (path, query, post) => {
    try {
        return await (0, network_1.uFetch)(strings_1.GITLAB_API_BASE_URL + path + (query ? `?${(0, network_1.stringify)(query)}` : ""), post ? JSON.stringify(post) : undefined, 60000, "UTF-8", true, "application/json");
    }
    catch (_a) {
        throw new error_1.GitLabApiError();
    }
};
const fetchGitLab = async (path, query, post) => {
    try {
        return await fetchGitLabRaw(path, query, post).then(JSON.parse);
    }
    catch (_a) {
        throw new error_1.GitLabApiError();
    }
};
const probeGitLab = async () => {
    await fetchGitLab("/version");
};
const getNamespaces = async (helper, page) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return await fetchGitLab("/namespaces", { page: page });
}, gitlab_1.MOCK_GIT_NAMESPACES);
exports.getNamespaces = getNamespaces;
const getRecentProjects = async (helper, page) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    const result = await fetchGitLab("/projects", {
        membership: true,
        archived: false,
        simple: true,
        order_by: "last_activity_at",
        page: page,
    });
    if (result.length === 0) {
        await probeGitLab();
    }
    return result;
}, gitlab_1.MOCK_GIT_RECENT_PROJECTS);
exports.getRecentProjects = getRecentProjects;
const getPersonalProjects = async (helper, name, page) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    const result = await fetchGitLab(`/users/${name}/projects`, {
        simple: true,
        order_by: "last_activity_at",
        page: page,
    });
    if (result.length === 0) {
        await probeGitLab();
    }
    return result;
}, gitlab_1.MOCK_GIT_PERSONAL_PROJECTS);
exports.getPersonalProjects = getPersonalProjects;
const getStarredProjects = async (helper, page) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    const result = await fetchGitLab("/projects", {
        starred: true,
        simple: true,
        order_by: "last_activity_at",
        page: page,
    });
    if (result.length === 0) {
        await probeGitLab();
    }
    return result;
}, gitlab_1.MOCK_GIT_RECENT_PROJECTS);
exports.getStarredProjects = getStarredProjects;
const searchProjects = async (helper, search, page) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return await fetchGitLab("/search", { scope: "projects", search, page });
}, []);
exports.searchProjects = searchProjects;
const getProjectDetail = async (helper, id) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return await fetchGitLab(`/projects/${id}`);
}, []);
exports.getProjectDetail = getProjectDetail;
const getProjectTree = async (helper, id, path, ref, page) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return await fetchGitLab(`/projects/${id}/repository/tree`, { path, ref, page });
}, []);
exports.getProjectTree = getProjectTree;
const getProjectBranches = async (helper, id) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return await fetchGitLab(`/projects/${id}/repository/branches`);
}, []);
exports.getProjectBranches = getProjectBranches;
const getProjectFileBlob = async (helper, id, sha) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return await fetchGitLabRaw(`/projects/${id}/repository/blobs/${sha}/raw`);
}, "");
exports.getProjectFileBlob = getProjectFileBlob;
const renderMarkdown = async (helper, text) => (0, core_1.roamingWrapperWithMocks)(helper, "gitlab", "", async () => {
    return (await fetchGitLab("/markdown", undefined, { text })).html;
}, "");
exports.renderMarkdown = renderMarkdown;

}, function(modId) { var map = {"./core":1646969312975,"../utils/network":1646969312977,"../constants/strings":1646969312976,"../utils/error":1646969312978,"../mocks/gitlab":1646969313009}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969313009, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCK_GIT_PERSONAL_PROJECTS = exports.MOCK_GIT_RECENT_PROJECTS = exports.MOCK_GIT_NAMESPACES = void 0;
exports.MOCK_GIT_NAMESPACES = [];
exports.MOCK_GIT_RECENT_PROJECTS = [];
exports.MOCK_GIT_PERSONAL_PROJECTS = [];

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646969312973);
})()
//miniprogram-npm-outsideDeps=["cheerio","xlsx","dayjs","iconv-lite","cross-fetch","abort-controller"]
//# sourceMappingURL=index.js.map