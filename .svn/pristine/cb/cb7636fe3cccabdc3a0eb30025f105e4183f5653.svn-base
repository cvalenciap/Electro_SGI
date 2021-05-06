using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class AccionAdapter
    {
        public static AccionResponse ObtenerPaginado(AccionLogic Logic)
        {
            AccionResponse Response = new AccionResponse();

            Response.CodigoAccion = Logic.CodigoAccion;
            Response.Nombre = Logic.Nombre;
            Response.Descripcion = Logic.Descripcion;

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
