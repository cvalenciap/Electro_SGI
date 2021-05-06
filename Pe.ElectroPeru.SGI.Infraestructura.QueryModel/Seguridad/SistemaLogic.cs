using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad
{
    public class SistemaLogic : Logic
    {
        //entity
        public int CodigoSistema { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public string Ruta { get; set; }

        public string Token { get; set; }

        public int Parametro { get; set; }

        public int ValorParametro { get; set; }

        //logic
        public string EstadoRegistroDescripcion { get; set; }

        public int CantTotalRegistros { get; set; }
    }
}
