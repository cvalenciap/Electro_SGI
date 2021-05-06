using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class BandejaObjetivoEstrategicoSectorialResponse : BaseRequest
    {
        public Guid? CodigoObjetivoEstrategicoSectorial { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string NombreObjetivoEstrategicoSectorial { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string DescripcionObjetivoEstrategicoSectorial { get; set; }      
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
