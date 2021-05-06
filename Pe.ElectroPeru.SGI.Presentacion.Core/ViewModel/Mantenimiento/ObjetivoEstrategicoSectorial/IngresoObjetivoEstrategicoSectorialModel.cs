using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoObjetivoEstrategicoSectorial
{
    /// <summary>
    /// Modelo de Observacion Planeada
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 27112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IngresoObjetivoEstrategicoSectorialModel
    {
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaAccionEstrategicaSectorial { get; set; }
        /// <summary>
        /// Lista de Tipo Trabajador
        /// </summary>
        public List<SelectListItem> ListaEstadoArea { get; set; }       
        /// <summary>
        /// Mantenimiento
        /// </summary>
        public ObjetivoEstrategicoSectorialResponse ObjetivoEstrategicoSectorial { get; set; }
        /// <summary>
        /// Lista Inspeccion Gestion
        /// </summary>
        public List<ObjetivoEstrategicoSectorialDetalleResponse> ListaObjetivoEstrategicoSectorialDetalle { get; set; }
        public ObjetivoEstrategicoSectorialDetalleResponse ObjetivoEstrategicoSectorialDetalle { get; set; }
        public BandejaObjetivoEstrategicoSectorialResponse BandejaObjetivoEstrategicoSectorial { get; set; }


        public IngresoObjetivoEstrategicoSectorialModel()
        {           
            this.ListaAccionEstrategicaSectorial = new List<SelectListItem>();
            this.ListaEstadoArea = new List<SelectListItem>();
            this.ObjetivoEstrategicoSectorial = new ObjetivoEstrategicoSectorialResponse();
            this.BandejaObjetivoEstrategicoSectorial = new BandejaObjetivoEstrategicoSectorialResponse();
            this.ObjetivoEstrategicoSectorialDetalle = new ObjetivoEstrategicoSectorialDetalleResponse();
        }
    }
}
