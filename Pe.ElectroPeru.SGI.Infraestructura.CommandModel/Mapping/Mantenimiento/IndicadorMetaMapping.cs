namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class IndicadorMetaMapping : BaseEntityMapping<IndicadorMetaEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public IndicadorMetaMapping()
            : base()
        {
            HasKey(x => x.CodigoIndicadorMeta).ToTable("INDICADOR_META", "MNT");

            Property(x => x.CodigoIndicadorMeta).HasColumnName("CODIGO_INDICADOR_META");  
            Property(x => x.CodigoIndicador).HasColumnName("CODIGO_INDICADOR");
            Property(x => x.Anio).HasColumnName("ANIO");
            //Property(x => x.Mes).HasColumnName("MES");
            Property(x => x.CodigoSubTipoPeriodicidad).HasColumnName("CODIGO_SUB_TIPO_PERIODICIDAD");
            Property(x => x.ValorMeta).HasColumnName("VALOR_META");
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
