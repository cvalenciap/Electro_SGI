using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IOpcionService : IGenericService
    {
        ProcessResult<List<OpcionResponse>> Buscar(OpcionRequest filtro);

        ProcessResult<OpcionResponse> Obtener(float codigo);

        ProcessResult<List<OpcionResponse>> Listar();

        ProcessResult<object> Registrar(OpcionRequest data);

        ProcessResult<object> Eliminar(OpcionRequest filtro);
    }
}
