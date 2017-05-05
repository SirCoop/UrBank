var customers = [];

function getArray() {
    return $.getJSON('../data/code-test.json');
}

function tableAppend() {
    customers.forEach((customer) => {
        $('#customerTable').append('<tr class=""><td>' + customer.name + '</td><td class="apy">' + customer.apy + '%</td><td class="earnings">$' + customer.earnings + '</td></tr>');
    });
}

getArray().done(function (json) {
    // now you can use json
    $.each(json, function (key, val) {
        customers[key] = val;
    });
    tableAppend();
    $('#customerTable').append('<tr id="tableDisclaimer"><td></td><td></td><td>*Based on $50,000 deposit.</td></tr>');
});