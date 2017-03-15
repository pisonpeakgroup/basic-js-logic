function displayDayTime() {
    var currentDate = new Date();
    console.log(currentDate);
}

function areaPerimeter(num1, num2, num3) {
    var perimeter = num1 + num2 + num3;
    console.log("the perimeter is " + perimeter );
    var area = ( 1/ 2) * num1 * num2;
    console.log("the area is " + area);
}

displayDayTime();
areaPerimeter(10, 2, 3);