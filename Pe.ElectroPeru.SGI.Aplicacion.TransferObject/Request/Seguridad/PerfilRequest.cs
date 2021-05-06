using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad
{
    public class PerfilRequest : BaseRequest
    {
        public int CodigoPerfil { get; set; }

        public int CodigoSistema { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public string Sistema { get; set; }

        //Obligacotios
        public string CodigoIdioma { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
