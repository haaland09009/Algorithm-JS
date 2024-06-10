// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// replace() 메서드는 해당 문자열을 한 번만 찾아 변경하고 replaceAll()은 해당하는 문자열을 모두 찾아 치환한다.
function solution(s) {
    
    var arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (var i=0; i<arr.length; i++) {
        s = s.replaceAll(arr[i], i);
    }
    
    return parseInt(s);
}
