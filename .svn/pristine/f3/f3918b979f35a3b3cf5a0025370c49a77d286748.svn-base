namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad Responsable
    /// </summary>
    public class ResponsableMapping : BaseEntityMapping<ResponsableEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public ResponsableMapping()
            : base()
        {
            HasKey(x => x.CodigoResponsable).ToTable("RESPONSABLE", "MNT");

            Property(x => x.CodigoResponsable).HasColumnName("CODIGO_RESPONSABLE");  
            Property(x => x.Nombres).HasColumnName("NOMBRES");
            Property(x => x.ApellidoPaterno).HasColumnName("APELLIDO_PATERNO");
            Property(x => x.ApellidoMaterno).HasColumnName("APELLIDO_MATERNO");
            Property(x => x.CodigoGenero).HasColumnName("CODIGO_GENERO");
            Property(x => x.CodigoCargo).HasColumnName("CODIGO_CARGO");
            Property(x => x.CorreoElectronico).HasColumnName("CORREO_ELECTRONICO");
            Property(x => x.CodigoTipoDocumento).HasColumnName("CODIGO_TIPO_DOCUMENTO");
            Property(x => x.NumeroDocumento).HasColumnName("NUMERO_DOCUMENTO");
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
