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
