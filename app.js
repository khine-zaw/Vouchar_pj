//var icon = document.getElementById('modeIcon');
function addRow() {

    $("tbody").append(`
    <tr>
        <td class="width-50">
            <button class="btn btn-outline-primary del-btn">
            <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
        </td>
        <td class="width-300">
            <input type="text" class="form-control text-capitalize product-name">
        </td>
        <td class="width-150">
            <input type="number" class="form-control text-right cost" value="0" min="0">
        </td>
        <td class="width-150">
            <input type="number" class="form-control text-right quantity"  value="0" min="0">
        </td>
        <td class="text-right">
            <h4 class="mb-0 price">0</h4>
        </td>
    </tr>
    `);

}

function total() {
    $("#total").html($(".price").toArray().map(el => el.innerHTML).reduce((x, y) => Number(x) + Number(y)));
}
//for one row when loading
addRow();

$(".add-row-btn").click(function () {
    addRow();
})

//delete row
$("tbody").on("click", ".del-btn", function () {

    if ($("tbody tr").toArray().length == 1) {
        addRow();
    }
    //$(this).parent().parent().remove();
    $(this).parentsUntil("tbody").remove();
    var result = $('#total').html();
    total();

})

$("tbody").on("keyup change", "input", function () {
    let cost = $(this).parentsUntil("tbody").find(".cost").val();
    let quantity = $(this).parentsUntil("tbody").find(".quantity").val();

    //console.log(cost,quantity);

    $(this).parentsUntil("tbody").find(".price").html(cost * quantity);
    total();
})

//change night mode
function changeMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("modeIcon").classList.toggle('fa-sun');
}

//loader
    var myVar;

    function myLoader() {
            myVar = setTimeout(showPage, 3000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

