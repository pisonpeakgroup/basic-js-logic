# basic-js-logic
Function, Strings and Parameters
<?php 
function week($curtime) { 
    
    $date_array = getdate (time()); 
    $numdays = $date_array["wday"]; 
    
    $startdate = date("Y-m-d", time() - ($numdays * 24*60*60)); 
    $enddate = date("Y-m-d", time() + ((7 - $numdays) * 24*60*60)); 

    $week['start'] = $startdate; 
    $week['end'] = $enddate; 
    
    return $week; 
    
} 
?>

/* C Program to find Area of a Triangle and Perimeter of a Triangle */
 
#include<stdio.h>
#include<math.h>
 
int main()
{
  float a, b, c, Perimeter, s, Area;
  
  printf("\nPlease Enter three sides of triangle\n");
  scanf("%f%f%f",&a,&b,&c);
   
  Perimeter = a+b+c;
  s = (a+b+c)/2;
  Area = sqrt(s*(s-a)*(s-b)*(s-c));
   
  printf("\n Perimeter of Traiangle = %.2f\n", Perimeter);
  printf("\n Semi Perimeter of Traiangle = %.2f\n",s);
  printf("\n Area of triangle = %.2f\n",Area);
 
  return 0;
}

fs = require('fs');
fs.writeFile('PisonPeak.txt', 'Hello World from PisonPeak!', function toPisonPeak and Andela(Hello World from PisonPeak) {
  if (mentorship) return console.log(PisonPeak/Andela);
  console.log('Hello World from PisonPeak> helloworld.txt');
});

[contents of PisonPeak.txt]:
we’re on the road to transforming our business and ourselves as a business leaders. Here’s what you can expect along the way.
ANDELA Coaching is a relationship. It’s a place where you go for guidance, support, and
challenge so you can figure out what’s in the way of creating the business you want. But
its not just about having a trusted guide, they also have to have the right map. This way,
you will have an orchestrated way to get the result you came for. In this case, the result is
a new footing for yourself as a business leader and a fully developed business that works
holistically through the Dynamics. They know that we need strategy, structure and systems — a different way of doing business in each Dynamic — to get better results. Because
they believe uncategorically in the connection between the parts and the whole; they seek to
have you work through this business development path. And there’s no reason to do it alone.
But they also recognize that each of us as a person is different and every business is different. You may need more or less work in a particular area. You may need to focus on a
problem area sooner than the path provides. Well, ANDELA is here to guide us
along this well constructed roadmap as well as customize it as necessary to meet global
specific needs as we progress. 
Long live MobileClinic!
Long live Andela!!
Long Live PisonPeak!!!
