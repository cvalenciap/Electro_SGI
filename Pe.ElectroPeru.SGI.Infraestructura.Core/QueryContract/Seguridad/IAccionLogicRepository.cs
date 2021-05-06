using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IAccionLogicRepository : IQueryRepository<AccionLogic>
    {
        List<AccionLogic> Buscar(
            int codigoAccion,
            string nombre,
            string descripcion,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        AccionLogic Obtener(float codigo);

        List<AccionLogic> Listar();
    }
}
