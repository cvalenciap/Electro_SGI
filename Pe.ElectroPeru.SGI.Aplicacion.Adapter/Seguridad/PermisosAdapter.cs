using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class PermisosAdapter
    {
        public static PermisosResponse ObtenerPaginado(PermisosLogic Logic)
        {
            PermisosResponse Response = new PermisosResponse();

            Response.CodigoPermisos = Logic.CodigoPermisos;
            Response.CodigoPerfil = Logic.CodigoPerfil;
            Response.CodigoAccion = Logic.CodigoAccion;
            Response.CodigoOpcion = Logic.CodigoOpcion;
            Response.EstadoPermiso = Logic.EstadoPermiso;

            Response.CantTotalRegistros = Logic.CantTotalRegistros;

            Response.EstadoPermisoBool = Logic.EstadoPermisoBool;
            Response.Opcion = Logic.Opcion;
            Response.Accion = Logic.Accion;
            Response.Perfil = Logic.Perfil;
            Response.EstadoPermisoDescripcion = Logic.EstadoPermisoDescripcion;

            //Obligatorios
            Response.EstadoRegistroDescripcion = Logic.EstadoRegistroDescripcion;
            Response.EstadoRegistro = Logic.EstadoRegistro;
            Response.NumeroFila = Logic.NumeroRegistro;
            Response.FilasTotal = Logic.TotalRegistro;

            return Response;
        }
    }
}
