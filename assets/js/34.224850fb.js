(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{346:function(e,t,n){"use strict";n.r(t);var r=n(7),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("WebMvcConfigurer接口"),t("br"),e._v("\nHandlerInterceptorAdapter抽象类,使用HandlerInterceptorAdapter这个适配器来实现自己的拦截器"),t("br"),e._v("\n日志记录，可以记录请求信息的日志，以便进行信息监控、信息统计等。权限检查：如登陆检测，进入处理器检测是否登陆，如果没有直接返回到登陆页面。性能监控：典型的是慢日志。"),t("br"),e._v("\n在HandlerInterceptorAdapter中主要提供了以下的方法："),t("br"),e._v("\npreHandle：在方法被调用前执行。在该方法中可以做类似校验的功能。如果返回true，则继续调用下一个拦截器。如果返回false，则中断执行，也就是说我们想调用的方法 不会被执行，但是你可以修改response为你想要的响应。\npostHandle：在方法执行后调用。"),t("br"),e._v("\nafterCompletion：在整个请求处理完毕后进行回调，也就是说视图渲染完毕或者调用方已经拿到响应。")]),e._v(" "),t("p",[e._v("ApplicationListener"),t("br"),e._v("\nApplicationContext事件机制是观察者设计模式的实现，通过ApplicationEvent类和ApplicationListener接口，可以实现ApplicationContext事件处理。"),t("br"),e._v("\n如果容器中有一个ApplicationListener Bean，每当ApplicationContext发布ApplicationEvent时，ApplicationListener Bean将自动被触发。这种事件机制都必须需要程序显示的触发。")]),e._v(" "),t("p",[e._v("WebSecurityConfigurerAdapter"),t("br"),e._v("\nWebSecurityConfigurerAdapter 类是个适配器, 在配置的时候,需要我们自己写个配置类去继承他,然后编写自己所特殊需要的配置这段配置，我认为就是配置Security的认证策略, 每个模块配置使用and结尾。"),t("br"),e._v("\nauthorizeRequests()配置路径拦截，表明路径访问所对应的权限，角色，认证信息。"),t("br"),e._v("\nformLogin()对应表单认证相关的配置"),t("br"),e._v("\nlogout()对应了注销相关的配置"),t("br"),e._v("\nhttpBasic()可以配置basic登录")]),e._v(" "),t("p",[e._v("AbstractGatewayFilterFactory 抽象类\n局部过滤器")]),e._v(" "),t("p",[e._v("GlobalFilter 接口")]),e._v(" "),t("p",[e._v("HandlerFunction 接口")]),e._v(" "),t("p",[e._v("WebExceptionHandler 接口")]),e._v(" "),t("p",[e._v("AbstractRoutingDataSource抽象类")]),e._v(" "),t("p",[e._v("在WebFlux的函数式开发模式中，我们用HandlerFunction和RouterFunction来实现上边这两点。")]),e._v(" "),t("p",[e._v("HandlerFunction相当于Controller中的具体处理方法，输入为请求，输出为装在Mono中的响应：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("> Mono<T extends ServerResponse> handle(ServerRequest request); \n")])])]),t("p",[e._v("RouterFunction，顾名思义，路由，相当于@RequestMapping，用来判断什么样的url映射到那个具体的HandlerFunction，输入为请求，输出为装在Mono里边的")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("> Handlerfunction：\n>     Mono<HandlerFunction<T>> route(ServerRequest request);\n")])])]),t("p",[e._v("我们看到，在WebFlux中，请求和响应不再是WebMVC中的ServletRequest和ServletResponse，而是ServerRequest和ServerResponse。后者是在响应式编程中使用的接口，它们提供了对非阻塞和回压特性的支持，以及Http消息体与响应式类型Mono和Flux的转换方法。")]),e._v(" "),t("p",[e._v("WebSecurityConfigurerAdapter")]),e._v(" "),t("p",[e._v("OncePerRequestFilter\n它能够确保在一次请求中只通过一次filter，而不需要重复的执行。")]),e._v(" "),t("h3",{attrs:{id:"mybits-mybits-plus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybits-mybits-plus"}},[e._v("#")]),e._v(" Mybits/Mybits-Plus")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("#{ }和${ }  区别如下：")]),e._v(" "),t("p",[e._v("1、#是预编译的方式，$是直接拼接；")]),e._v(" "),t("p",[e._v("2、#不需要关注数据类型，mybatis实现自动数据类型转换；$不做数据类型转换，需要自行判断数据类型；")]),e._v(" "),t("p",[e._v("3、#可以防止sql注入；$不能防止sql注入；")]),e._v(" "),t("p",[e._v("4、如果 parameterType 只有一个参数，默认情况下，#{ }中可以写任意的名字；${ }中只能用value来接收。")])])]),e._v(" "),t("h3",{attrs:{id:"服务间调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务间调用"}},[e._v("#")]),e._v(" 服务间调用")]),e._v(" "),t("p",[e._v("OpenFeign")]),e._v(" "),t("ul",[t("li",[e._v("导入依赖")]),e._v(" "),t("li",[e._v("开启注解 @EnableFeignClients\n"),t("ul",[t("li",[e._v("使用注解@FeignClient 定义feign客户端")]),e._v(" "),t("li")])]),e._v(" "),t("li",[e._v("编写调用接口")])]),e._v(" "),t("p",[e._v("@FeignClient")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("value属性指明被调用服务名")])]),e._v(" "),t("li",[t("p",[e._v("path属性设置请求路径前缀")])]),e._v(" "),t("li",[t("p",[e._v("contextId属性的作用当我们使用OpenFeign定义两个接口，他们的目标服务是同一个，需要使用contextId对其进行区分。")])]),e._v(" "),t("li",[t("p",[e._v("fallbackFactory属性设置请求错误回调工厂类")])])]),e._v(" "),t("h2",{attrs:{id:"seata-分布式事务解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seata-分布式事务解决方案"}},[e._v("#")]),e._v(" seata 分布式事务解决方案")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Transaction Coordinator(TC):  全局事务协调者，用来协调全局事务和各个分支事务（不同服务）的状态， 驱动全局事务和各个分支事务的回滚或提交。")])]),e._v(" "),t("li",[t("p",[e._v("Transaction Manager™:  事务管理者，业务层中用来开启/提交/回滚一个整体事务（在调用服务的方法中用注解开启事务）。")])]),e._v(" "),t("li",[t("p",[e._v("Resource Manager(RM):  资源管理者，一般指业务数据库代表了一个分支事务（Branch Transaction），管理分支事务与 TC 进行协调注册分支事务并且汇报分支事务的状态，驱动分支事务的提交或回滚。")])]),e._v(" "),t("li",[t("p",[e._v("分布式事务解决方案在项目中应用要谨慎再谨慎，除特定的数据强一致性场景外，能不用尽量就不要用，因为无论它们性能如何优越，一旦项目套上分布式事务，整体效率会几倍的下降，在高并发情况下弊端尤为明显。")])])]),e._v(" "),t("h2",{attrs:{id:"微服务的数据库设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务的数据库设计"}},[e._v("#")]),e._v(" 微服务的数据库设计")]),e._v(" "),t("ul",[t("li",[e._v("基本原则是每个服务都有自己单独的数据库，而且只有微服务本身可以访问这个数据库。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);