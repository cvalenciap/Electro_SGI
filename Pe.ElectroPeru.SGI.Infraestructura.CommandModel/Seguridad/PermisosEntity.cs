using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Seguridad
{
    public class PermisosEntity : Entity
    {
        public int CodigoPermisos { get; set; }

        public int CodigoPerfil { get; set; }

        public int CodigoAccion { get; set; }

        public int CodigoOpcion { get; set; }

        public string EstadoPermiso { get; set; }
    }
}
