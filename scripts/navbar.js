var sectionList = document.querySelectorAll("section") //list of all sections
console.log(sectionList);
var navElements = document.querySelectorAll("nav li ")
console.log(navElements) 


window.addEventListener('scroll', ()=>{
    let current = '';
    sectionList.forEach(section =>{
        const scrolled = pageYOffset; //how much we have already scrolled
        const section_top = section.offsetTop; //depth of section from top
        const section_height = section.clientHeight; //total height of the section
        if(scrolled>= (section_top-200)){
            current = section.getAttribute('id');
        }
    })
    navElements.forEach(li =>{
        li.classList.remove('active'); //remove active class from all nav items
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })

})