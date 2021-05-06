using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IAsignacionLogicRepository : IQueryRepository<AsignacionLogic>
    {
        List<AsignacionLogic> Buscar(
            int codigoAsignacion,
            int codigoSistema,
            int codigoUsuario,
            int codigoPerfil,
            string sistema,
            string usuario,
            string perfil,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        AsignacionLogic Obtener(float codigo);

        List<AsignacionLogic> Listar();
    }
}
