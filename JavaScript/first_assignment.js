function mindGame(num)
{
    let answer = 0;
    num *= 3;
    num += 10;
    num /= 2;
    num -= 5;

    answer = num;

    return answer;
}
function evenOdd(stn)
{
    let num = stn.length;
    if(num % 2 == 0)
    {
        console.log("Even");
    }
    else
    {
        console.log("Odd");
    }

}
function isLGSeven(num)
{
    let dif = num - 7;
    if(dif < 7)
    {
        return dif;
    }
    else
    {
        return num*2;
    }
}
function findingBadData(num)
{
    let cnt = 0;
    for(let i = 0; i <num.length; i++)
    {
        if(num[i] < 0)
        {
            cnt++;
        }
    }
    console.log("Sakib");
    return cnt;
}
function gemsToDiamond(num1, num2, num3)
{
    let ttl = num1*21 + num2*32 + num3*43;
    if(ttl > 2000)
    {
        return ttl - 2000;
    }
    return ttl;
}
