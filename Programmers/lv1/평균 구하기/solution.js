// https://school.programmers.co.kr/learn/courses/30/lessons/12944
function solution(arr) {

    var sum = 0;
    
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    
    return sum / arr.length;
}
