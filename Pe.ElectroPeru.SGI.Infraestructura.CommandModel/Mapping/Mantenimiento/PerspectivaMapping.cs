namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class PerspectivaMapping : BaseEntityMapping<PerspectivaEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public PerspectivaMapping()
            : base()
        {
            HasKey(x => x.CodigoPerspectiva).ToTable("PERSPECTIVA", "MNT");

            Property(x => x.CodigoPerspectiva).HasColumnName("CODIGO_PERSPECTIVA");
            Property(x => x.NombrePerspectiva).HasColumnName("NOMBRE_PERSPECTIVA");
            Property(x => x.DescripcionPerspectiva).HasColumnName("DESCRIPCION_PERSPECTIVA");            
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
