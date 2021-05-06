namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class IndicadorMetaAnualMapping : BaseEntityMapping<IndicadorMetaAnualEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public IndicadorMetaAnualMapping()
            : base()
        {
            HasKey(x => x.CodigoIndicadorMetaAnual).ToTable("INDICADOR_META_ANUAL", "MNT");

            Property(x => x.CodigoIndicadorMetaAnual).HasColumnName("CODIGO_INDICADOR_META_ANUAL");  
            Property(x => x.CodigoIndicador).HasColumnName("CODIGO_INDICADOR");
            Property(x => x.Anio).HasColumnName("ANIO");           
            Property(x => x.ValorMetaAnual).HasColumnName("VALOR_META_ANUAL");
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
