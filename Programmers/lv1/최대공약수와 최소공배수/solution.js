// https://school.programmers.co.kr/learn/courses/30/lessons/12940
function solution(n, m) {
    var answer = new Array(2);
    
    answer[0] = gcd(n, m);
    answer[1] = lcm(n, m);
    
    return answer;
}

function lcm(n, m) {
    
    return n * m / gcd(n, m);
    
}

function gcd(n, m) {
    
    if (m % n == 0) {
        return n;
    }
   
    return gcd(m % n, n);
    
}
