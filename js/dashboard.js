(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

//pop-up box

$( document ).ready(function() {
  generate();

  function generate(){
    var quotes = ['There were total 6 superovers in IPL from 2008 to 2016',
                  'Chris Gayle won the orange cap twice in the IPL season',
                  '368 matches out of 577 are won with less than 10 runs of winning margin',
                  '27 out of 52 umpires were Indian in the IPL season',
                  '188 out of 523 individual players have been awarded man of the match',
                  'Only Kohli, Sachin and Chris Gayle were awarded both orange cap and man of the match in the entire IPL season',
                  'There were total 5532 wickets taken in IPL season',
                  '291 local players were given chance to perform on the big stage with reputed International players'
                ]; 
    var quote = quotes[Math.floor(Math.random() * quotes.length)]; 

    $(".quote").text(quote);
  }

  $(".pop").fadeIn(300);

  $("#top-bar-button, .mobile-button").click(function () {
     $(".pop").fadeIn(300);
   });

  $(".pop button").click(function(){
    generate();
  });

   $(".pop span").click(function () {
      $(".pop").fadeOut(300);
  });
});



//charts
// Home-chart
new Chart(document.getElementById("home-bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Season 7", "Season 8", "Season 9"],
      datasets: [
        {
          label: "Total matches till last season",
          backgroundColor: ["#1aff1a", "#00ff00", "#00e600","#00cc00","#00b300","#009900", "#008000", "#006600", "#004d00"],
          data: [58,115,175,248,322,398,458,517,577]
        },
        {
          type: 'line',
          data: [309,595.82,910.45,1210.45,1498.73,1790.89,2045.59,2292.66,2606.96],
          label: "Total Avg. runs till last season",
          borderColor: "#3e95cd",
          fill: false
          //data: [17922,34271,53150,74292,95625,117829,133111,147688,166546]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Seasons of IPL'
      }
    }
});
//Bowler-chart


new Chart(document.getElementById("bowlers-chart"), {
  type: 'line',
  data: {
    labels: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6", "Season 7", "Season 8", "Season 9"],
    datasets: [{ 
        data: [1.41,1.28,1.03,1.14,0.50,0.92,0.86,0.82],
        label: "Average No Balls",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [7.88,7.68,8.30,6.92,4.01,6.67,7.64,7.15],
        label: "Average Wides",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Average bowlers performance per match'
    }
  }
});

new Chart(document.getElementById("venue-chart"), {
    type: 'pie',
    data: {
      labels: ["National", "International"],
      datasets: [{
        label: "Total number of matches",
        backgroundColor: ["#FF8E79", "#8e5ea2"],
        data: [500,77]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'IPL is going International'
      }
    }
});

new Chart(document.getElementById("national-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Mumbai", "Bangalore", "Kolkata", "Delhi", "Chennai", "Chandigarh", "Hyderabad", "Jaipur", "Pune", "Ahemdabad", "Visakhapatnam", "others"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#009999", "#ff9900", "#fff900", "#ff8e79", "#258e79", "#25dc79"],
          data: [77,58,54,53,48,42,41,33,25,12,11,46]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Match venues in India'
      }
    }
});

new Chart(document.getElementById("players-chart"), {
    type: 'bar',
    data: {
      labels: ["purple cap", "orange cap", "man of the match", "captains"],
      datasets: [
        {
          label: "National",
          backgroundColor: "#009999",
          data: [3,4,2,18]
        }, {
          label: "Total",
          backgroundColor: "#8e5ea2",
          data: [9,9,9,38]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Comarision between national and international players'
      }
    }
});







