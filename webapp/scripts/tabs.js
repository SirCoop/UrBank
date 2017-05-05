var tabOne = $('#news'),
    tabTwo = $('#archive');

tabOne.css('display', 'block');
tabTwo.css('display', 'none');

$('#newsButton').addClass('active');
$('#archiveButton').addClass('inactive');

function openCity(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks, activeTab;

    activeTab = $('.tabcontent:visible')[0];

    // display proper tab content one at a time
    if (activeTab.id === tabName) {
        return;
    }
    if (activeTab.id === tabOne[0].id) {
        tabOne.hide();
        tabTwo.show();
    } else if (activeTab.id === tabTwo[0].id) {
        tabTwo.hide();
        tabOne.show();
    }

    // Get all elements with class="tablinks" and remove the class "active/inactive"
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" inactive", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.visibility = "visible";
    evt.currentTarget.className += " active";

    for (i = 0; i < tablinks.length; i++) {
        let str = 'active';

        if (!tablinks[i].className.match(str)) {
            tablinks[i].className +=  " inactive";
        }
    }
}