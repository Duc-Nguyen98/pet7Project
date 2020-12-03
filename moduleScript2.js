
//*handleModule2

//?HandleDefaultValueInputRange
let slider = document.getElementById("valueRange");
let output = document.getElementById("valueDiscount");
let setDefaultValue = document.getElementById("valueRange").defaultValue;
//! handleDefaultValue 
output.innerHTML = setDefaultValue + '%';

slider.oninput = function () {
    output.innerHTML = this.value + "%"; //! => slider.value
}

function handleModule2() {
    let value1 = document.getElementById("valuePercentForm1").value;
    let value2 = document.getElementById("valuePercentForm2").value;
    let value3 = document.getElementById("valueRange").value;
    let totalPercent = value2 * value3 / 100;
    //! call function loading
    handleLoading2(value1, value2, value3, totalPercent);
}

//*HandleLoadingForChartJS
//?HandleLoading
function handleLoading2(valueName, valueTotal, valuePercent, totalPercent) {
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
            turnOffClickAllPage2(1);
        },
        willClose: () => {
            clearInterval(timerInterval);
            turnOffClickAllPage2(0);
        }
    }).then(() => {
        Swal.fire({
            title: `<strong>ProductName:${valueName.toUpperCase()}</strong>`,
            icon: 'info',
            width: '500px',
            html:
                ` <div class="card">
                    <div class="card-body">
                        <p class="card-text">Product price: ${valueTotal}</p>
                        <p class="card-text">Percent: ${valuePercent}%</p>
                        <p class="card-text">Total: ${valueTotal - totalPercent}VND</p>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    })
}
//?handle turn off click all page
turnOffClickAllPage2 = (value) => {
    let bodyv =  document.querySelector('body');
    if(value !== 1){
        bodyv.classList.remove('blockClickAllPage');

    }else{
        bodyv.classList.add('blockClickAllPage');
    }
}
//*EndHandleLoadingForChartJS


//*handleClose for Modal
//?handleClose
function handleClose2() {
    document.getElementById('handleProductForm2').reset();
    //! reset input ranger
    let slider = document.getElementById("valueRange");
    let output = document.getElementById("valueDiscount");
    let setDefaultValue = document.getElementById("valueRange").defaultValue;
    //! handleDefaultValue 
    output.innerHTML = setDefaultValue + '%';

    let valueId = document.getElementById('myChart');
    if (valueId != null) {
        valueId.remove();
    }
}
//*EndHandleClose for Modal

//*EndModule2
