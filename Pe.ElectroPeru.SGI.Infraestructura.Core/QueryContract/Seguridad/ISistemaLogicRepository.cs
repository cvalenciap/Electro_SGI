using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface ISistemaLogicRepository : IQueryRepository<SistemaLogic>
    {
        List<SistemaLogic> Buscar(
            int codigoSistema,
            string nombre,
            string descripcion,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        SistemaLogic Obtener(float codigo);

        List<SistemaLogic> Listar();
    }
}
