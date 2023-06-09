import Swal from 'sweetalert2';

const getMessageSuccess = (message = 'Lưu thông tin thành công') => {
    Swal.fire({
        position: 'center',
        title: `<div style="color: white; font-weight: bold">${message}</div>`,
        // imageUrl: successGif,
        background: '#872649',
        showConfirmButton: true,
        confirmButtonColor: 'white',
        confirmButtonText: '<div style="color: #872649;font-weight: bold;width: 135px;height: 30px;display: flex;align-items: center;justify-content: center;font-size: 18px">Đóng</div>',
    })
};

export default getMessageSuccess
