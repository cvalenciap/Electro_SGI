namespace Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mapping.Mantenimiento
{
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Base;
    using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
    using System;

    /// <summary>
    /// Implementación del mapeo de la entidad ÁREA
    /// </summary>
    public class ObjetivoEstrategicoSectorialMapping : BaseEntityMapping<ObjetivoEstrategicoSectorialEntity>
    {
        /// <summary>
        ///
        /// </summary>
        public ObjetivoEstrategicoSectorialMapping()
            : base()
        {
            HasKey(x => x.CodigoObjetivoEstrategicoSectorial).ToTable("OBJETIVO_ESTRATEGICO_SECTORIAL", "MNT");

            Property(x => x.CodigoObjetivoEstrategicoSectorial).HasColumnName("CODIGO_OBJETIVO_ESTRATEGICO_SECTORIAL");
            Property(x => x.NombreObjetivoEstrategicoSectorial).HasColumnName("NOMBRE_OBJETIVO_ESTRATEGICO_SECTORIAL");
            Property(x => x.DescripcionObjetivoEstrategicoSectorial).HasColumnName("DESCRIPCION_OBJETIVO_ESTRATEGICO_SECTORIAL");            
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
