namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class AccionEstrategicaInstitucionalMapping : BaseEntityMapping<AccionEstrategicaInstitucionalEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public AccionEstrategicaInstitucionalMapping()
            : base()
        {
            HasKey(x => x.CodigoAccionEstrategicaInstitucional).ToTable("ACCION_ESTRATEGICA_INSTITUCIONAL", "MNT");

            Property(x => x.CodigoAccionEstrategicaInstitucional).HasColumnName("CODIGO_ACCION_ESTRATEGICA_INSTITUCIONAL");
            Property(x => x.NombreAccionEstrategicaInstitucional).HasColumnName("NOMBRE_ACCION_ESTRATEGICA_INSTITUCIONAL");
            Property(x => x.DescripcionAccionEstrategicaInstitucional).HasColumnName("DESCRIPCION_ACCION_ESTRATEGICA_INSTITUCIONAL");            
            Property(x => x.CodigoResponsable).HasColumnName("CODIGO_RESPONSABLE");
            Property(x => x.EstadoRegistro).HasColumnName("ESTADO_REGISTRO");
            Property(x => x.UsuarioCreacion).HasColumnName("USUARIO_CREACION");
            Property(x => x.FechaCreacion).HasColumnName("FECHA_CREACION");
            Property(x => x.TerminalCreacion).HasColumnName("TERMINAL_CREACION");
            Property(x => x.UsuarioModificacion).HasColumnName("USUARIO_MODIFICACION");
            Property(x => x.FechaModificacion).HasColumnName("FECHA_MODIFICACION");
            Property(x => x.TerminalModificacion).HasColumnName("TERMINAL_MODIFICACION");
        }
    }
}
