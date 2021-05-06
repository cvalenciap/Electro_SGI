using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IAsignacionService : IGenericService
    {
        ProcessResult<List<AsignacionResponse>> Buscar(AsignacionRequest filtro);

        ProcessResult<AsignacionResponse> Obtener(float codigo);

        ProcessResult<List<AsignacionResponse>> Listar();

        ProcessResult<object> Registrar(AsignacionRequest data);

        ProcessResult<object> Eliminar(AsignacionRequest filtro);
    }
}
