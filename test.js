var ss = [1,2,3,4]

function runningSum(nums) {
    var result = [1];
    for(let i = 0; i < nums.length; i++) {
        elem = nums[i] + nums[i+1];
        result = [Number(elem), ...result];
    }
    console.log(result);
}

runningSum(ss)
