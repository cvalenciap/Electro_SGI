using System;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Base;

namespace Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas
{
    /// <summary>
    /// Entidad que retorna el código y valor de un parámetro.
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 14042015 <br />
    /// Modificación:            <br />
    /// </remarks>
    /// 
    [Serializable]
    public class CodigoValorResponse : BaseResponse
    {
        /// <summary>
        /// Código de parámetro
        /// </summary>
        public object Codigo { get; set; }
        /// <summary>
        /// Valor de parámetro
        /// </summary>
        public object Valor { get; set; }
    }
}
