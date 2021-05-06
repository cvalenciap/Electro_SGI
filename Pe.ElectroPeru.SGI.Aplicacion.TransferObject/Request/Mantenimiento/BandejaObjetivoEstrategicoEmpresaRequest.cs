using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class BandejaObjetivoEstrategicoEmpresaRequest : BaseRequest
    {
        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public int? CodigoModeloConceptual { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string NombreObjetivoEstrategicoEmpresa { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string DescripcionObjetivoEstrategicoEmpresa { get; set; }
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string DescripcionModeloConceptual { get; set; }
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
