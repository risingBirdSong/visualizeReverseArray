
const reverseArray = <T>(arr: T[]): T[] => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++; end--;
  }
  return arr;
}


// console.log(reverseArray<number>([1, 2, 3, 4]));

export default reverseArray;