namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class ModuloMapping : BaseEntityMapping<ModuloEntity>
    {
        public ModuloMapping() : base()
        {
            HasKey(x => x.CodigoModulo).ToTable("MODULO", "SEG");

            Property(x => x.CodigoModulo).HasColumnName("CODIGO_MODULO");
            Property(x => x.CodigoSistema).HasColumnName("CODIGO_SISTEMA");
            Property(x => x.Nombre).HasColumnName("NOMBRE");
            Property(x => x.Descripcion).HasColumnName("DESCRIPCION");
            Property(x => x.ModuloPadre).HasColumnName("MODULO_PADRE");
            Property(x => x.Glyphicon).HasColumnName("GLYPHICON");
            Property(x => x.RutaImagen).HasColumnName("RUTA_IMAGEN");
            Property(x => x.Controlador).HasColumnName("CONTROLADOR");
            Property(x => x.Metodo).HasColumnName("METODO");

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
