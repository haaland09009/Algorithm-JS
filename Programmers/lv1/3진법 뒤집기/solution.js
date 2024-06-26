// https://school.programmers.co.kr/learn/courses/30/lessons/68935
function solution(n) {
    var answer = 0;
    
    var letter = convertNumber(n);
    
    for (let i=letter.length-1; i>=0; i--) {
        answer += letter.charAt(i) * Math.pow(3, i);
    }
    
   
    return answer;
}


function convertNumber(n) {
    
    var str = "";
    
    while (n > 0) {
        str = String(n % 3) + str;
        n = Math.floor(n / 3);
    }
    
    return str;
}


/*
function solution(n) {
    var answer = 0;
    
    var letter = convert(n);
    
    for (var i=0; i<letter.length; i++) {
        answer += Math.pow(3, letter.length - 1 - i) * Number(letter.charAt(i));
    }
    
    return answer;
}


function convert(n) {
    
    var str = "";
    
    while (n > 0) {
        str = String(n % 3) + str;
        n = Math.floor(n / 3);
    }
    
    return str.split('').reverse().join('');
}
*/
