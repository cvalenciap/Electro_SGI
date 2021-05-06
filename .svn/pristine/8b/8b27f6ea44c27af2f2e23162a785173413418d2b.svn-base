using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IPermisosService : IGenericService
    {
        ProcessResult<List<PermisosResponse>> Buscar(PermisosRequest filtro);

        ProcessResult<PermisosResponse> Obtener(float codigo);

        ProcessResult<List<PermisosResponse>> Listar();

        ProcessResult<object> Registrar(PermisosRequest data);

        ProcessResult<object> Eliminar(PermisosRequest filtro);
    }
}
