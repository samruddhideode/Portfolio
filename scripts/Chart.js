//--------------------------------------------SKILLS------------------------------------------------
        
var skills = ["html", "css", "javascript", "bootstrap"]
var percent = [95, 90, 80, 80]
var i;

for(i=0; i<4; i++)
{
    let add_pie = document.getElementsByClassName("container3")[0].getElementsByClassName("row")[0];
    add_pie.innerHTML += '<div class="col-md-3">'+
                            '<div class="pies">'+
                                '<canvas id='+skills[i]+'></canvas>'+
                                '<h4 class="text-center">'+ skills[i]+'</h4>'+
                            '</div>'+
                         '</div>';
}

var mypiechart;

for(i=0; i<skills.length; i++)
{
  mypiechart = document.getElementById(skills[i]);
  new Chart(mypiechart, {
      type: 'doughnut', //bar, horizontalBar, pie, line, doughnut (you can replace type by any of these)
      data:{
          labels:[percent[i],100-percent[i]],
          datasets:[{
              backgroundColor: ['#eecad4', 'rgba(0,0,0,0)'],
              data: [percent[i],100-percent[i]]
          }]
      },
      options:{
        legend: { display: false },
        cutoutPercentage: 70
      }
  })
}
