namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class VariableValorMapping : BaseEntityMapping<VariableValorEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public VariableValorMapping()
            : base()
        {
            HasKey(x => x.CodigoVariableValor).ToTable("VARIABLE_VALOR", "MNT");

            Property(x => x.CodigoVariableValor).HasColumnName("CODIGO_VARIABLE_VALOR");  
            Property(x => x.CodigoVariable).HasColumnName("CODIGO_VARIABLE");
            Property(x => x.Anio).HasColumnName("ANIO");
            //Property(x => x.Mes).HasColumnName("MES");
            Property(x => x.CodigoSubTipoPeriodicidad).HasColumnName("CODIGO_SUB_TIPO_PERIODICIDAD");
            Property(x => x.Valor).HasColumnName("VALOR");
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
