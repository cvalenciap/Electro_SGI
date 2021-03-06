using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad
{
    public class AccionRequest : BaseRequest
    {
        public int CodigoAccion { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        //Obligacotios
        public string CodigoIdioma { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
