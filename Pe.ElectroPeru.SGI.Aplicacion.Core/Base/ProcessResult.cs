using Pe.ElectroPeru.SGI.Transversal.Core.Base;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Base
{
    /// <summary>
    /// Respuesta unica de los procesos de la capa de aplicación
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class ProcessResultMovile<T> where T : class
    {
        /// <summary>
        /// Constructor por defecto
        /// </summary>
        public ProcessResultMovile()
        {
            this.IsSuccess = 1;

        }
        /// <summary>
        /// Indicador del estado de la operación
        /// </summary>
        public int IsSuccess { get; set; }
        /// <summary>
        /// Exceción generada en caso de error
        /// </summary>
        public string Message { get; set; }
        /// <summary>
        /// Resultado del proceso
        /// </summary>
        public T Result { get; set; }
    }
}
