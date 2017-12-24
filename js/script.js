// var nr = -10;
// while(nr > -11 && nr<20){
	
// 	console.log(nr);
// 	nr++;
	
// }

// var count = 10;
// while(count>10 && count < 40){
// 	if(count % 2 == 0){
// 		console.log(count);
// 			count++;
// 	}
// }

// for(var count =-10; count<20; count++){
// 	console.log(count);
// }

// function doSomething(){
// 	console.log("Hello World");
// }

// doSomething();

// function test(x){
// 	return x*2
// 	console.log(x);
// }
// test(40);

// function isEven(x){
// 	if(x%2===0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }
// console.log(isEven(4));
// console.log(isEven(9));

// var person={
// 	name: "Bob",
// 	age: 24,
// 	city: "LA"
// };

// console.log(person.name);
// console.log(person["age"]);

$(document).ready(function(){

	Highcharts.chart('container', {

    title: {
        text: 'Techstitution'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: '10-12',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: '1-2',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: '2-3',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: '3-3:30',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: '3:30-4',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
	
	$('#trigger').click(function(){
		alert("Trigger is clicked")
		$('body').css('color','green');
	});

	$('div').css("background-color", "purple");
	$('.container-fluid').css("background-color", "white");
	$('.highlight').addClass('highlight-width');
	$('third').addClass('third-border');

});
