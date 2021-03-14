const names = ["youtube","facebook","instagram","netflix","amazon"];
// For OF is mostly use for array
for (const n of names){
    console.log(n);
}

//  For IN is use for object
const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    lco: "learncode",
};

for (const a in symbols)
{
    console.log(a);

    console.log(symbols[a]);

    console.log(`key is : ${a} and value is : ${symbols[a]}`);
}