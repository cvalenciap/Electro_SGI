using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class UsuariosAdapter
    {
        public static UsuariosResponse ObtenerPaginado(UsuariosLogic Logic)
        {
            UsuariosResponse Response = new UsuariosResponse();

            Response.CodigoUsuario = Logic.CodigoUsuario;
            Response.Apellido = Logic.Apellido;
            Response.Nombre = Logic.Nombre;
            Response.EMail = Logic.EMail;
            Response.TipoDocumentoIdentidad = Logic.TipoDocumentoIdentidad;
            Response.NumDocumentoIdentidad = Logic.NumDocumentoIdentidad;
            Response.Usuario = Logic.Usuario;
            Response.Contrasena = Logic.Contrasena;
            Response.CodigoCargo = Logic.CodigoCargo;
            Response.NombreCargo = Logic.NombreCargo;
            Response.CantTotalRegistros = Logic.CantTotalRegistros;

            //Obligatorios
            Response.EstadoRegistroDescripcion = Logic.EstadoRegistroDescripcion;
            Response.EstadoRegistro = Logic.EstadoRegistro;
            Response.NumeroFila = Logic.NumeroRegistro;
            Response.FilasTotal = Logic.TotalRegistro;

            return Response;
        }
    }
}
