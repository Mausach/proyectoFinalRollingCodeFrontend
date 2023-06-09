import authApi from '../../../api/authApi';
import swal from 'sweetalert';



//carga de pedidos desde DB
export const cargadePedidos = async (setCargarPedidos) => {
    try {
        const resp = await authApi.get('/admin/pedidos');

        setCargarPedidos(resp.data.pedidos);
    } catch (error) {
        console.log(error.response.data.msg);
        swal("ERROR", error.response.data.msg, "error");

    }
};