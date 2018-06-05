window.onload=function(){
	var oDiv=document.getElementById('div2');
	var aLi=oDiv.getElementsByTagName('li');
	var aA=oDiv.getElementsByTagName('a');//数组
	var oText=document.getElementById('cost');
	var oImg=document.getElementById('a2');
	//第一次点击
	oImg.onclick=function(){//点击事件
		oDiv.style.display='block';//出现选择框
	}
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;//赋予每个a标签index属性，该属性为a的序号
		aA[i].onclick=function(){//点击事件，第二次点击
			if(this.index==0){
				window.local_count = window.localStorage.getItem('COUNT')==0 //计数
				window.localStorage.setItem('COUNT', local_count++);//计数
				if(local_count %2==1)//判断点击次数是否为2
				{	
					for(var i=0;i<aA.length;i++){
						aA[i].className='a1';//所有a标签样式变为a1
					}
					this.className='active';
				}
				else{
					oText.innerHTML=this.text+'&nbsp;';
			        oDiv.style.display="none";//值赋到框框里
			        window.localStorage.removeItem('COUNT');
				}	
			}
			else if(this.index==1){
				window.local_count = window.localStorage.getItem('COUNT')==0 //计数
				window.localStorage.setItem('COUNT', local_count++);
				if(local_count %2==1)
				{	
					for(var i=0;i<aA.length;i++){
						aA[i].className='a1';
					}
					this.className='active';
				}
				else{
					oText.innerHTML=this.text+'&nbsp;';
			        oDiv.style.display="none";
			        window.localStorage.removeItem('COUNT');
			        this.href='xuefei.html';
				}	
			}
			else if(this.index==2){
				window.local_count = window.localStorage.getItem('COUNT')==0 //计数
				window.localStorage.setItem('COUNT', local_count++);
				if(local_count %2==1)
				{	
					for(var i=0;i<aA.length;i++){
						aA[i].className='a1';
					}
					this.className='active';
				}
				else{
					oText.innerHTML=this.text+'&nbsp;';
			        oDiv.style.display="none";
			        window.localStorage.removeItem('COUNT');
			        this.href='payment.html';
				}	
			}
			else if(this.index==3){
				window.local_count = window.localStorage.getItem('COUNT')==0 //计数
				window.localStorage.setItem('COUNT', local_count++);
				if(local_count %2==1)
				{	
					for(var i=0;i<aA.length;i++){
						aA[i].className='a1';
					}
					this.className='active';
				}
				else{
					oText.innerHTML=this.text+'&nbsp;';
			        oDiv.style.display="none";
			        window.localStorage.removeItem('COUNT');

				}	
			}
		}
	}
}