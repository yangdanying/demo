window.onload=function(){
	var oDiv=document.getElementById('div2');
	var aLi=oDiv.getElementsByTagName('li');
	var aA=oDiv.getElementsByTagName('a');
	var oText=document.getElementById('cost');
	var oImg=document.getElementById('a2');
	//第一次点击
	oImg.onclick=function(){
		oDiv.style.display='block';
	}
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;
		aA[i].onclick=function(){
			if(this.index==0){
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
			        this.href='dengjikaoshifei.html';
				}	
			}
		}
	}
}