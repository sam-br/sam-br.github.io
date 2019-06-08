count = 0;
rna = [];
totalRand = 0;
a = 0;
numberWheelIterations = 0
numberWheelFlag = 0

function area1_1 () {
    count++;
    document.getElementById("count").innerHTML = count;
    alert("Area1_1 Clicked");
}

function area1_2 () {

    count++;
    totalRand ++;

    newRand = Math.round(Math.random()*10);
    rna.push(newRand);

    if (rna.length == 1) {
        document.getElementById("random").innerHTML = `Your random number is ${rna}.`;
    }   else {
        document.getElementById("random").innerHTML = `Your random numbers are ${rna}.`;
    }

    document.getElementById("count").innerHTML = count;
    document.getElementById("randomNumbers").innerHTML = rna.length;
    document.getElementById("totalRand").innerHTML = totalRand;
}

function area1_3 () {
    document.getElementById("random").innerHTML = `Clearing...`;
    setTimeout(function(){(document.getElementById("random").innerHTML = ``)}, 2000);
    count++;
    document.getElementById("count").innerHTML = count;
    rna = [];
    listCount = 0
    document.getElementById("randomNumbers").innerHTML = listCount;
}

function area1_4 () {
    string = document.getElementById("area2").innerHTML;
    document.getElementById("stringlength").innerHTML = `There were ${string.length} characters in this area when the check was done.`;
    count++;
    document.getElementById("count").innerHTML = count;
}

function area1_5() {

    numberWheelFlag = 1;
    numberWheelIterations = 0;
    count ++
    document.getElementById("count").innerHTML = count;

    function numberWheel() {

        function innerWheel() {
            numberWheelValue = 0;
            numberWheelValue = Math.round(Math.random()*100);
            document.getElementById("numberWheel").innerHTML = `Can you stop on the highest number...? ${numberWheelValue}`;
            numberWheelIterations ++;
            console.log(numberWheelIterations);
            setTimeout(numberWheel, 125);
        }

        function tooLong() {
            document.getElementById("numberWheel").innerHTML = `Oh dear, you waited for ${numberWheelIterations} iterations! That's too many! ... you lose.`
        }

        return numberWheelFlag == 0 ? ``: numberWheelIterations < ((Math.round(Math.random()*30))+30) ? innerWheel() : tooLong();

    }

    numberWheel()

}

function area1_6() {
    count ++
    document.getElementById("count").innerHTML = count;
    numberWheelFlag = 0
    document.getElementById("numberWheel").innerHTML = `You stopped on ${numberWheelValue} after ${numberWheelIterations} iterations!`
}

function area1_7() {

}