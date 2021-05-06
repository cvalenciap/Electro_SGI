namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class IndicadorValorMapping : BaseEntityMapping<IndicadorValorEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public IndicadorValorMapping()
            : base()
        {
            HasKey(x => x.CodigoIndicadorValor).ToTable("INDICADOR_VALOR", "MNT");

            Property(x => x.CodigoIndicadorValor).HasColumnName("CODIGO_INDICADOR_VALOR");  
            Property(x => x.CodigoIndicador).HasColumnName("CODIGO_INDICADOR");
            Property(x => x.Anio).HasColumnName("ANIO");
            //Property(x => x.Mes).HasColumnName("MES");
            Property(x => x.CodigoSubTipoPeriodicidad).HasColumnName("CODIGO_SUB_TIPO_PERIODICIDAD");
            Property(x => x.ValorReal).HasColumnName("VALOR_REAL");
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
