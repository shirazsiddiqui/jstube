//for (i=0;i<20;i=i+2)
//{
//    console.log(i)
//}

// ARRAY
const states=
[
    "bihar",
    "jharkhand",
    "chattisgarh",
    "westbengal",
    1996,
    "delhi",
    "assam"

];
console.table(states);

// FOR LOOP

//for (let i = 0; i < states.length; i++) {

    //if(typeof states[i] !=="string") break;
    //if(typeof states[i] ==="string") continue;
 //   if(typeof states[i] !=="string") continue;

 //   console.log(states[i]);
    
//}


//  WHILE LOOP

//let i=0;
//while (i < states.length )
//{
//    console.log(states[i]);
//    i++;
//}


//      DO WHILE LOOP

let i=0;

do{
    console.log(states[i]);
    i++
} while (i < states.length);