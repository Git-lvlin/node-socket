// 一旦安装了Socket.IO服务器库，就可以初始化服务器了
const httpServer = require("http").createServer();//去socket官网复制过来的
const io = require("socket.io")(httpServer, {
  // 跨域问题处理
  // 跨域问题处理选项
  cors: {
    origin: "http://localhost:8006",//后台管理系统地址
    methods: ["GET", "POST"]
  }
});

//有人连接我时触发
io.on("connection", (socket) => {
    console.log('有人连接我成功了')
    //接收数据时一定要放在里面,而且用socket监听
    socket.on('data',oredr=>{//服务器发来的信息
        io.emit('server',oredr)//发送给后台管理系统的信息
    })
});

httpServer.listen(3000, ()=>{
    console.log('启动一台socket服务')
});