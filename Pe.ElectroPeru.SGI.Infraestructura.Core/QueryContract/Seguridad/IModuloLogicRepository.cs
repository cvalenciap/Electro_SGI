using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IModuloLogicRepository : IQueryRepository<ModuloLogic>
    {
        List<ModuloLogic> Buscar(
            int codigoModulo,
            int codigoSistema,
            string nombre,
            string descripcion,
            int moduloPadre,
            string moduloPadreNombre,
            string controlador,
            string metodo,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        ModuloLogic Obtener(float codigo);

        List<ModuloLogic> Listar();
    }
}
