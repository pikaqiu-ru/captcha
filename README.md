# 记一次简单的geetest验证码js分析
## 第一步分析传递参数
![image](https://github.com/jjolalala/captcha/blob/master/images/update_data.jpg)
主要提交challenge、gt、w三个参数，前两个由请求得到，参数w是加密后的参数
