namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class PermisosMapping : BaseEntityMapping<PermisosEntity>
    {
        public PermisosMapping() : base()
        {
            HasKey(x => x.CodigoPermisos).ToTable("PERMISOS", "SEG");

            Property(x => x.CodigoPermisos).HasColumnName("CODIGO_PERMISOS");
            Property(x => x.CodigoPerfil).HasColumnName("CODIGO_PERFIL");
            Property(x => x.CodigoAccion).HasColumnName("CODIGO_ACCION");
            Property(x => x.CodigoOpcion).HasColumnName("CODIGO_OPCION");
            Property(x => x.EstadoPermiso).HasColumnName("ESTADO_PERMISO");

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
