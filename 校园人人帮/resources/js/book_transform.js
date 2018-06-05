window.onload=function(){
    var oBox=document.getElementById('no');
    var oDiv=document.getElementById('yes');
    oDiv.onclick=function(){
        oDiv.style.display="none";
        oBox.style.display="none";
    }



    var oImg=document.getElementById('imginput');
    var oDiv2=document.getElementById('search1');
    var aLi=oDiv2.getElementsByTagName('li');
    var aA=oDiv2.getElementsByTagName('a');
    var oText=document.getElementById('book');
    oImg.onclick=function(){
        oDiv2.style.display="block";
    }//第一次点击


    for(var i=0;i<aA.length;i++){
        aA[i].index=i;
        aA[i].onclick=function(){
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
                    oDiv2.style.display="none";
                    window.localStorage.removeItem('COUNT');
                }   
        }
    }
}