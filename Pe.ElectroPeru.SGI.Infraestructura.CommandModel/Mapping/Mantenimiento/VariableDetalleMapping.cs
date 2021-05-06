namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class VariableDetalleMapping : BaseEntityMapping<VariableDetalleEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public VariableDetalleMapping()
            : base()
        {
            HasKey(x => x.CodigoDetalleVariable).ToTable("DETALLE_VARIABLE", "PRO");

            Property(x => x.CodigoDetalleVariable).HasColumnName("CODIGO_DETALLE_VARIABLE");
            Property(x => x.CodigoVariable).HasColumnName("CODIGO_VARIABLE");
            Property(x => x.FechaInicioVigencia).HasColumnName("FECHA_INICIO_VIGENCIA");
            Property(x => x.FechaFinVigencia).HasColumnName("FECHA_FIN_VIGENCIA");
            Property(x => x.CodigoArea).HasColumnName("CODIGO_AREA");
            Property(x => x.CodigoResponsable).HasColumnName("CODIGO_RESPONSABLE");
            Property(x => x.CodigoPeriodicidad).HasColumnName("CODIGO_PERIODICIDAD");
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
