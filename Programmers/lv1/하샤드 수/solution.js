// https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solution(x) {
    var answer = true;
    
    var str = x.toString().split('');
   
    var sum = 0;
    for (let i=0; i<str.length; i++) {
        sum += parseInt(str[i]);
    }
    
    if (x % sum !== 0) {
        answer =  false;
    }
    
    return answer;
}
