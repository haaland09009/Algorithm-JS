// https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
    var answer = [];
    
    commands.forEach((command) => {
        var start = command[0] - 1;
        var end = command[1];
        var idx = command[2] - 1;
        
        var arr = array.slice(start, end);
        
        arr.sort((a, b) => a - b);
        
        answer.push(arr[idx]);
    });
    
    return answer;
}
