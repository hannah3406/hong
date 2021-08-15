const impMsg1 = document.querySelector('.important_check_msg1')
const impMsg2 = document.querySelector('.important_check_msg2')
//전체동의 버튼
contentAll.addEventListener('click',function(){
        content1.checked = contentAll.checked
        content2.checked = contentAll.checked
})

//next버튼 click
btnNextStep.addEventListener('click',function(e){
        e.preventDefault();
        if(!content1.checked){
                impMsg2.classList.remove('active');
                impMsg1.classList.add('active');
        }else if(!content2.checked){
                impMsg1.classList.remove('active');
                impMsg2.classList.add('active');
        }else{
        join.action = 'join_level_2.html';
        join.submit();
        }
})
//prev버튼 click
btnPrevStep.addEventListener('click',function(){
        join.action = 'join.html';
        join.submit();
})