(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{577:function(s,a,t){"use strict";t.r(a);var n=t(13),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"javascript基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript基础知识"}},[s._v("#")]),s._v(" JavaScript基础知识")]),s._v(" "),t("p",[s._v("1.定义：JavaScript是一个弱类型，解释型语言。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("nbsp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("字宽空格，容易受字体影响\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ensp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("半角空格，"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("个中文宽度，不受字体影响\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("emsp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("全角空格，"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个中文宽度，不受字体影响\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("p",[s._v("早期所有的变量都是window的属性")]),s._v(" "),t("p",[s._v("当调用window的属性和方法时一般可以省略window")]),s._v(" "),t("p",[s._v("后来改用var 定义来区分是变量还是window的属性")]),s._v(" "),t("p",[s._v("ES6以后禁止将window属性和变量绑定，严格模式和模块开发将会抵制这种写法")]),s._v(" "),t("p",[t("strong",[s._v("变量命名")])]),s._v(" "),t("p",[s._v("1、变量名必须字母或者下划线或者$起头，不能以数字或其他符号起头")]),s._v(" "),t("p",[s._v("2、变量名不能使用关键词和保留字,不能与window属性和方法同名")]),s._v(" "),t("p",[s._v("3、变量使用驼峰式命名getObjectName,如果是临时变量或者参数可以使用 _起头  例如 ： _name")]),s._v(" "),t("p",[s._v("4、变量命名和常量命名区分变量命名不使用全部大写，常量命名必须使用全大写，_区分  EVENT_ID")]),s._v(" "),t("p",[s._v("​\t注意：常量不能重新赋值，定义后不能改变")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_______"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 7'_______'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 6")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h3",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),t("h5",{attrs:{id:"_5种基础类型和1种复杂类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5种基础类型和1种复杂类型"}},[s._v("#")]),s._v(" 5种基础类型和1种复杂类型")]),s._v(" "),t("p",[s._v("string")]),s._v(" "),t("p",[s._v("number")]),s._v(" "),t("p",[s._v("boolean")]),s._v(" "),t("p",[s._v("undefined")]),s._v(" "),t("p",[s._v("null")]),s._v(" "),t("p",[s._v("Symbol (ES6)")]),s._v(" "),t("p",[s._v("0bject")]),s._v(" "),t("h5",{attrs:{id:"单引号-双引号-反引号的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单引号-双引号-反引号的区别"}},[s._v("#")]),s._v(" 单引号，双引号，反引号的区别")]),s._v(" "),t("p",[s._v("1.单引号，双引号中不能换行")]),s._v(" "),t("p",[s._v("2.单引号，双引号中不能解析变量")]),s._v(" "),t("p",[s._v("​\t"),t("strong",[s._v("反引号可以解析变量")])]),s._v(" "),t("p",[s._v("​\t\t在反引号中使用***${变量}***来包裹变量会解析变量输出变量中存储的数据，还可以执行计算表达式")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开辟一个空间，定义这个空间，如果这个空间已经开辟，沿用以前的结果，如果没有开辟，开辟这个空间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" w "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开辟一个空间，起名为w,不管以前有没有相同的名称空间，全部赋值为undefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//空值，实际上null的类型属于对象型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//主要用于清除对象的应用关系，更新引用关系列表--》对象的时候详说")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h5",{attrs:{id:"undefined和null的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#undefined和null的区别"}},[s._v("#")]),s._v(" undefined和null的区别：")]),s._v(" "),t("p",[s._v("undefined:一般用于定义时使用，做起始未赋值的标识")]),s._v(" "),t("p",[s._v("null:作用是清楚引用关系，所以只用于赋值为对象的变量清空。")]),s._v(" "),t("h5",{attrs:{id:"typeof-用于判断变量值的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typeof-用于判断变量值的类型"}},[s._v("#")]),s._v(" typeof()：用于判断变量值的类型")]),s._v(" "),t("h3",{attrs:{id:"数据类型的转化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型的转化"}},[s._v("#")]),s._v(" 数据类型的转化")]),s._v(" "),t("h4",{attrs:{id:"_1-所有类型转化为字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-所有类型转化为字符串"}},[s._v("#")]),s._v(" 1.所有类型转化为字符串：")]),s._v(" "),t("p",[t("strong",[s._v("a.强制转换法")]),s._v("：所有"),t("strong",[s._v("隐式转换")]),s._v("都使用强制转换法（构造函数转换法）")]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ol",[t("li",[s._v("所有对象转换为字符串时都是[object object]")]),s._v(" "),t("li",[s._v("所有对象的属性如果不是字符串，都会隐式转换为字符串")]),s._v(" "),t("li",[s._v("所有数组强制转换为字符串，结果会将数组中的所有值用逗号隔开的字符串形式。")])]),s._v(" "),t("p",[t("strong",[s._v("b.toString() 方法")])]),s._v(" "),t("ol",[t("li",[s._v("将其他数值转换为字符串类型")]),s._v(" "),t("li",[s._v("加参数（2~36之间的整数）：会将数值转换为字符串进制，参数为小数时，会向下取整floor")])]),s._v(" "),t("p",[s._v("**c.toFixed()：**保留几位小数，并且四舍五入")]),s._v(" "),t("p",[t("strong",[s._v("d.+=“”加等一个空的字符串")])]),s._v(" "),t("h5",{attrs:{id:"string和tostring-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string和tostring-的区别"}},[s._v("#")]),s._v(" String和toString()的区别")]),s._v(" "),t("p",[s._v("toString()没有办法转换null和undefined，转换就会报错")]),s._v(" "),t("p",[s._v("String转换null和undefined就直接转换")]),s._v(" "),t("h4",{attrs:{id:"_2-将任何内容转换为数值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-将任何内容转换为数值"}},[s._v("#")]),s._v(" 2.将任何内容转换为数值")]),s._v(" "),t("p",[t("strong",[s._v("a.强制转换法")]),s._v("：Number(),也称构造函数转换法（隐式转换）")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN  非数值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a10'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0;")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组转数值时，先转换为字符串，再转换为数值")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("b.parseInt() 按进制转换整数")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10a'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a10'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN  ---\x3e 因为true不是字符串，所以会先将true隐式转换为字符串，然后再转换为数值，‘true’无法当作数值，所以转化结束为NaN")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("​\tparseInt(参数1，参数2)还可以按进制转换为整数")]),s._v(" "),t("p",[s._v("​\t参数1：要转换的值")]),s._v(" "),t("p",[s._v("​\t参数2：进制（把 参数1 当作 参数2 进制字符串转换为十进制）")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FF'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//parseInt(a,16) ->255")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("c.  parseFloat() 转换为十进制小数")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12.34'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//12.34")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-所以类型转换为布尔值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-所以类型转换为布尔值"}},[s._v("#")]),s._v(" 3.所以类型转换为布尔值")]),s._v(" "),t("p",[s._v("“” 0 false null undefined NaN 强制转换都是false")]),s._v(" "),t("p",[s._v("其他所有转换都为 true")]),s._v(" "),t("h4",{attrs:{id:"_4-所有类型转换为对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-所有类型转换为对象"}},[s._v("#")]),s._v(" 4.所有类型转换为对象")]),s._v(" "),t("p",[s._v("字符串、数值、布尔值转为对象为字符串、数值、布尔值对象")]),s._v(" "),t("h3",{attrs:{id:"为什么要使用href-javascript-void-o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用href-javascript-void-o"}},[s._v("#")]),s._v(' 为什么要使用href=" javascript:void(O);"')]),s._v(" "),t("p",[s._v("javascript是伪协议。表示url的内容通过javascript执行。 void(0)表示不作任何操作，这样会防止链接跳转到其他页面。这么做往往是为了保留链接的样式，但不")]),s._v(" "),t("p",[s._v("让链接执行实际操作，")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a href"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript: void(0)"')]),s._v(" onClick"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"window.open()"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("点击链接后，页面不动，只打开链接\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a href"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(" onclick"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript:return false;"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("作用一样，但是不同浏览器会有差异\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v('href=" javascript:void(0);”与href=”#"的区别')])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a href"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"javascript.void(0)"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("点击"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//点击链接后不会回到网页顶部<a href="#">点击</a> //点击后会回到网面顶部"#"其实是包含了位置信息，例如默认的锚点是 #top 也就是网页的上端//而javascript:void(0)仅仅表示一个死链接这就是为什么有的时候页面很长浏览链接明明是#可是跳动到了页首//而javascript:void(0)则不是如此所以调用脚本的时候最好用void(O)')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"isnan-和number-isnan-和object-is"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isnan-和number-isnan-和object-is"}},[s._v("#")]),s._v(" isNaN()和Number.isNaN()和Object.is()")]),s._v(" "),t("p",[s._v("isNaN():判断是否是数值")]),s._v(" "),t("p",[s._v("Number.isNaN():判断是否是数值，然后判断是否是数值型的NaN")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNaN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true 隐式转换为数值，然后判断是否是NaNconsole.log(Number.isNaN(a)) //false 不转换直接判断，只有数值型的NaN才是true，其他都是false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Object.is():与===比较 相似")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Object"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("is")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//falseconsloe.log(Object.is(Number(a),NaN)) //trueconsole.log(Object.is(a,NaN)) //false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);