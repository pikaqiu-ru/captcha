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

## 搜索常见加密关键字,例如BASE64，调试js
![image](https://github.com/jjolalala/captcha/blob/master/images/encry.jpg)
如图所示，字典c包含了最后所有传递的参数，通过一步一步往上寻找加密参数来源，找到字典i,如下图
![image](https://github.com/jjolalala/captcha/blob/master/images/trace.jpg)

# 理清顺序(记住gt,challange两个参数)
## 1：鼠标轨迹
  如下图，_变量
  ![image](https://github.com/jjolalala/captcha/blob/master/images/trace_func.jpg)
  可通过一步一步调试将鼠标轨迹函数抠出来，主要是要活用f9,f10,f11,断点跳跃几个按钮如下图
  ![image](https://github.com/jjolalala/captcha/blob/master/images/skills.jpg)
  轨迹处理函数为main函数，js代码见trace_process文件夹，trace为滑动轨迹，b为固定数值数组
  ，c是通过获取的gt,challange参数发起请求请求得到后的返回值（如下图）
  ![image](https://github.com/jjolalala/captcha/blob/master/images/s_data.jpg)
 ，轨迹算法可选用多次正确滑动的的轨迹（不要只用同样的轨迹，会被后台AI识别导致失败），也可以自己编写轨迹算法
 
## 处理字典i
![image](https://github.com/jjolalala/captcha/blob/master/images/i.jpg)
n为滑块滑完的时间，值trace[-1][-1]
userresponse参数有两个，为t和e,e为challane,t为trace[-1][0]如下图
![image](https://github.com/jjolalala/captcha/blob/master/images/t_n.jpg)
userresponse的代码见userresponse_info.js
i还有个隐蔽的参数rp，为md5算法生成参数为gt+challange+passtime合成的字符串，可以取其参数放入fiddler的textWizard自带小插件测试结果
## rsa非对称加密
主要关键参数，有模数和指数，两个都为固定值，加密文本为
var m ="00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81";
	var e = "1001";
	var text = (65536 * (1 + Math.random()) | 0)["toString"](16)["substring"](1) + (65536 * (1 + Math.random()) | 0)["toString"](16)["substring"](1) + (65536 * (1 + Math.random()) | 0)["toString"](16)["substring"](1) + (65536 * (1 + Math.random()) | 0)["toString"](16)["substring"](1);
  实现方式可参考http://www-cs-students.stanford.edu/~tjw/jsbn/rsa.html源码
  ## aes对称加密
  参数两个i和rsa加密的text，
  ## base64
   参数一个，值为aes加密结果，js代码见base_info.js
   # 自此完毕
  

