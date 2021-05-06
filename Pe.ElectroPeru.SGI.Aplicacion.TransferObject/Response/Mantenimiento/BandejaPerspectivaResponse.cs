using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class BandejaPerspectivaResponse : BaseRequest
    {
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
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
