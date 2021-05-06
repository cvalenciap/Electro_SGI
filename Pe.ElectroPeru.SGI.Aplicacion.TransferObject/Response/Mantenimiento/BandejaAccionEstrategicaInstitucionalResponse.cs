using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base;
using System;


namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento
{
    public class BandejaAccionEstrategicaInstitucionalResponse : BaseRequest
    {
        public Guid? CodigoAccionEstrategicaInstitucional { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string NombreAccionEstrategicaInstitucional { get; set; }
        /// <summary>
        /// Codigo Proyecto
        /// </summary>
        public string DescripcionAccionEstrategicaInstitucional { get; set; }        
        /// <summary>
        /// Número de Registro OPT
        /// </summary>
        public string NombreCompletoResponsable { get; set; }
        public string EstadoRegistroDescripcion { get; set; }

        public int? Permiso { get; set; }
    }
}
