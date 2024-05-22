// https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {

    var number = Math.sqrt(n);
  
    if (n % number === 0) {
        return Math.pow(number+1, 2);
    } else {
        return -1;
    }
    
}


/*
function solution(n) {

    var number = Math.sqrt(n);
    
    if (Math.ceil(number) === number) {
        return (number+1)**2
    } else {
        return -1;
    }
    
}
*/
