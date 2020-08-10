// feet to mile converter 

function feetToMile(feet) {
     const mile = feet / 5280;
     return mile;
}

const firstCheckFeetToMile = feetToMile(1);
// console.log(firstCheckFeetToMile);

/* =========== end =============== */








// how to find small word in array 

function tinyFriend(...numbers) {

     var bigNumber = numbers[0];

     for (var i = 0; i < numbers.length; i++) {
          var element = numbers[i];
          if (element.length < bigNumber.length) {
               bigNumber = element;
          }
     } return bigNumber;
}

var findSmallWord = tinyFriend("saif", "sabbir", "sazzad");
// console.log(findSmallWord);

/* ========== end ========= */







// that is simple brick identify calculator 


function brickCalculator(wallLength, wallWidth, wallHight) {

     var totalWallSize = wallLength * (wallWidth / 12) * wallHight;
     var totalWallResult = totalWallSize;

     // 1 pice brick size 0.0867 feet ;

     var identifyTotalBricks = totalWallResult / 0.0867;
     return identifyTotalBricks;


}

 // in this function use three parameter you can use brick identify 
 //- first = wllLength  &  second = wallWidth  &  three = wallHight 

var result = brickCalculator(18, 5, 14);
// console.log("Total bricks needs = " + result)

/* ========== end ========== */



















//    var totalWallSize = 18*(5/12)*14;
//    var totalWallResult = totalWallSize.toFixed(4);


//      // 1 pace brick size 0.0867 feet ;

//      var identifyTotalBricks = totalWallResult /0.0867 ;

//      console.log(identifyTotalBricks)


