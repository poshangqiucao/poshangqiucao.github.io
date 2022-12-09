(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{347:function(v,_,o){"use strict";o.r(_);var p=o(7),l=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"接口开发规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口开发规范"}},[v._v("#")]),v._v(" 接口开发规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("参数校验")])]),v._v(" "),_("li",[_("p",[v._v("权限检查")])]),v._v(" "),_("li",[_("p",[v._v("业务逻辑完备")])]),v._v(" "),_("li",[_("p",[v._v("接口路径规范")]),v._v(" "),_("p",[v._v("​    作为接口路径，为了方便清晰的区分来自不同的系统，可以采用不同系统/模块名作为接口路径前缀。")]),v._v(" "),_("p",[v._v("格式规范如下：")]),v._v(" "),_("blockquote",[_("p",[v._v("​    支付模块   /pay/xx     订单模块  /order/xx")])])]),v._v(" "),_("li",[_("p",[v._v("版本控制规范")]),v._v(" "),_("p",[v._v('​    为了便于后期接口的升级和维护，建议在接口路径中加入版本号，便于管理，实现接口多版本的可维护性。如果你细心留意过的话，你会发现好多框架对外提供的API接口中(如：Eureka)，都带有版本号的。如：接口路径中添加类似"v1"、"v2"等版本号。')]),v._v(" "),_("p",[v._v("格式规范如下：")]),v._v(" "),_("blockquote",[_("p",[v._v("​      /xx/v1/xx")])]),v._v(" "),_("p",[v._v("更新版本后可以使用v2、v3等、依次递加。")])]),v._v(" "),_("li",[_("p",[v._v("接口命名规范")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("示例")]),v._v(" "),_("p",[v._v("​    GET /zoo/v1/zoos：列出所有动物园")]),v._v(" "),_("p",[v._v("​    POST /zoo/v1/zoos：新建一个动物园")]),v._v(" "),_("p",[v._v("​    GET /zoo/v1/zoos/{ID}：获取某个指定动物园的信息")]),v._v(" "),_("p",[v._v("​    PUT /zoo/v1/zoos/{ID}：更新某个指定动物园的信息（提供该动物园的全部信息）")]),v._v(" "),_("p",[v._v("​    PATCH /zoo/v1/zoos/{ID}：更新某个指定动物园的信息（提供该动物园的部分信息）")]),v._v(" "),_("p",[v._v("​    DELETE /zoo/v1/zoos/{ID}：删除某个动物园")]),v._v(" "),_("p",[v._v("​    GET /zoo/v1/zoos/{ID}/animals：列出某个指定动物园的所有动物")]),v._v(" "),_("p",[v._v("​    DELETE /zoo/v1/zoos/ID/animals/ID：删除某个指定动物园的指定动物")])])])]),v._v(" "),_("li",[_("p",[v._v("请求参数规范")])]),v._v(" "),_("li",[_("p",[v._v("返回数据规范")])]),v._v(" "),_("li",[_("p",[v._v("接口管理工具")]),v._v(" "),_("ol",[_("li",[v._v("word")]),v._v(" "),_("li",[v._v("swagger")]),v._v(" "),_("li",[v._v("Easy Mock")])])]),v._v(" "),_("li",[_("p",[v._v("使用自定义错误编码")])])])])}),[],!1,null,null,null);_.default=l.exports}}]);