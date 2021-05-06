namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class IndicadorAmbitoMapping : BaseEntityMapping<IndicadorAmbitoEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public IndicadorAmbitoMapping()
            : base()
        {
            HasKey(x => x.CodigoIndicadorAmbito).ToTable("INDICADOR_AMBITO", "MNT");

            Property(x => x.CodigoIndicadorAmbito).HasColumnName("CODIGO_INDICADOR_AMBITO");  
            Property(x => x.CodigoIndicador).HasColumnName("CODIGO_INDICADOR");
            Property(x => x.CodigoAmbito).HasColumnName("CODIGO_AMBITO");
            Property(x => x.AmbitoOtros).HasColumnName("AMBITO_OTROS");            
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
