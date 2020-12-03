//?HandleEventClickTab2
function handleSwapButton(newIdOnClick) {
    let valueId = document.getElementById('idModule6');
    valueId.setAttribute("onclick", newIdOnClick);
}

document.getElementById('checkTab1').addEventListener('click', function () {
    handleSwapButton("handleModule6()");
})
document.getElementById('checkTab2').addEventListener('click', function () {
    handleSwapButton("handleModule7()");
})
document.getElementById('checkTab3').addEventListener('click', function () {
    //!call printJs
    handleSwapButton("printJS('dataTable1', 'html')");
})
document.getElementById('checkTab4').addEventListener('click', function () {
    //!call printJs
    handleSwapButton("printJS('dataTable2', 'html')");
})

//?End HandleEventClickTab2

//?Handle modalTab1 Add Class & Students
let arrClass = [];
let arrAllValue =[];
function handleModule6() {
    let value1 = document.getElementById('valueClassStudentForm1').value;
    let value2 = document.getElementById('valueClassStudentForm2').value;
    let value3 = document.getElementById('valueClassStudentForm3').value;
    let value4 = document.getElementById('valueClassStudentForm4').value;
    arrAllValue = [value1, value2, value3, value4];
    loopSelectOption(arrClass, "valueClassStudentForm8");
    sweetConfirm(value2, arrClass,arrAllValue,'fillDataTable1');
   
}
let arrName = [];
function handleModule7() {
    let value5 = document.getElementById('valueClassStudentForm5').value;
    let value6 = document.getElementById('valueClassStudentForm6').value;
    let value7 = document.getElementById('valueClassStudentForm7').value;
    let value8 = document.getElementById('valueClassStudentForm8').value;
    arrAllValue = [value5, value6, value7, value8];
    sweetConfirm(value5, arrName, arrAllValue, 'fillDataTable2');
}

//?function sweetConfirm1
function sweetConfirm(valueName, arrClass,arrAllValue,idFillDataTable) {
    Swal.fire({
        title: `Bạn có muốn tạo mới lớp "${valueName}" không?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Lưu`,
        denyButtonText: `Hủy Lưu`,
    }).then((result) => {
        //! Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            //! Does check exist in the array?
            existArray(valueName, arrClass,arrAllValue,idFillDataTable);
        } else if (result.isDenied) {
            Swal.fire('Các thay đổi không được lưu', '', 'error');
        }
    })
}
//?End function sweetConfirm1

//?function check exist in the array
function existArray(valueName, valueArray, arrAllValue, idFillDataTable) {
    let checkArr = valueArray.indexOf(valueName);
    if (checkArr == -1) {
        Swal.fire('Lưu thành công hãy!', '', 'success');
        valueArray.push(valueName);
        printToDataTable(arrAllValue, idFillDataTable);

    } else {
        Swal.fire(`Lưu thất bại vì dữ liệu "${valueName}" đã tồn tại!`, '', 'warning');
    }
}

//?function loop to select option 
function loopSelectOption(valueArr, nameId) {
    if (valueArr !== null) {
        for (let index = 0; index < valueArr.length; index++) {
            let option = document.createElement("option");
            option.text = valueArr[index];
            option.value = valueArr[index];
            let select = document.getElementById(nameId);
            select.appendChild(option);
        }
    }
}


function printToDataTable(arrAllValue, idFillDataTable) {
    //?fill dataTable
    let node1 = document.createElement("tr");
    arrAllValue.forEach(function (x) {
        let node2 = document.createElement("td");
        let textnode = document.createTextNode(x);
        node2.appendChild(textnode)
        node1.appendChild(node2);
    })
    document.getElementById(idFillDataTable).appendChild(node1);
}



