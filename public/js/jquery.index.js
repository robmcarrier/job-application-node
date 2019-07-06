$(document).ready(function () {

    $(".edit").click(function (event) {
        let id = event.target.id.replace("edit_", "");
        let company = $("#company_" + id);
        let currentCompany = company.html();
        let jobTitle = $("#jobTitle_" + id);
        let currentJobTitle = jobTitle.html();
        let status = $("#status_" + id);
        let currentStatus = status.html();
        let statusDropDown = $("#status_dropdown_div_" + id);
        let editButton = $("#edit_" + id);
        company.replaceWith("<input type='text' name='company' placeholder='" + currentCompany + "' value='" + currentCompany + "'>");
        jobTitle.replaceWith("<input type='text' name='jobTitle' placeholder='" + currentJobTitle + "' value='" + currentJobTitle + "'>");
        status.hide();
        statusDropDown.toggleClass("hideDropdown");
        console.log(currentStatus);
        $("#status_dropdown_" + id).val(currentStatus);
        statusDropDown.val(currentStatus);
        editButton.toggleClass("hideDropdown");
        $("#save_" + id).toggleClass("hideDropdown");
    });

    $(".delete").click( function() {
       window.alert("Are you sure you want to delete?")
    });

});