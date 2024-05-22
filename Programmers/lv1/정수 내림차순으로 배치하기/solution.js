// https://school.programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {

    var arr = n.toString().split('').sort().reverse().join('');
    
    return parseInt(arr);
    
}


/*
function solution(n) {
    
    var arr = n.toString().split('').sort().reverse();
    
    var str = '';
    for (let i=0; i<arr.length; i++) {
        str += arr[i];
    }
    
    return parseInt(str);
}
*/
