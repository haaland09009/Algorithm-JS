// https://school.programmers.co.kr/learn/courses/30/lessons/12926
function solution(s, n) {
    var answer = '';
    
    var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    
    for (var i=0; i<s.length; i++) {
        if (s.charAt(i) === " ") {
            answer += s.substring(i, i+1);
        }
        if (upperLetter.indexOf(s.charAt(i)) !== -1) {
            var idx = (upperLetter.indexOf(s.charAt(i)) + n) % upperLetter.length;
            answer += upperLetter.substring(idx, idx + 1);
        } else if (lowerLetter.indexOf(s.charAt(i)) !== -1) {
            var idx = (lowerLetter.indexOf(s.charAt(i)) + n) % lowerLetter.length;
            answer += lowerLetter.substring(idx, idx + 1);
        }
    }
    
    
    return answer;
}
