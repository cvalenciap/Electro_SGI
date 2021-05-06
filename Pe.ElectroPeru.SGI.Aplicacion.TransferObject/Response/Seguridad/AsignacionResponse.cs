using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad
{
    public class AsignacionResponse : BaseResponse
    {
        public float CodigoAsignacion { get; set; }

        public float CodigoSistema { get; set; }

        public float CodigoUsuario { get; set; }

        public float CodigoPerfil { get; set; }

        //logic
        public string Sistema { get; set; }

        public string Usuario { get; set; }

        public string Perfil { get; set; }

        public int CantTotalRegistros { get; set; }

        //Obligatorio
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
