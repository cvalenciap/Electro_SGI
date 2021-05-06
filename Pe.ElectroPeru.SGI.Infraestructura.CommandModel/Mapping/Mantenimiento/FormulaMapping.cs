namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class FormulaMapping : BaseEntityMapping<FormulaEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public FormulaMapping()
            : base()
        {
            HasKey(x => x.CodigoFormula).ToTable("FORMULA", "MNT");

            Property(x => x.CodigoFormula).HasColumnName("CODIGO_FORMULA");
            Property(x => x.NombreFormula).HasColumnName("NOMBRE_FORMULA");
            Property(x => x.DescripcionFormula).HasColumnName("DESCRIPCION_FORMULA");            
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
