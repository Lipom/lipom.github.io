
function $(id)
{
	return document.getElementById(id);
}
function isName(){
	var name = $('name');
	var a =name.value;
	if(isEmpty(name))
	{
		if(isNaN(a[0]))
		{

			if(a.length>=6 && a.length<=20){
				return true;
			}
			else
				{
					alert('用户名长度必需大于等于6个字符、小于等于20个字符');
					name.focus();
					return false;
				}
		}
		else 
			{ 
				alert('用户名不能以数字开头');
				name.focus();
				return false;
			}
	}
}
function isPassword() 
{
	var x = $('password');
	var password = x.value;
	if(isEmpty(x))
	{
		if(password.length>=6 && password.length<=10)
			{
				return true;
			}
		else
			{
				alert('密码长度必需大于等于6个字符、小于等于10个字符。');
				x.focus();
				return false;
			}
	}
}
function isEmail()
{
	var x = $('email');
	var y = x.value;
	var index1 = y.indexOf('@');
	var index2 = y.indexOf('.');
	//判空
	if(isEmpty(x))
	{
		//判断字符串是否存在
		if(index1!=-1||index2!=-1)
		{
			if(index1!=0)
			{
				if(Math.abs(index1-index2)!=1)
				{
					return true;
				}
				else
				{
					alert("邮箱格式错误,'@'和'.'之间至少间隔 1 个字符。");
					x.focus();
					return false;
				}
				if(y[i]=='@' && y[i+1]=='.')
				{
					alert('邮箱格式错误');
					x.focus();
					return false;
				}
			}
			else
			{
				alert("邮箱格式错误,'@'不能放在首位");
				x.focus();
				return false;
			}
		}
		else
		{
			alert("邮箱格式错误！缺少'@'或'.'");
			x.focus();
			return false;
		}
		return true;
	}
}
function isEmpty(x)
{
	var y = x.value;
	if(y=='' || y==null)
	{
		alert('你的输入不能为空！');
		x.focus();
		return false;
	}
	return true;
}

function denglu()
{
	var name=$('yonghu_name');
	var password=$('password');
	var email=$('email');
	yonghu = name.value;
	// isEmpty(name);
	// isEmpty(password);
	// isEmpty(email);
	alert("欢迎用户" + yonghu +"登录chenjiang的网站！");
	window.location.href = "index2.html";
}
