// Creates canvas 320 × 200 at 10, 50
//var paper = Raphael(10, 50, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
//var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
//circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
//circle.attr("stroke", "#fff");

var paper = Raphael("whitepaper", 800,800);



var rect1 = paper.rect(5,5,200,180,10).attr({
        "fill":"#D1EEEE",
        "stroke":"#DBDBDB",
        "stroke-width":4
    }
);

var rect2 = paper.rect(400,5,200,180,10).attr({
        "fill":"#E6E6FA",
        "stroke":"#DBDBDB",
        "stroke-width":4
    }
);

/*var rect3 = paper.rect(5,400,200,180,10).attr({
        "fill":"#FFEFDB",
        "stroke":"#DBDBDB",
        "stroke-width":4
    }
);

var rect3 = paper.rect(400,400,200,480,10).attr({
        "fill":"#FFF0F5",
        "stroke":"#DBDBDB",
        "stroke-width":4
    }
);

var rectSet = paper.set();

rectSet.push = (rect1,rect2,rect4);

rectSet.attr({
    "fill":red
});*/

var middle = paper.ellipse(305, 300, 100,80).attr({
        "fill":"#EE0000",
        "stroke":"#DBDBDB",
        "stroke-width":1
    }
);


var mou = paper.path('M340,430 h-100 a100,100 0 1,0 100,-60 z').attr(
    {   "fill":"#FFFACD",
        "stroke":"#DBDBDB",
        "stroke-width":1
    }
);







