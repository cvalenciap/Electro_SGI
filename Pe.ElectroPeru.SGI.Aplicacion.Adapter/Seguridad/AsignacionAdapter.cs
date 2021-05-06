using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class AsignacionAdapter
    {
        public static AsignacionResponse ObtenerPaginado(AsignacionLogic Logic)
        {
            AsignacionResponse Response = new AsignacionResponse();

            Response.CodigoAsignacion = Logic.CodigoAsignacion;
            Response.CodigoSistema = Logic.CodigoSistema;
            Response.CodigoUsuario = Logic.CodigoUsuario;
            Response.CodigoPerfil = Logic.CodigoPerfil;

            Response.Sistema = Logic.Sistema;
            Response.Usuario = Logic.Usuario;
            Response.Perfil = Logic.Perfil;
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
