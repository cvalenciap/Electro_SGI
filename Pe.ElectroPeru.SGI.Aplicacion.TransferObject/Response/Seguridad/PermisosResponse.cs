using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad
{
    public class PermisosResponse : BaseResponse
    {
        //entity
        public int CodigoPermisos { get; set; }

        public int CodigoPerfil { get; set; }

        public int CodigoAccion { get; set; }

        public int CodigoOpcion { get; set; }

        public string EstadoPermiso { get; set; }

        //logic

        public bool EstadoPermisoBool { get; set; }

        public string Perfil { get; set; }

        public string Opcion { get; set; }

        public string Accion { get; set; }

        public string EstadoPermisoDescripcion { get; set; }

        public int CantTotalRegistros { get; set; }

        //Obligatorio
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
