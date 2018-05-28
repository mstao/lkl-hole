# 一言一诗一心境

## 深大的树洞2.0 (小程序 + 后端)

>本仓库是深大的树洞微信小程序对应的开源仓库，旨在分享微信小程序的开发经验。

本仓库微信小程序Fork自
[微信小程序 - 深大的树洞 2.0 ](https://github.com/jas0ncn/szushudong)，感谢原作者对小程序开发的技术分享。

同时，请注意本仓库的开源协议为 GPL，这意味着你拥有运行、复制、修改、发行和传播该软件的自由，但是你修改后的软件本身也受 GPL 约束，你必须开放源代码。

后端实现采用Java编写，结合Dubbo进行服务调用。

## 编译运行

### 后端编译运行

后端使用maven进行构建，编译需要安装maven。

进入到**hole-server**文件夹，执行以下命令：

```
mvn clean install
```
构建完毕后，进入到**hole-service**文件夹，执行以下命令：

```
java -jar hole-service.jar &
```
开启Dubbo服务，服务开启后，接下来将编译后的**hole-api-xx.war**部署到Tomcat后启动运行。

对于Linux平台开启Dubbo服务方式，推荐编写shell脚本来开启服务。

## 开发环境

小程序开发环境请参考：

[点我，查看](https://github.com/mstao/lkl-hole/blob/master/hole-client/README.md)

后端开发环境：

- JDK 1.8
- MySQL 5.7
- Redis 4.2
- Zookeeper-3.4.10
- Dubbo 2.6.0

### Dubbo管控台安装配置

本仓库包含编译好的Dubbo-Admin的war包，放在hole-res文件夹下，自行安装。

## 开源协议
查看 [LICENSE](https://github.com/mstao/lkl-hole/blob/master/LICENSE)






