// read in the image from the dom with the id image and turn it into imageData
//import canvas



function getImageData(img) {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  canvas.id = "canvas"
  canvas.style.zIndex = -10000
  canvas.style.position = "absolute"

  return ctx.getImageData(0, 0, img.width, img.height);
  //return ctx.getImageData(0, 0, 3, 1);
}

// CREATING PIXEL ARRAY

//console.log(getImageData(image));

// function getPixelArray(yucky) { //YUCKY IS THE IMAGE DATA
//   var typedArray = yucky.data;
//   var normalArray = Array.prototype.slice.call(typedArray);

//   pixelLine = [] //PIXEL LINE IS JUST A 1D ARRAY OF PIXELS
//   for (var i = 0; i < normalArray.length; i += 4) {
//     //console.log(normalArray[i], normalArray[i + 1], normalArray[i + 2]);
//     pixelLine.push([normalArray[i], normalArray[i + 1], normalArray[i + 2]])
//   }

//   pixelArray = [] //PIXEL ARRAY IS A 2D ARRAY OF PIXELS
//   for (var row = 0; row < yucky.height; row++){
//     var dummyRow = []
//     for (col = 0; col < yucky.width; col++){
//       dummyRow.push(pixelLine[row * image.width + col])
//     }
//     pixelArray.push(dummyRow)
//   }

//   return pixelArray;
// }


// run the following code when mouse is clicked
function processImage(x) {
  
  // console.log("--------------------------------------------------------");
  // console.log("image",image)
  // var image = x
  // const imageData = getImageData(image);

  // var pixelArray = getPixelArray(imageData);



  // //show the image in the dom
  // // const canvas = document.createElement("canvas");
  // // document.body.appendChild(canvas);
  // // canvas.width = image.width;
  // // canvas.height = image.height;
  // // const ctx = canvas.getContext("2d");
  // // ctx.putImageData(imageData, 0, 0);




  // // REAL TRANSLATION BEGINS NOW

  // const height = image.height
  // const width = image.width

  // var notVisitedNum = height * width
  // var visited = []

  // for (i = 0; i < height; i++){
  //   var dummycol = []
  //   for (j = 0; j < width; j++){
  //     dummycol.push(false)
  //   }
  //   visited.push(dummycol)
  // }

  // console.log(visited)
  

  // // FUNCTION SECTION

  // function findNextFreePoint(topVisited,visited){
  //   for (row = topVisited[0]; row < height; row++){
  //     for (col = 0; col < width; col++){
  //       if (visited[row][col] == false){
  //         topVisited[0] = row
  //         topVisited[1] = col
  //         return [row,col]
  //       }
  //     }
  //   }
  //   return null
  // }

  // //console.log("findNextFreePoint test: ",findNextFreePoint([50,11]))

  // // NEXT FUNCTION

  // function unvisited(neighborsInQuestion, visited){ // returns array of points unvisited
  //   var toVisit = []
  //   //console.log("NIQ:",neighborsInQuestion)
  //   for (index in neighborsInQuestion){
  //     var point = neighborsInQuestion[index]
  //     // console.log("point:",point)
  //     // console.log(typeof(visited))
  //     // console.log("visited:",visited)
  //     // console.log("visited[0]:",visited[point[0]])
  //     // console.log("visitedLength:",visited.length)
  //     // console.log("isArray: ",Array.isArray(visited))
  //     // console.log("bob2:",point[0])
  //     //check to make sure point is in bounds
  //     if (point[0] < 0 || point[0] >= visited.length) {continue}
  //     if (point[1] < 0 || point[1] >= visited[0].length) {continue}
  //     if (visited[point[0]][point[1]] == false){
  //       toVisit.push(point)
  //     }
  //   }
  //   return toVisit
  // }

  // console.log("unvisited Test: ",unvisited([[1,2],[3,4],[5,6]], visited))

  // // NEXT FUNCTION

  // function meAndMyNeighbors(pointInQuestion, height, width){
  //   points = [pointInQuestion]
  //   dummyRow = pointInQuestion[0]
  //   dummyCol = pointInQuestion[1]

  //   if(dummyRow >= 1) { 
  //     points.push([dummyRow-1,dummyCol]) 
  //   }
  //   if(dummyCol >= 1) { 
  //     points.push([dummyRow,dummyCol-1]) 
  //   }
  //   if(dummyRow < height - 1) { 
  //     points.push([dummyRow + 1, dummyCol]) 
  //   }
  //   if(dummyCol < width - 1) { 
  //     points.push([dummyRow, dummyCol + 1]) 
  //   }

  //   return points
  // }

  // console.log("meAndMyNeighbors Test: ",meAndMyNeighbors([3,7], height, width))

  // // NEXT FUNCTION

  // function myNeighbors(pointInQuestion, height, width){
  //   points = []
  //   dummyRow = pointInQuestion[0]
  //   dummyCol = pointInQuestion[1]

  //   if(dummyRow >= 1) { 
  //     points.push([dummyRow-1,dummyCol]) 
  //   }
  //   if(dummyCol >= 1) { 
  //     points.push([dummyRow,dummyCol-1]) 
  //   }
  //   if(dummyRow < height - 1) { 
  //     points.push([dummyRow + 1, dummyCol]) 
  //   }
  //   if(dummyCol < width - 1) { 
  //     points.push([dummyRow, dummyCol + 1]) 
  //   }

  //   return points
  // }

  // console.log("myNeighbors Test: ",myNeighbors([3,7], height, width))

  // // NEXT FUNCTION

  // function meAndMyNeighborsButNotMyVisitedClusterpoints(pointInQuestion,visitedInThisCluster,height,width){
  //   points = []
  //   dummyRow = pointInQuestion[0]
  //   dummyCol = pointInQuestion[1]

  //   if(dummyRow >= 1 && visitedInThisCluster.includes([dummyRow-1,dummyCol]) == false) { 
  //     points.push([dummyRow-1,dummyCol]) 
  //   }
  //   if(dummyCol >= 1 && visitedInThisCluster.includes([dummyRow,dummyCol-1]) == false) { 
  //     points.push([dummyRow,dummyCol-1]) 
  //   }
  //   if(dummyRow < height - 1 && visitedInThisCluster.includes([dummyRow + 1, dummyCol]) == false) { 
  //     points.push([dummyRow + 1, dummyCol]) 
  //   }
  //   if(dummyCol < width - 1 && visitedInThisCluster.includes([dummyRow, dummyCol + 1]) == false) { 
  //     points.push([dummyRow, dummyCol + 1]) 
  //   }
  //   // console.log("pointsMNS:",points)
  //   // console.log("visitedInThisCluster:",visitedInThisCluster)
    
  //   return points
  // }

  // //visited[3][6] = true
  // console.log("meAndMyNeighborsButNotMyVisitedClusterpoints Test: ",meAndMyNeighborsButNotMyVisitedClusterpoints([3,7], visited))

  // // NEXT FUNCTION

  // function myCommunityColor(points, img){
  //   var totR = 0
  //   var totG = 0
  //   var totB = 0
  //   var tot = points.length
  //   //console.log(img)
  //   for (index in points){
  //     var point = points[index]
  //     var dummyPoint = img[point[0]][point[1]]
  //     //console.log("point:",dummyPoint)
  //     totR += dummyPoint[0]
  //     totG += dummyPoint[1]
  //     totB += dummyPoint[2]
  //   }
  //   var avgR = totR/tot
  //   var avgG = totG/tot
  //   var avgB = totB/tot
  //   return [avgR, avgG, avgB]
  // }

  // //console.log("myCommunityColor Test: ",myCommunityColor([[300,1101],[300,1102],[300,1103]], pixelArray))

  // // NEXT FUNCTION

  // function maxColorDistance(colorA,colorB){
  //   diffR = Math.abs(colorA[0]-colorB[0])
  //   diffG = Math.abs(colorA[1]-colorB[1])
  //   diffB = Math.abs(colorA[2]-colorB[2])
  //   return Math.max(diffR,diffG,diffB)
  // }

  // console.log("maxColorDistance Test: ",maxColorDistance([146,46,2],[225,155,143]))

  // // NEXT FUNCTION (unfinished & unused)

  // // function cleanUpTheClusterVisitedList(visitedInThisCluster){ // goes through each pixel in the list. If the surrounding 4 pixels are visited by the cluster already, dont bother adding it to the new visited list as it cannot be accessed (in theory)
  // //   newVisited = Set()
  // //   for (index in visitedInThisCluster){
  // //     pixel = visitedInThisCluster[index]
  // //     check = myNeighbors(pixel)
  // //     for dummyPixel in check:
  // //       if (dummyPixel not in visitedInThisCluster):
  // //         newVisited.add(pixel)
  // //         break
  // //   }
  // //   return newVisited
  // // }

  // // MAIN LOOP

  // // var arr1 = [1,2,3]
  // // var arr2 = [4,5,6]
  // // arr1.push(...arr2)
  // // console.log("spread",arr1)

  // var clusters = []
  // var topVisited = [0,0]

  // while (true){
  //   var toCheckOut = []
  //   var cluster = []
  //   var corePoint = findNextFreePoint(topVisited,visited)
  //   topVisited = corePoint
  //   //console.log("corePoint: ",corePoint)
  //   console.log("new corePoint")
  //   if (corePoint == null) {break}

  //   visited[corePoint[0]][corePoint[1]] = true
  //   //console.log("made true:",corePoint[0],corePoint[1])
  //   var coreColor = pixelArray[corePoint[0]][corePoint[1]]
  //   cluster.push(corePoint)
  //   notVisitedNum -= 1

  //   //console.log("meAndMyNeighbors: ",corePoint,meAndMyNeighbors(corePoint,height,width))
  //   toCheckOut.push(...meAndMyNeighbors(corePoint,height,width))

  //   var visitedInThisCluster = [corePoint]
  //   var numVisitedInThisCluster = 0 

  //   //console.log("toCheckOut: ",toCheckOut[0])
  //   while (toCheckOut.length > 0) {
  //     //console.log("toCheckOutLen: ",toCheckOut.length)
  //     //console.log("in loop")
  //     point = toCheckOut.pop()
  //     // console.log("point: ",point)
  //     // console.log("corePoint",corePoint)
  //     //console.log(point[0],point[1],cluster)

  //     if (cluster.includes(point)) {
  //       //console.log("broke")
  //       continue}

      
  //     if (visited[point[0]][point[1]] == true) {
  //       //console.log("",visited[point[0]])
  //       //visited[point[0]][point[1]] = "HERE"
  //       // console.log("----------------------")
  //       // console.log("visited2: ",visited[point[0]])
  //       // console.log("pointTriggered:",point[0],point[1])
  //       // console.log(visited[point[0]][point[1]])
  //       continue}
  //     //console.log("at pause")
  //     //AT PAUSE HERE
  //     //console.log("bob")
  //     var pointsNeighbors = meAndMyNeighbors(point, height, width)
  //     // var neighborsColors = myCommunityColor(pointsNeighbors, pixelArray)
  //     var neighborsColors = pixelArray[point[0]][point[1]]
  //     var EPSILON = maxColorDistance(coreColor,neighborsColors)
  //     // if (EPSILON > 20) {
  //     //   //console.log("epsilon: ",EPSILON)
  //     // }

  //     visitedInThisCluster.push(point)
  //     numVisitedInThisCluster += 1

  //     if (EPSILON < 40){ //change the eps later based on what works well
  //     notVisitedNum -= 1
  //       if (notVisitedNum % 16383 == 1){
  //         console.log("[----------------------]")
  //         console.log("notVisited: ",notVisitedNum)
  //         // console.log("toCheckOutLen: ",len(toCheckOut))
  //         // console.log("clusterLen: ",(len(cluster)))
  //         // console.log("numVisitedInThisCluster: ",numVisitedInThisCluster)
  //       }

  //       cluster.push(point)
  //       //console.log("cluster: ",cluster)

  //       visited[point[0]][point[1]] = true // make it visited so we dont double check this later and add it to a diff cluster
  //       //console.log("made true:",point[0],point[1])
  //       try {
  //         //console.log("m&mn: ",meAndMyNeighborsButNotMyVisitedClusterpoints(point,visitedInThisCluster,height,width))
  //         //console.log("m&ns",meAndMyNeighborsButNotMyVisitedClusterpoints(point,visitedInThisCluster,height,width,visited))
  //         toCheckOut.push(...meAndMyNeighborsButNotMyVisitedClusterpoints(point,visitedInThisCluster,height,width))
  //       } catch (error) {
  //         //console.log("point:",point[0],point[1],"visited:",visitedInThisCluster)
  //         throw(error)
  //       }
        
  //     }

  //     //console.log("cluster: ",cluster)
      



  //   }
  //   clusters.push([coreColor,cluster])



  // }


  // var NOISECOUNT = 5

  // var numNotNoiseClusters = 0
  // console.log("clusters:",clusters.length)
  // for (index in clusters){
  //   givenCluster = clusters[index]
  //   console.log(givenCluster)
  //   if (givenCluster[1].size > 5){
  //     //console.log(givenCluster[1].size)
  //   }

  //   if (givenCluster[1].length < NOISECOUNT){
  //     for (pixel in givenCluster[1]){
  //       continue
  //       //img[pixel[0]][pixel[1]] = [255,255,255]
  //     }
  //   }
  //   else{
  //     //changingColorValue = 0
  //     numNotNoiseClusters += 1
  //     //clusterColor = givenCluster[0]
  //     clusterColor = myCommunityColor(givenCluster[1], pixelArray)
  //     //clusterColor = [random.randint(10,255), 0 , 0]
  //     //clusterColor = [random.randint(10,255), 0 , random.randint(10,100)]
  //     //clusterColor = [random.randint(0,255), random.randint(0,255) , random.randint(0,255)]
  //     for (index in givenCluster[1]){
  //       pixel = givenCluster[1][index]
  //       //img[pixel[0]][pixel[1]] = [min(255,changingColorValue),min(255,max(0,changingColorValue-255)),min(255,max(0,changingColorValue-510))]
  //       pixelArray[pixel[0]][pixel[1]] = clusterColor
  //       //changingColorValue += 1
  //     }
  //   }
  // }
  // //console.log("clusters:",clusters)

  // // edit the image data with the new pixel array
  // console.log(imageData.data.length)
  // for (var i = 0; i < pixelArray.length; i++) {
  //   for (var j = 0; j < pixelArray[i].length; j++) {
  //     var pixel = pixelArray[i][j];
  //     var index = (i * width + j) * 4;
  //     imageData.data[index + 0] = pixel[0];
  //     imageData.data[index + 1] = pixel[1];
  //     imageData.data[index + 2] = pixel[2];
  //     // imageData.data[index + 0] = 30;
  //     // imageData.data[index + 1] = 205;
  //     // imageData.data[index + 2] = 15;
  //     console.log(index)

  //   }
  // }
  // // show the image in the dom
  // console.log('showing image:')
  // const canvas2 = document.createElement("canvas");
  // document.body.appendChild(canvas2);
  // canvas2.width = image.width;
  // canvas2.height = image.height;
  // const ctx2 = canvas2.getContext("2d");
  // ctx2.putImageData(imageData, 0, 0);
  // // set canvas2 to have 700px width, auto height
  // canvas2.style.width = "700px";
  // canvas2.style.height = "auto";
  // canvas2.style.position = "relative";
  // console.log("done showing img")

};

//var image = document.getElementById("image");
//processImage(image);

function updateStatus(num){
  var status = document.getElementById("status")
  status.innerHTML = num
}
  
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var fileInput = document.getElementById('myFile');
  var selectedFile = fileInput.files[0];
  var numberInput = document.getElementById('numberInput');
  var EPS = numberInput.value;

  console.log("epsilon: ",EPS)

  // Your code to handle the form submission
  // For example, you can perform any necessary validation or
  // send the file data to the server using AJAX
  // ...

  console.log('Selected File:', selectedFile);

  // If you want to submit the form asynchronously (e.g., using AJAX),
  // you can use XMLHttpRequest or fetch API here

  // if (selectedFile) {
  //   // Create an image element
  //   var img = document.createElement('img');

  //   // Create a FileReader to read the file as a data URL
  //   var reader = new FileReader();

  //   reader.onload = function(e) {
  //       // Set the source of the image to the data URL
  //       img.src = e.target.result;
  //       img.id = "THEimage"

  //       // Append the image to a container in your HTML
  //       document.body.appendChild(img);
  //   };

  //   // Read the file as a data URL
  //   reader.readAsDataURL(selectedFile);

  // } else {
  //   console.log("NOOOOOOO")
  // }
  var THEimage = document.getElementById("THEimage")
  console.log("THEimage:",THEimage)
  processImage(THEimage);

























  function getPixelArray(yucky) { //YUCKY IS THE IMAGE DATA
    var typedArray = yucky.data;
    var normalArray = Array.prototype.slice.call(typedArray);
  
    pixelLine = [] //PIXEL LINE IS JUST A 1D ARRAY OF PIXELS
    for (var i = 0; i < normalArray.length; i += 4) {
      //console.log(normalArray[i], normalArray[i + 1], normalArray[i + 2]);
      pixelLine.push([normalArray[i], normalArray[i + 1], normalArray[i + 2]])
    }
  
    pixelArray = [] //PIXEL ARRAY IS A 2D ARRAY OF PIXELS
    for (var row = 0; row < yucky.height; row++){
      var dummyRow = []
      for (col = 0; col < yucky.width; col++){
        dummyRow.push(pixelLine[row * image.width + col])
      }
      pixelArray.push(dummyRow)
    }
  
    return pixelArray;
  }



  var image = document.getElementById("THEimage");
  console.log("--------------------------------------------------------");
  console.log("image",image)
  const imageData = getImageData(image);

  var pixelArray = getPixelArray(imageData);



  //show the image in the dom
  // const canvas = document.createElement("canvas");
  // document.body.appendChild(canvas);
  // canvas.width = image.width;
  // canvas.height = image.height;
  // const ctx = canvas.getContext("2d");
  // ctx.putImageData(imageData, 0, 0);




  // REAL TRANSLATION BEGINS NOW

  const height = image.height
  const width = image.width

  var notVisitedNum = height * width
  const totalPixels = height * width
  var visited = []

  for (i = 0; i < height; i++){
    var dummycol = []
    for (j = 0; j < width; j++){
      dummycol.push(false)
    }
    visited.push(dummycol)
  }

  console.log(visited)
  

  // FUNCTION SECTION

  function findNextFreePoint(topVisited,visited){
    for (row = topVisited[0]; row < height; row++){
      for (col = 0; col < width; col++){
        if (visited[row][col] == false){
          topVisited[0] = row
          topVisited[1] = col
          return [row,col]
        }
      }
    }
    return null
  }

  //console.log("findNextFreePoint test: ",findNextFreePoint([50,11]))

  // NEXT FUNCTION

  function unvisited(neighborsInQuestion, visited){ // returns array of points unvisited
    var toVisit = []
    //console.log("NIQ:",neighborsInQuestion)
    for (index in neighborsInQuestion){
      var point = neighborsInQuestion[index]
      // console.log("point:",point)
      // console.log(typeof(visited))
      // console.log("visited:",visited)
      // console.log("visited[0]:",visited[point[0]])
      // console.log("visitedLength:",visited.length)
      // console.log("isArray: ",Array.isArray(visited))
      // console.log("bob2:",point[0])
      //check to make sure point is in bounds
      if (point[0] < 0 || point[0] >= visited.length) {continue}
      if (point[1] < 0 || point[1] >= visited[0].length) {continue}
      if (visited[point[0]][point[1]] == false){
        toVisit.push(point)
      }
    }
    return toVisit
  }

  console.log("unvisited Test: ",unvisited([[1,2],[3,4],[5,6]], visited))

  // NEXT FUNCTION

  function meAndMyNeighbors(pointInQuestion, height, width){
    points = [pointInQuestion]
    dummyRow = pointInQuestion[0]
    dummyCol = pointInQuestion[1]

    if(dummyRow >= 1) { 
      points.push([dummyRow-1,dummyCol]) 
    }
    if(dummyCol >= 1) { 
      points.push([dummyRow,dummyCol-1]) 
    }
    if(dummyRow < height - 1) { 
      points.push([dummyRow + 1, dummyCol]) 
    }
    if(dummyCol < width - 1) { 
      points.push([dummyRow, dummyCol + 1]) 
    }

    return points
  }

  console.log("meAndMyNeighbors Test: ",meAndMyNeighbors([3,7], height, width))

  // NEXT FUNCTION

  function myNeighbors(pointInQuestion, height, width){
    points = []
    dummyRow = pointInQuestion[0]
    dummyCol = pointInQuestion[1]

    if(dummyRow >= 1) { 
      points.push([dummyRow-1,dummyCol]) 
    }
    if(dummyCol >= 1) { 
      points.push([dummyRow,dummyCol-1]) 
    }
    if(dummyRow < height - 1) { 
      points.push([dummyRow + 1, dummyCol]) 
    }
    if(dummyCol < width - 1) { 
      points.push([dummyRow, dummyCol + 1]) 
    }

    return points
  }

  console.log("myNeighbors Test: ",myNeighbors([3,7], height, width))

  // NEXT FUNCTION

  function meAndMyNeighborsButNotMyVisitedClusterpoints(pointInQuestion,visitedInThisCluster,height,width){
    points = []
    dummyRow = pointInQuestion[0]
    dummyCol = pointInQuestion[1]

    if(dummyRow >= 1 && visitedInThisCluster.includes([dummyRow-1,dummyCol]) == false) { 
      points.push([dummyRow-1,dummyCol]) 
    }
    if(dummyCol >= 1 && visitedInThisCluster.includes([dummyRow,dummyCol-1]) == false) { 
      points.push([dummyRow,dummyCol-1]) 
    }
    if(dummyRow < height - 1 && visitedInThisCluster.includes([dummyRow + 1, dummyCol]) == false) { 
      points.push([dummyRow + 1, dummyCol]) 
    }
    if(dummyCol < width - 1 && visitedInThisCluster.includes([dummyRow, dummyCol + 1]) == false) { 
      points.push([dummyRow, dummyCol + 1]) 
    }
    // console.log("pointsMNS:",points)
    // console.log("visitedInThisCluster:",visitedInThisCluster)
    
    return points
  }

  //visited[3][6] = true
  console.log("meAndMyNeighborsButNotMyVisitedClusterpoints Test: ",meAndMyNeighborsButNotMyVisitedClusterpoints([3,7], visited))

  // NEXT FUNCTION

  function myCommunityColor(points, img){
    var totR = 0
    var totG = 0
    var totB = 0
    var tot = points.length
    //console.log(img)
    for (index in points){
      var point = points[index]
      var dummyPoint = img[point[0]][point[1]]
      //console.log("point:",dummyPoint)
      totR += dummyPoint[0]
      totG += dummyPoint[1]
      totB += dummyPoint[2]
    }
    var avgR = totR/tot
    var avgG = totG/tot
    var avgB = totB/tot
    return [avgR, avgG, avgB]
  }

  //console.log("myCommunityColor Test: ",myCommunityColor([[300,1101],[300,1102],[300,1103]], pixelArray))

  // NEXT FUNCTION

  function maxColorDistance(colorA,colorB){
    diffR = Math.abs(colorA[0]-colorB[0])
    diffG = Math.abs(colorA[1]-colorB[1])
    diffB = Math.abs(colorA[2]-colorB[2])
    return Math.max(diffR,diffG,diffB)
  }

  console.log("maxColorDistance Test: ",maxColorDistance([146,46,2],[225,155,143]))

  // NEXT FUNCTION (unfinished & unused)

  // function cleanUpTheClusterVisitedList(visitedInThisCluster){ // goes through each pixel in the list. If the surrounding 4 pixels are visited by the cluster already, dont bother adding it to the new visited list as it cannot be accessed (in theory)
  //   newVisited = Set()
  //   for (index in visitedInThisCluster){
  //     pixel = visitedInThisCluster[index]
  //     check = myNeighbors(pixel)
  //     for dummyPixel in check:
  //       if (dummyPixel not in visitedInThisCluster):
  //         newVisited.add(pixel)
  //         break
  //   }
  //   return newVisited
  // }

  // MAIN LOOP

  // var arr1 = [1,2,3]
  // var arr2 = [4,5,6]
  // arr1.push(...arr2)
  // console.log("spread",arr1)

  var clusters = []
  var topVisited = [0,0]

  while (true){
    var toCheckOut = []
    var cluster = []
    var corePoint = findNextFreePoint(topVisited,visited)
    topVisited = corePoint
    //console.log("corePoint: ",corePoint)
    console.log("new corePoint")
    if (corePoint == null) {break}

    visited[corePoint[0]][corePoint[1]] = true
    //console.log("made true:",corePoint[0],corePoint[1])
    var coreColor = pixelArray[corePoint[0]][corePoint[1]]
    cluster.push(corePoint)
    notVisitedNum -= 1

    //console.log("meAndMyNeighbors: ",corePoint,meAndMyNeighbors(corePoint,height,width))
    toCheckOut.push(...meAndMyNeighbors(corePoint,height,width))

    var visitedInThisCluster = [corePoint]
    var numVisitedInThisCluster = 0 

    //console.log("toCheckOut: ",toCheckOut[0])
    while (toCheckOut.length > 0) {
      //console.log("toCheckOutLen: ",toCheckOut.length)
      //console.log("in loop")
      point = toCheckOut.pop()
      // console.log("point: ",point)
      // console.log("corePoint",corePoint)
      //console.log(point[0],point[1],cluster)

      if (cluster.includes(point)) {
        //console.log("broke")
        continue}

      
      if (visited[point[0]][point[1]] == true) {
        //console.log("",visited[point[0]])
        //visited[point[0]][point[1]] = "HERE"
        // console.log("----------------------")
        // console.log("visited2: ",visited[point[0]])
        // console.log("pointTriggered:",point[0],point[1])
        // console.log(visited[point[0]][point[1]])
        continue}
      //console.log("at pause")
      //AT PAUSE HERE
      //console.log("bob")
      var pointsNeighbors = meAndMyNeighbors(point, height, width)
      // var neighborsColors = myCommunityColor(pointsNeighbors, pixelArray)
      var neighborsColors = pixelArray[point[0]][point[1]]
      var EPSILON = maxColorDistance(coreColor,neighborsColors)
      // if (EPSILON > 20) {
      //   //console.log("epsilon: ",EPSILON)
      // }

      visitedInThisCluster.push(point)
      numVisitedInThisCluster += 1

      if (EPSILON < EPS){ //change the eps later based on what works well
        notVisitedNum -= 1
        // if (notVisitedNum % 16383 == 1){
        //   console.log("[----------------------]")
        //   console.log("notVisited: ",notVisitedNum)
        //   console.log(totalPixels - notVisitedNum,"/", totalPixels)
        //   updateStatus(totalPixels - notVisitedNum)

        //   // console.log("toCheckOutLen: ",len(toCheckOut))
        //   // console.log("clusterLen: ",(len(cluster)))
        //   // console.log("numVisitedInThisCluster: ",numVisitedInThisCluster)
        // }
        if (notVisitedNum % 16383 == 1) {
          console.log("[----------------------]");
          console.log("notVisited: ", notVisitedNum);
          console.log(totalPixels - notVisitedNum, "/", totalPixels);

          // Asynchronously update the status
          await new Promise(resolve => setTimeout(resolve, 0));
          updateStatus(totalPixels - notVisitedNum + "/" + totalPixels + " pixels");
        }

        cluster.push(point)
        //console.log("cluster: ",cluster)

        visited[point[0]][point[1]] = true // make it visited so we dont double check this later and add it to a diff cluster
        //console.log("made true:",point[0],point[1])
        try {
          //console.log("m&mn: ",meAndMyNeighborsButNotMyVisitedClusterpoints(point,visitedInThisCluster,height,width))
          //console.log("m&ns",meAndMyNeighborsButNotMyVisitedClusterpoints(point,visitedInThisCluster,height,width,visited))
          toCheckOut.push(...meAndMyNeighborsButNotMyVisitedClusterpoints(point,visitedInThisCluster,height,width))
        } catch (error) {
          //console.log("point:",point[0],point[1],"visited:",visitedInThisCluster)
          throw(error)
        }
        
      }

      //console.log("cluster: ",cluster)
      



    }
    clusters.push([coreColor,cluster])



  }


  var NOISECOUNT = 5

  var numNotNoiseClusters = 0
  console.log("clusters:",clusters.length)
  for (index in clusters){
    givenCluster = clusters[index]
    console.log(givenCluster)
    if (givenCluster[1].size > 5){
      //console.log(givenCluster[1].size)
    }

    if (givenCluster[1].length < NOISECOUNT){
      for (pixel in givenCluster[1]){
        continue
        //img[pixel[0]][pixel[1]] = [255,255,255]
      }
    }
    else{
      //changingColorValue = 0
      numNotNoiseClusters += 1
      //clusterColor = givenCluster[0]
      clusterColor = myCommunityColor(givenCluster[1], pixelArray)
      //clusterColor = [random.randint(10,255), 0 , 0]
      //clusterColor = [random.randint(10,255), 0 , random.randint(10,100)]
      //clusterColor = [random.randint(0,255), random.randint(0,255) , random.randint(0,255)]
      for (index in givenCluster[1]){
        pixel = givenCluster[1][index]
        //img[pixel[0]][pixel[1]] = [min(255,changingColorValue),min(255,max(0,changingColorValue-255)),min(255,max(0,changingColorValue-510))]
        pixelArray[pixel[0]][pixel[1]] = clusterColor
        //changingColorValue += 1
      }
    }
  }
  //console.log("clusters:",clusters)

  // edit the image data with the new pixel array
  console.log(imageData.data.length)
  for (var i = 0; i < pixelArray.length; i++) {
    for (var j = 0; j < pixelArray[i].length; j++) {
      var pixel = pixelArray[i][j];
      var index = (i * width + j) * 4;
      imageData.data[index + 0] = pixel[0];
      imageData.data[index + 1] = pixel[1];
      imageData.data[index + 2] = pixel[2];
      // imageData.data[index + 0] = 30;
      // imageData.data[index + 1] = 205;
      // imageData.data[index + 2] = 15;
      if (index % 84763 == 1) {
        console.log(index)
      }


    }
  }
  await new Promise(resolve => setTimeout(resolve, 0));
  updateStatus("finished processing image")
  // show the image in the dom
  console.log('showing image:')
  const canvas2 = document.createElement("canvas");
  document.body.appendChild(canvas2);
  canvas2.width = image.width;
  canvas2.height = image.height;
  canvas2.style.visibility = "show";
  canvas2.id = "canvas2"
  const ctx2 = canvas2.getContext("2d");
  ctx2.putImageData(imageData, 0, 0);
  // set canvas2 to have 700px width, auto height
  canvas2.style.width = "800px";
  canvas2.style.height = "auto";
  canvas2.style.position = "relative";
  console.log("done showing img")
}

// }