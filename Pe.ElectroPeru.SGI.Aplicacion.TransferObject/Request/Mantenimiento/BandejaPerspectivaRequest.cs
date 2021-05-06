using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class BandejaPerspectivaRequest : BaseRequest
    {
        public Guid? CodigoObjetivoEspecificoFonafe { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public Guid? CodigoPerspectiva { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string NombrePerspectiva { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string DescripcionPerspectiva { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string DescripcionObjetivoEspecificoFonafe { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
        /// <summary>
        /// Codigo Idioma
        /// </summary>
        public string CodigoIdioma { get; set; }
        /// <summary>
        /// Estado
        /// </summary>
        public string EstadoRegistroDescripcion { get; set; }
    }
}
