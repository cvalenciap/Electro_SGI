using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Seguridad
{
    public class SistemaEntity : Entity
    {
        public int CodigoSistema { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public string Ruta { get; set; }

        public string Token { get; set; }

        public int Parametro { get; set; }

        public int ValorParametro { get; set; }
    }
}
