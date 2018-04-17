function convertToRoman(num) {
  
  function tens(number)
  {
    if(number===1){return 'I';}
    if(number===2){return 'II';}
    if(number===3){return 'III';}
    if(number===4){return 'IV';}
    if(number===5){return 'V';}
    if(number===6){return 'VI';}
    if(number===7){return 'VII';}
    if(number===8){return 'VIII';}
    if(number===9){return 'IX';}
    if(number===10){return 'X';}
  }
  
  
  function hundreds(number)
  {
    if(number>0 && number <10){ return tens(number);}
    if(number>10 && number <20){return 'X' + tens(number-10);}
    if(number>=20 && number <30){return 'XX' + tens(number-20);}
    if(number>=30 && number <40){return 'XXX' + tens(number-30);}
    if(number>=40 && number <50){return 'XL' + tens(number-40);}
    if(number>=50 && number <60){return 'L' + tens(number-50);}
    if(number>=60 && number <70){return 'LX' + tens(number-60);}
    if(number>=70 && number <80){return 'LXX' + tens(number-70);}
    if(number>=80 && number <90){return 'LXXX' + tens(number-80);}
    if(number>=90 && number <100){return 'XC' + tens(number-90);}
  }
  
  function thousands(number)
  {
    if(number>0 && number <=10){return tens(number);}
    if(number>10 && number <100){return hundreds(number);}
    if(number>100 && number <200){return 'C' + hundreds(number-100);}
    if(number>200 && number <300){return 'CC' + hundreds(number-200);}
    if(number>300 && number <400){return 'CCC' + hundreds(number-300);}
    if(number>400 && number <500){return 'CD' + hundreds(number-400);}
    if(number>500 && number <600){return 'D' + hundreds(number-500);}
    if(number>600 && number <700){return 'DC' + hundreds(number-600);}
    if(number>700 && number <800){return 'DCC' + hundreds(number-700);}
    if(number>800 && number <900){return 'DCCC' + hundreds(number-800);}
    if(number>900 && number <1000){return 'CM' + hundreds(number-900);}
    
  }
  
  if(num===1){num = 'I';}
  if(num===2){num = 'II';}
  if(num===3){num = 'III';}
  if(num===4){num = 'IV';}
  if(num===5){num = 'V';}
  if(num===6){num = 'VI';}
  if(num===7){num = 'VII';}
  if(num===8){num = 'VIII';}
  if(num===9){num = 'IX';}
  if(num===10){num = 'X';}
  
  if(num>10 && num <20){num = 'X' + tens(num-10);}
  if(num>=20 && num <30){num = 'XX' + tens(num-20);}
  if(num>=30 && num <40){num = 'XX' + tens(num-30);}
  if(num>=40 && num <50){num = 'XL' + tens(num-40);}
  if(num>=50 && num <60){num = 'L' + tens(num-50);}
  if(num>=60 && num <70){num = 'LX' + tens(num-60);}
  if(num>=70 && num <80){num = 'LXX' + tens(num-70);}
  if(num>=80 && num <90){num = 'LXXX' + tens(num-80);}
  if(num>=90 && num <100){num = 'XC' + tens(num-90);}
  
  if(num===100) {num = 'C';}
  if(num>100 && num <200){num = 'C' + hundreds(num-100);}
  if(num===200) {num = 'CC';}
  if(num>200 && num <300){num = 'CC' + hundreds(num-200);}
  if(num===300) {num = 'CCC';}
  if(num>300 && num <400){num = 'CCC' + hundreds(num-300);}
  if(num===400) {num = 'CD';}
  if(num>400 && num <500){num = 'CD' + hundreds(num-400);}
  if(num===500) {num = 'D';}
  if(num>500 && num <600){num = 'D' + hundreds(num-500);}
  if(num===600) {num = 'DC';}
  if(num>600 && num <700){num = 'DC' + hundreds(num-600);}
  if(num===700) {num = 'DCC';}
  if(num>700 && num <800){num = 'DCC' + hundreds(num-700);}
  if(num===800) {num = 'DCC';}
  if(num>800 && num <900){num = 'DCCC' + hundreds(num-800);}
  if(num===900) {num = 'CM';}
  if(num>900 && num <1000){num = 'CM' + hundreds(num-900);}
  
  if(num===1000) {num = 'M';}
  if(num>1000 && num <2000){num = 'M' + thousands(num-1000);}
  if(num===2000) {num = 'MM';}
  if(num>2000 && num <3000){num = 'MM' + thousands(num-2000);}
  if(num===3000) {num = 'MMM';}
  if(num>3000 && num <4000){num = 'MMM' + thousands(num-3000);}
  
  
 return num;
}

convertToRoman(1004);
