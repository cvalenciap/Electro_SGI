using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IPerfilLogicRepository : IQueryRepository<PerfilLogic>
    {
        List<PerfilLogic> Buscar(
            int codigoPerfil,
            int codigoSistema,
            string sistema,
            string nombre,
            string descripcion,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina);

        PerfilLogic Obtener(float codigo);

        List<PerfilLogic> Listar();        
    }
}
