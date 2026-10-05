function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
  
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
}


  window.onload=function() {
    openPage("About")
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").style.display = "block";
  //document.getElementById("defaultOpen").click(); 

  function shrinkText() {
    const containers = document.querySelectorAll('.text-container');

    containers.forEach(container => {
        const text = container.querySelector('.shrink-text');

        // Start at the original font size
        text.style.fontSize = '30px';

        // Shrink until it fits
        while (text.scrollWidth > container.clientWidth) {
            text.style.fontSize =
                (parseFloat(getComputedStyle(text).fontSize) - 1) + 'px';
        }
    });
}

window.addEventListener('load', shrinkText);
window.addEventListener('resize', shrinkText);


