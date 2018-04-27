# module_plateform

## git clone https://git.coding.net/wangqi0902vip/module_plateform.git
## npm install
## node bin/www


# 开发事项
## 动态加载路由文件：Nodejs需要手动加载路由文件，如果一个个添加，比较麻烦。因此写了一个Nodejs动态加载路由，Nodejs遍历routes目录，动态加载Nodejs路由工具 active_route.js
## 动态注册路由：以get、post开头，如果不是get\post开头注册成all(get\post\delete)


