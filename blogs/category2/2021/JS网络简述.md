---
title: JS网络简述
date: 2021-5-16
tags:
 - tag4
categories: 
 - JS-node
---

# 网络

### 1.局域网和广域网

#### 1.1局域网

定义：局域网（Local Area Network）,简称：LAN，是指在某一区域内由多台计算机互联成的计算机组。

#### 1.2广域网

定义：广域网（Wide Area Network），简称：WAN，是一种跨越大的，地域性的计算机网络的集合。子网可以是局域网，也可以是广域网。

#### 1.3上网类型

(1)拨号上网PPPoE

(2)ISDN:俗称一线通

(3)ADSL:非对称数字用户线

(4)光纤上网：是指采用光纤取代铜芯电话线，通过光纤收发器、路由器和交换机接入Internet中。优点是：带宽独享、性能稳定、升级改造费用低、不受电磁干扰、损耗小、安全和保密性强以及传输距离长。

(5)无线上网：指不需要通过电话线或网络线，而是通过通信信号来连接Internet。

#### 1.4OSI参考模型

应用层

表示层

会话层

传输层

网络层

链路层

物理层

### 2.网址

#### 2.1IP

定义：指互联网协议。IP地址是IP协议提供的一种统一的地址格式，它为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。Internet上的每台主机（host）都有唯一的IP地址。IP协议就是使用这个地址在主机之间传递信息，这是Internet能够运行的基础。IP地址的长度是32位（共有2^32个IP地址），分位4段，每段8位，用十进制数字表示，每段数字范围0~255，段与段之间用逗号隔开。

IPv4：就是有4段数字，每段不超过255.

IPv6：采用128位地址长度。

TCP/IP协议：需要针对不同的网络进行不同的设置，且每一个节点一般需要一个“IP地址”，一个“子网掩码”，一个“默认网关”。

子网掩码：又叫网络掩码、地址掩码、自网络遮罩，它是一种用来指明一个IP地址的哪些位标识的是主机所在的子网，以及哪些位标识的是主机的位掩码。子网掩码不能单独存在，它必须结合IP地址一起使用。子网掩码只有一个作用，就是将某个IP地址划分为网络地址和主机地址两部分。

默认网关：一个用于 TCP/IP 协议的配置项，是一个可直接到达的 IP 路由器的 IP 地址。配置默认网关可以在 IP 路由表中创建一个默认路径。 一台主机可以有多个网关。默认网关的意思是一台主机如果找不到可用的网关，就把数据包发给默认指定的网关，由这个网关来处理数据包。

#### 2.2端口

(1)可以认为是计算机与外界通讯交流的出口。网络中面向连接服务和无连接服务的通信协议端口，是一种抽象的软件结构，包括一些数据结构和I/O（基本输入输出）缓冲区

(2)面向连接服务TCP协议和无连接服务UDP协议使用16bits端口号来表示和区别网络中的不同应用程序，网络层协议IP使用特定的协议号（TCP 6，UDP 17）来表示和区别传输层协议。

(3)常用的保留TCP端口号有：HTTP 80，FTP 20/21，Telnet 23，SMTP 25，DNS 53等。

(4)常用的保留UDP端口号有：DNS 53，BootP 67（server）/ 68（client），TFTP 69，SNMP 161等。

#### 2.3域名

网域，是由一串用点分隔的名字组成的Internet上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位（有时也指地理位置）网域名称系统（DNS，Domain Name System，有时也简称为域名）是因特网的一项核心服务，它作为可以将域名和IP地址相互映射的一个分布式数据库，能够使人更方便的访问互联网，而不用去记住能够被机器直接读取的IP地址数串。

(1)hosts:Hosts是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从Hosts文件中寻找对应的IP地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。

(2)VPN:即翻墙，在公用网络上建立专用网络，进行加密通讯。在企业网络中有广泛应用。VPN网关通过对数据包的加密和数据包目标地址的转换实现远程访问。VPN有多种分类方式，主要是按协议进行分类。VPN可通过服务器、硬件、软件等多种方式实现。

(3)CDN的全称是Content Delivery Network，即内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。

### 3协议

网络协议为计算机网络中进行数据交换而建立的规则、标准或约定的集合。

#### TCP/IP协议

作为互联网的基础协议，没有它就根本不可能上网，任何和互联网有关的操作都离不开TCP/IP协议。不过TCP/IP协议也是这三大协议中配置起来最麻烦的一个，单机上网还好，而通过局域网访问互联网的话，就要详细设置IP地址，网关，子网掩码，DNS服务器等参数。

(1)物理层：以太网 ，调制解调器 ，光纤

(2)数据链路层：Wi-Fi(IEEE 802.11) · WiMAX(IEEE 802.16) ·ATM

(3)网络层协议：IP (IPv4 · IPv6)

(4)传输层协议：

a.TCP：TCP是面向连接的通信协议，通过三次握手建立连接，通讯完成时要拆除连接，由于TCP是面向连接的所以只能用于端到端的通讯。

b.UDP：UDP是面向无连接的通讯协议，UDP数据包括目的端口号和源端口号信息，由于通讯不需要连接，所以可以实现广播发送。

(5)应用层协议：

a.FTP：是文件传输协议，一般上传下载用FTP服务，数据端口是20H，控制端口是21H。

b.DNS：Domain Name System，域名系统：万维网上作为域名和IP地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串。通过域名，最终得到该域名对应的IP地址的过程叫做域名解析（或主机名解析）。DNS协议运行在UDP协议之上，使用端口号53。

c.HTTP/HTTPS：是超文本传输协议，用于实现互联网中的WWW服务，使用端口80。

区别：　HTTPS和HTTP的区别主要如下：
　　1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
　　2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
　　3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
　　4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

d.SMTP：是简单邮件传输协议，用来控制信件的发送、中转，使用端口25。

e.POP3：是简单邮件传输协议，用来控制信件的接收

### 4.网络硬件

#### 网卡

​	计算机与外界局域网的连接是通过主机箱内插入一块网络接口板（或者是在笔记本电脑中插入一块PCMCIA卡）。网络接口板又称为通信适配器或网络适配器（network adapter）或网络接口卡NIC（Network Interface Card），但是更多的人愿意使用更为简单的名称“网卡”。

#### 网线

​	网线是连接局域网必不可少的。在局域网中常见的网线主要有双绞线、同轴电缆、光缆三种。 双绞线，是由许多对线组成的数据传输线。它的特点就是价格便宜，所以被广泛应用，如我们常见的电话线等。它是用来和RJ45水晶头相连的。

#### 路由器

​	路由器相当于一个共享器。
​	路由器是一种多端口设备，可以连接不同传输速率并运行于各种环境的局域网和广域网，也可以采用不同的协议。路由器属于OS I 模型的第三层。网络层指导从一个网段到另一个网段的数据传输，也能指导从一种网络向另一种网络的数据传输。过去，由于过多的注意第三层或更高层的数据，如协议或逻辑地址，路由器曾经比交换机和网桥的速度慢。因此，不像网桥和第二层交换机，路由器是依赖于协议的。在它们使用某种协议转发数据前，它们必须要被设计或配置成能识别该协议。
​	传统的独立式局域网路由器正慢慢地被支持路由功能的第三层交换机所替代。但路由器这个概念还是非常重要的。独立式路由器仍然是使用广域网技术连接远程用户的一种选择。

#### 交换机

​	交换机（switch）就是一种在通信系统中完成信息交换功能的设备。是一种基于MAC地址识别，能完成封装转发数据包功能的网络设备。交换机可以“学习”MAC地址，并把其存放在内部地址表中，通过在数据帧的始发者和目标接收者之间建立临时的交换路径，使数据帧直接由源地址到达目的地址。从广义上来看，网络交换机分为两种：广域网交换机和局域网交换机。广域网交换机主要应用于电信领域，提供通信用的基础平台。而局域网交换机则应用于局域网络，用于连接终端设备，如PC机及网络打印机等。

#### 交换机和路由器的区别

​	路由器可以给你的局域网自动分配IP，虚拟拨号，就像一个交通警察，指挥着你的电脑该往哪走，你自己不用操心那么多了。交换机只是用来分配网络数据的。
​	路由器在网络层，路由器根据IP地址寻址，路由器可以处理TCP/IP协议，交换机不可以。交换机在中继层，交换机根据MAC地址寻址。
​	路由器可以把一个IP分配给很多个主机使用，这些主机对外只表现出一个IP。交换机可以把很多主机连起来，这些主机对外各有各的IP。
​	路由器提供防火墙的服务，交换机不能提供该功能。集线器、交换机都是做端口扩展的，就是扩大局域网(通常都是以太网)的接入点，也就是能让局域网可以连进来更多的电脑。 路由器是用来做网间连接，也就是用来连接不同的网络。
​	路由器相当于邮局，把信投递到收件人地址，它的任务就完成了。但是信邮到了你们宿舍楼，而这个地址不是你一个人专享的，所以楼管王大爷还要负责把信给到你手里，他不会关心收件人地址，只看收件人姓名，然后打个内线电话叫你来取信。如果没有邮局，你没法向世界各地的漂亮妹子们发信，也没法从楼外的漂亮妹子那里收信。但是因为楼管王大爷的存在，你仍然可以通过他与同宿舍楼的好基友书信往来。所有邮局构成的系统，就是“广域网”，而你的宿舍楼，就是“局域网”，构建局域网是不需要路由器的。