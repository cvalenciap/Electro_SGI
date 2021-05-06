using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class BandejaAccionEstrategicaSectorialResponse : BaseRequest
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
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
