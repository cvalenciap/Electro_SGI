using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class BandejaObjetivoEstrategicoEmpresaResponse : BaseRequest
    {
        public Guid? CodigoObjetivoEstrategicoEmpresa { get; set; }
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
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
