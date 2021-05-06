using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
using System;

namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento
{
    /// <summary>
    /// Entidad de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 08022017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ResponsableEntity : Entity
    {
        /// <summary>
        /// Código de Responsable
        /// </summary>
        public Guid? CodigoResponsable { get; set; }

        /// <summary>
        /// Nombres
        /// </summary>
        public string Nombres { get; set; }

        /// <summary>
        /// Apellido Paterno
        /// </summary>
        public string ApellidoPaterno { get; set; }

        /// <summary>
        /// Apellido Materno
        /// </summary>
        public string ApellidoMaterno { get; set; }

        /// <summary>
        /// Indicador si Permite Cierre
        /// </summary>
        public int? CodigoGenero { get; set; }

        /// <summary>
        /// NombreGenero
        /// </summary>
        //public string NombreGenero { get; set; }

        /// <summary>
        /// Código de Puesto de Trabajo
        /// </summary>
        public int? CodigoCargo { get; set; }

        /// <summary>
        /// NombreCargo
        /// </summary>
        //public string NombreCargo { get; set; }
        
        /// <summary>
        /// Correo Electrónico
        /// </summary>
        public string CorreoElectronico { get; set; }

        /// <summary>
        /// Código de Tipo de Documento
        /// </summary>
        public int? CodigoTipoDocumento { get; set; }

        /// <summary>
        /// Número de Documento
        /// </summary>
        public string NumeroDocumento { get; set; }

        /// <summary>
        /// NombreCargo
        /// </summary>
       // public string NombreTipoDocumento { get; set; }

    }
}

