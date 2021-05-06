namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class FormulaDetalleMapping : BaseEntityMapping<FormulaDetalleEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public FormulaDetalleMapping()
            : base()
        {
            HasKey(x => x.CodigoFormulaDetalle).ToTable("FORMULA_DETALLE", "MNT");

            Property(x => x.CodigoFormulaDetalle).HasColumnName("CODIGO_FORMULA_DETALLE");
            Property(x => x.CodigoFormula).HasColumnName("CODIGO_FORMULA");
            Property(x => x.CodigoVariable).HasColumnName("CODIGO_VARIABLE");
            Property(x => x.DescripcionValor).HasColumnName("DESCRIPCION_VALOR");  
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
