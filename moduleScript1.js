

//?handleModule1

//* handleModule1

function handleModule1() {
    let value1 = document.getElementById('valueProductForm1').value; //Product Name
    let value2 = document.getElementById('valueProductForm2').value; //Total Product
    let value3 = document.getElementById('valueProductForm3').value; //Inventory Product
    let arrayNull = [];
    let totalPercent = value3 / value2 * 100;
    let percent = parseFloat(totalPercent.toFixed(2));
    let inventory = 100 - percent;
    arrayNull.push(parseFloat(inventory), parseFloat(percent));
    handleLoading1(value1.toUpperCase());
    handleRemoveImg1('#imgGif1');
    handleAddTagChart1('canvas', 'id', 'myChart', 'handleProductForm1');
    chartPie1(arrayNull);
}



//* Handle Loading
//?handleLoadingData
function handleLoading1(valueName) {
    let timerInterval
    Swal.fire({
        title: `Sản phẩm ${valueName}`,
        text: 'Modal with a custom image.',
        imageUrl: 'https://i.pinimg.com/originals/4c/96/e7/4c96e7c93d36fd75a1a598e6c02cb398.gif',
        imageWidth: 400,
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
            turnOffClickAllPage1(1);
        },
        willClose: () => {
            clearInterval(timerInterval);
            turnOffClickAllPage1(0);
        }
    })
}
//?handle turn off click all page
function turnOffClickAllPage1(value){
    let bodyv = document.querySelector('body');
    if (value !== 1) {
        bodyv.classList.remove('blockClickAllPage');

    } else {
        bodyv.classList.add('blockClickAllPage');
    }
}
//* End Handle Loading


//*handle Img
//?handleRemoveImg
function handleRemoveImg1(valueImg) {
    let getValue = document.querySelector(valueImg);
    if (getValue != null) {
        getValue.remove();
    }
}
//?handleAddImg
function handleAddTagImg1(tagCreate, attr, idAttr, attr2, idAttr2, src, valueSrc, formHandle) {
    let tagCanvas = document.createElement(tagCreate);
    tagCanvas.setAttribute(attr, idAttr);
    tagCanvas.setAttribute(attr2, idAttr2);
    tagCanvas.setAttribute(src, valueSrc);
    let elementProductForm = document.getElementById(formHandle);
    elementProductForm.appendChild(tagCanvas);
}
//*End handle Img


//*handle ChartJs
//?handleCreateTagChart
function handleAddTagChart1(tagCreate, attr, idChart, formHandle) {
    let tagCanvas = document.createElement(tagCreate);
    tagCanvas.setAttribute(attr, idChart);
    let elementProductForm = document.getElementById(formHandle);
    elementProductForm.appendChild(tagCanvas);
}
//?type ChartPie fill data for ChartJs
function chartPie1(dataArr) {
    // create chart pie
    const data = dataArr;
    const ctx = document.getElementById("myChart").getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Inventory", "bought"],
            datasets:
                [{
                    label: "This Percent",
                    backgroundColor: [
                        "#2ecc71",
                        "#3498db",
                    ],
                    data: data
                }],
        },
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {

                        let label = data.labels[tooltipItem.index];
                        let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return ' ' + label + ': ' + value + '%';

                    }
                }
            }
        }
    });
}
//*End handle ChartJs

//*handleClose for Modal
function handleClose1() {
    document.getElementById('handleProductForm1').reset();
    
    let valueImg = document.getElementById('imgGif1');
    if (valueImg == null) {
        handleAddTagImg1('img', 'class', 'centerImg', 'id', 'imgGif1', 'src', 'https://i.pinimg.com/originals/b7/e3/ca/b7e3ca50f1e31f8e6939f10d04e5c191.gif', 'handleProductForm1');
    }
}

//?EndModule1