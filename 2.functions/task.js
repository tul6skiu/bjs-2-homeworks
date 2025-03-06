function getArrayParams(...arr) {
    if (arr.length === 0) {
      return {};
    }
     let min = arr[0];
     let max = arr[0];
     let sum = 0;
  
     for (let i = 0; i < arr.length; i++) {
         const num = arr[i];
  
         if (num < min) {
             min = num;
         }
         if (num > max) {
             max = num;
         }
  
    
         sum += num;
     }
  
     const avg = +(sum / arr.length).toFixed(2);
  
  
    return { min: min, max: max, avg: avg };
  }
  
  function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      sum += num;
    }
    return sum;
  
  }
  
  function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
     let min = arr[0];
     let max = arr[0];
  
     for (let i = 0; i < arr.length; i++) {
         const num = arr[i];
  
         if (num < min) {
             min = num;
         }
         if (num > max) {
             max = num;
         }
     }
     return max - min;
  
  }
  
  function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
     let eventNumberSum = 0;
     let oddNumberSum = 0;
  
     for (let i = 0; i < arr.length; i++) {
         const num = arr[i];
  
         if (num % 2 === 0) {
          eventNumberSum += num;
         }else {
          oddNumberSum += num;
         }
     }
     return  eventNumberSum - oddNumberSum;
  
  }
  
  function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }
     let eventNumberSum = 0;
     let count = 0;
  
     for (let i = 0; i < arr.length; i++) {
         const num = arr[i];
  
         if (num % 2 === 0) {
          eventNumberSum += num;
          count++;
         }
     }
     return eventNumberSum / count;
  }
  
  function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
  
  
    for (const arr of arrOfArr) {
        const result = func(...arr);
  
        if (result > maxWorkerResult) {
            maxWorkerResult = result; 
        }
    }
  
    return maxWorkerResult;
  }  