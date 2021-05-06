using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad
{
    public interface IModuloService : IGenericService
    {
        ProcessResult<List<ModuloResponse>> Buscar(ModuloRequest filtro);

        ProcessResult<ModuloResponse> Obtener(float codigo);

        ProcessResult<List<ModuloResponse>> Listar();

        ProcessResult<object> Registrar(ModuloRequest data);

        ProcessResult<object> Eliminar(ModuloRequest filtro);
    }
}
