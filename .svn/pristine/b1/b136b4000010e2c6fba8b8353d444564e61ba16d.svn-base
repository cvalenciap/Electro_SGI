using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IOpcionLogicRepository : IQueryRepository<OpcionLogic>
    {
        List<OpcionLogic> Buscar(
            int codigoOpcion,
            int codigoModulo,
            int opcionPadre,
            string opcionPadreNombre,
            string nombre,
            string descripcion,
            string controlador,
            string metodo,
            string area,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        OpcionLogic Obtener(float codigo);

        List<OpcionLogic> Listar();
    }
}
