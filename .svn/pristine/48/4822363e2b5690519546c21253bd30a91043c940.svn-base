namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class PerspectivaDetalleMapping : BaseEntityMapping<PerspectivaDetalleEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public PerspectivaDetalleMapping()
            : base()
        {
            HasKey(x => x.CodigoPerspectivaDetalle).ToTable("PERSPECTIVA_DETALLE", "MNT");

            Property(x => x.CodigoPerspectivaDetalle).HasColumnName("CODIGO_PERSPECTIVA_DETALLE");
            Property(x => x.CodigoPerspectiva).HasColumnName("CODIGO_PERSPECTIVA");
            Property(x => x.CodigoObjetivoEstrategicoFonafe).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_FONAFE");       
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
