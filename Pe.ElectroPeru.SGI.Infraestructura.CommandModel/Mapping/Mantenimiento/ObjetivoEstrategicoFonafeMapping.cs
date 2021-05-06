namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class ObjetivoEstrategicoFonafeMapping : BaseEntityMapping<ObjetivoEstrategicoFonafeEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public ObjetivoEstrategicoFonafeMapping()
            : base()
        {
            HasKey(x => x.CodigoObjetivoEstrategicoFonafe).ToTable("OBJETIVO_ESTRATEGICO_FONAFE", "MNT");

            Property(x => x.CodigoObjetivoEstrategicoFonafe).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_FONAFE");
            Property(x => x.NombreObjetivoEstrategicoFonafe).HasColumnName("NOMBRE_OBJETIVO_ESTRATEGICO_FONAFE");
            Property(x => x.DescripcionObjetivoEstrategicoFonafe).HasColumnName("DESCRIPCION_OBJETIVO_ESTRATEGICO_FONAFE");            
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
