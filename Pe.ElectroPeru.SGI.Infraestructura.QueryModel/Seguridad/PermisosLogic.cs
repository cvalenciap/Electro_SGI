using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Seguridad
{
    public class PermisosLogic : Logic
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

        public string EstadoRegistroDescripcion { get; set; }
    }
}
