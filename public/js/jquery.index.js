$(document).ready(function () {

    $(".edit").click(function (event) {
        let id = event.target.id.replace("edit_", "");
        let company = $("#company_" + id);
        let currentCompany = company.html();
        company.replaceWith("<input type='text' name='company' placeholder='" + currentCompany + "'>");
    });
});