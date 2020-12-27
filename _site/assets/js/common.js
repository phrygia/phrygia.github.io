var Top = document.getElementById('go-to-top');

window.addEventListener('scroll', function() {
    if(this.scrollY > 200) {
        Top.classList.add('on');
    } else {
        Top.classList.remove('on');
    }
})

Top.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})


// var Top = document.getElementById('ddd');

// window.addEventListener('scroll', function() {
//     if(this.scrollY > 200) {
//         Top.classList.add('on');
//     } else {
//         Top.classList.remove('on');
//     }
// })

// // Top.addEventListener('click', function(){
// //     window.scrollTo({top: 0, behavior: 'smooth'});
// // })


// // var scrollPosition = $($(this).attr("data-target")).offset().top;
// // const Top = document.getElementById('go-to-top');
// Top.addEventListener('click', function(){
//     let scrollPosition = (this.getAttribute("data-target")).offsetTop
//     console.log(scrollPosition)
//     console.log(this.getAttribute("data-target"))
//     window.scrollTo({top: scrollPosition, behavior: 'smooth'});
// })
