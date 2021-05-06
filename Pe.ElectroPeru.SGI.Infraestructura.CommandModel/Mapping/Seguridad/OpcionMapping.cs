namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Seguridad
{
    using Base;
    using CommandModel.Seguridad;

    public class OpcionMapping : BaseEntityMapping<OpcionEntity>
    {
        public OpcionMapping() : base()
        {
            HasKey(x => x.CodigoOpcion).ToTable("OPCION", "SEG");

            Property(x => x.CodigoOpcion).HasColumnName("CODIGO_OPCION");
            Property(x => x.CodigoModulo).HasColumnName("CODIGO_MODULO");
            Property(x => x.OpcionPadre).HasColumnName("OPCION_PADRE");
            Property(x => x.Nombre).HasColumnName("NOMBRE");
            Property(x => x.Descripcion).HasColumnName("DESCRIPCION");
            Property(x => x.Glyphicon).HasColumnName("GLYPHICON");
            Property(x => x.Controlador).HasColumnName("CONTROLADOR");
            Property(x => x.Metodo).HasColumnName("METODO");
            Property(x => x.Area).HasColumnName("AREA");

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
