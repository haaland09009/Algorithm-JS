//https://school.programmers.co.kr/learn/courses/30/lessons/12916
function solution(s){
    var answer = true;

    s = s.toLowerCase();
    
    var pCount = 0;
    var yCount = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s.charAt(i) === 'p') {
            pCount++;
        } else if (s.charAt(i) === 'y') {
            yCount++;
        }
    }
    
    if (pCount !== yCount) {
        answer = false;
    }

    return answer;
}
