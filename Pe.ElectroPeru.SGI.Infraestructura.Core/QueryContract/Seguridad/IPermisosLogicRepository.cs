using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IPermisosLogicRepository : IQueryRepository<PermisosLogic>
    {
        List<PermisosLogic> Buscar(
            int codigoPermisos,
            int codigoPerfil,
            int codigoAccion,
            int codigoOpcion,
            string perfil,
            string accion,
            string opcion,
            string estadoPermiso,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        PermisosLogic Obtener(float codigo);

        List<PermisosLogic> Listar();
    }
}
