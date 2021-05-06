using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IUsuariosService : IGenericService
    {
        ProcessResult<UsuariosResponse> Login(string usuario, string contrasena);

        ProcessResult<SistemaResponse> Sistema_x_Token(string token, int codigo_usuario);

        ProcessResult<List<OpcionResponse>> Usuario_x_Sistema(string usuario, int codigo_sistema);

        ProcessResult<List<UsuariosResponse>> Buscar(UsuariosRequest filtro);

        ProcessResult<UsuariosResponse> Obtener(int codigo, int codigoSistema);

        ProcessResult<List<UsuariosResponse>> Listar();

        ProcessResult<object> Registrar(UsuariosRequest data);
        
        ProcessResult<object> Eliminar(UsuariosRequest filtro);
    }
}
