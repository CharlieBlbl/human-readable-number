module.exports = function toReadable (number) {
  
   
  let res = "" 
  let numstr = number.toString() 
  let numarr =  numstr.split().join()            
  
  
  let num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let num10 =['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let num20 =['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let num100 = 'hundred'

  if (numstr.length === 1){res = num1[number]} 

  if (numstr.length === 2){    
    if (number <= 19){
        res = num10[number%100-10]
    }else{
        number%10 !== 0 ? res = num20[Number(numarr[0])-2] + ' ' + num1[Number(numarr[1])] 
                        : res = num20[Number(numarr[0])-2]        
    }
         
  }


  if (numstr.length === 3){

    if (number%100 <= 9 ){
        number%10 !== 0 ? res = num1[Number(numarr[0])]+ ' ' + num100 + ' ' + num1[Number(numarr[2])] 
                        : res = num1[Number(numarr[0])]+ ' ' + num100
    } else {
        if (number%100 <= 19){
            res = num1[Number(numarr[0])]+ ' ' + num100 + ' ' + num10[number%100-10]
        }else{
            number%10 !== 0 ? res = num1[Number(numarr[0])] + ' ' + num100 + ' ' + num20[Number(numarr[1])-2] + ' ' + num1[Number(numarr[2])] 
                            : res = num1[Number(numarr[0])] + ' ' + num100 + ' ' + num20[Number(numarr[1])-2]
        } 
        
    }  

  }

  return res 
  

}
