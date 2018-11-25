var temp;
var wid1 = Math.floor(1230 / 1.618);
var wid2 = (1230 - wid1);

var heig1 = wid1;
var heig2 = wid1;
divParent = "golden";
var j = 1;
var flag=0;
var flag1=0;
for (var i=1; i<=40; i++) {

    var pdiv1 = document.createElement('div');
    var pdiv2 = document.createElement('div');

    pdiv1.id = "div" + j;
    pdiv2.id = "div" + (j + 1);
    j = j + 2;

    var col1 = "rgb(" + getRandomInt(256) + "," + getRandomInt(256) + "," + getRandomInt(256) + ")";
    var col2 = "rgb(" + getRandomInt(256) + "," + getRandomInt(256) + "," + getRandomInt(256) + ")";

    pdiv1.setAttribute("style", "width: " + wid1 + "px;height: " + heig1 + "px;margin: 0 auto;float: left;background-color:" + col1);
    pdiv2.setAttribute("style", "width: " + wid2 + "px;height: " + heig2 + "px;margin: 0 auto;float: left;background-color:" + col2);

    console.log(divParent);
    if(i%2===0){
    document.getElementById(divParent).appendChild(pdiv1);
    document.getElementById(divParent).appendChild(pdiv2);
} else {
    document.getElementById(divParent).appendChild(pdiv2);
    document.getElementById(divParent).appendChild(pdiv1);
}
    
    if (i % 2 !== 0) {
        wid1 = wid2;
        heig2 = wid2;
        heig1 = Math.floor(wid2 / 1.618);
        if(flag===0) {
            console.log("1-1-"+i)
            divParent = pdiv2.id;
            flag = 1;
        }
        else{
            console.log("1-2-"+i)
            divParent = pdiv1.id;
            flag=0;
        }
    } else {
        wid2 = heig1;
        heig2 = heig1;
        wid1 = Math.floor(heig1/1.618);
        divParent = pdiv1.id;
        if(flag1===0) {
            console.log("2-1-"+i)
            divParent = pdiv1.id;
            flag1 = 1;
        }
        else{
            console.log("2-1-"+i)
            divParent = pdiv2.id;
            flag1=0;
        }
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}