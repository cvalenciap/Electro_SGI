namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class ObjetivoEstrategicoFonafeDetalleMapping : BaseEntityMapping<ObjetivoEstrategicoFonafeDetalleEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public ObjetivoEstrategicoFonafeDetalleMapping()
            : base()
        {
            HasKey(x => x.CodigoObjetivoEstrategicoFonafeDetalle).ToTable("OBJETIVO_ESTRATEGICO_FONAFE_DETALLE", "MNT");

            Property(x => x.CodigoObjetivoEstrategicoFonafeDetalle).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_FONAFE_DETALLE");
            Property(x => x.CodigoObjetivoEstrategicoFonafe).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_FONAFE");
            Property(x => x.CodigoObjetivoEstrategicoEmpresa).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_EMPRESA");       
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
