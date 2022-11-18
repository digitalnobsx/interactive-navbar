//classList - shows/gets all classes
//contains - checks classLists for specific classes
// add - add class
// remove - removes class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function(){
    // console.log(links.classList)
    // console.log(links.classList.contains('show-links'))
    // if(links.classList.contains('show-links')){
    //    links.classList.remove('show-links');
    // } else {
     //   links.classList.add('show-links');
    // };
     links.classList.toggle('show-links')
});