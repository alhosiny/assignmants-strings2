exports.lengthOfLastWord = function(a){
        sum_length = 0;
        return_sum = 0;
        for(i = 0; i < a.length; i++){
            if(a.charAt(i) === " "){
                if(sum_length != 0)
                   return_sum = sum_length;
                sum_length = 0;
                continue;
            }
            else{
                sum_length++;
            }
        }
        return return_sum;
}