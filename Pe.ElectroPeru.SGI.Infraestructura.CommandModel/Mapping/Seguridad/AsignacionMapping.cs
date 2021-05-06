namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class AsignacionMapping : BaseEntityMapping<AsignacionEntity>
    {
        public AsignacionMapping() : base()
        {
            HasKey(x => x.CodigoAsignacion).ToTable("ASIGNACION", "SEG");

            Property(x => x.CodigoAsignacion).HasColumnName("CODIGO_ASIGNACION");
            Property(x => x.CodigoSistema).HasColumnName("CODIGO_SISTEMA");
            Property(x => x.CodigoUsuario).HasColumnName("CODIGO_USUARIO");
            Property(x => x.CodigoPerfil).HasColumnName("CODIGO_PERFIL");

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
