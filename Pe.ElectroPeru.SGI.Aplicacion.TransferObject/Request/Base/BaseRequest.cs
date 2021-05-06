using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Base
{
    /// <summary>
    /// Representa el objeto request de Proveedor
    /// </summary>
    /// <remarks>
    /// Creación :      GMD 20150602 <br />
    /// Modificación :               <br />
    /// </remarks>
    public class BaseRequest : Filtro
    {
        /// <summary>
        /// Constructor de la clase
        /// </summary>
        public BaseRequest()
        {
            this.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
            //this.CodigoEmpresa = Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru);
            //this.CodigoSistema = Guid.Parse(DatosConstantes.Sistema.CodigoSGI);            
            this.RegistroCascada = false;
        }
        /// <summary>
        /// Código estado record
        /// </summary>
        public bool RegistroCascada { get; set; }
        /// <summary>
        /// Estado de Registro
        /// </summary>
        public string EstadoRegistro { get; set; }
        /// <summary>
        /// Buffer
        /// </summary>
        public int Buffer { get; set; }
        /// <summary>
        /// Estado de Registro Bit
        /// </summary>
        public bool? EstadoRegistroBit { get; set; }
        /// <summary>
        /// UsuarioCreación
        /// </summary>
        public string UsuarioCreacion { get; set; }

        /// <summary>
        /// Accion
        /// </summary>
        public string Accion { get; set; }
        /// <summary>
        /// Campo CodigoEmpresa
        /// </summary>
        //public System.Guid CodigoEmpresa { get; set; }

        /// <summary>
        /// Campo CodigoSistema
        /// </summary>
        //public System.Guid CodigoSistema { get; set; }
    }
}
