# 记一次简单的geetest验证码js分析(以bilibili为例)
## 分析传递参数
![image](https://github.com/jjolalala/captcha/blob/master/images/update_data.jpg)
主要提交challenge、gt、w三个参数，前两个由请求得到，参数w是加密后的结果
## 获取challenhe、gt
![image](https://github.com/jjolalala/captcha/blob/master/images/challenge_gt.jpg)
浏览器刷新清空抓包数据，在调试面板搜索栏搜索captcha(或前几个字母)
## 调试技巧
![image](https://github.com/jjolalala/captcha/blob/master/images/some_explainjpg.jpg)
![image](https://github.com/jjolalala/captcha/blob/master/images/other_some_info.jpg)

## 通过搜索常见加密关键字,例如BASE64，调试js
![image](https://github.com/jjolalala/captcha/blob/master/images/encry.jpg)
如图所示，字典c包含了最后所有传递的参数，通过一步一步往上寻找加密参数来源，找到字典i,如下图
![image](https://github.com/jjolalala/captcha/blob/master/images/trace.jpg)
