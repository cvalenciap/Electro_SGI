namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class VariableMapping : BaseEntityMapping<VariableEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public VariableMapping()
            : base()
        {
            HasKey(x => x.CodigoVariable).ToTable("VARIABLE", "MNT");

            Property(x => x.CodigoVariable).HasColumnName("CODIGO_VARIABLE");
            Property(x => x.NombreVariable).HasColumnName("NOMBRE_VARIABLE");
            Property(x => x.NombreSiglaVariable).HasColumnName("NOMBRE_SIGLA_VARIABLE");
            Property(x => x.DescripcionVariable).HasColumnName("DESCRIPCION_VARIABLE");
            Property(x => x.CodigoTipoVariable).HasColumnName("CODIGO_TIPO_VARIABLE");
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
