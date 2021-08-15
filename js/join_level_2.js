//prev버튼 click
btnPrevStep1.addEventListener('click',function(){
    joinStep2.action = 'join_level_1.html';
    joinStep2.submit();
})


const id = document.querySelector('[name=memId]'),
        pw = document.querySelector('[name=memPw]'),
        pwck = document.querySelector('[name=memPwRe]'),
        email = document.querySelector('[name=email]'),
        name1 = document.querySelector('[name=memNm]'),
        cellPhone = document.querySelector('[name=cellPhone]'),
        tel = document.querySelector('[name=phone]'),
        selectEmail = document.querySelectorAll('.emailDomain option'),
        allWarning =  document.querySelectorAll('.warning2');

let regId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/,
    regPw = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
    regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    regTel = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    regName = /^[가-힣]+$/ ;

//직접입력
function mailcheck(){
    i=document.joinStep2.emailDomain.selectedIndex // 선택항목의 인덱스 번호
    var mail=document.joinStep2.emailDomain.options[i].value // 선택항목 value
    document.joinStep2.email.value += mail
}
//next버튼 click
btnNextStep1.addEventListener('click',function(e){
    e.preventDefault();
        if( !regId.test(id.value) ){
            sumitJoin(memidError2,id)
            return;          
        }

        if( !regPw.test(pw.value) ){
            sumitJoin(mempwError2,pw)
            return;                 
        }

        if(pwck.value != pw.value){
            sumitJoin(pwckError2,pwck)
            return;                
        }
        if(!regName.test(name1.value)){
            sumitJoin(nameError2,name1)
            return;                
        }

        if( !regEmail.test(email.value) ){
            sumitJoin(emailError2,email)
            return;                
        }

        if( !regPhone.test(cellPhone.value) ){
            sumitJoin(phoneError2,cellPhone)
            return;                
        }
        
        if( !regTel.test(phone.value) ){
            sumitJoin(TelError2,phone)
            return;                
        }
    alert('회원가입이 완료되었습니다');
    joinStep2.action = 'index.html';
    joinStep2.submit();
});

function sumitJoin(IdName,V){
    IdName.classList.add('active');
    V.value = '';
    V.focus();
}