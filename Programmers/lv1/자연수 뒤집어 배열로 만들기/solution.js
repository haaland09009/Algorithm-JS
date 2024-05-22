// https://school.programmers.co.kr/learn/courses/30/lessons/12932
function solution(n) {
    
    var str = n.toString();
    var arr = str.split('').reverse();
    
    for (let i=0; i<arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    
    return arr;
}
