// https://school.programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {

    var arr = n.toString().split('').sort().reverse().join('');
    
    return parseInt(arr);
    
}


/*
function solution(n) {
    return parseInt(n.toString().split('').sort((a,b) => b - a).join(''));
}
*/
