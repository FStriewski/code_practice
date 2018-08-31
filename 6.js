function countWords(inputWords) {

    let obj = {}

    inputWords.reduce((x,y) => 
    {
  
        obj.hasOwnProperty(y)? obj[y] +=1 : obj[y] = 1 
    }, obj[inputWords[0]]
    )
    
    return obj

}

/*
Official:

    function countWords(arr) {
          return arr.reduce(function(countMap, word) {
            countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
            return countMap
          }, {}) // second argument to reduce initialises countMap to {}
        }
*/
    
    module.exports = countWords
