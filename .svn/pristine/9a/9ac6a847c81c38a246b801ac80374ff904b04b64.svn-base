namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class AccionMapping : BaseEntityMapping<AccionEntity>
    {
        public AccionMapping() : base()
        {
            HasKey(x => x.CodigoAccion).ToTable("ACCION", "SEG");

            Property(x => x.CodigoAccion).HasColumnName("CODIGO_ACCION");
            Property(x => x.Nombre).HasColumnName("NOMBRE");
            Property(x => x.Descripcion).HasColumnName("DESCRIPCION");

            Property(x => x.EstadoRegistro).HasColumnName("ESTADO");
            Property(x => x.UsuarioCreacion).HasColumnName("USUARIO_CREACION");
            Property(x => x.FechaCreacion).HasColumnName("FECHA_CREACION");
            Property(x => x.TerminalCreacion).HasColumnName("TERMINAL_CREACION");
            Property(x => x.UsuarioModificacion).HasColumnName("USUARIO_MODIFICACION");
            Property(x => x.FechaModificacion).HasColumnName("FECHA_MODIFICACION");
            Property(x => x.TerminalModificacion).HasColumnName("TERMINAL_MODIFICACION");
        }
    }
}
