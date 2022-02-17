(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{630:function(a,t,o){"use strict";o.r(t);var s=o(13),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h3",{attrs:{id:"概念"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),o("p",[a._v("Web components 的一个重要属性是封装——可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。其中，Shadow DOM 接口是关键所在，它可以将一个隐藏的、独立的 DOM 附加到一个元素上。")]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("Custom elements（自定义元素）：")]),a._v(" 一组JavaScript API，允许您定义custom elements及其行为，然后可以在您的用户界面中按照需要使用它们。")]),a._v(" "),o("li",[o("strong",[a._v("Shadow DOM（影子DOM）：")]),a._v(" 一组JavaScript API，用于将封装的“影子”DOM树附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。")]),a._v(" "),o("li",[o("strong",[a._v("HTML templates（HTML模板）：")]),a._v(" < template >和 < slot >元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。")])]),a._v(" "),o("h3",{attrs:{id:"作用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[a._v("#")]),a._v(" 作用")]),a._v(" "),o("p",[a._v("Shadow-dom 是游离在 DOM 树之外的节点树，但是他的创建基于普通 DOM 元素，并且创建后的 Shadow-dom 节点可以从界面上直观的看到。更重要的是，Shadow-dom 具有良好的密封性。")]),a._v(" "),o("img",{staticStyle:{zoom:"50%"},attrs:{src:"C:\\Users\\yyh\\AppData\\Roaming\\Typora\\typora-user-images\\image-20220216180148356.png",alt:"image-20220216180148356"}}),a._v(" "),o("p",[a._v("Shadow host：一个常规 DOM节点，Shadow DOM 会被附加到这个节点上。")]),a._v(" "),o("p",[a._v("Shadow tree：Shadow DOM内部的DOM树。")]),a._v(" "),o("p",[a._v("Shadow boundary：Shadow DOM结束的地方，也是常规 DOM开始的地方。")]),a._v(" "),o("p",[a._v("Shadow root: Shadow tree的根节点")]),a._v(" "),o("h3",{attrs:{id:"支持shadowdom元素的标签-18个"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#支持shadowdom元素的标签-18个"}},[a._v("#")]),a._v(" 支持shadowDOM元素的标签(18个)")]),a._v(" "),o("p",[a._v("article aside blockquote body div footer h1-h6 header main nav p section span")]),a._v(" "),o("h3",{attrs:{id:"使用api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用api"}},[a._v("#")]),a._v(" 使用API")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("语法")]),a._v(" "),o("p",[a._v("var shadowroot = element.attachShadow(shadowRootInit);")])]),a._v(" "),o("li",[o("p",[a._v("参数")]),a._v(" "),o("p",[a._v("shadowRootInit")]),a._v(" "),o("p",[a._v("mode 模式 : 指定 Shadow DOM 树封装模式的字符串")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v(" open : shadow root元素可以从js外部访问根节点\n")])])]),o("p",[a._v("element.shadowRoot; // 返回一个ShadowRoot对象")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[a._v(" closed 拒绝从js外部访问关闭的shadow root节点\n")])])]),o("p",[a._v("element.shadowRoot; // 返回null")])]),a._v(" "),o("li",[o("p",[a._v("返回值")]),a._v(" "),o("p",[a._v("返回一个 ShadowRoot 对象或者 null。")])]),a._v(" "),o("li",[o("p",[a._v("异常\t说明")]),a._v(" "),o("p",[o("strong",[a._v("InvalidStateError(无效状态错误):")]),a._v(" 添加的元素已经是一个shadow host（影子主机）")]),a._v(" "),o("p",[o("strong",[a._v("NotSupportedError(不被支持错误):")]),a._v(" 应该添加 HTML 元素的命名空间之外的shadow root, 或者这个元素不能有其他shadow挂载到它上面 .")])])]),a._v(" "),o("h3",{attrs:{id:"focus-within"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#focus-within"}},[a._v("#")]),a._v(" focus-within")]),a._v(" "),o("p",[a._v("focus-within 是一个CSS 伪类 ，表示一个元素获得焦点，或该元素的后代元素获得焦点。也就是说即便是Shadow DOM，当其获得焦点时，也会使得外部的父级DOM元素上的focus-within生效。")]),a._v(" "),o("h3",{attrs:{id:"特点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" 特点")]),a._v(" "),o("h4",{attrs:{id:"_1-普通dom元素失效"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通dom元素失效"}},[a._v("#")]),a._v(" 1.普通DOM元素失效")]),a._v(" "),o("p",[a._v("当给一个普通元素附加Shadow DOM后，其原本所包含的所有普通DOM元素都会失效，一个普通元素下不会同时存在Shadow DOM 和 普通 DOM。虽然仍然可以使用js获取到这部分普通元素，但是浏览器不会将其渲染到页面中。")]),a._v(" "),o("h4",{attrs:{id:"_2-样式隔离"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-样式隔离"}},[a._v("#")]),a._v(" 2.样式隔离")]),a._v(" "),o("ol",[o("li",[a._v("外部CSS（包含style和外链资源）中被应用在Shadow Host元素的样式中（包括继承来的样式）能被继承的属性都会被Shadow DOM中的元素继承，通过选择器无法直接对Shadow DOM的元素应用样式。")]),a._v(" "),o("li",[a._v("Shadow DOM中style或者引入的CSS不会对外部元素造成影响")])]),a._v(" "),o("h4",{attrs:{id:"_3-事件委托"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件委托"}},[a._v("#")]),a._v(" 3.事件委托")]),a._v(" "),o("p",[a._v("如果在 Shadow DOM 的外部采用了事件委托机制，则无法通过"),o("code",[a._v("Event.target")]),a._v("准确的判断shadowDOM内部目标事件元素")]),a._v(" "),o("h3",{attrs:{id:"面向-react-的-shadowview-组件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#面向-react-的-shadowview-组件"}},[a._v("#")]),a._v(" 面向 React 的 ShadowView 组件")]),a._v(" "),o("p",[a._v("npm i shadow-view --save")]),a._v(" "),o("h3",{attrs:{id:"参考链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),o("p",[o("a",{attrs:{href:"https://juejin.cn/post/6979489951108825095",target:"_blank",rel:"noopener noreferrer"}},[a._v("风儿吹呀吹——稀土掘金"),o("OutboundLink")],1)]),a._v(" "),o("p",[o("a",{attrs:{href:"https://developer.aliyun.com/article/717933#slide-9",target:"_blank",rel:"noopener noreferrer"}},[a._v("houfeng——开发者社区"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);