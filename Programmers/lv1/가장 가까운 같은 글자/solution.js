// https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
    
    var answer = new Array(s.length).fill(-1);
   
    var map = new Map();
    
    for (var i=0; i<s.length; i++) {
        if (map.has(s.charAt(i))) {
            answer[i] = i - map.get(s.charAt(i));
        }
        map.set(s.charAt(i), i);
    }
    
    
    return answer;
}
