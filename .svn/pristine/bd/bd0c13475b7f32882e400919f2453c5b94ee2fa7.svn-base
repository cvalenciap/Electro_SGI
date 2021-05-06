using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IAccionService : IGenericService
    {
        ProcessResult<List<AccionResponse>> Buscar(AccionRequest filtro);

        ProcessResult<AccionResponse> Obtener(float codigo);

        ProcessResult<List<AccionResponse>> Listar();

        ProcessResult<object> Registrar(AccionRequest data);

        ProcessResult<object> Eliminar(AccionRequest filtro);
    }
}
