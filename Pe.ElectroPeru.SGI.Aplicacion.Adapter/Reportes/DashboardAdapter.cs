using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Reportes;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Reportes;

namespace Pe.ElectroPeru.SGI.Aplicacion.Adapter.Reportes
{
    public sealed class DashboardAdapter
    {
        public static DashboardResponse ObtenerListado(DashboardLogic Logic)
        {
            DashboardResponse Response = new DashboardResponse();

            Response.CodigoIndicador = Logic.CodigoIndicador;
            Response.Anio = Logic.Anio;
            Response.Fecha = Logic.Fecha;
            Response.TipoPeriodicidad = Logic.TipoPeriodicidad;
            Response.Indicador = Logic.Indicador;
            Response.Ponderacion = Logic.Ponderacion;
            Response.Valor = Logic.Valor;

            //Obligatorios
            Response.EstadoRegistro = Logic.EstadoRegistro;
            Response.NumeroFila = Logic.NumeroRegistro;
            Response.FilasTotal = Logic.TotalRegistro;

            return Response;
        }
    }
}
