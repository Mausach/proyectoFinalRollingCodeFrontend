import swal from 'sweetalert';
import authApi from '../../../api/authApi';



export const cargarProductosDB = async (setCargarProductos, navigate) => {
    try {
        const resp = await authApi.get('/admin/productos');

        setCargarProductos(resp.data.productos);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");;
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }
};
