using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IPerfilService : IGenericService
    {
        ProcessResult<List<PerfilResponse>> Buscar(PerfilRequest filtro);

        ProcessResult<PerfilResponse> Obtener(int codigo);

        ProcessResult<List<PerfilResponse>> Listar();

        ProcessResult<object> Registrar(PerfilRequest data);

        ProcessResult<object> Eliminar(PerfilRequest filtro);
    }
}
