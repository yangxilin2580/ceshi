 		var button=document.getElementById('btn')
		var username=document.getElementById('username')
		var shoukuanfang=document.getElementById("shoukuanfang")
		var yh=document.getElementsByClassName("yh")[0];
		var spanList=document.getElementsByTagName("span")
		// 获取焦点时显示div
		    shoukuanfang.onfocus=function(){
		    	yh.style.display="block"
		    }
		var zgyh=document.getElementById("zgyh")
		var zgyhI=zgyh.getElementsByTagName("i")[0];
		// 当点击zgyh时将内容输入到文本框中：
			zgyh.onclick=function(){
				shoukuanfang.value=zgyhI.innerHTML;
			}
		var gsyh=document.getElementById("gsyh")
		var gsyhI=gsyh.getElementsByTagName("i")[0];
			gsyh.onclick=function(){
				shoukuanfang.value=gsyhI.innerHTML;
			}	
		var kahao=document.getElementById('kahao')
		var kahaosp=document.getElementById("kahaosp")
		      // 获取焦点时
		    kahao.onfocus=function(){
		    }
		      // 失去焦点时
		    kahao.onblur=function(){
		      	if(kahao.value.length<16||kahao.value.length>19){
		      		kahaosp.innerHTML="请输入大于等于16并且小于等于19的值"
		      		tanchukuang.style.display="none"
		      	}
		    }
		    // 弹出框与输入内容同步：
		var tanchukuang=document.getElementById("tanchukuang")
		 	kahao.onkeyup=function(){
		 	 	tanchukuang.style.display="block"
		 	 	tanchukuang.innerHTML=kahao.value
		    }
		    // 付款金额与总金额同步：
		// var  fukuan=document.getElementById("fukuan")
		var  fkerror=document.getElementById("fkerror")
		var  fuwufei=document.getElementById("fuwufei")
		var  zonge=document.getElementById("zonge")
		var  fuwufei=document.getElementById("fuwufei")
		var  mianfei=document.getElementById("mianfei")
		fukuan.onkeyup=function(){
			if(fukuan.value<50000){
				mianfei.innerHTML=50000-fukuan.value
			}
			else{
				fkerror=document.getElementById("fkerror")
				fkerror.style.display="block"
			}
			fuwufei.innerHTML=fukuan.value
			zonge.innerHTML=Number(zonge.innerHTML)+Number(fukuan.value)
		}
			// // 判断不能输入非数字值：
			// fukuan.onfocus=function(){
			// 	if(fukuan.value==NaN){
			// 		fkerror.innerHTML="请输入数字"
			// 		funkuan.value=""
			// 	}
			// 	else{    /*同步更新服务费和总额*/
					
			// 	}
			// }















	