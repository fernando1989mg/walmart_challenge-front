export const formatNumber = (input) => 
{
    var num = input.toString().replace(/\./g,'');
    if(!isNaN(num)){
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        return num.split('').reverse().join('').replace(/^[\.]/,'');
    }else{
        return input;
    }
}