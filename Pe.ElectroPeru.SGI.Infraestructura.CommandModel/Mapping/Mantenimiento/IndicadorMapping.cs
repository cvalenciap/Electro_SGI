namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class IndicadorMapping : BaseEntityMapping<IndicadorEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public IndicadorMapping()
            : base()
        {
            HasKey(x => x.CodigoIndicador).ToTable("INDICADOR", "MNT");

            Property(x => x.CodigoIndicador).HasColumnName("CODIGO_INDICADOR");  
            Property(x => x.DescripcionIndicador).HasColumnName("DESCRIPCION_INDICADOR");
            Property(x => x.CodigoFormula).HasColumnName("CODIGO_FORMULA");
            Property(x => x.CodigoResponsable).HasColumnName("CODIGO_RESPONSABLE");
            Property(x => x.CodigoPeriodicidad).HasColumnName("CODIGO_PERIODICIDAD");
            Property(x => x.CodigoUnidadMedida).HasColumnName("CODIGO_UNIDAD_MEDIDA");
            Property(x => x.FechaInicioVigencia).HasColumnName("FECHA_INICIO_VIGENCIA");
            Property(x => x.FechaFinVigencia).HasColumnName("FECHA_FIN_VIGENCIA");
            Property(x => x.CodigoTipoIndicador).HasColumnName("CODIGO_TIPO_INDICADOR");
            Property(x => x.RatioMaximo).HasColumnName("RATIO_MAXIMO");
            Property(x => x.RatioMinimo).HasColumnName("RATIO_MINIMO");
            Property(x => x.Ponderacion).HasColumnName("PONDERACION");           
            Property(x => x.CodigoArea).HasColumnName("CODIGO_AREA");
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
