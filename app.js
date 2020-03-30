// let string = "String";
// const alsoString = "double quote"
// const templateString = 'String'
//  let sentence = "Hello" + " World";
//  console.log(sentence);
// let sentence2= " and the America"
// const combine = sentence + sentence2;
// console.log(combine);
//  const combine2 =`${sentence}${sentence2}`;
//  console.log(combine2);
//  let year= 2020;
//  let nextYear = year +1;
//  console.log(nextYear);
// or is ||
// and is &&
// !== not equal to 
// === equal

let school = "elementary";{
    if(school =="elementary"){
        console.log("You are in elementary school");
    } else if (school== "middle"){
        console.log("You are in middle school");
    } else {
        console.log("You are in high school");
    }
}

let light = "red";
if (light === "green") {
    console.log("Go");
} else if (light === "yellow") {
    console.log("Slow down");
} else {
    console.log("Stop");
}
switch(true){
    case light=== "green":
        console.log("drive");
        break;
        case light === "yellow":
            console.log("slower");
            case light==="red":
                console.log("halt");
                break;
}

let kristyIntolerant = true;
let baoBaoIntolerant = true;

if (kristyIntolerant === true || baoBaoIntolerant === true) {
    console.log("Get both milk");
} else if (kristyIntolerant === true && baoBaoIntolerant === true) {
    console.log("Get almond milk");
} else {
    console.log("Get milk");
}
switch(true){
    case kristyIntolerant === true || baoBaoIntolerant === true:
        console.log("Both");
        break;
        case kristyIntolerant === true && baoBaoIntolerant === true:
            console.log("almond");
            default:
                console.log("Reg");
                break;
}

let temperature = 68;
if (temperature < 68) {
    console.log ("Too cold");
} else if (temperature >= 68 && temperature <= 72) {
    console.log ("Perfect");
} else if (temperature > 72 && temperature <= 76) {
    console.log ("Warm");
} else {
    console.log ("Too hot");
}

switch(true){
    case temperature<68:
        console.log("Cold");
        break;
        case temperature >=68 && temperature <=72:
            console.log("Nice");
        break;
        case temperature> 72 && temperature <= 76:
        console.log("Warm");
        break;
        // case temperature>76:
        //     console.log("Hot");
        //     break;
        default: 
        console.log("Don't drink");
        break;
}