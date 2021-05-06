using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento
{
    public class BandejaAccionEstrategicaSectorialRequest : BaseRequest
    {
        public Guid? CodigoAccionEstrategicaSectorial { get; set; }        
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string NombreAccionEstrategicaSectorial { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string DescripcionAccionEstrategicaSectorial { get; set; }        
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
