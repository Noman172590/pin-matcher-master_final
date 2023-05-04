
function pin(){

    var pinGenarationValue=pinGenaration()
    var pinmMtch=pinGenarationValue+''
    if(pinmMtch.length===4)
    {
        return pinGenarationValue
    }
    else{
        
        return pin();
    }
}
function pinGenaration(){


    var pinvalue=Math.round(Math.random()*10000)
    return pinvalue
}

document.getElementById('generate-btn').addEventListener('click',function(){

    var pinvaluefunction=pin()
   var input=document.getElementById('inputField')
   input.value=pinvaluefunction
   input.classList.add('pin')

   
})

// calculation working

document.getElementById('numbers_click').addEventListener('click',function(e){
                var event=e.target.innerText
                var numberInput=document.getElementById('numberInput');
                var newNumberInput=numberInput.value;
                numberInput.classList.add('pin')

                if(isNaN(event))
                {
                    if(event==='C')
                    {
                        numberInput.value='';
                    }
                    else if(event==='<')
                    {
                        var deletevent=newNumberInput.split('')
                        deletevent.pop();
                        var remineng=deletevent.join('')
                        numberInput.value=remineng;
                    }
                }
                else{
                   
                   
                    var finalInput=newNumberInput+event;
                    numberInput.value=finalInput;

                }

})

// submitted btn working

document.getElementById('submit-btn').addEventListener('click',function(){

        var inputField=document.getElementById('inputField')
        var inputFieldValue=inputField.value
        var numberInput=document.getElementById('numberInput')
        var inputFieldValue1=numberInput.value

        var pin_match=document.getElementById('pin_match')
        var pin_match_do_not=document.getElementById('pin_match_do_not')
        if(inputFieldValue==inputFieldValue1)
        {
           
            pin_match.style.display='block'
            pin_match_do_not.style.display='none'
        }
        else
        {
            
            pin_match_do_not.style.display='block'
            pin_match.style.display='none'
        }


})