using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad
{
    public class UsuariosResponse : BaseResponse
    {
        //entity
        public int CodigoUsuario { get; set; }

        public string Apellido { get; set; }

        public string Nombre { get; set; }

        public string EMail { get; set; }
        
        public string TipoDocumentoIdentidad { get; set; }

        public string NumDocumentoIdentidad { get; set; }

        public string Usuario { get; set; }

        public string ContrasenaNueva { get; set; }

        public string Contrasena { get; set; }

        public int CodigoCargo { get; set; }

        public string NombreCargo { get; set; }

        //logic
        public bool ReestablecerContrasena { get; set; }

        public int CantTotalRegistros { get; set; }

        //Obligatorio
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
