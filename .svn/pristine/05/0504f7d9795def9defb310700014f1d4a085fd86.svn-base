using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Loc = Pe.ElectroPeru.SGI.Infraestructura.QueryModel;
using Ent = Pe.ElectroPeru.SGI.Infraestructura.CommandModel;
using appReq = Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request;
using appRes = Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response;
using AutoMapper;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.IO;

namespace Pe.ElectroPeru.SGI.Transversal.Mapeo
{
    public class General
    {
        private General()
        {
            #region "SCHEMA MNT.AREA"

            Mapper.CreateMap<Loc.Mantenimiento.AreaLogic, appRes.Mantenimiento.AreaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AreaLogic, appRes.Mantenimiento.AreaResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AreaLogic, appRes.Mantenimiento.AreaResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.AreaRequest, Ent.Mantenimiento.AreaEntity>()
                     .ForMember(des => des.CodigoArea, opt => opt.MapFrom(src => src.CodigoArea == null ? Guid.NewGuid() : src.CodigoArea));            
            Mapper.CreateMap<Ent.Mantenimiento.AreaEntity, Ent.Mantenimiento.AreaEntity>()
                 .ForMember(dto => dto.CodigoArea, opt => opt.Ignore())                     
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());

            #endregion

            #region "SCHEMA MNT.INDICADOR"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.IndicadorResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.IndicadorResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.IndicadorResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorRequest, Ent.Mantenimiento.IndicadorEntity>()
                     .ForMember(des => des.CodigoIndicador, opt => opt.MapFrom(src => src.CodigoIndicador == null ? Guid.NewGuid() : src.CodigoIndicador));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorEntity, Ent.Mantenimiento.IndicadorEntity>()
                 .ForMember(dto => dto.CodigoIndicador, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion           

            #region "SCHEMA MNT.RESPONSABLE"

            Mapper.CreateMap<Loc.Mantenimiento.ResponsableLogic, appRes.Mantenimiento.ResponsableResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ResponsableLogic, appRes.Mantenimiento.ResponsableResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ResponsableLogic, appRes.Mantenimiento.ResponsableResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ResponsableRequest, Ent.Mantenimiento.ResponsableEntity>()
                     .ForMember(des => des.CodigoResponsable, opt => opt.MapFrom(src => src.CodigoResponsable == null ? Guid.NewGuid() : src.CodigoResponsable));
            Mapper.CreateMap<Ent.Mantenimiento.ResponsableEntity, Ent.Mantenimiento.ResponsableEntity>()
                 .ForMember(dto => dto.CodigoResponsable, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());

            #endregion

            #region "MNT.BANDEJA_VARIABLE"
            Mapper.CreateMap<Loc.Mantenimiento.VariableLogic, appRes.Mantenimiento.BandejaVariableResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.VariableLogic, appRes.Mantenimiento.BandejaVariableResponse>();
                //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.VariableDetalleLogic, appRes.Mantenimiento.BandejaVariableResponse>();
                //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
                //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.BANDEJA_OBJETIVO_ESTRATEGICO_EMPRESA"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoEmpresaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoEmpresaResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoEmpresaResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.OBJETIVO_ESTRATEGICO_EMPRESA"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoEmpresaRequest, Ent.Mantenimiento.ObjetivoEstrategicoEmpresaEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoEmpresa, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoEmpresa == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoEmpresa));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoEmpresaEntity, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoEmpresaEntity, Ent.Mantenimiento.ObjetivoEstrategicoEmpresaEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoEmpresa, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.OBJETIVO_ESTRATEGICO_EMPRESA_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleRequest, Ent.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoEmpresaDetalle, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoEmpresaDetalle == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoEmpresaDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleEntity, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleEntity, Ent.Mantenimiento.ObjetivoEstrategicoEmpresaDetalleEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoEmpresaDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.VARIABLE"
            Mapper.CreateMap<Loc.Mantenimiento.VariableLogic, appRes.Mantenimiento.VariableResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.VariableLogic, appRes.Mantenimiento.VariableResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.VariableLogic, appRes.Mantenimiento.VariableResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.VariableRequest, Ent.Mantenimiento.VariableEntity>()
                     .ForMember(des => des.CodigoVariable, opt => opt.MapFrom(src => src.CodigoVariable == null ? Guid.NewGuid() : src.CodigoVariable));
            Mapper.CreateMap<Ent.Mantenimiento.VariableEntity, appRes.Mantenimiento.VariableResponse>();                     
            Mapper.CreateMap<Ent.Mantenimiento.VariableEntity, Ent.Mantenimiento.VariableEntity>()
                 .ForMember(dto => dto.CodigoVariable, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "PRO.DETALLE_VARIABLE"
            Mapper.CreateMap<Loc.Mantenimiento.VariableDetalleLogic, appRes.Mantenimiento.VariableDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.VariableDetalleLogic, appRes.Mantenimiento.VariableDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.VariableDetalleLogic, appRes.Mantenimiento.VariableDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.VariableDetalleRequest, Ent.Mantenimiento.VariableDetalleEntity>()
                     .ForMember(des => des.CodigoDetalleVariable, opt => opt.MapFrom(src => src.CodigoDetalleVariable == null ? Guid.NewGuid() : src.CodigoDetalleVariable));
            Mapper.CreateMap<Ent.Mantenimiento.VariableDetalleEntity, appRes.Mantenimiento.VariableDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.VariableDetalleEntity, Ent.Mantenimiento.VariableDetalleEntity>()
                 .ForMember(dto => dto.CodigoDetalleVariable, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.VARIABLE_VALOR"
            Mapper.CreateMap<Loc.Mantenimiento.VariableValorLogic, appRes.Mantenimiento.VariableValorResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.VariableValorLogic, appRes.Mantenimiento.VariableValorResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.VariableValorLogic, appRes.Mantenimiento.VariableValorResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.VariableValorRequest, Ent.Mantenimiento.VariableValorEntity>()
                     .ForMember(des => des.CodigoVariableValor, opt => opt.MapFrom(src => src.CodigoVariableValor == null ? Guid.NewGuid() : src.CodigoVariableValor));
            Mapper.CreateMap<Ent.Mantenimiento.VariableValorEntity, appRes.Mantenimiento.VariableValorResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.VariableValorEntity, Ent.Mantenimiento.VariableValorEntity>()
                 .ForMember(dto => dto.CodigoVariableValor, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.BANDEJA_OBJETIVO_ESTRATEGICO_FONAFE"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoFonafeResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoFonafeResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeDetalleLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoFonafeResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.OBJETIVO_ESTRATEGICO_FONAFE"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeLogic, appRes.Mantenimiento.ObjetivoEstrategicoFonafeResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeLogic, appRes.Mantenimiento.ObjetivoEstrategicoFonafeResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeLogic, appRes.Mantenimiento.ObjetivoEstrategicoFonafeResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoFonafeRequest, Ent.Mantenimiento.ObjetivoEstrategicoFonafeEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoFonafe, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoFonafe == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoFonafe));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoFonafeEntity, appRes.Mantenimiento.ObjetivoEstrategicoFonafeResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoFonafeEntity, Ent.Mantenimiento.ObjetivoEstrategicoFonafeEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoFonafe, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.OBJETIVO_ESTRATEGICO_FONAFE_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoFonafeDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoFonafeDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoFonafeDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoFonafeDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoFonafeDetalleRequest, Ent.Mantenimiento.ObjetivoEstrategicoFonafeDetalleEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoFonafeDetalle, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoFonafeDetalle == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoFonafeDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoFonafeDetalleEntity, appRes.Mantenimiento.ObjetivoEstrategicoFonafeDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoFonafeDetalleEntity, Ent.Mantenimiento.ObjetivoEstrategicoFonafeDetalleEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoFonafeDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.BANDEJA_PERSPECTIVA"
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaLogic, appRes.Mantenimiento.BandejaPerspectivaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaLogic, appRes.Mantenimiento.BandejaPerspectivaResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaDetalleLogic, appRes.Mantenimiento.BandejaPerspectivaResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion            

            #region "MNT.PERSPECTIVA"
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaLogic, appRes.Mantenimiento.PerspectivaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaLogic, appRes.Mantenimiento.PerspectivaResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaLogic, appRes.Mantenimiento.PerspectivaResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.PerspectivaRequest, Ent.Mantenimiento.PerspectivaEntity>()
                     .ForMember(des => des.CodigoPerspectiva, opt => opt.MapFrom(src => src.CodigoPerspectiva == null ? Guid.NewGuid() : src.CodigoPerspectiva));
            Mapper.CreateMap<Ent.Mantenimiento.PerspectivaEntity, appRes.Mantenimiento.PerspectivaResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.PerspectivaEntity, Ent.Mantenimiento.PerspectivaEntity>()
                 .ForMember(dto => dto.CodigoPerspectiva, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.PERSPECTIVA_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaDetalleLogic, appRes.Mantenimiento.PerspectivaDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaDetalleLogic, appRes.Mantenimiento.PerspectivaDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.PerspectivaDetalleLogic, appRes.Mantenimiento.PerspectivaDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.PerspectivaDetalleRequest, Ent.Mantenimiento.PerspectivaDetalleEntity>()
                     .ForMember(des => des.CodigoPerspectivaDetalle, opt => opt.MapFrom(src => src.CodigoPerspectivaDetalle == null ? Guid.NewGuid() : src.CodigoPerspectivaDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.PerspectivaDetalleEntity, appRes.Mantenimiento.PerspectivaDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.PerspectivaDetalleEntity, Ent.Mantenimiento.PerspectivaDetalleEntity>()
                 .ForMember(dto => dto.CodigoPerspectivaDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.BANDEJA_INDICADOR"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.BandejaIndicadorResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.BandejaIndicadorResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            //Mapper.CreateMap<Loc.Mantenimiento.IndicadorAmbitoLogic, appRes.Mantenimiento.BandejaIndicadorResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.INDICADOR"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.IndicadorResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.IndicadorResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorLogic, appRes.Mantenimiento.IndicadorResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorRequest, Ent.Mantenimiento.IndicadorEntity>()
                     .ForMember(des => des.CodigoIndicador, opt => opt.MapFrom(src => src.CodigoIndicador == null ? Guid.NewGuid() : src.CodigoIndicador));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorEntity, appRes.Mantenimiento.IndicadorResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorEntity, Ent.Mantenimiento.IndicadorEntity>()
                 .ForMember(dto => dto.CodigoIndicador, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.INDICADOR_META"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorMetaLogic, appRes.Mantenimiento.IndicadorMetaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorMetaLogic, appRes.Mantenimiento.IndicadorMetaResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorMetaLogic, appRes.Mantenimiento.IndicadorMetaResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorMetaRequest, Ent.Mantenimiento.IndicadorMetaEntity>()
                     .ForMember(des => des.CodigoIndicadorMeta, opt => opt.MapFrom(src => src.CodigoIndicadorMeta == null ? Guid.NewGuid() : src.CodigoIndicadorMeta));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorMetaEntity, appRes.Mantenimiento.IndicadorMetaResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorMetaEntity, Ent.Mantenimiento.IndicadorMetaEntity>()
                 .ForMember(dto => dto.CodigoIndicadorMeta, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.INDICADOR_META_ANUAL"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorMetaAnualLogic, appRes.Mantenimiento.IndicadorMetaAnualResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorMetaAnualLogic, appRes.Mantenimiento.IndicadorMetaAnualResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorMetaAnualLogic, appRes.Mantenimiento.IndicadorMetaAnualResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorMetaAnualRequest, Ent.Mantenimiento.IndicadorMetaAnualEntity>()
                     .ForMember(des => des.CodigoIndicadorMetaAnual, opt => opt.MapFrom(src => src.CodigoIndicadorMetaAnual == null ? Guid.NewGuid() : src.CodigoIndicadorMetaAnual));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorMetaAnualEntity, appRes.Mantenimiento.IndicadorMetaAnualResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorMetaAnualEntity, Ent.Mantenimiento.IndicadorMetaAnualEntity>()
                 .ForMember(dto => dto.CodigoIndicadorMetaAnual, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.INDICADOR_VALOR"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorValorLogic, appRes.Mantenimiento.IndicadorValorResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorValorLogic, appRes.Mantenimiento.IndicadorValorResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorValorLogic, appRes.Mantenimiento.IndicadorValorResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorValorRequest, Ent.Mantenimiento.IndicadorValorEntity>()
                     .ForMember(des => des.CodigoIndicadorValor, opt => opt.MapFrom(src => src.CodigoIndicadorValor == null ? Guid.NewGuid() : src.CodigoIndicadorValor));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorValorEntity, appRes.Mantenimiento.IndicadorValorResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorValorEntity, Ent.Mantenimiento.IndicadorValorEntity>()
                 .ForMember(dto => dto.CodigoIndicadorValor, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.INDICADOR_EVALUACION"
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorEvaluacionLogic, appRes.Mantenimiento.IndicadorEvaluacionResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorEvaluacionLogic, appRes.Mantenimiento.IndicadorEvaluacionResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.IndicadorEvaluacionLogic, appRes.Mantenimiento.IndicadorEvaluacionResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorEvaluacionRequest, Ent.Mantenimiento.IndicadorEvaluacionEntity>()
                     .ForMember(des => des.CodigoIndicadorEvaluacion, opt => opt.MapFrom(src => src.CodigoIndicadorEvaluacion == null ? Guid.NewGuid() : src.CodigoIndicadorEvaluacion));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorEvaluacionEntity, appRes.Mantenimiento.IndicadorEvaluacionResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorEvaluacionEntity, Ent.Mantenimiento.IndicadorEvaluacionEntity>()
                 .ForMember(dto => dto.CodigoIndicadorEvaluacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region SCHEMA INS.INDICADOR_AMBITO
            Mapper.CreateMap<appReq.Mantenimiento.IndicadorAmbitoRequest, Ent.Mantenimiento.IndicadorAmbitoEntity>()
           .ForMember(des => des.CodigoIndicadorAmbito, opt => opt.MapFrom(src => src.CodigoIndicadorAmbito == null ? Guid.NewGuid() : src.CodigoIndicadorAmbito));
            Mapper.CreateMap<Ent.Mantenimiento.IndicadorAmbitoEntity, appRes.Mantenimiento.IndicadorAmbitoResponse>();
            #endregion

            #region "MNT.BANDEJA_ACCION_ESTRATEGICA_INSTITUCIONAL"
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.BandejaAccionEstrategicaInstitucionalResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.BandejaAccionEstrategicaInstitucionalResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalDetalleLogic, appRes.Mantenimiento.BandejaAccionEstrategicaInstitucionalResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.ACCION_ESTRATEGICA_INSTITUCIONAL"
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.AccionEstrategicaInstitucionalResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.AccionEstrategicaInstitucionalResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.AccionEstrategicaInstitucionalResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.AccionEstrategicaInstitucionalRequest, Ent.Mantenimiento.AccionEstrategicaInstitucionalEntity>()
                     .ForMember(des => des.CodigoAccionEstrategicaInstitucional, opt => opt.MapFrom(src => src.CodigoAccionEstrategicaInstitucional == null ? Guid.NewGuid() : src.CodigoAccionEstrategicaInstitucional));
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaInstitucionalEntity, appRes.Mantenimiento.AccionEstrategicaInstitucionalResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaInstitucionalEntity, Ent.Mantenimiento.AccionEstrategicaInstitucionalEntity>()
                 .ForMember(dto => dto.CodigoAccionEstrategicaInstitucional, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.ACCION_ESTRATEGICA_INSTITUCIONAL_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalDetalleLogic, appRes.Mantenimiento.AccionEstrategicaInstitucionalDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalDetalleLogic, appRes.Mantenimiento.AccionEstrategicaInstitucionalDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaInstitucionalDetalleLogic, appRes.Mantenimiento.AccionEstrategicaInstitucionalDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.AccionEstrategicaInstitucionalDetalleRequest, Ent.Mantenimiento.AccionEstrategicaInstitucionalDetalleEntity>()
                     .ForMember(des => des.CodigoAccionEstrategicaInstitucionalDetalle, opt => opt.MapFrom(src => src.CodigoAccionEstrategicaInstitucionalDetalle == null ? Guid.NewGuid() : src.CodigoAccionEstrategicaInstitucionalDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaInstitucionalDetalleEntity, appRes.Mantenimiento.AccionEstrategicaInstitucionalDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaInstitucionalDetalleEntity, Ent.Mantenimiento.AccionEstrategicaInstitucionalDetalleEntity>()
                 .ForMember(dto => dto.CodigoAccionEstrategicaInstitucionalDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.BANDEJA_ACCION_ESTRATEGICA_SECTORIAL"
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialLogic, appRes.Mantenimiento.BandejaAccionEstrategicaSectorialResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialLogic, appRes.Mantenimiento.BandejaAccionEstrategicaSectorialResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialDetalleLogic, appRes.Mantenimiento.BandejaAccionEstrategicaSectorialResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.ACCION_ESTRATEGICA_SECTORIAL"
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialLogic, appRes.Mantenimiento.AccionEstrategicaSectorialResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialLogic, appRes.Mantenimiento.AccionEstrategicaSectorialResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialLogic, appRes.Mantenimiento.AccionEstrategicaSectorialResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.AccionEstrategicaSectorialRequest, Ent.Mantenimiento.AccionEstrategicaSectorialEntity>()
                     .ForMember(des => des.CodigoAccionEstrategicaSectorial, opt => opt.MapFrom(src => src.CodigoAccionEstrategicaSectorial == null ? Guid.NewGuid() : src.CodigoAccionEstrategicaSectorial));
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaSectorialEntity, appRes.Mantenimiento.AccionEstrategicaSectorialResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaSectorialEntity, Ent.Mantenimiento.AccionEstrategicaSectorialEntity>()
                 .ForMember(dto => dto.CodigoAccionEstrategicaSectorial, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.ACCION_ESTRATEGICA_SECTORIAL_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialDetalleLogic, appRes.Mantenimiento.AccionEstrategicaSectorialDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialDetalleLogic, appRes.Mantenimiento.AccionEstrategicaSectorialDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.AccionEstrategicaSectorialDetalleLogic, appRes.Mantenimiento.AccionEstrategicaSectorialDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.AccionEstrategicaSectorialDetalleRequest, Ent.Mantenimiento.AccionEstrategicaSectorialDetalleEntity>()
                     .ForMember(des => des.CodigoAccionEstrategicaSectorialDetalle, opt => opt.MapFrom(src => src.CodigoAccionEstrategicaSectorialDetalle == null ? Guid.NewGuid() : src.CodigoAccionEstrategicaSectorialDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaSectorialDetalleEntity, appRes.Mantenimiento.AccionEstrategicaSectorialDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.AccionEstrategicaSectorialDetalleEntity, Ent.Mantenimiento.AccionEstrategicaSectorialDetalleEntity>()
                 .ForMember(dto => dto.CodigoAccionEstrategicaSectorialDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.BANDEJA_OBJETIVO_ESTRATEGICO_SECTORIAL"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoSectorialResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoSectorialResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialDetalleLogic, appRes.Mantenimiento.BandejaObjetivoEstrategicoSectorialResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.OBJETIVO_ESTRATEGICO_SECTORIAL"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialLogic, appRes.Mantenimiento.ObjetivoEstrategicoSectorialResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialLogic, appRes.Mantenimiento.ObjetivoEstrategicoSectorialResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialLogic, appRes.Mantenimiento.ObjetivoEstrategicoSectorialResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoSectorialRequest, Ent.Mantenimiento.ObjetivoEstrategicoSectorialEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoSectorial, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoSectorial == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoSectorial));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoSectorialEntity, appRes.Mantenimiento.ObjetivoEstrategicoSectorialResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoSectorialEntity, Ent.Mantenimiento.ObjetivoEstrategicoSectorialEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoSectorial, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.OBJETIVO_ESTRATEGICO_SECTORIAL_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoSectorialDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoSectorialDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoSectorialDetalleLogic, appRes.Mantenimiento.ObjetivoEstrategicoSectorialDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoSectorialDetalleRequest, Ent.Mantenimiento.ObjetivoEstrategicoSectorialDetalleEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoSectorialDetalle, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoSectorialDetalle == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoSectorialDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoSectorialDetalleEntity, appRes.Mantenimiento.ObjetivoEstrategicoSectorialDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoSectorialDetalleEntity, Ent.Mantenimiento.ObjetivoEstrategicoSectorialDetalleEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoSectorialDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.OBJETIVO_ESTRATEGICO_EMPRESA_ACCION_ESTRATEGICA_INSTITUCIONAL"
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalLogic, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest, Ent.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity>()
                     .ForMember(des => des.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional, opt => opt.MapFrom(src => src.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional == null ? Guid.NewGuid() : src.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional));
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity, appRes.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity, Ent.Mantenimiento.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalEntity>()
                 .ForMember(dto => dto.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.FORMULA"
            Mapper.CreateMap<Loc.Mantenimiento.FormulaLogic, appRes.Mantenimiento.FormulaResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.FormulaLogic, appRes.Mantenimiento.FormulaResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.FormulaLogic, appRes.Mantenimiento.FormulaResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.FormulaRequest, Ent.Mantenimiento.FormulaEntity>()
                     .ForMember(des => des.CodigoFormula, opt => opt.MapFrom(src => src.CodigoFormula == null ? Guid.NewGuid() : src.CodigoFormula));
            Mapper.CreateMap<Ent.Mantenimiento.FormulaEntity, appRes.Mantenimiento.FormulaResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.FormulaEntity, Ent.Mantenimiento.FormulaEntity>()
                 .ForMember(dto => dto.CodigoFormula, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "MNT.FORMULA_DETALLE"
            Mapper.CreateMap<Loc.Mantenimiento.FormulaDetalleLogic, appRes.Mantenimiento.FormulaDetalleResponse>();
            Mapper.CreateMap<Loc.Mantenimiento.FormulaDetalleLogic, appRes.Mantenimiento.FormulaDetalleResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Mantenimiento.FormulaDetalleLogic, appRes.Mantenimiento.FormulaDetalleResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            Mapper.CreateMap<appReq.Mantenimiento.FormulaDetalleRequest, Ent.Mantenimiento.FormulaDetalleEntity>()
                     .ForMember(des => des.CodigoFormulaDetalle, opt => opt.MapFrom(src => src.CodigoFormulaDetalle == null ? Guid.NewGuid() : src.CodigoFormulaDetalle));
            Mapper.CreateMap<Ent.Mantenimiento.FormulaDetalleEntity, appRes.Mantenimiento.FormulaDetalleResponse>();
            Mapper.CreateMap<Ent.Mantenimiento.FormulaDetalleEntity, Ent.Mantenimiento.FormulaDetalleEntity>()
                 .ForMember(dto => dto.CodigoFormulaDetalle, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion                      

            #region "MNT.PLAN_ESTRATEGICO"
            Mapper.CreateMap<Loc.Proceso.PlanEstrategicoLogic, appRes.Proceso.BandejaPlanEstrategicoResponse>();
            //ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));
            //Mapper.CreateMap<Loc.Mantenimiento.IndicadorAmbitoLogic, appRes.Mantenimiento.BandejaIndicadorResponse>();
            //ForMember(des => des.FechaInicioVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaInicioVigencia, DatosConstantes.Formato.FormatoFecha)));
            //ForMember(des => des.FechaFinVigenciaString, opt => opt.MapFrom(src => Utilitario.FechaFormatoCadena(src.FechaFinVigencia, DatosConstantes.Formato.FormatoFecha)));            
            #endregion

            #region "MNT.PLAN_OPERATIVO"
            Mapper.CreateMap<Loc.Proceso.PlanOperativoLogic, appRes.Proceso.BandejaPlanOperativoResponse>();           
            #endregion

            #region "SEG.PERFIL"

            Mapper.CreateMap<Loc.Seguridad.PerfilLogic, appRes.Seguridad.PerfilResponse>();
            Mapper.CreateMap<Loc.Seguridad.PerfilLogic, appRes.Seguridad.PerfilResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.PerfilLogic, appRes.Seguridad.PerfilResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.PerfilRequest, Ent.Seguridad.PerfilEntity>()
                     .ForMember(des => des.CodigoPerfil, opt => opt.MapFrom(src => src.CodigoPerfil));

            Mapper.CreateMap<Ent.Seguridad.PerfilEntity, Ent.Seguridad.PerfilEntity>()
                 .ForMember(dto => dto.CodigoPerfil, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion
            
            #region "SEG.ACCION"
            Mapper.CreateMap<Loc.Seguridad.AccionLogic, appRes.Seguridad.AccionResponse>();
            Mapper.CreateMap<Loc.Seguridad.AccionLogic, appRes.Seguridad.AccionResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.AccionLogic, appRes.Seguridad.AccionResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.AccionRequest, Ent.Seguridad.AccionEntity>()
                     .ForMember(des => des.CodigoAccion, opt => opt.MapFrom(src => src.CodigoAccion));

            Mapper.CreateMap<Ent.Seguridad.AccionEntity, Ent.Seguridad.AccionEntity>()
                 .ForMember(dto => dto.CodigoAccion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "SEG.ASIGNACION"
            Mapper.CreateMap<Loc.Seguridad.AsignacionLogic, appRes.Seguridad.AsignacionResponse>();
            Mapper.CreateMap<Loc.Seguridad.AsignacionLogic, appRes.Seguridad.AsignacionResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.AsignacionLogic, appRes.Seguridad.AsignacionResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.AsignacionRequest, Ent.Seguridad.AsignacionEntity>()
                     .ForMember(des => des.CodigoAsignacion, opt => opt.MapFrom(src => src.CodigoAsignacion));

            Mapper.CreateMap<Ent.Seguridad.AsignacionEntity, Ent.Seguridad.AsignacionEntity>()
                 .ForMember(dto => dto.CodigoAsignacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "SEG.MODULO"
            Mapper.CreateMap<Loc.Seguridad.ModuloLogic, appRes.Seguridad.ModuloResponse>();
            Mapper.CreateMap<Loc.Seguridad.ModuloLogic, appRes.Seguridad.ModuloResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.ModuloLogic, appRes.Seguridad.ModuloResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.ModuloRequest, Ent.Seguridad.ModuloEntity>()
                     .ForMember(des => des.CodigoModulo, opt => opt.MapFrom(src => src.CodigoModulo));

            Mapper.CreateMap<Ent.Seguridad.ModuloEntity, Ent.Seguridad.ModuloEntity>()
                 .ForMember(dto => dto.CodigoModulo, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "SEG.OPCION"
            Mapper.CreateMap<Loc.Seguridad.OpcionLogic, appRes.Seguridad.OpcionResponse>();
            Mapper.CreateMap<Loc.Seguridad.OpcionLogic, appRes.Seguridad.OpcionResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.OpcionLogic, appRes.Seguridad.OpcionResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.OpcionRequest, Ent.Seguridad.OpcionEntity>()
                     .ForMember(des => des.CodigoOpcion, opt => opt.MapFrom(src => src.CodigoOpcion));

            Mapper.CreateMap<Ent.Seguridad.OpcionEntity, Ent.Seguridad.OpcionEntity>()
                 .ForMember(dto => dto.CodigoOpcion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "SEG.PERMISOS"
            Mapper.CreateMap<Loc.Seguridad.PermisosLogic, appRes.Seguridad.PermisosResponse>();
            Mapper.CreateMap<Loc.Seguridad.PermisosLogic, appRes.Seguridad.PermisosResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.PermisosLogic, appRes.Seguridad.PermisosResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.PermisosRequest, Ent.Seguridad.PermisosEntity>()
                     .ForMember(des => des.CodigoPermisos, opt => opt.MapFrom(src => src.CodigoPermisos));

            Mapper.CreateMap<Ent.Seguridad.PermisosEntity, Ent.Seguridad.PermisosEntity>()
                 .ForMember(dto => dto.CodigoPermisos, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "SEG.SISTEMA"
            Mapper.CreateMap<Loc.Seguridad.SistemaLogic, appRes.Seguridad.SistemaResponse>();
            Mapper.CreateMap<Loc.Seguridad.SistemaLogic, appRes.Seguridad.SistemaResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.SistemaLogic, appRes.Seguridad.SistemaResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.SistemaRequest, Ent.Seguridad.SistemaEntity>()
                     .ForMember(des => des.CodigoSistema, opt => opt.MapFrom(src => src.CodigoSistema));

            Mapper.CreateMap<Ent.Seguridad.SistemaEntity, Ent.Seguridad.SistemaEntity>()
                 .ForMember(dto => dto.CodigoSistema, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion

            #region "SEG.USUARIOS"
            Mapper.CreateMap<Loc.Seguridad.UsuariosLogic, appRes.Seguridad.UsuariosResponse>();
            Mapper.CreateMap<Loc.Seguridad.UsuariosLogic, appRes.Seguridad.UsuariosResponse>().
                     ForMember(des => des.NumeroFila, opt => opt.MapFrom(src => src.NumeroRegistro));
            Mapper.CreateMap<Loc.Seguridad.UsuariosLogic, appRes.Seguridad.UsuariosResponse>().
                     ForMember(des => des.FilasTotal, opt => opt.MapFrom(src => src.TotalRegistro));

            Mapper.CreateMap<appReq.Seguridad.UsuariosRequest, Ent.Seguridad.UsuariosEntity>()
                     .ForMember(des => des.CodigoUsuario, opt => opt.MapFrom(src => src.CodigoUsuario));

            Mapper.CreateMap<Ent.Seguridad.UsuariosEntity, Ent.Seguridad.UsuariosEntity>()
                 .ForMember(dto => dto.CodigoUsuario, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.FechaModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.UsuarioModificacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalCreacion, opt => opt.Ignore())
                     .ForMember(dto => dto.TerminalModificacion, opt => opt.Ignore());
            #endregion
        }

        public static void Create()
        {
            var instancia = Singleton<General>.Instancia;
        }
    }
}
