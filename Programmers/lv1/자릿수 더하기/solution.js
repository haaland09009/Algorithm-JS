// https://school.programmers.co.kr/learn/courses/30/lessons/12931
function solution(n)
{
    var answer = 0;

    const str = n.toString();
    const arr = str.split('');
    
   
    for (let i=0; i<arr.length; i++) {
        answer += parseInt(arr[i]);
    }

    return answer;
}

/*
function solution(n)
{
    var answer = 0;
    
    n = String(n);

    for (let i=0; i<n.length; i++) {
        answer += Number(n.charAt(i));
    }

    return answer;
}
*/
