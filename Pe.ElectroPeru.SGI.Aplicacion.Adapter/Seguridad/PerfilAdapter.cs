using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class PerfilAdapter
    {
        public static PerfilResponse ObtenerPaginado(PerfilLogic Logic)
        {
            PerfilResponse Response = new PerfilResponse();

            Response.CodigoPerfil = Logic.CodigoPerfil;
            Response.CodigoSistema = Logic.CodigoSistema;
            Response.Sistema = Logic.Sistema;
            Response.Nombre = Logic.Nombre;
            Response.Descripcion = Logic.Descripcion;

            Response.CantTotalRegistros = Logic.CantTotalRegistros;

            //Obligatorios
            Response.EstadoRegistro = Logic.EstadoRegistro;
            Response.EstadoRegistroDescripcion = Logic.EstadoRegistroDescripcion;
            Response.NumeroFila = Logic.NumeroRegistro;
            Response.FilasTotal = Logic.TotalRegistro;

            return Response;
        }
    }
}
