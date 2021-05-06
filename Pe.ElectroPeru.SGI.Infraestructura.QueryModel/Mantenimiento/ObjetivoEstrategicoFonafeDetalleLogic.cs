﻿using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento
{
    /// <summary>
    /// Logic de Tabla de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ObjetivoEstrategicoFonafeDetalleLogic : Logic
    {
        public Guid? CodigoObjetivoEstrategicoFonafeDetalle { get; set; }
        public Guid? CodigoObjetivoEstrategicoFonafe { get; set; }

        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
        public string NombreObjetivoEstrategicoEmpresa { get; set; }
    }
}

