

// HTML Element 
var BookMarkName = document.getElementById('BookMarkerName');
var SiteURL = document.getElementById('WebSiteURL');
var TableContent = document.getElementById('TableContent');
var URLalert = document.getElementById('URLalert')


//Array That i put my Sites in 
var SiteList;

if (localStorage.getItem('BookMarks') == null) {

    SiteList = [];

}
else {
    SiteList = JSON.parse(localStorage.getItem('BookMarks'))
    //Display Content
    DisplayContent()
}




function SumbitClick() {

    var Site = {
        name: BookMarkName.value,
        URL: SiteURL.value
    }

    //Push new Values into Array
    SiteList.push(Site)

    //Display Content
    DisplayContent()
    //Save In Local Storge 
    localStorage.setItem('BookMarks', JSON.stringify(SiteList))
    //Clear Conent
    ClearContent()


    document.getElementById('Submit').classList.add('disabled')
    document.getElementById('BookMarkerName').classList.remove('is-invalid', 'is-valid');
    document.getElementById('WebSiteURL').classList.remove('is-invalid', 'is-valid');


}


function DisplayContent() {

    TableContent.innerHTML = '';
    for (var i = 0; i < SiteList.length; i++) {


        TableContent.innerHTML += `  <tr>
    <th class="align-middle" scope="row">${i + 1}</th>
    <td class="align-middle">${SiteList[i].name}</td>
    <td class="align-middle"><a target="_blank" href="${SiteList[i].URL}" class="btn btn-success"><i class="fa-solid fa-eye me-1"></i>Visit</a></td>
    <td class="align-middle"><div onclick="DeleteSite(${i})" class="btn btn-danger">Delete</div></td>
</tr>`
    }


}



function DeleteSite(index) {

    SiteList.splice(index, 1);

    DisplayContent()

    localStorage.setItem('BookMarks', JSON.stringify(SiteList))



}




function ClearContent() {
    BookMarkName.value = ''
    SiteURL.value = ''
}

function regexTest(elementId, regexname, alertId) {


    var regex = {

        name: /.+/,
        URL: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,

    }


    // var nameRegex = /.+/;

    // var URLregex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;



    if (regex[regexname].test(document.getElementById(elementId).value)) {

        document.getElementById(elementId).classList.add('is-valid');
        document.getElementById(elementId).classList.remove('is-invalid');

        document.getElementById(alertId).classList.add('d-none');


    }
    else {
        document.getElementById(elementId).classList.add('is-invalid');
        document.getElementById(elementId).classList.remove('is-valid');

        document.getElementById(alertId).classList.remove('d-none');

    }

    enableButton();
    console.log('s')

}


function enableButton() {

    var checkAlerts = document.getElementById('BookMarkerName').classList.contains('is-valid') && document.getElementById('WebSiteURL').classList.contains('is-valid')

    if (checkAlerts) {

        document.getElementById('Submit').classList.remove('disabled')


    }
    else {

        if (document.getElementById('Submit').classList.contains('disabled')) {

        }
        else {
            document.getElementById('Submit').classList.add('disabled')
        }


    }


}