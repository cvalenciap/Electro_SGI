using Pe.ElectroPeru.SGI.Infraestructura.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;
using System;
using System.Collections.Generic;

namespace Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Seguridad
{
    public interface IUsuariosLogicRepository : IQueryRepository<UsuariosLogic>
    {
        List<UsuariosLogic> Buscar(
            int codigoUsuario,
            string nombre,
            string apellido,
            string numDocumentoIdentidad,
            string usuario,
            string nombreCargo,
            int codigoCargo,
            string estadoRegistro,
            string estadoRegistroDescripcion,
            int numeroPagina,
            int tamanioPagina
        );

        UsuariosLogic Obtener(int codigo, int codigoSistema);

        List<UsuariosLogic> Listar();

        UsuariosLogic Login(string usuario, string contrasena);

        SistemaLogic Sistema_x_Token(string token, int codigo_usuario);

        List<OpcionLogic> Usuario_x_Sistema(string usuario, int codigo_sistema);
    }
}
