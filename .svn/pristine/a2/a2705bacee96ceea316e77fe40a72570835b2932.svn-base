namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class ObjetivoEstrategicoSectorialDetalleMapping : BaseEntityMapping<ObjetivoEstrategicoSectorialDetalleEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public ObjetivoEstrategicoSectorialDetalleMapping()
            : base()
        {
            HasKey(x => x.CodigoObjetivoEstrategicoSectorialDetalle).ToTable("OBJETIVO_ESTRATEGICO_SECTORIAL_DETALLE", "MNT");

            Property(x => x.CodigoObjetivoEstrategicoSectorialDetalle).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_SECTORIAL_DETALLE");
            Property(x => x.CodigoObjetivoEstrategicoSectorial).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_SECTORIAL");
            Property(x => x.CodigoAccionEstrategicaSectorial).HasColumnName("CODIGO_ACCION_ESTRATEGICA_SECTORIAL");       
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
