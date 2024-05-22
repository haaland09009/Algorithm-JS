// https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
    
    if (arr.length == 1) {
        return [-1];
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
        return arr;
    }
    
}
