(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{386:function(t,r,a){"use strict";a.r(r);var e=a(25),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"区块链知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区块链知识点"}},[t._v("#")]),t._v(" 区块链知识点")]),t._v(" "),a("h3",{attrs:{id:"对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[t._v("#")]),t._v(" 对称加密")]),t._v(" "),a("p",[t._v("通过一把密钥加密信息，再通过同一把密钥解密信息，从始至终加密解密用的都是同一把密钥，因此成为对称加密。")]),t._v(" "),a("h3",{attrs:{id:"非对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[t._v("#")]),t._v(" 非对称加密")]),t._v(" "),a("p",[t._v("每个人都有两把独一无二的密钥：公钥和私钥。"),a("br"),t._v("\n公钥：可公开的"),a("br"),t._v("\n私钥：只能自己知道"),a("br"),t._v("\n·明文A对应的哈希值为H(A),那么，通过A可以算出H(A)，而通过H(A)无法逆推出A。"),a("br"),t._v("\n·如果明文A不等于明文B，那么H(A)不等于H(B);\n·如果对明文A做了任何篡改，那么，计算出的哈希值与原H(A)完全不一样。")]),t._v(" "),a("p",[t._v("加密方式： MD5,SHA1,SHA256,SHA512;")]),t._v(" "),a("p",[t._v("仍然以“比卡丘借给熊本熊10块钱”为例，我们来看看比卡丘具体是怎样向熊本熊的地址打钱的。")]),t._v(" "),a("p",[t._v("1 比卡丘对明文 “比卡丘 → 熊本熊：10円” 进行哈希加密，得到一个64位的字符串；")]),t._v(" "),a("p",[t._v("2 比卡丘用自己的私钥对这个字符串再次加密，获得另一个字符串，这叫做“数字签名”；")]),t._v(" "),a("p",[t._v("3 比卡丘把以下交易信息打包发给熊本熊，并广播给全网记账节点：此次交易明文、比卡丘的公钥和数字签名；")]),t._v(" "),a("p",[t._v("4 熊本熊和其他节点收到这条打包消息；")]),t._v(" "),a("p",[t._v("5 熊本熊和其他节点对明文进行哈希计算，得到哈希值字符串H(A)；")]),t._v(" "),a("p",[t._v("6 熊本熊和其他节点用比卡丘的公钥解密数字签名，得到字符串H(B)；")]),t._v(" "),a("p",[t._v("7 熊本熊和其他节点验证 H(A)＝ H(B)，交易信息为真；")]),t._v(" "),a("p",[t._v("8 交易完成。")]),t._v(" "),a("p",[t._v("比卡丘的公钥能够解开私钥加密过的数字签名，证明了这个公钥和私钥是一对，而且都属于比卡丘，这条交易信息是比卡丘创建的：也就是说，熊本熊欠的是比卡丘的钱，而不是可达鸭还是其他谁的钱；而字符串 H(A)＝ H(B)，则说明在区块链网络中传递时，交易信息未被篡改。")]),t._v(" "),a("h3",{attrs:{id:"pow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pow"}},[t._v("#")]),t._v(" POW")]),t._v(" "),a("p",[t._v("证明机制：工作量证明")]),t._v(" "),a("h3",{attrs:{id:"密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密钥"}},[t._v("#")]),t._v(" 密钥")]),t._v(" "),a("p",[t._v("私钥：公钥 =》 钱包地址， 1：1 =》1"),a("br"),t._v("\n生成一个钱包地址，就会生成一对公钥和私钥，公钥公布全网，生成钱包地址。"),a("br"),t._v("\n只能从私钥推地址，不能从地址反推私钥。"),a("br"),t._v("\n私钥生成签名，为交易署名"),a("br"),t._v("\n地址")]),t._v(" "),a("p",[t._v("notice：公钥跟私钥是成对的，公钥由私钥计算而来，地址则通过公钥进一步计算而来。但注意一点：地址不是公钥")]),t._v(" "),a("p",[t._v("助记词：私钥的另一种表现形式，使用助记词也可以获得对钱包的完全掌控权。")]),t._v(" "),a("h3",{attrs:{id:"keystore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keystore"}},[t._v("#")]),t._v(" keystore")]),t._v(" "),a("p",[t._v("keystore的本质是加密后的私钥，Keystore必须配合钱包密码来使用。")]),t._v(" "),a("p",[t._v("用途：在导入钱包的时候，选择官方钱包，输入 keystore 和密码，就能进入钱包了。需要说明的是，这和用私钥或助记词导入钱包不一样，用私钥或助记词导入钱包，不需要知道原密码，即可直接重置密码。")]),t._v(" "),a("p",[t._v("结语：在现实世界中，如果你的银行卡丢了，密码忘了，可以去银行帮你找回，你的钱还是你的，这是中心化的优势。但在去中心化的区块链世界，一旦你的钱包信息丢了，就没人能够帮你找回了，就算是钱包公司也不能。")]),t._v(" "),a("p",[t._v("因此，要保护好钱包信息，不要通过网络传输你的“私钥，助记词，密码，keystore”（除了地址，其他都不要传）；不要把你的“私钥，助记词，密码，keystore”保存在联网的设备上。")]),t._v(" "),a("h3",{attrs:{id:"比特币采用merkle-tree储存交易（默克尔树）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比特币采用merkle-tree储存交易（默克尔树）"}},[t._v("#")]),t._v(" 比特币采用Merkle tree储存交易（默克尔树）")]),t._v(" "),a("p",[t._v("1.Merkle tree使用hash pointer，保障了区块的不可篡改性；"),a("br"),t._v("\n2.提供Merkle proof，全节点可以向轻节点证明区块中打包了某个特定交易")]),t._v(" "),a("h3",{attrs:{id:"区块链应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区块链应用场景"}},[t._v("#")]),t._v(" 区块链应用场景")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、信息共享  \n解决痛点：解决信息不对称导致的效率低下问题  \n运用区块链的特性：数据可靠的一致性  \n典型案例：头条找人  \n2、签证证明  \n解决痛点：解决传统公 证流程复杂的问题\n运用区块链的特性：数据不可篡改\n典型案例：版权保护\n3、数字资产\n解决痛点：资产流通不灵活\n运用区块链的特性：数据不可更改和可编程性\n典型案例：黄金红包\n4、物流链\n解决痛点：物流链上各点信息孤立，假货泛滥\n运用区块链的特性：公开透明、可溯源\n典型案例：菜鸟网络\n4、供应链金融\n解决痛点：中小企业规模小、信用低，融资困难\n运用区块链的特性：数据不可篡改、不可抵赖，公开透明\n典型案例：蚂蚁金服\n6、跨界支付\n解决痛点：效率低、费用高，P2P\n运用区块链的特性：去中介、可溯源\n典型案例：Libra\n7、代币\n解决痛点：中心化带来的货币滥发、中介欺诈、中介瘫痪等\n运用区块链的特性：区块链天然属性\n典型案例：Libra、比特币\n")])])]),a("h3",{attrs:{id:"zk-rollup-optimistic-rollup-以太坊重要的扩展方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zk-rollup-optimistic-rollup-以太坊重要的扩展方向"}},[t._v("#")]),t._v(" ZK Rollup && Optimistic Rollup(以太坊重要的扩展方向)")]),t._v(" "),a("h4",{attrs:{id:"zkroolup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zkroolup"}},[t._v("#")]),t._v(" zkRoolup")]),t._v(" "),a("h4",{attrs:{id:"optimistic-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimistic-rollup"}},[t._v("#")]),t._v(" Optimistic Rollup")]),t._v(" "),a("h3",{attrs:{id:"_6-16-开会小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-16-开会小结"}},[t._v("#")]),t._v(" 6.16 开会小结")]),t._v(" "),a("p",[t._v("WEELINK（服务ETH生态，跨链，作为以太L2的扩展）\n1、pos+pow\n2、私有节点，个人节点，轻节点向云节点注册（信息交互）\n3、weeverse=》NFT=》 defi\n4、衔接生态：cosmos+eth+bsc")]),t._v(" "),a("p",[t._v("关注点：\n1、跨链，L2扩容\n2、半热更新\n3、语义网")]),t._v(" "),a("p",[t._v("技术理解力+产品设计能力+商业模型")])])}),[],!1,null,null,null);r.default=s.exports}}]);