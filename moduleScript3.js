function handleModule3() {
    let arrNull = [];
    let cacheDom;
    let value1 = document.getElementById('valueSavingBankForm1').value;
    let value2 = document.getElementById('valueSavingBankForm2').value;
    let value3 = document.getElementById('valueSavingBankForm3').value;
    let value4 = document.getElementById('valueSavingBankForm4').value;
    let monthlyInterest = Math.ceil((value2 * value3 / 100) / 12);
    let termInterest = Math.ceil(monthlyInterest * value4);
    handleLoading3(value1);
    console.log(monthlyInterest,termInterest);
    handleInterest3(monthlyInterest, termInterest);
    handleRemoveImg3('#imgGif3');
    handleAddTagChart3('canvas', 'id', 'myChart3', 'handleProductForm3')
    dataChartBarMonthly3(value2, value3, value4, arrNull);
    chartBar3(arrNull, value4, 'myChart3');
}

//*HandleLoading
//? inner interest 
function handleInterest3(getValue1, getValue2) {
    let value5 = document.getElementById('valueSavingBankForm5');
    let value6 = document.getElementById('valueSavingBankForm6');
    value5.value = getValue1;
    value6.value = getValue2;
}
//?handle turn off click all page
turnOffClickAllPage3 = (value) => {
    let bodyv =  document.querySelector('body');
    if(value !== 1){
        bodyv.classList.remove('blockClickAllPage');

    }else{
        bodyv.classList.add('blockClickAllPage');
    }
}
//?Loading 
function handleLoading3(valueName) {
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
        willOpen: () => {
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
            turnOffClickAllPage3(1);
        },
        willClose: () => {
            clearInterval(timerInterval);
            turnOffClickAllPage3(0);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

//*EndHandleLoading


//*handleImg
//?handleRemoveImg
function handleRemoveImg3(valueImg) {
    cacheDom = document.querySelector(valueImg);
    let getValue = document.querySelector(valueImg);
    if(getValue !== null){
        getValue.remove();
    }
}

//?handleAddImg
function handleAddTagImg3(tagCreate, attr, idAttr, attr2, idAttr2, src, valueSrc, formHandle) {
    let tagCanvas = document.createElement(tagCreate);
    tagCanvas.setAttribute(attr, idAttr);
    tagCanvas.setAttribute(attr2, idAttr2);
    tagCanvas.setAttribute(src, valueSrc);
    let elementProductForm = document.getElementById(formHandle);
    elementProductForm.appendChild(tagCanvas);
}

//*EndHandleImg

//*handleChartJS
//?handleTagChart
function handleAddTagChart3(tagCreate, attr, idChart, formHandle) {
    let tagCanvas = document.createElement(tagCreate);
    tagCanvas.setAttribute(attr, idChart);
    let elementProductForm = document.getElementById(formHandle);
    elementProductForm.appendChild(tagCanvas);
}

//? dataChartBarMonthly
function dataChartBarMonthly3(value2, value3, value4, arrNull) {
    let moneySend = value2;
    let interest = value3;
    let period = value4;
    for (let index = 1; index <= period; index++) {
        //? Số tiền lãi = Số tiền gửi x (lãi suất/100) (%năm)/360 x số tháng gửi.
        let moneyInterest = moneySend * (interest / 100) / 12 * index;
        arrNull.push(Math.ceil(moneyInterest));
    }
    return arrNull;

}

//?chartBar
function chartBar3(dataArr, dataLabel, nameAttr) {
    // create chart pie
    let dataLabels = dataLabel;
    let arrNull = [];
    let arrNullBgColor = [];
    let arrNullBdColor = [];
    for (let index = 1; index <= dataLabel; index++) {
        let name = `Tháng `, bgColor = 'rgba(54, 162, 235, 0.2)', bdColor = 'rgba(54, 162, 235, 1)';
        name += index;
        arrNull.push(name);
        arrNullBgColor.push(bgColor);
        arrNullBdColor.push(bdColor);
    }
    let dataValue = dataArr;
    const ctx = document.getElementById(nameAttr).getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrNull,
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

//*EndHandleChartJS

//*handleClose for Modal
//?handleClose
function handleClose3() {
    document.getElementById('handleProductForm3').reset();
    let valueId = document.getElementById('myChart3');
    if (valueId != null) {
        valueId.remove();
    }
    let valueImg = document.getElementById('imgGif3');
    if (valueImg == null) {
        handleAddTagImg3('img', 'class', 'centerImg', 'id', 'imgGif3', 'src', 'https://i.pinimg.com/originals/fd/e1/7d/fde17da262ff00f1b2c03efc8110a67c.gif', 'handleProductForm3');
    }
}
//*EndHandleClose for Modal



