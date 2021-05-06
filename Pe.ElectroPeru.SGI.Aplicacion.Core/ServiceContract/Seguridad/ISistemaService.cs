using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface ISistemaService : IGenericService
    {
        ProcessResult<List<SistemaResponse>> Buscar(SistemaRequest filtro);

        ProcessResult<SistemaResponse> Obtener(float codigo);

        ProcessResult<List<SistemaResponse>> Listar();

        ProcessResult<object> Registrar(SistemaRequest data);

        ProcessResult<object> Eliminar(SistemaRequest filtro);
    }
}
