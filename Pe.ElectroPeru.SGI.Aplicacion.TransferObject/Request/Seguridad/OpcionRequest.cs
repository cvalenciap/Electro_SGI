using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad
{
    public class OpcionRequest : BaseRequest
    {
        public int CodigoOpcion { get; set; }

        public int CodigoModulo { get; set; }

        public int OpcionPadre { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public string Glyphicon { get; set; }

        public string Controlador { get; set; }

        public string Metodo { get; set; }

        public string Area { get; set; }

        //Obligacotios
        public string OpcionPadreNombre { get; set; }

        public string CodigoIdioma { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
