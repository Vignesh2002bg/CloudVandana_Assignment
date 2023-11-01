let text = "This is a sunny day.";
let n=text.length;
let index=false;
if(text[text.length-1]==".")
{
    index=true;
    n=n-1;
}
let res = Reverse(text,n);
if(index==true)
{
    res=res+".";
}
console.log(res);

function Reverse(arr,n) {
    let i = 0;
    let j = 0;
    let s = "";
    let result = "";

    while (i < n) {
        while (i < n && arr[i] === ' ') {
            i++;
        }
        if (i === n) {
            break;
        }
        j = i;
        while (j < n && arr[j] !== ' ') {
            j++;
        }
        s = store(i, j, arr);
        if (result.length === 0) {
            result = s;
        } else {
            result = result + " " + s;
        }
        i = j;
    }

    return result;
}

function store(start, end, arr1) {
    let result = "";
    for (let k = end - 1; k >= start; k--) {
        result += arr1[k];
    }
    return result;
}



