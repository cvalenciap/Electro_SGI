using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad
{
    public class AccionLogic : Logic
    {
        //entity
        public int CodigoAccion { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        //logic
        public string EstadoRegistroDescripcion { get; set; }

        public int CantTotalRegistros { get; set; }
    }
}
