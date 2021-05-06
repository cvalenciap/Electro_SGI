namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class UsuariosMapping : BaseEntityMapping<UsuariosEntity>
    {
        public UsuariosMapping() : base()
        {
            HasKey(x => x.CodigoUsuario).ToTable("USUARIOS", "SEG");

            Property(x => x.CodigoUsuario).HasColumnName("CODIGO_USUARIO");
            Property(x => x.Apellido).HasColumnName("APELLIDO");
            Property(x => x.Nombre).HasColumnName("NOMBRE");
            Property(x => x.EMail).HasColumnName("EMAIL");
            Property(x => x.TipoDocumentoIdentidad).HasColumnName("TIPO_DOCUMENTO_IDENTIDAD");
            Property(x => x.NumDocumentoIdentidad).HasColumnName("NUM_DOCUMENTO_IDENTIDAD");
            Property(x => x.Usuario).HasColumnName("USUARIO");
            Property(x => x.Contrasena).HasColumnName("CONTRASENA");
            Property(x => x.CodigoCargo).HasColumnName("CODIGO_CARGO");
            Property(x => x.NombreCargo).HasColumnName("NOMBRE_CARGO");

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
