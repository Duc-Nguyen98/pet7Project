
//* handle loading valueInterest
function handleModule4() {
    handleClose4();
    let arrNull = [];
    let value1 = document.getElementById('valueLoanBankForm1').value;
    let value2 = document.getElementById('valueLoanBankForm2').value;
    let value3 = document.getElementById('valueLoanBankForm3').value;
    let value4 = document.getElementById('valueLoanBankForm4').value;
    // let value5 = document.getElementById('valueLoanBankForm5').value;
    let valueInterest = document.getElementById("handleProductForm4");
    valueInterest.querySelector(".valueInterest").innerHTML = value4;
    let interestBankMonth = value2 * ((value3 / 100) / value4);
    let totalBank = parseInt(interestBankMonth * value4) + parseInt(value2);

    handleLoading4(value1);
    handleInterest4(Math.ceil(interestBankMonth),Math.ceil(totalBank));
    handleRemoveImg4('#imgGif4');
    handleAddTagChart4('canvas', 'id', 'myChart4', 'handleProductForm4');
    dataChartBarMonthly4(value2, value3, value4,arrNull);
    chartBar4(arrNull, value4, 'myChart4');
    
}

//*handle turn off click all page

turnOffClickAllPage4 = (value) => {
    let bodyv =  document.querySelector('body');
    if(value !== 1){
        bodyv.classList.remove('blockClickAllPage');

    }else{
        bodyv.classList.add('blockClickAllPage');
    }
}

//*Loading
function handleLoading4(valueName) {
    let timerInterval
    Swal.fire({
        title: `<h3>Xin chào bạn ${valueName.toUpperCase()}</h3>`,
        text: 'Modal with a custom image.',
        imageUrl: 'https://i.pinimg.com/originals/4c/96/e7/4c96e7c93d36fd75a1a598e6c02cb398.gif',
        imageWidth: 500,
        width: '400px',
        imageHeight: 200,
        imageAlt: 'Custom image',
        timerProgressBar: true,
        timer: 5000,
        showConfirmButton: false,
        html: '<h4>Vui lòng chờ để chúng tôi xử lý dữ liệu</h4><br><h5>Sẽ tự động đóng sau <b></b> giây.</h5><br>',
        willOpen: ( ) => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100);
            turnOffClickAllPage4(1);   //?turn off Click All Page
        },
        willClose: () => {
            turnOffClickAllPage4(0);
            clearInterval(timerInterval);
            
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })


}

///* inner interest 
function handleInterest4(getValue1, getValue2) {
    let value6 = document.getElementById('valueLoanBankForm6');
    let value7 = document.getElementById('valueLoanBankForm7');
    value6.value = getValue1;
    value7.value = getValue2;
}

//*handleRemoveImg
function handleRemoveImg4(valueImg) {
    let getValue = document.querySelector(valueImg);
    if (getValue != null) {
        getValue.remove();
    }
}

//*handleTagChart
function handleAddTagChart4(tagCreate, attr, idChart, formHandle) {
    let tagCanvas = document.createElement(tagCreate);
    tagCanvas.setAttribute(attr, idChart);
    let elementProductForm = document.getElementById(formHandle);
    elementProductForm.appendChild(tagCanvas);
}

function dataChartBarMonthly4(value2, value3, value4, arrNull) {
    let moneyLoan = value2;
    let interest = value3;
    let period = value4;
    for (let index = 1; index <= period; index++) {
        let moneyInterest = (moneyLoan * ((interest / 100) / period)) * index;
        arrNull.push(Math.ceil(moneyInterest));
    }
    return arrNull;
}

// *chartBar
function chartBar4(dataArr, dataLabel, nameAttr) {
    // create chart pie
    let dataLabels = dataLabel;
    let arrNullMonth = [];
    let arrNullBgColor = [];
    let arrNullBdColor = [];
    for (let index = 1; index <= dataLabel; index++) {
        let name = `Tháng `, bgColor = 'rgba(54, 162, 235, 0.2)', bdColor = 'rgba(54, 162, 235, 1)';
        name += index;
        arrNullMonth.push(name);
        arrNullBgColor.push(bgColor);
        arrNullBdColor.push(bdColor);
    }
    let dataValue = dataArr;
    console.log(dataValue);
    const ctx = document.getElementById(nameAttr).getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrNullMonth,
            datasets: [{
                label: 'Biểu đồ lãi suất theo tháng',
                data: dataValue,
                backgroundColor: arrNullBgColor,
                borderColor: arrNullBdColor,
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        let label = data.labels[tooltipItem.index];
                        let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return ' ' + label + ': ' + value + 'VNĐ';
                    }
                }
            }
        }
    });
}


// //*handleAddImg
function handleAddTagImg4(tagCreate, attr, idAttr, attr2, idAttr2, src, valueSrc, formHandle) {
    let tagCanvas = document.createElement(tagCreate);
    tagCanvas.setAttribute(attr, idAttr);
    tagCanvas.setAttribute(attr2, idAttr2);
    tagCanvas.setAttribute(src, valueSrc);
    let elementProductForm = document.getElementById(formHandle);
    elementProductForm.appendChild(tagCanvas);
}



//*handleClose for Modal
function handleClose4() {
    document.getElementById('handleProductForm3').reset();
    let valueId = document.getElementById('myChart4');
    if (valueId != null) {
        valueId.remove();
    }
    let valueImg = document.getElementById('imgGif4');
    if (valueImg == null) {
        handleAddTagImg4('img', 'class', 'centerImg', 'id', 'imgGif4', 'src', 'https://i.pinimg.com/originals/fd/e1/7d/fde17da262ff00f1b2c03efc8110a67c.gif', 'handleProductForm4');
    }
}

//*End Module4