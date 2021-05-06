using System;

namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base
{
    /// <summary>
    /// Define si una entidad va registrar auditoria o no
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class TraceAuditAttribute : Attribute
    {
        public TraceAuditAttribute() { }
    }
}
