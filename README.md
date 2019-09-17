# 记一次简单的geetest验证码js分析(以bilibili为例)
## 第一步：分析传递参数
![image](https://github.com/jjolalala/captcha/blob/master/images/update_data.jpg)
主要提交challenge、gt、w三个参数，前两个由请求得到，参数w是加密后的结果
## 第二步获取：challenhe、gt
![image](https://github.com/jjolalala/captcha/blob/master/images/challenge_gt.jpg)
浏览器刷新清空抓包数据，在调试面板搜索栏搜索captcha(或前几个字母)
##调试技巧
![image](https://github.com/jjolalala/captcha/blob/master/images/some_explainjpg.jpg)
![image](https://github.com/jjolalala/captcha/blob/master/images/other_some_info.jpg)

