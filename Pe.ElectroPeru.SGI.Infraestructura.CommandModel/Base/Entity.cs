using System;

namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base
{
    /// <summary>
    /// Clase base para las entidades
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 20150107 <br />
    /// Modificación:            <br />
    /// </remarks>
    public abstract class Entity
    {
        public Entity()
        {
        }
        //protected int IdAudit { get; set; }

        //public Guid    Codigo { get; set; }
        /// <summary>
        /// Estado de Registro
        /// </summary>
        public string EstadoRegistro { get; set; }
        /// <summary>
        /// Usuario de Creación
        /// </summary>
        public string UsuarioCreacion { get; set; }
        /// <summary>
        /// Fecha de Creación 
        /// </summary>
        public DateTime FechaCreacion { get; set; }
        /// <summary>
        /// Terminal de Creación 
        /// </summary>
        public string TerminalCreacion { get; set; }
        /// <summary>
        /// Usuario de Modificación
        /// </summary>
        public string UsuarioModificacion { get; set; }
        /// <summary>
        /// Fecha de Modificación 
        /// </summary>
        public DateTime? FechaModificacion { get; set; }
        /// <summary>
        /// Terminal de Modificación
        /// </summary>
        public string TerminalModificacion { get; set; }
    }
}
