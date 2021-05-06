namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class SistemaMapping : BaseEntityMapping<SistemaEntity>
    {
        public SistemaMapping() : base()
        {
            HasKey(x => x.CodigoSistema).ToTable("SISTEMA", "SEG");

            Property(x => x.CodigoSistema).HasColumnName("CODIGO_SISTEMA");
            Property(x => x.Nombre).HasColumnName("NOMBRE");
            Property(x => x.Descripcion).HasColumnName("DESCRIPCION");
            Property(x => x.Ruta).HasColumnName("RUTA");
            Property(x => x.Token).HasColumnName("TOKEN");
            Property(x => x.Parametro).HasColumnName("PARAMETRO");
            Property(x => x.ValorParametro).HasColumnName("VALOR_PARAMETRO");

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
