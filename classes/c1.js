

function f2c(fh){
    let result = (fh - 32) * 5/9;
    console.log(result);
}

function c2f(cell){
    let result = (cell * 9/5) + 32;
    console.log(result);
}




const promiseExample = (num) => {
    return new Promise ((success, fail) => {
        if(num === 0){
            throw "Zero (0) cannot be neither even nor odd";
        }
        if(num % 2 == 0){
            success();
        } else{
            fail();
        }
    });
};

/*promiseExample(0)
    .then(
        () => {
            console.log ("success! number is even");
        },
        () => { console.log("failed! number is odd");
    }
    )
    .catch (err => {
        console.log ("an error has occured.", err);;
    });*/

    module.exports = {
        promiseExample,
        f2c,
        c2f
     };