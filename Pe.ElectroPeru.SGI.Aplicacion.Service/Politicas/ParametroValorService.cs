using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Politicas;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using System.Transactions;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Politicas
{
    /// <summary>
    /// Implementación base generica de servicios de aplicación
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 20150327 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class ParametroValorService : GenericService, IParametroValorService
    {
        /// <summary>
        /// Repositorio de parametro valor logic
        /// </summary>
        public IParametroValorLogicRepository parametroValorLogicRepository { get; set; }

        /// <summary>
        /// Service de Parametro Sección
        /// </summary>
        public IParametroSeccionService parametroSeccionService { get; set; }

        /// <summary>
        /// Service de Parametro
        /// </summary>
        public IParametroService parametroService { get; set; }

        ///// <summary>
        ///// Realiza la busqueda de Parametro Valor
        ///// </summary>
        ///// <param name="filtro">Filtro de Parametro Valor</param>
        ///// <returns>Listado de parametro valor</returns>
        //public ProcessResult<List<ParametroValorResponse>> BuscarParametroValor(ParametroValorRequest filtro)
        //{
        //    ProcessResult<List<ParametroValorResponse>> resultado = new ProcessResult<List<ParametroValorResponse>>();

        //    try
        //    {
        //        List<ParametroValorLogic> listado = parametroValorLogicRepository.BuscarParametroValor(
        //            filtro.CodigoParametro,
        //            filtro.IndicadorEmpresa,
        //            (filtro.CodigoEmpresa != null ? new Guid(filtro.CodigoEmpresa) : (Guid?)null),
        //            (filtro.CodigoSistema != null ? new Guid(filtro.CodigoSistema) : (Guid?)null),
        //            filtro.CodigoIdentificador,
        //            filtro.TipoParametro,
        //            filtro.CodigoSeccion,
        //            filtro.CodigoValor,
        //            filtro.Valor,
        //            filtro.EstadoRegistro);

        //        var listaParametroValor = new List<ParametroValorResponse>();
        //        ParametroValorResponse parametroValor = new ParametroValorResponse();
        //        parametroValor.RegistroCadena = new Dictionary<string, string>();
        //        parametroValor.RegistroObjeto = new Dictionary<string, object>();

        //        for (var iterator = 0; iterator < listado.Count; iterator++)
        //        {
        //            var itemValue = listado[iterator];

        //            var listSecciones = parametroSeccionService.BuscarParametroSeccion(new ParametroSeccionRequest()
        //            {
        //                CodigoParametro = itemValue.CodigoParametro
        //            }).Result;

        //            var seccionActual = listSecciones.Where(itemSeccion => itemSeccion.CodigoSeccion == itemValue.CodigoSeccion).FirstOrDefault();
        //            if (seccionActual != null)
        //            {
        //                string valorTexto = ParametroValorAdapter.ObtenerParametroValorTexto(itemValue.CodigoTipoDato, itemValue.Valor);
        //                object valorObject = ParametroValorAdapter.ObtenerParametroValorObjeto(itemValue.CodigoTipoDato, itemValue.Valor);

        //                //Asginación de la Sección con su respectivo Valor Original
        //                parametroValor.RegistroCadena.Add(itemValue.CodigoSeccion.ToString(), valorTexto);
        //                parametroValor.RegistroObjeto.Add(itemValue.CodigoSeccion.ToString(), valorObject);

        //                //Asginación de la Sección con su respectivo Valor Relacionado
        //                if (seccionActual.CodigoParametroRelacionado != null && seccionActual.CodigoSeccionRelacionado != null && seccionActual.CodigoSeccionRelacionadoMostrar != null)
        //                {
        //                    var parametroValorRelacionado = parametroValorLogicRepository.BuscarParametroValor(seccionActual.CodigoParametroRelacionado, null, null, null, null, null, null, null, null, DatosConstantes.EstadoRegistro.Activo);

        //                    var codigoValorRelacionado = parametroValorRelacionado.Where(itemWhere => itemWhere.CodigoSeccion == seccionActual.CodigoSeccionRelacionado && itemWhere.Valor == valorTexto).Select(itemSelect => itemSelect.CodigoValor).FirstOrDefault();

        //                    var valorRelacionado = parametroValorRelacionado.Where(itemWhere => itemWhere.CodigoValor == codigoValorRelacionado && itemWhere.CodigoSeccion == seccionActual.CodigoSeccionRelacionadoMostrar).FirstOrDefault() ?? new ParametroValorLogic();
        //                    object valorObjectRelacionado = ParametroValorAdapter.ObtenerParametroValorObjeto(valorRelacionado.CodigoTipoDato, valorRelacionado.Valor);
        //                    string valorTextoRelacionado = ParametroValorAdapter.ObtenerParametroValorTexto(valorRelacionado.CodigoTipoDato, valorRelacionado.Valor);

        //                    parametroValor.RegistroCadena.Add("-" + itemValue.CodigoSeccion.ToString(), valorTextoRelacionado);
        //                    parametroValor.RegistroObjeto.Add("-" + itemValue.CodigoSeccion.ToString(), valorObjectRelacionado);
        //                }


        //                //Asginación del Estado de Registro
        //                if (parametroValor.EstadoRegistro == null || parametroValor.EstadoRegistro == DatosConstantes.EstadoRegistro.Inactivo)
        //                {
        //                    parametroValor.EstadoRegistro = itemValue.EstadoRegistro;
        //                }

        //                //Añade el registro en la Lista de Parametros según su quiebre
        //                if (iterator == listado.Count - 1 || itemValue.CodigoValor != listado[iterator + 1].CodigoValor)
        //                {
        //                    parametroValor.CodigoValor = itemValue.CodigoValor;
        //                    parametroValor.CodigoIdentificador = itemValue.CodigoIdentificador;
        //                    parametroValor.CodigoParametro = itemValue.CodigoParametro;

        //                    var seccionesFaltante = listSecciones.Where(itemWhere => !parametroValor.RegistroCadena.Any(itemAny => itemAny.Key == itemWhere.CodigoSeccion.ToString())).ToList();

        //                    foreach (var seccion in seccionesFaltante)
        //                    {
        //                        //Setear la Sección con su respectivo Valor
        //                        parametroValor.RegistroCadena.Add(seccion.CodigoSeccion.ToString(), null);

        //                        parametroValor.RegistroObjeto.Add(seccion.CodigoSeccion.ToString(), null);
        //                    }

        //                    listaParametroValor.Add(parametroValor);
        //                    //Limpiar variable
        //                    parametroValor = new ParametroValorResponse();
        //                    parametroValor.RegistroCadena = new Dictionary<string, string>();
        //                    parametroValor.RegistroObjeto = new Dictionary<string, object>();
        //                }
        //            }
        //        }

        //        resultado.Result = listaParametroValor;
        //    }
        //    catch (Exception e)
        //    {
        //        resultado.Result = new List<ParametroValorResponse>();
        //        resultado.IsSuccess = false;
        //        resultado.Exception = new ApplicationLayerException<ParametroValorService>(e);
        //    }

        //    return resultado;
        //}

        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de parametro valor</returns>
        public ProcessResult<List<ParametroValorResponse>> BuscarParametroValor(ParametroValorRequest filtro)
        {
            ProcessResult<List<ParametroValorResponse>> resultado = new ProcessResult<List<ParametroValorResponse>>();

            try
            {
                ParametroValorSeccionLogic oParametroValorSeccionLogic = parametroValorLogicRepository.BuscarParametroValorSeccion(
                    filtro.CodigoParametro,
                    filtro.IndicadorEmpresa,
                    (filtro.CodigoEmpresa != null ? new Guid(filtro.CodigoEmpresa) : (Guid?)null),
                    (filtro.CodigoSistema != null ? new Guid(filtro.CodigoSistema) : (Guid?)null),
                    filtro.CodigoIdentificador,
                    filtro.TipoParametro,
                    filtro.CodigoSeccion,
                    filtro.CodigoValor,
                    filtro.Valor,
                    filtro.EstadoRegistro);

                List<ParametroValorLogic> listado = new List<ParametroValorLogic>();
                List<ParametroSeccionLogic> listaSecciones = new List<ParametroSeccionLogic>();
                List<ParametroValorLogic> listaValorRelacionado = new List<ParametroValorLogic>();
                if (oParametroValorSeccionLogic != null)
                {
                    listado = oParametroValorSeccionLogic.ListadoValor;
                    listaSecciones = oParametroValorSeccionLogic.ListadoSeccionValor;
                    listaValorRelacionado = oParametroValorSeccionLogic.ListadoValorRelacionado;
                }


                var listaParametroValor = new List<ParametroValorResponse>();
                ParametroValorResponse parametroValor = new ParametroValorResponse();
                parametroValor.RegistroCadena = new Dictionary<string, string>();
                parametroValor.RegistroObjeto = new Dictionary<string, object>();

                for (var iterator = 0; iterator < listado.Count; iterator++)
                {
                    var itemValue = listado[iterator];

                    var listSecciones = listaSecciones.Where(x => x.CodigoParametro == itemValue.CodigoParametro);

                    var seccionActual = listSecciones.Where(itemSeccion => itemSeccion.CodigoSeccion == itemValue.CodigoSeccion).FirstOrDefault();
                    if (seccionActual != null)
                    {
                        string valorTexto = ParametroValorAdapter.ObtenerParametroValorTexto(itemValue.CodigoTipoDato, itemValue.Valor);
                        object valorObject = ParametroValorAdapter.ObtenerParametroValorObjeto(itemValue.CodigoTipoDato, itemValue.Valor);

                        //Asginación de la Sección con su respectivo Valor Original
                        parametroValor.RegistroCadena.Add(itemValue.CodigoSeccion.ToString(), valorTexto);
                        parametroValor.RegistroObjeto.Add(itemValue.CodigoSeccion.ToString(), valorObject);

                        //Asginación de la Sección con su respectivo Valor Relacionado
                        if (seccionActual.CodigoParametroRelacionado != null && seccionActual.CodigoSeccionRelacionado != null && seccionActual.CodigoSeccionRelacionadoMostrar != null)
                        {
                            var parametroValorRelacionado = listaValorRelacionado.Where(x => x.CodigoParametro == seccionActual.CodigoParametroRelacionado);

                            var codigoValorRelacionado = parametroValorRelacionado.Where(itemWhere => itemWhere.CodigoSeccion == seccionActual.CodigoSeccionRelacionado && itemWhere.Valor == valorTexto).Select(itemSelect => itemSelect.CodigoValor).FirstOrDefault();

                            var valorRelacionado = parametroValorRelacionado.Where(itemWhere => itemWhere.CodigoValor == codigoValorRelacionado && itemWhere.CodigoSeccion == seccionActual.CodigoSeccionRelacionadoMostrar).FirstOrDefault() ?? new ParametroValorLogic();
                            object valorObjectRelacionado = ParametroValorAdapter.ObtenerParametroValorObjeto(valorRelacionado.CodigoTipoDato, valorRelacionado.Valor);
                            string valorTextoRelacionado = ParametroValorAdapter.ObtenerParametroValorTexto(valorRelacionado.CodigoTipoDato, valorRelacionado.Valor);

                            parametroValor.RegistroCadena.Add("-" + itemValue.CodigoSeccion.ToString(), valorTextoRelacionado);
                            parametroValor.RegistroObjeto.Add("-" + itemValue.CodigoSeccion.ToString(), valorObjectRelacionado);
                        }


                        //Asginación del Estado de Registro
                        if (parametroValor.EstadoRegistro == null || parametroValor.EstadoRegistro == DatosConstantes.EstadoRegistro.Inactivo)
                        {
                            parametroValor.EstadoRegistro = itemValue.EstadoRegistro;
                        }

                        //Añade el registro en la Lista de Parametros según su quiebre
                        if (iterator == listado.Count - 1 || itemValue.CodigoValor != listado[iterator + 1].CodigoValor)
                        {
                            parametroValor.CodigoValor = itemValue.CodigoValor;
                            parametroValor.CodigoIdentificador = itemValue.CodigoIdentificador;
                            parametroValor.CodigoParametro = itemValue.CodigoParametro;

                            var seccionesFaltante = listSecciones.Where(itemWhere => !parametroValor.RegistroCadena.Any(itemAny => itemAny.Key == itemWhere.CodigoSeccion.ToString())).ToList();

                            foreach (var seccion in seccionesFaltante)
                            {
                                //Setear la Sección con su respectivo Valor
                                parametroValor.RegistroCadena.Add(seccion.CodigoSeccion.ToString(), null);

                                parametroValor.RegistroObjeto.Add(seccion.CodigoSeccion.ToString(), null);
                            }

                            listaParametroValor.Add(parametroValor);
                            //Limpiar variable
                            parametroValor = new ParametroValorResponse();
                            parametroValor.RegistroCadena = new Dictionary<string, string>();
                            parametroValor.RegistroObjeto = new Dictionary<string, object>();
                        }
                    }
                }

                resultado.Result = listaParametroValor;
            }
            catch (Exception e)
            {
                resultado.Result = new List<ParametroValorResponse>();
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ParametroValorService>(e);
            }

            return resultado;
        }

        /// <summary>
        /// Realiza la busqueda de Multiple Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de Multiple parametro valor</returns>
        public ProcessResult<Dictionary<string, List<Tuple<string, string, string>>>> BuscarMultipleParametroValor(ParametroValorRequest filtro)
        {
            ProcessResult<Dictionary<string, List<Tuple<string, string, string>>>> resultado = new ProcessResult<Dictionary<string, List<Tuple<string, string, string>>>>();
            resultado.Result = new Dictionary<string, List<Tuple<string, string, string>>>();
            try
            {
                ParametroValorSeccionLogic oParametroValorSeccionLogic = parametroValorLogicRepository.BuscarParametroValorSeccion(
                    filtro.CodigoParametro,
                    filtro.IndicadorEmpresa,
                    (filtro.CodigoEmpresa != null ? new Guid(filtro.CodigoEmpresa) : (Guid?)null),
                    (filtro.CodigoSistema != null ? new Guid(filtro.CodigoSistema) : (Guid?)null),
                    filtro.CodigoIdentificador,
                    filtro.TipoParametro,
                    filtro.CodigoSeccion,
                    filtro.CodigoValor,
                    filtro.Valor,
                    filtro.EstadoRegistro);

                var array = filtro.CodigoIdentificador.Split('|');
                if (array.Count() > 0)
                {
                    List<Tuple<string, string, string>> tuplaEspaniol = new List<Tuple<string, string, string>>();
                    List<Tuple<string, string, string>> tuplaIngles = new List<Tuple<string, string, string>>();

                    foreach (var item2 in array)
                    {
                        Dictionary<string, List<Tuple<string, string, string>>> diccionario = new Dictionary<string, List<Tuple<string, string, string>>>();
                        var listaParametroValor = new List<ParametroValorResponse>();
                        List<ParametroValorLogic> listado = new List<ParametroValorLogic>();
                        List<ParametroSeccionLogic> listaSecciones = new List<ParametroSeccionLogic>();
                        List<ParametroValorLogic> listaValorRelacionado = new List<ParametroValorLogic>();

                        if (oParametroValorSeccionLogic != null)
                        {
                            listado = oParametroValorSeccionLogic.ListadoValor.Where(x => x.CodigoIdentificador == item2).ToList();
                            listaSecciones = oParametroValorSeccionLogic.ListadoSeccionValor.Where(x => x.CodigoParametro == Convert.ToInt32(item2)).ToList();
                            listaValorRelacionado = oParametroValorSeccionLogic.ListadoValorRelacionado.Where(x => x.CodigoParametro == Convert.ToInt32(item2)).ToList();
                        }

                        var agrupado = listado
                            .GroupBy(c => c.CodigoValor)
                            .Select(g => new
                            {
                                CodigoValor = g.Key,
                                Valor = g.Where(c => c.CodigoSeccion == 1),
                                Descripcion = g.Where(c => c.CodigoSeccion == 2),
                                Idioma = g.Where(c => c.CodigoSeccion == 3)
                            });

                        foreach (var item in agrupado)
                        {
                            string valor = string.Empty;
                            string descripcion = string.Empty;
                            string idioma = string.Empty;

                            foreach (var itemValor in item.Valor)
                            {
                                valor = itemValor.Valor;
                            }
                            foreach (var itemDescripcion in item.Descripcion)
                            {
                                descripcion = itemDescripcion.Valor;
                            }
                            foreach (var itemIdioma in item.Idioma)
                            {
                                idioma = itemIdioma.Valor;
                            }

                            if (idioma == DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol)
                            {
                                tuplaEspaniol.Add(new Tuple<string, string, string>(valor, descripcion, idioma));
                            }
                            else
                            {
                                tuplaIngles.Add(new Tuple<string, string, string>(valor, descripcion, idioma));
                            }
                        }

                        if (filtro.CodigoIdioma != DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol)
                        {
                            resultado.Result.Add(item2, tuplaIngles);
                        }
                        else
                        {
                            resultado.Result.Add(item2, tuplaEspaniol);
                        }

                        tuplaIngles = new List<Tuple<string, string, string>>();
                        tuplaEspaniol = new List<Tuple<string, string, string>>();
                    }
                }

            }
            catch (Exception e)
            {
                resultado.Result = new Dictionary<string, List<Tuple<string, string, string>>>();
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<GenericService>(e);
            }

            return resultado;
        }

        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de parametro valor</returns>
        public ProcessResult<List<ParametroValorResponse>> BuscarParametroValorDirecto(ParametroValorRequest filtro)
        {
            ProcessResult<List<ParametroValorResponse>> resultado = new ProcessResult<List<ParametroValorResponse>>();
            try
            {
                List<ParametroValorLogic> listado = parametroValorLogicRepository.BuscarParametroValor(
                    filtro.CodigoParametro,
                    filtro.IndicadorEmpresa,
                    (filtro.CodigoEmpresa != null ? new Guid(filtro.CodigoEmpresa) : (Guid?)null),
                    (filtro.CodigoSistema != null ? new Guid(filtro.CodigoSistema) : (Guid?)null),
                    filtro.CodigoIdentificador,
                    filtro.TipoParametro,
                    filtro.CodigoSeccion,
                    filtro.CodigoValor,
                    filtro.Valor,
                    filtro.EstadoRegistro);

                var listaParametroValor = new List<ParametroValorResponse>();
                ParametroValorResponse parametroValor = new ParametroValorResponse();
                parametroValor.RegistroCadena = new Dictionary<string, string>();
                parametroValor.RegistroObjeto = new Dictionary<string, object>();

                for (var iterator = 0; iterator < listado.Count; iterator++)
                {
                    var itemValue = listado[iterator];

                    var listSecciones = parametroSeccionService.BuscarParametroSeccion(new ParametroSeccionRequest()
                    {
                        CodigoParametro = itemValue.CodigoParametro
                    }).Result;

                    var seccionActual = listSecciones.Where(itemSeccion => itemSeccion.CodigoSeccion == itemValue.CodigoSeccion).FirstOrDefault();
                    if (seccionActual != null)
                    {
                        string valorTexto = ParametroValorAdapter.ObtenerParametroValorTexto(itemValue.CodigoTipoDato, itemValue.Valor);
                        object valorObject = ParametroValorAdapter.ObtenerParametroValorObjeto(itemValue.CodigoTipoDato, itemValue.Valor);

                        //Asginación de la Sección con su respectivo Valor Original
                        parametroValor.RegistroCadena.Add(itemValue.CodigoSeccion.ToString(), valorTexto);
                        parametroValor.RegistroObjeto.Add(itemValue.CodigoSeccion.ToString(), valorObject);

                        //Asginación de la Sección con su respectivo Valor Relacionado
                        if (seccionActual.CodigoParametroRelacionado != null && seccionActual.CodigoSeccionRelacionado != null && seccionActual.CodigoSeccionRelacionadoMostrar != null)
                        {
                            var parametroValorRelacionado = parametroValorLogicRepository.BuscarParametroValor(seccionActual.CodigoParametroRelacionado, null, null, null, null, null, null, null, null, DatosConstantes.EstadoRegistro.Activo);

                            var codigoValorRelacionado = parametroValorRelacionado.Where(itemWhere => itemWhere.CodigoSeccion == seccionActual.CodigoSeccionRelacionado && itemWhere.Valor == valorTexto).Select(itemSelect => itemSelect.CodigoValor).FirstOrDefault();

                            var valorRelacionado = parametroValorRelacionado.Where(itemWhere => itemWhere.CodigoValor == codigoValorRelacionado && itemWhere.CodigoSeccion == seccionActual.CodigoSeccionRelacionadoMostrar).FirstOrDefault() ?? new ParametroValorLogic();
                            object valorObjectRelacionado = ParametroValorAdapter.ObtenerParametroValorObjeto(valorRelacionado.CodigoTipoDato, valorRelacionado.Valor);
                            string valorTextoRelacionado = ParametroValorAdapter.ObtenerParametroValorTexto(valorRelacionado.CodigoTipoDato, valorRelacionado.Valor);

                            parametroValor.RegistroCadena.Add("-" + itemValue.CodigoSeccion.ToString(), valorTextoRelacionado);
                            parametroValor.RegistroObjeto.Add("-" + itemValue.CodigoSeccion.ToString(), valorObjectRelacionado);
                        }


                        //Asginación del Estado de Registro
                        if (parametroValor.EstadoRegistro == null || parametroValor.EstadoRegistro == DatosConstantes.EstadoRegistro.Inactivo)
                        {
                            parametroValor.EstadoRegistro = itemValue.EstadoRegistro;
                        }

                        //Añade el registro en la Lista de Parametros según su quiebre
                        if (iterator == listado.Count - 1 || itemValue.CodigoValor != listado[iterator + 1].CodigoValor)
                        {
                            parametroValor.CodigoValor = itemValue.CodigoValor;
                            parametroValor.CodigoIdentificador = itemValue.CodigoIdentificador;
                            parametroValor.CodigoParametro = itemValue.CodigoParametro;

                            var seccionesFaltante = listSecciones.Where(itemWhere => !parametroValor.RegistroCadena.Any(itemAny => itemAny.Key == itemWhere.CodigoSeccion.ToString())).ToList();

                            foreach (var seccion in seccionesFaltante)
                            {
                                //Setear la Sección con su respectivo Valor
                                parametroValor.RegistroCadena.Add(seccion.CodigoSeccion.ToString(), null);

                                parametroValor.RegistroObjeto.Add(seccion.CodigoSeccion.ToString(), null);
                            }

                            listaParametroValor.Add(parametroValor);
                            //Limpiar variable
                            parametroValor = new ParametroValorResponse();
                            parametroValor.RegistroCadena = new Dictionary<string, string>();
                            parametroValor.RegistroObjeto = new Dictionary<string, object>();
                        }
                    }
                }

                resultado.Result = listaParametroValor;
            }
            catch (Exception e)
            {
                resultado.Result = new List<ParametroValorResponse>();
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ParametroValorService>(e);
            }

            return resultado;
        }
        /// <summary>
        /// Realiza la busqueda de Parametro Valor
        /// </summary>
        /// <param name="filtro">Filtro de Parametro Valor</param>
        /// <returns>Listado de parametro valor dinamico</returns>
        public ProcessResult<List<dynamic>> BuscarParametroValorDinamico(ParametroValorRequest filtro)
        {
            var parametroValor = this.BuscarParametroValor(filtro);
            var listaDinamica = new List<dynamic>();

            parametroValor.Result.ForEach(p =>
            {
                var expandoObject = new ExpandoObject();
                var expandoDictionary = (IDictionary<string, object>)expandoObject;

                if (p.RegistroObjeto != null)
                {
                    foreach (var campo in p.RegistroObjeto)
                    {
                        expandoDictionary.Add("Atributo" + campo.Key, campo.Value);
                    }
                    listaDinamica.Add((dynamic)expandoObject);
                }
            });

            var resultado = new ProcessResult<List<dynamic>>();
            resultado.Result = listaDinamica;
            return resultado;
        }

        /// <summary>
        /// Realiza el registro de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Parametro Valor a Registrar</param>
        /// <returns>Indicador de Error</returns>
        public ProcessResult<string> RegistrarParametroValor(ParametroValorRequest filtro)
        {
            string result = "0";
            var resultadoProceso = new ProcessResult<string>();
            try
            {
                var listSecciones = parametroSeccionService.BuscarParametroSeccion(new ParametroSeccionRequest()
                {
                    CodigoParametro = filtro.CodigoParametro
                }).Result;

                int codigoValor = 0;
                bool isActualizacion = false;

                if (filtro.CodigoValor == null)
                {
                    var ultimoParametroValor = BuscarParametroValor(new ParametroValorRequest()
                    {
                        CodigoParametro = filtro.CodigoParametro,
                        EstadoRegistro = null
                    }).Result.OrderBy(itemOrderBy => itemOrderBy.CodigoValor).LastOrDefault();

                    if (ultimoParametroValor != null)
                    {
                        codigoValor = ultimoParametroValor.CodigoValor + 1;
                    }
                    else
                    {
                        codigoValor = 1;
                    }
                }
                else
                {
                    codigoValor = (int)filtro.CodigoValor;
                    isActualizacion = true;
                }

                using (TransactionScope scope = new TransactionScope())
                {
                    try
                    {
                        foreach (var item in filtro.RegistroCadena)
                        {
                            bool isSeccionExistente = false;

                            var seccionActual = listSecciones.Where(itemWhere => itemWhere.CodigoSeccion.ToString() == item.Key).FirstOrDefault();

                            ParametroValorResponse parametroValorActual = null;

                            if (isActualizacion)
                            {
                                parametroValorActual = BuscarParametroValor(new ParametroValorRequest()
                                {
                                    CodigoParametro = filtro.CodigoParametro,
                                    CodigoSeccion = seccionActual.CodigoSeccion,
                                    CodigoValor = codigoValor
                                }).Result.FirstOrDefault();

                                isSeccionExistente = (parametroValorActual != null) ? true : false;
                            }

                            string value = "";

                            switch (seccionActual.CodigoTipoDato)
                            {
                                case "ENT":
                                    value = item.Value;
                                    break;
                                case "DEC":
                                    value = item.Value.Replace(',', '.');
                                    break;
                                case "FEC":
                                    value = item.Value;
                                    break;
                                default:
                                    value = item.Value;
                                    break;
                            }

                            ParametroValorLogic logic = new ParametroValorLogic();
                            logic.CodigoParametro = (int)filtro.CodigoParametro;
                            logic.CodigoSeccion = seccionActual.CodigoSeccion;
                            logic.CodigoValor = codigoValor;
                            logic.Valor = value;

                            if (!isActualizacion || !isSeccionExistente)
                            {
                                logic.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;

                                if (parametroValorLogicRepository.RegistrarParametroValor(logic) <= 0)
                                {
                                    throw new Exception();
                                }
                            }
                            else
                            {
                                logic.EstadoRegistro = null;

                                if (parametroValorLogicRepository.ModificarParametroValor(logic) <= 0)
                                {
                                    throw new Exception();
                                }
                            }
                        }

                        scope.Complete();

                        resultadoProceso.Result = "1";
                        resultadoProceso.IsSuccess = true;
                    }
                    catch (Exception e)
                    {
                        scope.Dispose();
                        throw e;
                    }
                }
            }
            catch (Exception)
            {
                result = "-1";
                resultadoProceso.Result = result;
                resultadoProceso.IsSuccess = false;
            }
            return resultadoProceso;
        }

        /// <summary>
        /// Realiza el eliminar de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Parametro Valor a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        public ProcessResult<string> EliminarParametroValor(ParametroValorRequest filtro)
        {
            string result = "0";
            var resultadoProceso = new ProcessResult<string>();
            try
            {
                var parametroActual = parametroService.BuscarParametro(new ParametroRequest()
                {
                    CodigoParametro = filtro.CodigoParametro
                }).Result.FirstOrDefault();

                if (!parametroActual.IndicadorPermiteEliminar)
                {
                    result = "2";
                    resultadoProceso.Result = result;
                    resultadoProceso.IsSuccess = false;
                    return resultadoProceso;
                }
                var parametroValorActual = BuscarParametroValor(new ParametroValorRequest()
                {
                    CodigoParametro = filtro.CodigoParametro,
                    CodigoValor = filtro.CodigoValor
                }).Result.FirstOrDefault();

                foreach (var item in parametroValorActual.RegistroCadena)
                {
                    ParametroValorLogic logic = new ParametroValorLogic();
                    logic.CodigoParametro = parametroValorActual.CodigoParametro;
                    logic.CodigoSeccion = Convert.ToInt32(item.Key);
                    logic.CodigoValor = parametroValorActual.CodigoValor;
                    logic.Valor = null;
                    logic.EstadoRegistro = DatosConstantes.EstadoRegistro.Inactivo;

                    if (parametroValorLogicRepository.ModificarParametroValor(logic) <= 0)
                    {
                        throw new Exception();
                    }
                }

                resultadoProceso.Result = "1";
                resultadoProceso.IsSuccess = true;
            }
            catch (Exception)
            {
                result = "-1";
                resultadoProceso.Result = result;
                resultadoProceso.IsSuccess = false;
            }
            return resultadoProceso;
        }

        /// <summary>
        /// Realiza el eliminar de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Lista de Parametro Valor a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        public ProcessResult<string> EliminarMasivoParametroValor(List<ParametroValorRequest> filtro)
        {
            string result = "0";
            var resultadoProceso = new ProcessResult<string>();
            try
            {
                using (TransactionScope scope = new TransactionScope())
                {
                    try
                    {
                        foreach (var item in filtro)
                        {
                            var resultItem = EliminarParametroValor(item);

                            if (!resultItem.IsSuccess)
                            {
                                throw new Exception();
                            }
                        }
                        scope.Complete();
                    }
                    catch (Exception e)
                    {
                        scope.Dispose();
                        throw e;
                    }
                }

                resultadoProceso.Result = "1";
                resultadoProceso.IsSuccess = true;
            }
            catch (Exception)
            {
                result = "-1";
                resultadoProceso.Result = result;
                resultadoProceso.IsSuccess = false;
            }
            return resultadoProceso;
        }

        /// <summary>
        /// Realiza el eliminar de un de Parametro Valor
        /// </summary>
        /// <param name="filtro">Lista de Parametro Valor a Eliminar</param>
        /// <returns>Indicador de Error</returns>
        public ProcessResult<List<ParametroValorResponse>> BuscarValorPorSeccionParametro(ParametroValorRequest filtro)
        {
            ProcessResult<List<ParametroValorResponse>> resultadoProceso = new ProcessResult<List<ParametroValorResponse>>();

            try
            {
                List<ParametroValorLogic> listaValorPorSeccionParametro = parametroValorLogicRepository.BuscarValorPorSeccionParametro(
                    new Guid(filtro.CodigoEmpresa),
                    filtro.IndicadorEmpresa.Value,
                    new Guid(filtro.CodigoSistema),
                    filtro.CodigoIdentificador,
                    filtro.CodigoIdioma);

                resultadoProceso.Result = new List<ParametroValorResponse>();

                foreach (ParametroValorLogic parametroValorLogic in listaValorPorSeccionParametro)
                {
                    ParametroValorResponse parametroValorResponse = ParametroValorAdapter.ObtenerValorPorSeccionParametro(parametroValorLogic);
                    resultadoProceso.Result.Add(parametroValorResponse);
                }
            }
            catch (Exception)
            {
                resultadoProceso.IsSuccess = false;
            }

            return resultadoProceso;
        }

        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones Adicionales de Parámetro
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Valores de las Secciones Adicionales de Parámetro</returns>
        public ProcessResult<List<ParametroValorResponse>> BuscarValorSeccionAdicionalParametro(ParametroValorRequest filtro)
        {
            ProcessResult<List<ParametroValorResponse>> resultadoProceso = new ProcessResult<List<ParametroValorResponse>>();

            try
            {
                List<ParametroValorLogic> listaValorPorSeccionParametro = parametroValorLogicRepository.BuscarValorPorSeccionParametro(
                    new Guid(filtro.CodigoEmpresa),
                    filtro.IndicadorEmpresa.Value,
                    new Guid(filtro.CodigoSistema),
                    filtro.CodigoIdentificador,
                    filtro.CodigoIdioma);

                resultadoProceso.Result = new List<ParametroValorResponse>();

                foreach (ParametroValorLogic parametroValorLogic in listaValorPorSeccionParametro)
                {
                    ParametroValorResponse parametroValorResponse = ParametroValorAdapter.ObtenerValorPorSeccionParametro(parametroValorLogic);
                    resultadoProceso.Result.Add(parametroValorResponse);
                }
            }
            catch (Exception)
            {
                resultadoProceso.IsSuccess = false;
            }

            return resultadoProceso;
        }


        /// <summary>
        /// Realiza la búsqueda de Valores de las Secciones Adicionales de Parámetro 5 parametros de retorno
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Valores de las Secciones Adicionales de Parámetro</returns>
        public ProcessResult<List<ParametroValorResponse>> BuscarValorSeccionAdicionalRetornaCincoParametros(ParametroValorRequest filtro)
        {
            ProcessResult<List<ParametroValorResponse>> resultadoProceso = new ProcessResult<List<ParametroValorResponse>>();

            try
            {
                List<ParametroValorLogic> listaValorPorSeccionParametro = parametroValorLogicRepository.BuscarValorSeccionAdicionalParametro(
                    new Guid(filtro.CodigoEmpresa),
                    filtro.IndicadorEmpresa.Value,
                    new Guid(filtro.CodigoSistema),
                    filtro.CodigoIdentificador,
                    filtro.CodigoIdioma);

                resultadoProceso.Result = new List<ParametroValorResponse>();

                foreach (ParametroValorLogic parametroValorLogic in listaValorPorSeccionParametro)
                {
                    ParametroValorResponse parametroValorResponse = ParametroValorAdapter.ObtenerValorPorSeccionParametro(parametroValorLogic);
                    resultadoProceso.Result.Add(parametroValorResponse);
                }
            }
            catch (Exception)
            {
                resultadoProceso.IsSuccess = false;
            }

            return resultadoProceso;
        }
    }
}
