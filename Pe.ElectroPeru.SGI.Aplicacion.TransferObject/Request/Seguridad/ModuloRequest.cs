using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad
{
    public class ModuloRequest : BaseRequest
    {
        public int CodigoModulo { get; set; }

        public int CodigoSistema { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public int ModuloPadre { get; set; }

        public string Glyphicon { get; set; }

        public string Controlador { get; set; }

        public string Metodo { get; set; }

        public string RutaImagen { get; set; }

        //Obligacotios
        public string ModuloPadreNombre { get; set; }

        public string CodigoIdioma { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
