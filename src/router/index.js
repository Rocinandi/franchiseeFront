import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Notfound = (resolve) => {
  import('@/components/404/notfound').then((module) => {
    resolve(module)
  })
}
// 登录
const Login = (resolve) => {
  import('@/components/user/login').then((module) => {
    resolve(module)
  })
}

// 注册
const Registered = (resolve) => {
  import('@/components/user/registered').then((module) => {
    resolve(module)
  })
}
const Registebrand = (resolve) => {
  import('@/components/user/brand').then((module) => {
    resolve(module)
  })
}
// 找回密码
const Getpass = (resolve) => {
  import('@/components/user/getpass').then((module) => {
    resolve(module)
  })
}

// 主页
const Main = (resolve) => {
  import('@/components/main').then((module) => {
    resolve(module)
  })
}

/**
 *  搜索
 */
const Search = (resolve) => {
  import('@/components/search/search').then((module) => {
    resolve(module)
  })
}
/**
 *  概览
 */
  // 首页home
const Overview = (resolve) => {
  import('@/components/overview/overview').then((module) => {
    resolve(module)
  })
}

/**
 *  预约
 */ 
  //日历 
const Calendar = (resolve) => {
  import('@/components/reservation/calendar').then((module) => {
    resolve(module)
  })
}
  // 预约-列表
const Appointment = (resolve) => {
  import('@/components/reservation/list').then((module) => {
    resolve(module)
  })
}
  // 预约-开单
const Billing = (resolve) => {
  import('@/components/reservation/billing').then((module) => {
    resolve(module)
  })
}

  // 预约-支付
const Payment = (resolve) => {
  import('@/components/reservation/payment').then((module) => {
    resolve(module)
  })
}  

/**
 *  会员
 */ 
const Member = (resolve) => {
  import('@/components/member/member').then((module) => {
    resolve(module)
  })
}
  // 会员 - 导入会员
const ImportMember = (resolve) => {
  import('@/components/member/import').then((module) => {
    resolve(module)
  })
}
  // 会员 - 会员信息
const MemberInfo = (resolve) => {
  import('@/components/member/memberinfo').then((module) => {
    resolve(module)
  })
}

const EditMember = (resolve) => {
  import('@/components/member/editmember').then((module) => {
    resolve(module)
  })
}
/**
 *  潜客
 */
  // 潜客-列表
const Cuslist = (resolve) => {
  import('@/components/customers/cuslist').then((module) => {
    resolve(module)
  })
}
  // 潜客-设置
const Cussetting = (resolve) => {
  import('@/components/customers/cussetting').then((module) => {
    resolve(module)
  })
}
/**
 * 商品
 */
  // 服务
const Serving = (resolve) => {
  import('@/components/commodity/serving').then((module) => {
    resolve(module)
  })
}
  // 卡项
const Card = (resolve) => {
  import('@/components/commodity/card').then((module) => {
    resolve(module)
  })
}
  //商品
const Goods = (resolve) => {
  import('@/components/commodity/goods').then((module) => {
    resolve(module)
  })
} 

// 订单
const OrderList = (resolve) => {
  import('@/components/order/orderlist/').then((module) => {
    resolve(module)
  })
}

// 订单详情
const OrderInfo = (resolve) => {
  import('@/components/order/orderinfo').then((module) => {
    resolve(module)
  })
}

// 营销
const Marketing = (resolve) => {
  import('@/components/marketing/marketing').then((module) => {
    resolve(module)
  })
}

// 统计
const Statistics = (resolve) => {
  import('@/components/statistics/statistics').then((module) => {
    resolve(module)
  })
}
// 设置
const Setting = (resolve) => {
  import('@/components/setting/setting').then((module) => {
    resolve(module)
  })
}
// 门店设置
const StoreSet = (resolve) => {
  import('@/components/setting/store/storeSet').then((module) => {
    resolve(module)
  })
}
// 新增门店
const AddStore = (resolve) => {
  import('@/components/setting/store/addStore').then((module) => {
    resolve(module)
  })
}
// 设置 - 员工管理
const EmpManage = (resolve) => {
  import('@/components/setting/employee/empManage').then((module) => {
    resolve(module)
  })
}
// 设置 - 员工管理 - 导入员工
const Importemployee = (resolve) => {
  import('@/components/setting/employee/importemployee').then((module) => {
    resolve(module)
  })
}
// 设置 - 员工管理 - 操作记录
const OperaRecord = (resolve) => {
  import('@/components/setting/employee/operaRecord').then((module) => {
    resolve(module)
  })
}
// 设置 -新增员工-基本信息
const AddEmployee = (resolve) => {
  import('@/components/setting/employee/addEmployee').then((module) => {
    resolve(module)
  })
}
//设置 - 新增员工 -关联服务
const ContactService = (resolve) => {
  import('@/components/setting/employee/contactService').then((module) => {
    resolve(module)
  })
}
//设置 - 新增员工 - 排班设置
const ArrSettings = (resolve) => {
  import('@/components/setting/employee/arrSettings').then((module) => {
    resolve(module)
  })
}
//设置 - 新增员工 - 提成设置
const PushMoney = (resolve) => {
  import('@/components/setting/employee/pushMoney').then((module) => {
    resolve(module)
  })
}
//设置 - 预约设置 - 预约模式
const OrderSetings = (resolve) => {
  import('@/components/setting/appointment/orderSetings').then((module) => {
    resolve(module)
  })
}
// 设置 - 预约设置 - 排班管理
const WorkSetings = (resolve) => {
  import('@/components/setting/appointment/workSetings').then((module) => {
    resolve(module)
  })
}
// 设置 - 预约设置 - 班次管理班次管理
const ClassesSetings = (resolve) => {
  import('@/components/setting/appointment/classesSetings').then((module) => {
    resolve(module)
  })
}
//  设置 - 品牌设置
const BrandSeting = (resolve) => {
  import('@/components/setting/brand/brandSeting').then((module) => {
    resolve(module)
  })
}
//  设置 - 品牌设置 - 品牌个人认证
const BrandApprove = (resolve) => {
  import('@/components/setting/brand/brandApprove').then((module) => {
    resolve(module)
  })
}
//  设置 - 品牌设置 - 品牌公司
const BrandCompany = (resolve) => {
  import('@/components/setting/brand/brandCompany').then((module) => {
    resolve(module)
  })
}
//  设置 - 品牌设置 - 公益组织认证
const BrandOrganiza = (resolve) => {
  import('@/components/setting/brand/brandOrganiza').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 等级设置
const RankSeting = (resolve) => {
  import('@/components/setting/vip/rankSeting').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 新增会员等级
const VipAddClass = (resolve) => {
  import('@/components/setting/vip/vipAddClass').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 成长值设置
const GrowSeting = (resolve) => {
  import('@/components/setting/vip/growSeting').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 成长值设置
const RecordSeting = (resolve) => {
  import('@/components/setting/vip/recordSeting').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 安全码
const SuccessCode = (resolve) => {
  import('@/components/setting/vip/successCode').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 标签设置
const LabelSeting = (resolve) => {
  import('@/components/setting/vip/labelSeting').then((module) => {
    resolve(module)
  })
}
//  设置 - 会员设置 - 来源管理
const SourceMgn = (resolve) => {
  import('@/components/setting/vip/sourceMgn').then((module) => {
    resolve(module)
  })
}
//  设置  - 折扣设置
const DiscountSet = (resolve) => {
  import('@/components/setting/discount/discountSet').then((module) => {
    resolve(module)
  })
}
//  设置 - 提成设置 - 服务提成
const CommServe = (resolve) => {
  import('@/components/setting/pushMoney/commServe').then((module) => {
    resolve(module)
  })
}
//  设置 - 提成设置 - 服务提成 - 新增方案
const AddServeProject = (resolve) => {
  import('@/components/setting/pushMoney/addServeProject').then((module) => {
    resolve(module)
  })
}
//  设置 - 提成设置 - 卡项提成
const CardPush = (resolve) => {
  import('@/components/setting/pushMoney/cardPush').then((module) => {
    resolve(module)
  })
}
//  设置 - 提成设置 - 产品提成
const ProductPush = (resolve) => {
  import('@/components/setting/pushMoney/productPush').then((module) => {
    resolve(module)
  })
}
 //  设置 - 提成设置 - 门店总提成
const ShopPush = (resolve) => {
  import('@/components/setting/pushMoney/shopPush').then((module) => {
    resolve(module)
  })
}
 //  设置 - 提成设置 - 全局设置
 const GlobalSeting = (resolve) => {
  import('@/components/setting/pushMoney/globalSeting').then((module) => {
    resolve(module)
  })
}
 //  设置 - 提成设置 - 全局设置 - 新增方案
 const AddProSeting = (resolve) => {
  import('@/components/setting/pushMoney/addProSeting').then((module) => {
    resolve(module)
  })
}
// 设置 - 权限设置
const PermissionSeting = (resolve) => {
  import('@/components/setting/power/permissionSeting').then((module) => {
    resolve(module)
  })
}
// 设置 - 权限设置更改
const PerChangeSeting = (resolve) => {
  import('@/components/setting/power/perChangeSeting').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/error"
    },
    {// 404
      path: "/error",
      name: "notfound",
      component: Notfound
    },
    {// 登录
      path: "/login",
      component: Login
    },
    {//注册第一步
      path: "/registered",
      component: Registered
    },
    {//注册第二步
      path: "/registebrand",
      component: Registebrand
    },
    {//找回密码
      path: "/getpass",
      component: Getpass
    },
    // {// 重定向 概览
    //   path: "/",
    //   redirect: "/overview"
    // },
    {// 主页
      path: "/main",
      name: "main",
      component: Main,
      children: [
        {// 概览
          path: "/main/overview",
          name: "overview",
          component: Overview,
        },
        {// 搜索
          path: "/main/search",
          name: 'search',
          component: Search,
        },
        { // 预约-日历
          path: "/main/calendar",
          name: "calendar",
          component: Calendar,
        },
        { // 预约-列表
          path: "/main/appointment",
          name: "appointment",
          component: Appointment,
        },
        { //预约-开单
          path: "/main/billing",
          name: "billing",
          component: Billing,
        },
        { //预约-支付信息
          path: "/main/payment",
          name: "payment",
          component: Payment,
        },
        {// 会员
          path: "/main/member",
          name: "member",
          component: Member,
        },
        {// 会员 - 导入会员
          path: "/main/member/import/",
          name: "importmember",
          component: ImportMember,
        },
        {// 会员 - 会员详情
          path: "/main/member/info/",
          name: "memberinfo",
          component: MemberInfo,
        },
        {// 会员 - 编辑会员
          path: "/main/member/editmember/:id",
          name: "editmember",
          component: EditMember,
        },
        { // 潜客-列表
          path: "/main/cuslist",
          name: "cuslist",
          component: Cuslist,
        },
        { // 潜客-设置
          path: "/main/cussetting",
          name: "cussetting",
          component: Cussetting,
        },
        {// 商品 - 服务
          path: "/main/serving",
          name: "serving",
          component: Serving  
        },
        {// 商品 - 卡项
          path: "/main/card",
          name: "card",
          component: Card
        },
        {// 商品 - 商品
          path: "/main/goods",
          name: "goods",
          component: Goods
        },
        {// 订单
          path: "/main/order",
          name: "order",
          component: OrderList
        },
        {// 订单详情
          path: "/main/order/detail/:orderid",
          name: "orderinfo",
          component: OrderInfo
        },
        {// 营销
          path: "/main/marketing",
          name: "marketing",
          component: Marketing
        },
        {// 统计
          path: "/main/statistics",
          name: "statistics",
          component: Statistics
        },
        {// 设置
          path: "/main/setting",
          name: "setting",
          component: Setting
        },
        {// 设置 - 门店设置
          path: "/main/setting/storeSet",
          name: "storeSet",
          component: StoreSet
        },
        {// 设置 - 新增门店
          path: "/main/setting/addStore",
          name: "addStore",
          component: AddStore
        },
        { // 设置 - 员工管理
          path: "/main/setting/empManage",
          name: "empManage",
          component: EmpManage
        },
        { // 设置 - 员工管理-导入员工
          path: "/main/setting/importemployee",
          name: "importemployee",
          component: Importemployee
        },
        { // 设置 - 权限设置页面
          path: "/main/setting/permissionSeting",
          name: "permissionSeting",
          component: PermissionSeting
        },
        { // 设置 - 权限设置更改
          path: "/main/setting/perChangeSeting",
          name: "perChangeSeting",
          component: PerChangeSeting
        },
        { // 设置 - 操作记录
          path: "/main/setting/operaRecord",
          name: "operaRecord",
          component: OperaRecord
        },
        { // 设置 - 新增员工-基本信息
          path: "/main/setting/addEmployee",
          name: "addEmployee",
          component: AddEmployee
        },
        { // 设置 - 新增员工 -关联服务
          path: "/main/setting/contactService",
          name: "contactService",
          component: ContactService
        },
        { // 设置 - 新增员工 - 排班设置
          path: "/main/setting/arrSettings",
          name: "arrSettings",
          component: ArrSettings
        },
        { // 设置 - 新增员工 - 提成设置
          path: "/main/setting/pushMoney",
          name: "pushMoney",
          component: PushMoney
        },
        { // 设置 - 预约设置
          path: "/main/setting/orderSetings",
          name: "orderSetings",
          component: OrderSetings
        },
        { // 设置 - 预约设置 - 排班管理
          path: "/main/setting/workSetings",
          name: "workSetings",
          component: WorkSetings
        },
        { // 设置 - 预约设置 - 班次管理
          path: "/main/setting/classesSetings",
          name: "classesSetings",
          component: ClassesSetings
        },
        { // 设置 - 品牌设置
          path: "/main/setting/brandSeting",
          name: "brandSeting",
          component: BrandSeting
        },
        { // 设置 - 品牌设置 - 品牌认证
          path: "/main/setting/brandApprove",
          name: "brandApprove",
          component: BrandApprove
        },
        { //设置 - 品牌设置 - 品牌公司
          path: "/main/setting/brandCompany",
          name: "brandCompany",
          component: BrandCompany
        },
        { //设置 - 品牌设置 - 公益组织认证
          path: "/main/setting/brandOrganiza",
          name: "brandOrganiza",
          component: BrandOrganiza
        },
        { // 设置 - 会员设置 - 等级设置
          path: "/main/setting/rankSeting",
          name: "rankSeting",
          component: RankSeting
        },
        { //设置 - 会员设置 - 新增会员等级
          path: "/main/setting/vipAddClass",
          name: "vipAddClass",
          component: VipAddClass
        },
        { //设置 - 会员设置 - 成长值设置
          path: "/main/setting/growSeting",
          name: "growSeting",
          component: GrowSeting
        },
        { //设置 - 会员设置 - 档案设置
          path: "/main/setting/recordSeting",
          name: "recordSeting",
          component: RecordSeting
        },
        { //设置 - 会员设置 - 安全码
          path: "/main/setting/successCode",
          name: "successCode",
          component: SuccessCode
        },
        { //设置 - 会员设置 - 标签设置
          path: "/main/setting/labelSeting",
          name: "labelSeting",
          component: LabelSeting
        },
        { //设置 - 会员设置 - 来源管理
          path: "/main/setting/sourceMgn",
          name: "sourceMgn",
          component: SourceMgn
        },
        { //设置 - 会员设置 - 折扣设置
          path: "/main/setting/discountSet",
          name: "discountSet",
          component: DiscountSet
        },
        { //设置 - 提成设置 - 服务设置
          path: "/main/setting/commServe",
          name: "commServe",
          component: CommServe
        },
        { //设置 - 提成设置 - 服务设置 - 新增方案
          path: "/main/setting/addServeProject",
          name: "addServeProject",
          component: AddServeProject
        },
        { //设置 - 提成设置 - 卡项提成
          path: "/main/setting/cardPush",
          name: "cardPush",
          component: CardPush
        },
        { //设置 - 提成设置 - 产品提成
          path: "/main/setting/productPush",
          name: "productPush",
          component: ProductPush
        },
        { //设置 - 提成设置 - 门店总提成
          path: "/main/setting/shopPush",
          name: "shopPush",
          component: ShopPush
        },
        { //设置 - 提成设置 - 全局设置
          path: "/main/setting/globalSeting",
          name: "globalSeting",
          component: GlobalSeting
        },
        { //设置 - 提成设置 - 全局设置 - 新增方案
          path: "/main/setting/addProSeting",
          name: "addProSeting",
          component: AddProSeting
        },
      ]
    }
  ]
})
