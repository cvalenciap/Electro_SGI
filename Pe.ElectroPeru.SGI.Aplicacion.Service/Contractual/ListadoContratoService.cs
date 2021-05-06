using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.IO;
using Pe.Stracon.Politicas.Aplicacion.Core.ServiceContract;
using Pe.Stracon.Politicas.Aplicacion.TransferObject.Response.General;
using Pe.Stracon.Politicas.Aplicacion.TransferObject.Request.General;
using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Contractual;
using Pe.ElectroPeru.SGI.Cross.Core.Util;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Contractual;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Contractual;
using Pe.ElectroPeru.SGI.Cross.Core.Exception;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Contractual;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Context;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Contractual;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Contractual;
using System.Transactions;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Contractual;
using Pe.ElectroPeru.SGI.Cross.Core.Base;
using Pe.ElectroPeru.SGI.Infraestructura.Repository.Query.Contractual;
using Pe.ElectroPeru.SGI.Application.Core.ServiceContract;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.tool.xml.html;
using iTextSharp.tool.xml.pipeline.html;
using System.Text;
using iTextSharp.tool.xml;
using iTextSharp.tool.xml.pipeline.css;
using iTextSharp.tool.xml.parser;
using iTextSharp.tool.xml.pipeline.end;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Contractual
{
    /// <summary>
    /// Servicio que representa al Listado Contrato
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150601 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ListadoContratoService : GenericService, IListadoContratoService
    {
        #region Propiedades
        /// <summary>
        /// Variable de entorno de la aplicación
        /// </summary>
        public IEntornoActualAplicacion entornoActualAplicacion { get; set; }
        /// <summary>
        /// Servicio de manejo de política 
        /// </summary>
        public IPoliticaService politicaService { get; set; }
        /// <summary>
        /// Repositorio de manejo de listado contrato logic
        /// </summary>
        public IListadoContratoLogicRepository listadoContratoLogicRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato entity
        /// </summary>
        public IContratoEntityRepository contratoEntityRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de flujo de aprobación logic
        /// </summary>
        public IFlujoAprobacionService flujoAprobacionService { get; set; }
        /// <summary>
        /// Interfaz para el manejo de los servicios del contrato.
        /// </summary>
        public IContratoService contratoService { get; set; }
        /// <summary>
        /// Interfaz de comunicación son los servidores SharePoint.
        /// </summary>
        public ISharePointService sharePointService { get; set; }
        /// <summary>
        /// Servicio de manejo de Unidad Operativa
        /// </summary>
        public IUnidadOperativaService unidadOperativaService { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato documento entity
        /// </summary>
        public IContratoDocumentoEntityRepository contratoDocumentoEntityRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato estadio entity
        /// </summary>
        public IContratoEstadioEntityRepository contratoEstadioEntityRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato párrafo entity
        /// </summary>
        public IContratoParrafoEntityRepository contratoParrafoEntityRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato párrafo variable entity
        /// </summary>
        public IContratoParrafoVariableEntityRepository contratoParrafoVariableEntityRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato bien entity
        /// </summary>
        public IContratoBienEntityRepository contratoBienEntityRepository { get; set; }
        /// <summary>
        /// Repositorio de manejo de contrato firmante entity
        /// </summary>
        public IContratoFirmanteEntityRepository contratoFirmanteEntityRepository { get; set; }
        /// <summary>
        /// Servicio de trabajador
        /// </summary>
        public ITrabajadorService trabajadorService { get; set; }
        /// <summary>
        /// Servicio de Plantillas
        /// </summary>
        public IPlantillaService plantillaService { get; set; }
        /// <summary>
        /// Interface para obtener información de la entidad contrato.
        /// </summary>
        public IContratoEntityRepository contratoRepository { get; set; }
        /// <summary>
        /// Interfaz de comunicación para el Flujo de Aprobación Estadio.
        /// </summary>
        public IFlujoAprobacionEstadioEntityRepository flujoAprobacionEstadioRepository { get; set; }
        /// <summary>
        /// Interface para información de Contrato Estadio
        /// </summary>
        public IContratoEstadioEntityRepository contratoEstadioRepository { get; set; }
        /// <summary>
        /// Interfaz de comunicación para el Flujo de Aprobación Logic.
        /// </summary>
        public IFlujoAprobacionLogicRepository flujoAprobacionLogicRepository { get; set; }
        /// <summary>
        /// Servicio de manejo de Contratos
        /// </summary>
        public IContratoLogicRepository contratoLogicRepository { get; set; }
        #endregion

        /// <summary>
        /// Realiza la búsqueda de listado contrato
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Listado de contratos</returns>
        public ProcessResult<List<ListadoContratoResponse>> BuscarListadoContrato(ListadoContratoRequest filtro)
        {
            ProcessResult<List<ListadoContratoResponse>> resultado = new ProcessResult<List<ListadoContratoResponse>>();
            List<CodigoValorResponse> resultadoTipoServicio = null;
            List<CodigoValorResponse> resultadoTipoRequerimiento = null;
            List<CodigoValorResponse> resultadoTipoDocumento = null;
            List<CodigoValorResponse> resultadoEstadoContrato = null;
            List<CodigoValorResponse> resultadoEstadoEdicion = null;
            List<UnidadOperativaResponse> resultadoUnidadOperativa = null;

            List<Guid?> listaUnidadOperativaAsociadoTrabajador = null;

            try
            {
                resultadoTipoServicio = politicaService.ListarTipoServicio().Result;
                resultadoTipoRequerimiento = politicaService.ListarTipoRequerimiento().Result;
                resultadoTipoDocumento = politicaService.ListarTipoDocumentoContrato().Result;
                resultadoEstadoContrato = politicaService.ListarEstadoContrato().Result;
                resultadoEstadoEdicion = politicaService.ListarEstadoEdicion().Result;
                resultadoUnidadOperativa = unidadOperativaService.BuscarUnidadOperativa(new FiltroUnidadOperativa()).Result;

                Guid? codigoContrato = filtro.CodigoContrato != null ? new Guid(filtro.CodigoContrato) : (Guid?)null;
                Guid? codigoUnidadOperativa = filtro.CodigoUnidadOperativa != null ? new Guid(filtro.CodigoUnidadOperativa) : (Guid?)null;
                bool? indicadorTodaUnidadOperativa = filtro.Trabajador != null ? filtro.Trabajador.IndicadorTodaUnidadOperativa : (bool?)null;

                if (filtro.Trabajador != null && filtro.Trabajador.IndicadorTodaUnidadOperativa == false)
                {
                    listaUnidadOperativaAsociadoTrabajador = trabajadorService.ListarTrabajadorUnidadOperativa(new Guid(filtro.Trabajador.CodigoTrabajador.ToString())).Result.Select(x => x.CodigoUnidadOperativa).ToList();
                }

                //Guid? codigoTrabajador = filtro.CodigoTrabajador != null ? new Guid(filtro.CodigoTrabajador) : (Guid?)null;

                DateTime? fechaInicioVigencia = null;
                DateTime? fechaFinVigencia = null;
                decimal? montoContrato = null;

                if (!string.IsNullOrWhiteSpace(filtro.FechaInicioVigenciaString))
                {
                    fechaInicioVigencia = DateTime.ParseExact(filtro.FechaInicioVigenciaString, DatosConstantes.Formato.FormatoFecha, System.Globalization.CultureInfo.InvariantCulture);
                }
                else
                {
                    fechaInicioVigencia = null;
                }

                if (!string.IsNullOrWhiteSpace(filtro.FechaFinVigenciaString))
                {
                    fechaFinVigencia = DateTime.ParseExact(filtro.FechaFinVigenciaString, DatosConstantes.Formato.FormatoFecha, System.Globalization.CultureInfo.InvariantCulture); ;
                }
                else
                {
                    fechaFinVigencia = null;
                }

                NumberFormatInfo numberFormatInfo = new NumberFormatInfo();
                numberFormatInfo.NumberDecimalSeparator = ".";
                numberFormatInfo.NumberGroupSeparator = ",";

                if (!string.IsNullOrWhiteSpace(filtro.MontoContratoString))
                {
                    montoContrato = Decimal.Parse(filtro.MontoContratoString, numberFormatInfo);
                }
                else
                {
                    montoContrato = null;
                }
                var resultadoTrabajador = trabajadorService.BuscarTrabajadorDatoMinimo(new TrabajadorRequest()).Result;

                List<ListadoContratoLogic> listado = listadoContratoLogicRepository.BuscarListadoContrato(codigoContrato, codigoUnidadOperativa, null, filtro.CodigoTipoServicio,
                                                                                        filtro.CodigoTipoRequerimiento, filtro.CodigoTipoDocumento, filtro.CodigoEstadoContrato,
                                                                                        filtro.NumeroContrato, filtro.NumeroAdendaConcatenado, filtro.NumeroDocumentoProveedor, filtro.NombreProveedor,
                                                                                        filtro.Descripcion, indicadorTodaUnidadOperativa, listaUnidadOperativaAsociadoTrabajador,
                                                                                        filtro.CodigoEstadoEdicion, filtro.NumeroPagina, filtro.RegistrosPagina);

                resultado.Result = new List<ListadoContratoResponse>();
                foreach (var registro in listado)
                {

                    var listadoContrato = ListadoContratoAdapter.ObtenerListadoContratoPaginado(registro, resultadoTipoServicio, resultadoTipoRequerimiento, resultadoTipoDocumento, resultadoEstadoContrato, resultadoEstadoEdicion, resultadoTrabajador, resultadoUnidadOperativa);
                    resultado.Result.Add(listadoContrato);
                }
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ListadoContratoService>(e);
            }
            return resultado;
        }

        /// <summary>
        /// Registra o actualiza un contrato
        /// </summary>
        /// <param name="dataContrato">Datos a registrar de Contrato</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<object> RegistrarContrato(ContratoRequest dataContrato)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();

            try
            {
                dataContrato.IndicadorVersionOficial = false;

                if (dataContrato.CodigoTipoDocumento == DatosConstantes.TipoDocumento.Contrato)
                {
                    dataContrato.MontoAcumuladoString = dataContrato.MontoContratoString;
                }
                else if (dataContrato.CodigoTipoDocumento == DatosConstantes.TipoDocumento.Adenda)
                {
                    var entidadContratoPrincipal = contratoService.ObtieneContratoPorID(new Guid(dataContrato.CodigoContratoPrincipal.ToString())).Result;

                    var listaAdendas = listadoContratoLogicRepository.BuscarContrato(null, dataContrato.CodigoContratoPrincipal, "", "", dataContrato.CodigoTipoDocumento, "", "", "", "", "").OrderByDescending(a => a.NumeroAdenda).FirstOrDefault();
                    dataContrato.NumeroAdenda = (listaAdendas == null) ? 1 : listaAdendas.NumeroAdenda + 1;

                    dataContrato.NumeroAdendaConcatenado = string.Format(DatosConstantes.Formato.FormatoNumeroAdenda, entidadContratoPrincipal.NumeroContrato, dataContrato.NumeroAdenda);
                    dataContrato.NumeroContrato = entidadContratoPrincipal.NumeroContrato;
                }

                dataContrato.CodigoEstado = DatosConstantes.EstadoContrato.Edicion;
                dataContrato.CodigoEstadoEdicion = DatosConstantes.CodigoEstadoEdicion.EdicionParcial;

                //Asignación de Plantilla                
                var resultadoPlantilla = plantillaService.BuscarPlantilla(new PlantillaRequest()
                {
                    CodigoTipoServicio = dataContrato.CodigoTipoServicio,
                    CodigoTipoRequerimiento = dataContrato.CodigoTipoRequerimiento,
                    CodigoTipoDocumentoContrato = dataContrato.CodigoTipoDocumento,
                    IndicadorAdhesion = dataContrato.IndicadorAdhesion,
                    CodigoEstadoVigencia = DatosConstantes.EstadoVigencia.Vigente
                }).Result.FirstOrDefault();

                //Regla de Monto Minimo
                var montoMinimo = politicaService.ListarMontoMinimoControlDinamico().Result.Where(a => a.Atributo4 == dataContrato.CodigoMoneda).FirstOrDefault();

                var valorMontoMinimo = montoMinimo != null ? Convert.ToDecimal(montoMinimo.Atributo3) : 0.0;

                var indicadorSuperaMontoMinimo = dataContrato.MontoAcumulado >= valorMontoMinimo;

                var resultadoFlujoAprobacion = flujoAprobacionService.BuscarBandejaFlujoAprobacion(new FlujoAprobacionRequest()
                {
                    CodigoUnidadOperativa = dataContrato.CodigoUnidadOperativa.ToString(),
                    CodigoFormaEdicion = DatosConstantes.FormaEdicion.Cerrado,
                    IndicadorAplicaMontoMinimo = indicadorSuperaMontoMinimo,
                    ListaTipoServicio = new List<string>() { dataContrato.CodigoTipoServicio },
                    CodigoTipoRequerimiento = dataContrato.CodigoTipoRequerimiento
                }).Result.FirstOrDefault();

                if (resultadoPlantilla != null)
                {
                    dataContrato.CodigoPlantilla = resultadoPlantilla.CodigoPlantilla;
                    dataContrato.CodigoFlujoAprobacion = resultadoFlujoAprobacion.CodigoFlujoAprobacion;

                    ContratoEntity entidadContrato = ListadoContratoAdapter.RegistrarContrato(dataContrato);

                    var resultadoContrato = contratoEntityRepository.RegistrarContrato(entidadContrato);

                    if (resultadoContrato != 0)
                    {
                        resultado.IsSuccess = true;
                        resultado.Result = entidadContrato.CodigoContrato;
                    }
                    else
                    {
                        throw new Exception(string.Empty);
                    }
                }
                else
                {
                    throw new Exception("No se encontró ninguna plantilla asociada.");
                }
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ListadoContratoService>(e);
            }
            return resultado;
        }

        /// <summary>
        /// Permite generar el número de contrato
        /// </summary>
        /// <param name="unidadOperativa">Unidad Operativa</param>
        /// <param name="codigoTipoServicio">Tipo de Servicio</param>
        /// <returns>Número del Contrato</returns>
        private string GenerarNumeroContrato(UnidadOperativaResponse unidadOperativa, string codigoTipoServicio)
        {
            var unidadOperativaSuperior = unidadOperativaService.BuscarUnidadOperativa(new FiltroUnidadOperativa() { CodigoUnidadOperativa = unidadOperativa.CodigoUnidadOperativaPadre.ToString() }).Result.FirstOrDefault();
            string anioActual = DateTime.Now.Year.ToString().Substring(2, 2);
            var ultimoContrato = BuscarListadoContrato(new ListadoContratoRequest()
            {
                CodigoUnidadOperativa = unidadOperativa.CodigoUnidadOperativa.ToString(),
                CodigoTipoServicio = codigoTipoServicio
            }).Result.OrderByDescending(item => item.NumeroContrato).FirstOrDefault();

            string numeroContrato = string.Format(DatosConstantes.Formato.FormatoNumeroContrato, unidadOperativaSuperior.CodigoIdentificacion, unidadOperativa.CodigoIdentificacion, codigoTipoServicio, anioActual, string.Empty);

            int correlativo = 0;
            if (ultimoContrato != null && ultimoContrato.NumeroContrato != null)
            {
                string numeroContratoUltimoSinCorrelativo = string.Empty;
                var numeroContratoUltimoSperado = ultimoContrato.NumeroContrato.Split(Convert.ToChar(DatosConstantes.Formato.SeparadorFormatoNumeroContrato));

                for (var index = 0; index < numeroContratoUltimoSperado.Count() - 1; index++)
                {
                    numeroContratoUltimoSinCorrelativo += numeroContratoUltimoSperado[index] + ".";
                }

                if (numeroContratoUltimoSinCorrelativo == numeroContrato)
                {
                    correlativo = Convert.ToInt32(numeroContratoUltimoSperado.LastOrDefault());
                }
            }
            correlativo++;

            numeroContrato += correlativo.ToString().PadLeft(3, '0');

            return numeroContrato;
        }

        /// <summary>
        /// Registra o actualiza un listado contrato
        /// </summary>
        /// <param name="dataContrato">Datos a registrar de Contrato</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<object> RegistrarListadoContrato(ContratoRequest dataContrato)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            ContratoParrafoRequest dataContratoParrafo = new ContratoParrafoRequest();
            ContratoEstadioRequest dataContratoEstadio = new ContratoEstadioRequest();
            ContratoParrafoVariableRequest dataContratoParrafoVariable = new ContratoParrafoVariableRequest();
            ContratoBienRequest dataContratoBien = new ContratoBienRequest();
            ContratoFirmanteRequest dataContratoFirmante = new ContratoFirmanteRequest();

            UnidadOperativaResponse unidadOperativa = null;
            string codigoFormaEdicion, nombreFile, lsDirectorioDestino, listName, folderName, hayError = string.Empty;

            try
            {
                var entidadContrato = contratoService.ObtieneContratoPorID(new Guid(dataContrato.CodigoContrato)).Result;

                entidadContrato.IndicadorVersionOficial = false;

                if (entidadContrato.CodigoTipoDocumento == DatosConstantes.TipoDocumento.Contrato)
                {
                    entidadContrato.MontoAcumuladoString = entidadContrato.MontoContratoString;
                }

                //Generando contrato documento
                dataContrato.ContratoDocumento.CodigoContrato = dataContrato.CodigoContrato;
                dataContrato.ContratoDocumento.CodigoArchivo = 0;
                dataContrato.ContratoDocumento.RutaArchivoSharePoint = string.Empty;
                dataContrato.ContratoDocumento.IndicadorActual = true;
                dataContrato.ContratoDocumento.Version = 1;
                ContratoDocumentoEntity entidadContratoDocumento = ContratoDocumentoAdapter.RegistrarContratoDocumento(dataContrato.ContratoDocumento);

                //Consulta si el grabado es parcial o total
                if (dataContrato.TipoRegistro == DatosConstantes.TipoRegistro.Parcial)
                {
                    codigoFormaEdicion = null;
                    entidadContrato.CodigoEstado = DatosConstantes.EstadoContrato.Edicion;
                    entidadContrato.CodigoEstadoEdicion = DatosConstantes.CodigoEstadoEdicion.EdicionParcial;
                }
                else
                {

                    if (dataContrato.IndicadorSolicitarModificacion)
                    {
                        codigoFormaEdicion = DatosConstantes.FormaEdicion.Flexible;
                        entidadContrato.CodigoEstado = DatosConstantes.EstadoContrato.Edicion;
                        entidadContrato.CodigoEstadoEdicion = DatosConstantes.CodigoEstadoEdicion.SolicitudAutorizada;
                        entidadContrato.ComentarioModificacion = dataContrato.ComentarioModificacion;
                    }
                    else
                    {
                        codigoFormaEdicion = DatosConstantes.FormaEdicion.Cerrado;
                        entidadContrato.CodigoEstado = DatosConstantes.EstadoContrato.Aprobacion;
                        entidadContrato.CodigoEstadoEdicion = null;
                    }

                    unidadOperativa = unidadOperativaService.BuscarUnidadOperativa(new FiltroUnidadOperativa() { CodigoUnidadOperativa = entidadContrato.CodigoUnidadOperativa.ToString() }).Result.FirstOrDefault();
                }

                //Regla de Monto Minimo
                var montoMinimo = politicaService.ListarMontoMinimoControlDinamico().Result.Where(a => a.Atributo4 == entidadContrato.CodigoMoneda).FirstOrDefault();

                var valorMontoMinimo = montoMinimo != null ? Convert.ToDecimal(montoMinimo.Atributo3) : 0.0;

                var indicadorSuperaMontoMinimo = entidadContrato.MontoAcumulado >= valorMontoMinimo;

                var resultadoFlujoAprobacion = flujoAprobacionService.BuscarBandejaFlujoAprobacion(new FlujoAprobacionRequest()
                {
                    CodigoUnidadOperativa = entidadContrato.CodigoUnidadOperativa.ToString(),
                    CodigoFormaEdicion = codigoFormaEdicion,
                    IndicadorAplicaMontoMinimo = indicadorSuperaMontoMinimo,
                    ListaTipoServicio = new List<string>() { entidadContrato.CodigoTipoServicio },
                    CodigoTipoRequerimiento = entidadContrato.CodigoTipoRequerimiento
                }).Result.FirstOrDefault();

                if (resultadoFlujoAprobacion != null)
                {
                    entidadContrato.CodigoFlujoAprobacion = new Guid(resultadoFlujoAprobacion.CodigoFlujoAprobacion);
                    var resultadoFlujoAprobacionEstadio = flujoAprobacionService.BuscarBandejaFlujoAprobacionEstadio(
                        null,
                        resultadoFlujoAprobacion.CodigoFlujoAprobacion
                        ).Result.OrderBy(x => x.Orden).FirstOrDefault();

                    if (resultadoFlujoAprobacionEstadio != null)
                    {
                        if (dataContrato.IndicadorSolicitarModificacion || dataContrato.TipoRegistro == DatosConstantes.TipoRegistro.Parcial)
                        {
                            //Data para tabla ContratoEstadio
                            entidadContrato.CodigoEstadioActual = new Guid(resultadoFlujoAprobacionEstadio.CodigoFlujoAprobacionEstadio);
                            dataContratoEstadio.CodigoFlujoAprobacionEstadio = new Guid(resultadoFlujoAprobacionEstadio.CodigoFlujoAprobacionEstadio);
                            dataContratoEstadio.FechaFinalizacion = null;
                            dataContratoEstadio.CodigoEstadoContratoEstadio = DatosConstantes.CodigoEstadoContratoEstadio.Iniciado;
                        }
                        else
                        {
                            entidadContrato.CodigoEstadioActual = new Guid(resultadoFlujoAprobacionEstadio.CodigoFlujoAprobacionEstadio);
                            //Data para tabla ContratoEstadio
                            dataContratoEstadio.CodigoFlujoAprobacionEstadio = new Guid(resultadoFlujoAprobacionEstadio.CodigoFlujoAprobacionEstadio);
                            dataContratoEstadio.FechaFinalizacion = DateTime.Now.Date;
                            dataContratoEstadio.CodigoEstadoContratoEstadio = DatosConstantes.CodigoEstadoContratoEstadio.Aprobado;
                        }
                    }

                    dataContratoEstadio.CodigoContrato = entidadContrato.CodigoContrato;
                    dataContratoEstadio.FechaIngreso = DateTime.Now.Date;
                    if (resultadoFlujoAprobacionEstadio.CodigoResponsable == null)
                    {
                        dataContratoEstadio.CodigoResponsable = null;
                    }
                    else
                    {
                        dataContratoEstadio.CodigoResponsable = Guid.Parse(resultadoFlujoAprobacionEstadio.CodigoResponsable);
                    }
                    dataContratoEstadio.FechaPrimeraNotificacion = null;
                    dataContratoEstadio.FechaUltimaNotificacion = null;
                    ContratoEstadioEntity entidadContratoEstadio = ContratoEstadioAdapter.RegistrarContratoEstadio(dataContratoEstadio);
                    dataContratoParrafo.CodigoContrato = entidadContrato.CodigoContrato.ToString();
                    List<ContratoParrafoEntity> entidadContratoParrafo = new List<ContratoParrafoEntity>();
                    List<ContratoParrafoVariableEntity> entidadContratoParrafoVariable = new List<ContratoParrafoVariableEntity>();
                    List<ContratoBienEntity> entidadContratoBien = new List<ContratoBienEntity>();
                    List<ContratoFirmanteEntity> entidadContratoFirmante = new List<ContratoFirmanteEntity>();


                    foreach (var item in dataContrato.ContratoDocumento.ListaContratoParrafo)
                    {
                        item.CodigoContrato = entidadContrato.CodigoContrato.ToString();
                        if (!entidadContratoParrafo.Any(itemAny => itemAny.CodigoPlantillaParrafo == new Guid(item.CodigoPlantillaParrafo)))
                        {
                            var objContratoParrafo = ContratoParrafoAdapter.RegistrarContratoParrafo(item);
                            entidadContratoParrafo.Add(objContratoParrafo);
                            dataContratoParrafoVariable.CodigoContratoParrafo = objContratoParrafo.CodigoContratoParrafo.ToString();
                        }

                        foreach (var itemVariable in item.ListaContratoParrafoVariable)
                        {
                            //Guardar en Contrato Párrafo Variable
                            if (!entidadContratoParrafoVariable.Any(itemAny => itemAny.CodigoContratoParrafo == new Guid(dataContratoParrafoVariable.CodigoContratoParrafo) && itemAny.CodigoVariable == new Guid(itemVariable.CodigoVariable)))
                            {
                                dataContratoParrafoVariable.CodigoVariable = itemVariable.CodigoVariable;
                                switch (itemVariable.CodigoTipoVariable)
                                {
                                    case DatosConstantes.TipoVariable.Texto:
                                        dataContratoParrafoVariable.ValorTexto = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        dataContratoParrafoVariable.ValorBien = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Numero:
                                        dataContratoParrafoVariable.ValorNumeroString = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        dataContratoParrafoVariable.ValorBien = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Fecha:
                                        dataContratoParrafoVariable.ValorFechaString = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        dataContratoParrafoVariable.ValorBien = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Imagen:
                                        if (!string.IsNullOrWhiteSpace(itemVariable.Valor))
                                        {
                                            itemVariable.Valor = itemVariable.Valor.Replace("data:image/png;base64,", string.Empty);
                                            itemVariable.Valor = itemVariable.Valor.Replace("data:image/jpg;base64,", string.Empty);
                                            itemVariable.Valor = itemVariable.Valor.Replace("data:image/jpeg;base64,", string.Empty);
                                            itemVariable.Valor = itemVariable.Valor.Replace("data:image/tiff;base64,", string.Empty);
                                            byte[] bytes = Convert.FromBase64String(itemVariable.Valor);
                                            dataContratoParrafoVariable.ValorImagen = bytes;
                                        }
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        dataContratoParrafoVariable.ValorBien = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Tabla:
                                        dataContratoParrafoVariable.ValorTabla = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorTablaEditable = itemVariable.ValorEditable;
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorBien = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Bien:
                                        dataContratoParrafoVariable.ValorBien = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorBienEditable = itemVariable.ValorEditable;
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Firmante:
                                        dataContratoParrafoVariable.ValorFirmante = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorFirmanteEditable = itemVariable.ValorEditable;
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        break;
                                    case DatosConstantes.TipoVariable.Lista:
                                        dataContratoParrafoVariable.ValorLista = itemVariable.Valor;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        break;
                                    default:
                                        dataContratoParrafoVariable.ValorTexto = null;
                                        dataContratoParrafoVariable.ValorNumeroString = null;
                                        dataContratoParrafoVariable.ValorFechaString = null;
                                        dataContratoParrafoVariable.ValorImagen = null;
                                        dataContratoParrafoVariable.ValorTabla = null;
                                        dataContratoParrafoVariable.ValorBien = null;
                                        break;
                                }

                                var dataContratoParrafoVariableEntity = ContratoParrafoVariableAdapter.RegistrarContratoParrafoVariable(dataContratoParrafoVariable);
                                entidadContratoParrafoVariable.Add(dataContratoParrafoVariableEntity);
                                if (itemVariable.CodigoTipoVariable == DatosConstantes.TipoVariable.Firmante)
                                {
                                    if (dataContrato.ListaContratoFirmante != null)
                                    {
                                        foreach (var firm in dataContrato.ListaContratoFirmante)
                                        {
                                            dataContratoFirmante.CodigoContratoParrafoVariable = dataContratoParrafoVariableEntity.CodigoContratoParrafoVariable.ToString();
                                            dataContratoFirmante.NombreFirmante = firm.NombreFirmante;
                                            dataContratoFirmante.DatoAdicional = firm.DatoAdicional;
                                            entidadContratoFirmante.Add(ContratoFirmanteAdapter.RegistrarContratoFirmante(dataContratoFirmante));
                                        }

                                    }

                                }
                            }
                        }
                    }

                    dataContratoBien.CodigoContrato = entidadContrato.CodigoContrato.ToString();
                    if (dataContrato.ListaCodigoBien != null)
                    {
                        foreach (var codigo in dataContrato.ListaCodigoBien)
                        {
                            dataContratoBien.CodigoBien = codigo;
                            entidadContratoBien.Add(ContratoBienAdapter.RegistrarContratoBien(dataContratoBien));
                        }
                    }

                    //int resultadoContrato = 1;
                    int resultadoContratoDocumento = 0;
                    int resultadoContratoEstadio = 0;
                    int resultadoContratoParrafo = 0;
                    int resultadoContratoParrafoVariable = 0;
                    int resultadoContratoBienVariable = 0;

                    using (var scope = new TransactionScope(TransactionScopeOption.RequiresNew))
                    {
                        try
                        {
                            contratoParrafoEntityRepository.EliminarContenidoContrato(new Guid(dataContrato.CodigoContrato));

                            if (dataContrato.TipoRegistro == DatosConstantes.TipoRegistro.Total)
                            {
                                resultadoContratoDocumento = contratoDocumentoEntityRepository.RegistrarContratoDocumento(entidadContratoDocumento);
                            }
                            else
                            {
                                resultadoContratoDocumento = 1;
                            }

                            if (resultadoContratoDocumento == 1)
                            {
                                resultado.Result = 1;
                                resultadoContratoEstadio = contratoEstadioEntityRepository.RegistrarContratoEstadio(entidadContratoEstadio);

                                if (resultadoContratoEstadio == 1)
                                {
                                    resultado.Result = 1;
                                    foreach (var entidad in entidadContratoParrafo)
                                    {
                                        resultadoContratoParrafo = contratoParrafoEntityRepository.RegistrarContratoParrafo(entidad);
                                    }

                                    if (entidadContratoParrafoVariable.Count > 0)
                                    {
                                        if (resultadoContratoParrafo == 1)
                                        {
                                            resultado.Result = 1;
                                            foreach (var entidad in entidadContratoParrafoVariable)
                                            {
                                                resultadoContratoParrafoVariable = contratoParrafoVariableEntityRepository.RegistrarContratoParrafoVariable(entidad);
                                            }

                                            //Inicio - Registrar Contrato Bien
                                            if (resultadoContratoParrafoVariable == 1)
                                            {
                                                resultado.Result = 1;

                                                foreach (var entidad in entidadContratoBien)
                                                {
                                                    resultadoContratoBienVariable = contratoBienEntityRepository.RegistrarContratoBien(entidad);
                                                }

                                                if (entidadContratoFirmante != null && entidadContratoFirmante.Count > 0)
                                                {
                                                    foreach (var item in entidadContratoFirmante)
                                                    {
                                                        contratoFirmanteEntityRepository.Insertar(item);
                                                        contratoFirmanteEntityRepository.GuardarCambios();
                                                    }
                                                }
                                            }
                                            else
                                            {

                                                resultado.Result = 0;
                                                throw new Exception();
                                            }
                                            //Fin - Registrar Contrato Bien
                                        }
                                        else
                                        {
                                            resultado.Result = 0;
                                            throw new Exception();
                                        }
                                    }
                                }
                                else
                                {
                                    resultado.Result = 0;
                                    throw new Exception();
                                }
                            }
                            else
                            {
                                resultado.Result = 0;
                                throw new Exception();
                            }

                            scope.Complete();
                        }
                        catch (Exception ex)
                        {
                            LogBL.grabarLogError(ex);
                            resultado.IsSuccess = false;
                            scope.Dispose();
                        }
                    }

                    if (resultadoContratoParrafoVariable == 1 && dataContrato.TipoRegistro == DatosConstantes.TipoRegistro.Total)
                    {
                        //Registro de Número de Contrato
                        string numeroContrato = GenerarNumeroContrato(unidadOperativa, entidadContrato.CodigoTipoServicio);

                        contratoEntityRepository.EditarContrato(new ContratoEntity()
                        {
                            CodigoContrato = entidadContrato.CodigoContrato.Value,
                            CodigoEstado = entidadContrato.CodigoEstado,
                            CodigoEstadoEdicion = entidadContrato.CodigoEstadoEdicion,
                            NumeroContrato = numeroContrato,
                            ComentarioModificacion = entidadContrato.ComentarioModificacion,
                            UsuarioModificacion = entornoActualAplicacion.UsuarioSession,
                            FechaModificacion = DateTime.Now,
                            TerminalModificacion = entornoActualAplicacion.Terminal
                        });

                        if (!dataContrato.IndicadorSolicitarModificacion)
                        {
                            contratoService.ApruebaContratoEstadio(entidadContratoEstadio.CodigoContrato, entidadContratoEstadio.CodigoContratoEstadio, "");
                        }
                    }
                }
                else
                {
                    resultado.IsSuccess = false;
                    var descripcionFormaEdicion = politicaService.ListarFormaContrato().Result.Where(x => x.Codigo.ToString() == codigoFormaEdicion).FirstOrDefault();

                    resultado.Exception = new ApplicationLayerException<ContratoService>(string.Format(MensajesSistema.FlujoAprobacionFormaEdicionNoExiste, descripcionFormaEdicion.Valor));
                    LogBL.grabarLogError(new Exception(string.Format(MensajesSistema.FlujoAprobacionFormaEdicionNoExiste, descripcionFormaEdicion.Valor)));
                    return resultado;
                }
            }
            catch (Exception ex)
            {
                LogBL.grabarLogError(ex);
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ContratoService>(ex);
            }

            return resultado;
        }

        /// <summary>
        /// Registra el documento del contrato de adhesión
        /// </summary>
        /// <param name="dataContrato">Datos a registrar de Contrato</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<object> RegistrarListadoContratoAdhesion(ContratoRequest dataContrato)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            ContratoEstadioRequest dataContratoEstadio = new ContratoEstadioRequest();
            UnidadOperativaResponse unidadOperativa = null;
            string codigoFormaEdicion, nombreFile, lsDirectorioDestino, listName, folderName, hayError = string.Empty;

            try
            {
                var entidadContrato = contratoService.ObtieneContratoPorID(new Guid(dataContrato.CodigoContrato)).Result;

                entidadContrato.IndicadorVersionOficial = false;

                if (entidadContrato.CodigoTipoDocumento == DatosConstantes.TipoDocumento.Contrato)
                {
                    entidadContrato.MontoAcumuladoString = entidadContrato.MontoContratoString;
                }

                //Generando contrato documento
                dataContrato.ContratoDocumento.CodigoContrato = dataContrato.CodigoContrato;
                dataContrato.ContratoDocumento.CodigoArchivo = 0;
                dataContrato.ContratoDocumento.RutaArchivoSharePoint = "";
                dataContrato.ContratoDocumento.IndicadorActual = true;
                dataContrato.ContratoDocumento.Version = 1;
                ContratoDocumentoEntity entidadContratoDocumento = ContratoDocumentoAdapter.RegistrarContratoDocumento(dataContrato.ContratoDocumento);

                codigoFormaEdicion = DatosConstantes.FormaEdicion.Cerrado;
                entidadContrato.CodigoEstado = DatosConstantes.EstadoContrato.Aprobacion;
                entidadContrato.CodigoEstadoEdicion = null;

                /*Registramos información del SharePoint*/
                unidadOperativa = unidadOperativaService.BuscarUnidadOperativa(new FiltroUnidadOperativa() { CodigoUnidadOperativa = entidadContrato.CodigoUnidadOperativa.ToString() }).Result.FirstOrDefault();
                #region InformacionRepositorioSharePoint
                nombreFile = string.Format("{0}.{1}", entidadContratoDocumento.CodigoContratoDocumento.ToString(), dataContrato.ContratoDocumento.ExtencionArchivo);
                ProcessResult<string> miDirectorio = contratoService.RetornaDirectorioFile(new Guid(dataContrato.CodigoContrato), unidadOperativa.Nombre, nombreFile, dataContrato.FechaInicioVigencia);
                lsDirectorioDestino = miDirectorio.Result.ToString();
                string[] nivelCarpeta = lsDirectorioDestino.Split(new char[] { '/' });
                listName = nivelCarpeta[0];
                folderName = string.Format("{0}/{1}", nivelCarpeta[1], nivelCarpeta[2]);
                #endregion

                #region GrabarContenidoContratoSHP
                MemoryStream msFile = new MemoryStream(dataContrato.ContratoDocumento.Documento);
                if (msFile != null)
                {
                    var regSHP = sharePointService.RegistraArchivoSharePoint(ref hayError, listName, folderName, nombreFile, msFile);
                    if (Convert.ToInt32(regSHP.Result) > 0 && hayError == string.Empty)
                    {
                        entidadContratoDocumento.CodigoArchivo = Convert.ToInt32(regSHP.Result);
                        entidadContratoDocumento.RutaArchivoSharePoint = lsDirectorioDestino;
                    }
                    else
                    {
                        if (Convert.ToInt32(regSHP.Result) > 0)
                        {
                            var fileShpDelete = sharePointService.EliminaArchivoSharePoint(new List<int>() { Convert.ToInt32(regSHP.Result) }, listName, ref hayError);
                        }
                        resultado.IsSuccess = false;
                        resultado.Exception = new ApplicationLayerException<ContratoService>("Ocurrió un problema al registra el archivo en el SharePoint: " + hayError);
                        LogBL.grabarLogError(new Exception(hayError));
                        return resultado;
                    }
                }
                else
                {
                    resultado.IsSuccess = false;
                    resultado.Exception = new ApplicationLayerException<ContratoService>("El documento presenta errores.");
                    LogBL.grabarLogError(new Exception("El documento presenta errores."));
                }

                #endregion

                //Regla de Monto Minimo
                var montoMinimo = politicaService.ListarMontoMinimoControlDinamico().Result.Where(a => a.Atributo4 == entidadContrato.CodigoMoneda).FirstOrDefault();

                var valorMontoMinimo = montoMinimo != null ? Convert.ToDecimal(montoMinimo.Atributo3) : 0.0;

                var indicadorSuperaMontoMinimo = entidadContrato.MontoAcumulado >= valorMontoMinimo;

                var resultadoFlujoAprobacion = flujoAprobacionService.BuscarBandejaFlujoAprobacion(new FlujoAprobacionRequest()
                {
                    CodigoUnidadOperativa = entidadContrato.CodigoUnidadOperativa.ToString(),
                    CodigoFormaEdicion = codigoFormaEdicion,
                    IndicadorAplicaMontoMinimo = indicadorSuperaMontoMinimo,
                    ListaTipoServicio = new List<string>() { entidadContrato.CodigoTipoServicio },
                    CodigoTipoRequerimiento = entidadContrato.CodigoTipoRequerimiento
                }).Result.FirstOrDefault();

                if (resultadoFlujoAprobacion != null)
                {
                    entidadContrato.CodigoFlujoAprobacion = new Guid(resultadoFlujoAprobacion.CodigoFlujoAprobacion);
                    var resultadoFlujoAprobacionEstadio = flujoAprobacionService.BuscarBandejaFlujoAprobacionEstadio(
                        null,
                        resultadoFlujoAprobacion.CodigoFlujoAprobacion).Result.OrderBy(x => x.Orden).FirstOrDefault();

                    if (resultadoFlujoAprobacionEstadio != null)
                    {
                        entidadContrato.CodigoEstadioActual = new Guid(resultadoFlujoAprobacionEstadio.CodigoFlujoAprobacionEstadio);
                        //Data para tabla ContratoEstadio
                        dataContratoEstadio.CodigoFlujoAprobacionEstadio = new Guid(resultadoFlujoAprobacionEstadio.CodigoFlujoAprobacionEstadio);
                        dataContratoEstadio.FechaFinalizacion = DateTime.Now.Date;
                        dataContratoEstadio.CodigoEstadoContratoEstadio = DatosConstantes.CodigoEstadoContratoEstadio.Aprobado;
                    }

                    dataContratoEstadio.CodigoContrato = entidadContrato.CodigoContrato;
                    dataContratoEstadio.FechaIngreso = DateTime.Now.Date;
                    if (resultadoFlujoAprobacionEstadio.CodigoResponsable == null)
                    {
                        dataContratoEstadio.CodigoResponsable = null;
                    }
                    else
                    {
                        dataContratoEstadio.CodigoResponsable = Guid.Parse(resultadoFlujoAprobacionEstadio.CodigoResponsable);
                    }

                    dataContratoEstadio.FechaPrimeraNotificacion = null;
                    dataContratoEstadio.FechaUltimaNotificacion = null;
                    ContratoEstadioEntity entidadContratoEstadio = ContratoEstadioAdapter.RegistrarContratoEstadio(dataContratoEstadio);

                    int resultadoContratoDocumento = 0;
                    int resultadoContratoEstadio = 0;

                    using (var scope = new TransactionScope(TransactionScopeOption.RequiresNew))
                    {
                        try
                        {
                            resultadoContratoDocumento = contratoDocumentoEntityRepository.RegistrarContratoDocumento(entidadContratoDocumento);

                            if (resultadoContratoDocumento == 1)
                            {
                                resultado.Result = 1;
                                resultadoContratoEstadio = contratoEstadioEntityRepository.RegistrarContratoEstadio(entidadContratoEstadio);

                                if (resultadoContratoEstadio == 1)
                                {
                                    resultado.Result = 1;
                                }
                                else
                                {
                                    resultado.Result = 0;
                                    throw new Exception();
                                }
                            }
                            else
                            {
                                resultado.Result = 0;
                                throw new Exception();
                            }

                            scope.Complete();
                        }
                        catch (Exception ex)
                        {
                            LogBL.grabarLogError(ex);
                            resultado.IsSuccess = false;
                            scope.Dispose();
                        }
                    }

                    contratoService.ApruebaContratoEstadio(entidadContratoEstadio.CodigoContrato, entidadContratoEstadio.CodigoContratoEstadio);

                    //Registro de Número de Contrato
                    string numeroContrato = GenerarNumeroContrato(unidadOperativa, entidadContrato.CodigoTipoServicio);

                    contratoEntityRepository.EditarContrato(new ContratoEntity()
                    {
                        CodigoContrato = entidadContrato.CodigoContrato.Value,
                        CodigoEstado = entidadContrato.CodigoEstado,
                        CodigoEstadoEdicion = entidadContrato.CodigoEstadoEdicion,
                        NumeroContrato = numeroContrato,
                        ComentarioModificacion = entidadContrato.ComentarioModificacion,
                        UsuarioModificacion = entornoActualAplicacion.UsuarioSession,
                        FechaModificacion = DateTime.Now,
                        TerminalModificacion = entornoActualAplicacion.Terminal
                    });
                }
                else
                {
                    resultado.IsSuccess = false;
                    var descripcionFormaEdicion = politicaService.ListarFormaContrato().Result.Where(x => x.Codigo.ToString() == codigoFormaEdicion).FirstOrDefault();

                    resultado.Exception = new ApplicationLayerException<ContratoService>(string.Format(MensajesSistema.FlujoAprobacionFormaEdicionNoExiste, descripcionFormaEdicion.Valor));
                    LogBL.grabarLogError(new Exception(string.Format(MensajesSistema.FlujoAprobacionFormaEdicionNoExiste, descripcionFormaEdicion.Valor)));
                    return resultado;
                }
            }
            catch (Exception ex)
            {
                LogBL.grabarLogError(ex);
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ContratoService>(ex);
            }

            return resultado;
        }


        /// <summary>
        /// Realiza la búsqueda de listado contratos principales
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Listado de contratos</returns>
        public ProcessResult<List<ListadoContratoResponse>> ListadoContratoPrincipal(ListadoContratoRequest filtro)
        {
            ProcessResult<List<ListadoContratoResponse>> resultado = new ProcessResult<List<ListadoContratoResponse>>();
            try
            {
                List<ListadoContratoLogic> listado = listadoContratoLogicRepository.ListadoContratoPrincipal(filtro.NumeroContrato, filtro.Descripcion);
                resultado.Result = new List<ListadoContratoResponse>();
                foreach (var registro in listado)
                {
                    var listadoContrato = ListadoContratoAdapter.ObtenerListadoContratoPaginado(registro);
                    resultado.Result.Add(listadoContrato);
                }
            }
            catch (Exception ex)
            {
                LogBL.grabarLogError(ex);
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ListadoContratoService>(ex);
            }
            return resultado;
        }

        /// <summary>
        /// Eliminar Contrato
        /// </summary>
        /// <param name="listaCodigoContrato">Lista de Códigos de Contrato a Eliminar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<object> EliminarListadoContrato(List<object> listaCodigoContrato)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            try
            {
                foreach (var codigo in listaCodigoContrato)
                {
                    var llaveEntidad = new Guid(codigo.ToString());
                    contratoEntityRepository.EliminarEntorno(entornoActualAplicacion, llaveEntidad);
                }

                resultado.Result = contratoEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ListadoContratoService>(e);
            }

            return resultado;
        }

        /// <summary>
        /// Obtiene el Monto Acumulado del Contrato Principal más sus Adendas
        /// </summary>
        /// <param name="codigoContratoPrincipal">Código de Contrato Principal</param>
        /// <returns>Registro con el Monto Acumulado del Contrato Principal más sus Adendas</returns>
        public ProcessResult<List<ListadoContratoResponse>> ObtenerMontoAcumuladoContrato(string codigoContratoPrincipal)
        {
            ProcessResult<List<ListadoContratoResponse>> resultado = new ProcessResult<List<ListadoContratoResponse>>();
            try
            {
                List<ListadoContratoLogic> listado = listadoContratoLogicRepository.ObtenerMontoAcumuladoContrato(new Guid(codigoContratoPrincipal));
                resultado.Result = new List<ListadoContratoResponse>();

                foreach (var registro in listado)
                {
                    var listadoContratoResponse = new ListadoContratoResponse();
                    listadoContratoResponse.MontoAcumulado = registro.MontoAcumulado;
                    resultado.Result.Add(listadoContratoResponse);
                }
            }
            catch (Exception ex)
            {
                LogBL.grabarLogError(ex);
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ListadoContratoService>(ex);
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene listado de variables de los parrafos de  un contrato
        /// </summary>
        /// <param name="codigoContrato">Código de Contrato</param>
        /// <returns>Lista de variables de parrafos de contrato</returns>
        public ProcessResult<List<ContratoParrafoVariableResponse>> ObtenerVariablesContratoParrafo(string codigoContrato)
        {
            ProcessResult<List<ContratoParrafoVariableResponse>> resultado = new ProcessResult<List<ContratoParrafoVariableResponse>>();
            try
            {
                List<ContratoParrafoVariableLogic> listado = listadoContratoLogicRepository.ObtenerVariablesContratoParrafo(new Guid(codigoContrato));

                resultado.Result = new List<ContratoParrafoVariableResponse>();

                foreach (var registro in listado)
                {
                    var contratoParrafoVariable = ListadoContratoAdapter.ObtenerContratoParrafoVariable(registro);

                    if (contratoParrafoVariable.CodigoTipo == DatosConstantes.TipoVariable.Bien)
                    {
                        contratoParrafoVariable.ListaContratoBien = new List<ContratoBienResponse>();

                        var ListaContratoBienLogic = listadoContratoLogicRepository.ObtenerBienesContrato(new Guid(codigoContrato));

                        foreach (var item in ListaContratoBienLogic)
                        {
                            var contratoBien = ListadoContratoAdapter.ObtenerContratoBienResponse(item);
                            contratoParrafoVariable.ListaContratoBien.Add(contratoBien);
                        }
                    }
                    else if (contratoParrafoVariable.CodigoTipo == DatosConstantes.TipoVariable.Firmante)
                    {
                        contratoParrafoVariable.ListaContratoFirmante = new List<ContratoFirmanteResponse>();

                        var ListaContratoFirmanteLogic = listadoContratoLogicRepository.ObtenerFirmantesContrato(new Guid(codigoContrato));

                        foreach (var item in ListaContratoFirmanteLogic)
                        {
                            var contratoFirmante = ListadoContratoAdapter.ObtenerContratoFirmanteResponse(item);
                            contratoParrafoVariable.ListaContratoFirmante.Add(contratoFirmante);
                        }
                    }
                    resultado.Result.Add(contratoParrafoVariable);
                }
            }
            catch (Exception ex)
            {
                LogBL.grabarLogError(ex);
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ListadoContratoService>(ex);
            }
            return resultado;
        }

        /// <summary>
        /// Permite generar un pdf desde un html
        /// </summary>
        /// <param name="htmlCuerpo">script de html</param>
        /// <param name="htmlPie">script de html del pie de pagina</param>
        /// <param name="linksRef">links de referencia</param>
        /// <param name="indicadorHtml">Indicador si cuerpo va a ser parseado como Html</param>
        /// <returns>Pdf en un arreglo de bytes</returns>
        public byte[] GenerarPdfDesdeHtml(string htmlCuerpo, string htmlPie, string htmlCabecera, List<TrabajadorResponse> listaFirmantesSGC, List<string> listaResponsables = null, string linksRef = null, bool indicadorHtml = false)
        {
            var arregloByte = new byte[0];
            try
            {
                if (listaFirmantesSGC != null && listaFirmantesSGC.Count > 0)
                {
                    //Seteamos el valor del primer representante
                    htmlCuerpo = htmlCuerpo.Replace(DatosConstantes.IdentificadorVariableDefecto.PrimerRepresentanteEmpresa, listaFirmantesSGC[0].NombreCompleto);
                    htmlCuerpo = htmlCuerpo.Replace(DatosConstantes.IdentificadorVariableDefecto.DniPrimerRepresentanteEmpresa, listaFirmantesSGC[0].DescripcionTipoDocumentoIdentidad + " N° " + listaFirmantesSGC[0].NumeroDocumentoIdentidad);

                    //Seteamos el valor del segundo representante
                    htmlCuerpo = htmlCuerpo.Replace(DatosConstantes.IdentificadorVariableDefecto.SegundoRepresentanteEmpresa, listaFirmantesSGC[1].NombreCompleto);
                    htmlCuerpo = htmlCuerpo.Replace(DatosConstantes.IdentificadorVariableDefecto.DniSegundoRepresentanteEmpresa, listaFirmantesSGC[1].DescripcionTipoDocumentoIdentidad + " N° " + listaFirmantesSGC[1].NumeroDocumentoIdentidad);

                    var formatoFirma = "<div style='width:100%; margin: auto;text-align: center; padding:120px 0px 0px 0px;font-family:arial,helvetica,sans-serif;font-size:11px'><p><b>..................................................</b></p><p style='margin: auto;font-family:arial,helvetica,sans-serif'>{0}</p></br><p style='margin: auto;font-family:arial,helvetica,sans-serif'>{1}</p></div>";

                    var firmas = "<table style='width:100%'>" +
                        "<tr><td style='width:50%'>" + string.Format(formatoFirma, listaFirmantesSGC[0].NombreCompleto, DatosConstantes.Recursos.RepresentanteLegal) + "</td>" +
                        "<td style='width:50%'>" + string.Format(formatoFirma, listaFirmantesSGC[1].NombreCompleto, DatosConstantes.Recursos.RepresentanteLegal) + "</td></tr>" +
                        "</table>";

                    htmlCuerpo = htmlCuerpo.Replace(DatosConstantes.IdentificadorVariableDefecto.FirmaSGC, firmas);

                }

                htmlCuerpo = "<div>" + htmlCuerpo + "</div>";

                //Inicio - Validaciones
                htmlCuerpo = htmlCuerpo.Replace("</p><table", "<table");
                htmlCuerpo = htmlCuerpo.Replace("<table", "<br></br><table");
                htmlCuerpo = htmlCuerpo.Replace("</table><p></p>", "</table></p>");
                htmlCuerpo = htmlCuerpo.Replace("</table><p>", "</table>");
                //Fin - Validaciones

                //tratamiento de imágenes.
                int posImg = 0, posFin = 0;
                string imgBase64 = string.Empty;
                posImg = htmlCuerpo.IndexOf("<img name");
                while (posImg > 0)
                {
                    posFin = htmlCuerpo.IndexOf("\">", posImg);
                    imgBase64 = htmlCuerpo.Substring(posImg, (posFin + 2) - posImg);
                    if (posFin > 0)
                    {
                        htmlCuerpo = htmlCuerpo.Replace(imgBase64, imgBase64 + "</img>");
                    }
                    posImg = htmlCuerpo.IndexOf("<img name", posFin);
                }
                //
                posImg = 0;
                posFin = 0;
                imgBase64 = string.Empty;
                posImg = htmlCuerpo.IndexOf("<img src");
                while (posImg > 0)
                {
                    posFin = htmlCuerpo.IndexOf(">", posImg);
                    imgBase64 = htmlCuerpo.Substring(posImg, posFin - posImg);
                    if (posFin > 0)
                    {
                        htmlCuerpo = htmlCuerpo.Replace(imgBase64, imgBase64 + "></img>");
                    }
                    posImg = htmlCuerpo.IndexOf("<img src", posFin);
                }

                htmlCuerpo = htmlCuerpo.Replace("</img></img>", "");
                htmlCuerpo = htmlCuerpo.Replace("</img>/>", "</img>");
                htmlCuerpo = htmlCuerpo.Replace("</img>>", "</img>");
                htmlCuerpo = htmlCuerpo.Replace("/></img>", "</img>");


                //Inicio - Validaciones
                htmlCuerpo = htmlCuerpo.Replace("<br><br><br>", "</br>");
                htmlCuerpo = htmlCuerpo.Replace("<br><br>", "</br>");
                //Fin - Validaciones

                htmlCuerpo = htmlCuerpo.Replace("<br></br>", "</br>");
                htmlCuerpo = htmlCuerpo.Replace("<br>", "</br>");
                htmlCuerpo = htmlCuerpo.Replace("</br>", "<br></br>");

                using (var document = new Document(PageSize.A4, 71, 71, 70, 70))    //Margen 2.5 cm
                {
                    TextReader xmlString = new StringReader(htmlCuerpo);
                    var memoryStream = new MemoryStream();
                    PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
                    writer.PageEvent = new Footer(htmlPie, listaResponsables);
                    writer.PageEvent = new Header(htmlCabecera);

                    document.Open();
                    //Obtiene las fuentes instaladas
                    FontFactory.RegisterDirectories();

                    var tagProcessors = (DefaultTagProcessorFactory)Tags.GetHtmlTagProcessorFactory();
                    tagProcessors.RemoveProcessor(HTML.Tag.IMG);
                    tagProcessors.AddProcessor(HTML.Tag.IMG, new CustomImageTagProcessor());//usando el nuevo procesador de imagenes

                    var htmlContext = new HtmlPipelineContext(null);
                    htmlContext.CharSet(Encoding.UTF8);
                    htmlContext.SetAcceptUnknown(true).AutoBookmark(true);
                    htmlContext.SetTagFactory(tagProcessors);

                    XMLWorkerHelper xmlWorker = XMLWorkerHelper.GetInstance();
                    ICSSResolver cssResolver = xmlWorker.GetDefaultCssResolver(false);
                    //Usar css
                    if (!string.IsNullOrWhiteSpace(linksRef))
                    {
                        cssResolver.AddCssFile(linksRef, true);
                    }

                    // Genera el pdf
                    IPipeline pipeline = new CssResolverPipeline(cssResolver, new HtmlPipeline(htmlContext, new PdfWriterPipeline(document, writer)));

                    var worker = new XMLWorker(pipeline, true);
                    var xmlParse = new XMLParser(true, worker);
                    xmlParse.Parse(xmlString);
                    xmlParse.Flush();

                    document.Close();
                    document.Dispose();
                    arregloByte = memoryStream.ToArray();
                }
            }
            catch (System.Exception e)
            {

            }

            return arregloByte;
        }

        /// <summary>
        /// Clase Footer para documento PDF
        /// </summary>
        public partial class Footer : PdfPageEventHelper
        {
            /// <summary>
            /// Contenido
            /// </summary>
            public string contenido;
            /// <summary>
            /// Lista de Responsables
            /// </summary>
            public List<string> listaResponsables;
            /// <summary>
            /// Constructor del Footer
            /// </summary>
            /// <param name="contenidoFooter">Contenido</param>
            /// <param name="listaResponsables">Lista de Responsables</param>
            public Footer(string contenidoFooter, List<string> listaResponsables)
            {
                this.contenido = contenidoFooter;
                this.listaResponsables = listaResponsables;
            }
            /// <summary>
            /// Propiedad del documento para el fin de página.
            /// </summary>
            /// <param name="writer">objeto PdfWriter</param>
            /// <param name="doc">Objeto Document</param>
            public override void OnEndPage(PdfWriter writer, Document doc)
            {
                /*Comentario de página*/
                Paragraph footer = new Paragraph(this.contenido);
                footer.Font.SetColor(200, 100, 100);
                footer.Font.Size = 8;
                footer.Alignment = Element.ALIGN_LEFT;

                PdfPCell cell = new PdfPCell(footer);
                cell.Border = 0;


                /*Número de Página*/
                Paragraph parrafoNumeroPagina = new Paragraph(writer.PageNumber.ToString());
                parrafoNumeroPagina.Font.SetColor(100, 100, 100);
                parrafoNumeroPagina.Font.Size = 8;
                parrafoNumeroPagina.Alignment = Element.ALIGN_RIGHT;

                PdfPCell celdaNumero = new PdfPCell(parrafoNumeroPagina);
                celdaNumero.Border = 0;
                celdaNumero.HorizontalAlignment = PdfPCell.ALIGN_RIGHT;

                List<PdfPCell> listaCellResponsable = new List<PdfPCell>();

                if (listaResponsables != null && listaResponsables.Count > 0)
                {

                    int numeroResponsable = 1;
                    foreach (var responsable in listaResponsables)
                    {
                        Paragraph parrafoResponsable = new Paragraph(responsable);
                        parrafoResponsable.Font.SetColor(100, 100, 100);
                        parrafoResponsable.Font.Size = 8;
                        var celdaResponsable = new PdfPCell(parrafoResponsable);

                        if (numeroResponsable % 2 == 0)
                        {
                            celdaResponsable.HorizontalAlignment = Element.ALIGN_RIGHT;
                        }
                        else
                        {
                            celdaResponsable.HorizontalAlignment = Element.ALIGN_LEFT;
                        }
                        celdaResponsable.Border = 0;
                        listaCellResponsable.Add(celdaResponsable);
                        numeroResponsable++;
                    }

                    if ((listaCellResponsable.Count % 2) != 0)
                    {
                        var pdfCell = new PdfPCell(new Paragraph(""));
                        pdfCell.Border = 0;

                        listaCellResponsable.Add(pdfCell);
                    }
                }

                /*Agregar la tabla*/
                float[] anchuras = { 0.5f, 0.5f };
                PdfPTable footerTbl = new PdfPTable(anchuras);
                footerTbl.TotalWidth = doc.PageSize.Width - doc.LeftMargin - doc.RightMargin;
                footerTbl.HorizontalAlignment = Element.ALIGN_CENTER;
                footerTbl.AddCell(cell);
                footerTbl.AddCell(celdaNumero);

                if (listaResponsables != null && listaResponsables.Count > 0)
                {
                    var r1 = new Paragraph("Revisado por:");
                    r1.Font.SetColor(100, 100, 100);
                    r1.Font.Size = 8;

                    var revisadoPor = new PdfPCell(r1);
                    revisadoPor.Border = 0;

                    var celdaBlanco = new PdfPCell(new Paragraph(""));
                    celdaBlanco.Border = 0;

                    footerTbl.AddCell(revisadoPor);
                    footerTbl.AddCell(celdaBlanco);

                    foreach (var cellResponsable in listaCellResponsable)
                    {
                        footerTbl.AddCell(cellResponsable);
                    }
                }

                footerTbl.WriteSelectedRows(0, -1, doc.LeftMargin, doc.PageSize.GetBottom(doc.BottomMargin * 0.8F), writer.DirectContent);
            }
        }


        /// <summary>
        /// Clase Header para documento PDF
        /// </summary>
        public partial class Header : PdfPageEventHelper
        {
            /// <summary>
            /// Contenido
            /// </summary>
            public string contenido;

            /// <summary>
            /// Contenido del Header del documento.
            /// </summary>
            /// <param name="contenidoHeader"></param>
            public Header(string contenidoHeader)
            {
                this.contenido = contenidoHeader;
            }
            /// <summary>
            /// Propiedad del documento para el inicio de página.
            /// </summary>
            /// <param name="writer">objeto PdfWriter</param>
            /// <param name="doc">Objeto Document</param>
            public override void OnStartPage(PdfWriter writer, Document doc)
            {
                /*Comentario de página*/
                Paragraph header = new Paragraph(this.contenido);
                header.Font.SetColor(100, 100, 100);
                header.Font.Size = 11;
                header.Font.SetFamily("Arial");

                PdfPCell cell = new PdfPCell(header);
                cell.Border = 0;
                cell.HorizontalAlignment = Element.ALIGN_RIGHT;


                /*Agregar la tabla*/
                float[] anchuras = { 1f };
                PdfPTable headerTbl = new PdfPTable(anchuras);
                headerTbl.TotalWidth = doc.PageSize.Width - doc.LeftMargin - doc.RightMargin;
                headerTbl.HorizontalAlignment = Element.ALIGN_CENTER;
                headerTbl.AddCell(cell);
                //headerTbl.WriteSelectedRows(0, -1, doc.LeftMargin, doc.PageSize.GetBottom(doc.BottomMargin * 0.8F), writer.DirectContent);
                headerTbl.WriteSelectedRows(0, -1, doc.LeftMargin, doc.PageSize.GetBottom(doc.BottomMargin * 11.5F), writer.DirectContent);
            }
        }

        public class CustomImageTagProcessor : iTextSharp.tool.xml.html.Image
        {
            public override IList<IElement> End(IWorkerContext ctx, Tag tag, IList<IElement> currentContent)
            {
                IDictionary<string, string> attributes = tag.Attributes;
                string src;
                if (!attributes.TryGetValue(HTML.Attribute.SRC, out src))
                    return new List<IElement>(1);

                if (string.IsNullOrEmpty(src))
                    return new List<IElement>(1);

                if (src.StartsWith("data:image/", StringComparison.InvariantCultureIgnoreCase))
                {
                    var base64Data = src.Substring(src.IndexOf(",") + 1);
                    var imagedata = Convert.FromBase64String(base64Data);
                    var image = iTextSharp.text.Image.GetInstance(imagedata);

                    var list = new List<IElement>();
                    var htmlPipelineContext = GetHtmlPipelineContext(ctx);
                    list.Add(GetCssAppliers().Apply(new Chunk((iTextSharp.text.Image)GetCssAppliers().Apply(image, tag, htmlPipelineContext), 0, 0, true), tag, htmlPipelineContext));
                    return list;
                }
                else
                {
                    return base.End(ctx, tag, currentContent);
                }
            }
        }

        
    }
}
