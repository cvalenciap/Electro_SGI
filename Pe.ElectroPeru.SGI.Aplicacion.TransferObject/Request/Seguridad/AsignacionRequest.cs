using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Seguridad
{
    public class AsignacionRequest : BaseRequest
    {
        public int CodigoAsignacion { get; set; }

        public int CodigoSistema { get; set; }

        public int CodigoUsuario { get; set; }

        public int CodigoPerfil { get; set; }

        public string Sistema { get; set; }

        public string Usuario { get; set; }

        public string Perfil { get; set; }

        //Obligatorios
        public string CodigoIdioma { get; set; }

        public string EstadoRegistroDescripcion { get; set; }
    }
}
