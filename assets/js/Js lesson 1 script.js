// Step 1 Getting Connection
// alert("welcone!");

/*
// Step 2 
// var counter = 0;
// counter = counter + 1; အပေါ်အောက်တူ


// counter  = counter + 1;
// alert(counter);

// querySelector ရှာကြည့်

// Step 3

// let counter = 0;
// counter = counter + 1;
// အတိုးချုပ်ပုံ
// counter +=1;
// counter ++;

// step 3 onattribute "onclick= functionName ()"
// let counter = 0;

// function count () {
// counter ++;
// document.querySelector ('h1').innerHTML = counter ;

// if (counter % 10 ===0) {
//  alert (သိပ်တော်တာပဲ အခုနံပါတ်က ${counter}');
//     }
//  }

// 2 
// dicument.querySelector("h1").innerHTML = conter ;


// 1 
// let counter = 0;
// document.querySelector ('h1').innerHTML = "hello yangon!"

// function count () {
// alert (counter);
// }


//   step 4

    let counter = 0;

function count (){
    counter ++;
    document.querySelector ('h1').innerHTML = counter ;
 
    if (counter % 10 ===0) {
        alert(`သိပ်တော်တာပဲ အခုနံပါတ်က ${counter}`);
    }
}
document.addEventListener ('DOMContentLoaded', function() {
    // document.querySelector('button').addEventListener('click', count());

    // event ဟန်တလာ
    document.querySelector('button').onclick=count;
});

