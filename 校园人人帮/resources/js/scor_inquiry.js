window.onload=function(){
	//点击后出现学年下拉菜单
	var oImg=document.getElementById('a2');
    var local_count = window.localStorage.getItem('COUNT');
	var oDiv=document.getElementById('div2');
	oImg.onclick=function(){
		window.localStorage.setItem('COUNT', local_count++);
		if(local_count %2==1){
			oDiv.style.display='block';
		}
		else{
			oDiv.style.display='none';
		}
	}
	//第二次点击出现绿色背景
	var aLi=oDiv.getElementsByTagName('li');
	var oA=oDiv.getElementsByTagName('a');
	var oText=document.getElementById('text');

	for(var i=0;i<oA.length;i++){
		oA[i].onclick=function(){
			
				//清除所有class样式
				for(var i=0;i<oA.length;i++){
					oA[i].className='a1';
				}
				//this添加active样式
				this.className='active';
				//传入值
				oText.innerHTML=this.text;
		}
	}

	var oImg2=document.getElementById('a3');
    var local_count = window.localStorage.getItem('COUNT');
	var oDiv2=document.getElementById('div3');
	oImg2.onclick=function(){
		window.localStorage.setItem('COUNT', local_count++);
		if(local_count %2==1){
			oDiv2.style.display='block';
		}
		else{
			oDiv2.style.display='none';
		}
	}
	//第二次点击出现绿色背景
	var aLi1=oDiv2.getElementsByTagName('li');
	var oA1=oDiv2.getElementsByTagName('a');
	var oText1=document.getElementById('text1');

	for(var i=0;i<oA1.length;i++){
		oA1[i].onclick=function(){
				//清除所有class样式
				for(var i=0;i<oA1.length;i++){
					oA1[i].className='a1';
				}
				//this添加active样式
				this.className='active';
				//传入值
				oText1.innerHTML=this.text;
		}
			
	}

}