using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Seguridad
{
    public sealed class SistemaAdapter
    {
        public static SistemaResponse ObtenerPaginado(SistemaLogic Logic)
        {
            SistemaResponse Response = new SistemaResponse();

            Response.CodigoSistema = Logic.CodigoSistema;
            Response.Nombre = Logic.Nombre;
            Response.Descripcion = Logic.Descripcion;
            Response.Ruta = Logic.Ruta;
            Response.Token = Logic.Token;
            Response.Parametro = Logic.Parametro;
            Response.ValorParametro = Logic.ValorParametro;

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
