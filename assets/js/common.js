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


// var Top2 = document.querySelector('button');


// var scrollPosition = $($(this).attr("data-target")).offset().top;
// const Top = document.getElementById('go-to-top');

document.querySelector('button').addEventListener('click', function(){
    let scrollPosition = this.getAttribute("data-target")
    console.log(scrollPosition)
    console.log(scrollPosition.offsetTop)
    // console.log(this.getAttribute("data-target"))
    // window.scrollTo({top: scrollPosition, behavior: 'smooth'});
})