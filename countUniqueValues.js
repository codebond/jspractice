// implement a function which accepts a sorted array
// counts the unique values in array
// it can have negative numbers too but it will always be sorted

// e.g. [1,1,1,1,2,2,3,4,4,4,5,6,7]


// Algo
    // output
    //{1: 4, 2: 2, 3: 1, 4: 3, 5: 1, 6: 1, 7: 1}
    // prev = ''
    // result = {}
    // cnt = 0
    // 0..len-1
        // cur = arr[i]
        // if prev == '', // cnt = 1, prev = cur
        // else if prev == cur cnt = cnt + 1
        // else
            // add the prev value in object and assign prev = curr, cnt = 1


function start(arr){
    len = arr.length;
    let prev = '';
    let cnt = 0;
    let result = new Map();
    for(var i=0;i<len;i++){
        let current = arr[i];
        if(prev==''){
            prev = current;
            cnt = cnt + 1;
        }else if(prev==current){
            cnt = cnt + 1;
        }else{
            result.set(prev,cnt);
            cnt = 1;
            prev = current;
        }

    }
    console.log('resulting count is:');
    console.log(result);
}

arr = [1,1,1,1,2,2,3,4,4,4,5,6,7];
start(arr);