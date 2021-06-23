' use strict ';

alert('Welcom To Sara Website');

let userName = prompt('  What Is Your Name?');


alert('Welcom ' + userName );

let dgreeQ=0;


let sName = function(){

  sName = prompt('  Is My Name Sara?' ) .toLowerCase();

  switch (sName){

  case 'yes':
  case 'y' :
    // console.log ('correct');
    alert ('correct');
    dgreeQ++;
    break;

  default :
    // console.log ('Wrong');
    break;
  }

  return sName;
};
sName();










let ageS = function(){

  ageS=prompt('Is My Age Above 20 ').toLowerCase();


  switch (ageS){
  case 'yes':
  case 'y' :
    // console.log ('correct');
    alert ('correct');
    dgreeQ++;

    break;

  default :
    // console.log ('Wrong');
    break;
  }
  return ageS;

};
ageS();





let smajor = function(){

  smajor=prompt('  Was my major in college Accounting??' ).toLowerCase() ;


  switch (smajor){
  case 'no':
  case 'n' :
    // console.log ('correct');
    alert ('correct');
    dgreeQ++;

    break;

  default :
    // console.log ('wrong');



    break;
  }
  return smajor;

};
smajor();




let from = function(){

  from=prompt('Am i from Jordan').toLowerCase();


  switch (from){
  case 'yes':
  case 'y' :
    // console.log ('correct');
    alert ('correct');
    dgreeQ++;

    break;

  default :
    // console.log ('Wrong');
    break;
  }
  return from;

};
from();

let live =function(){

  live= prompt('Do I live in Amman ').toLowerCase();


  switch (live){
  case 'no':
  case 'n' :

    // console.log ('correct');
    alert ('correct');
    dgreeQ++;

    break;

  default :

    // console.log ('wrong');

    break;
  }
  return live;


};
live();


let userG1 =Number(prompt('Guess the number in my mined'));
function q6(){

  for (let i=0; i<3 ;i++){


    if(userG1===5){
      alert('correct');
      dgreeQ++;

      break;
    }
    else if (userG1 > 5){
      alert('Too High');
      userG1 =Number(prompt('Guess the number in my mined'));
    }
    else {
      alert('TOO Low');
      userG1 =Number(prompt('Guess the number in my mined'));
    }
  }
  return userG1;

}
q6();
alert ('The correct Answer is 5 ');




let ansQ=['friday', 'satarday', 'thursday'];

let Qans = prompt('What is my favariat days?').toLowerCase();
function q7(){

  for(let i=0; i<5; i++){

    if(Qans === ansQ[0] || Qans===ansQ[1] || Qans===[2] ){
      alert('correct');
      alert('My favariate days is friday satarday and thursday');
      dgreeQ++;

      break;
    }
    else {alert('wrong');}
    Qans = prompt('What is my favariat days?').toLowerCase();

  }
  return Qans;
}
q7();


alert('Welcom ' + userName + '   your grade is   ' + dgreeQ);

