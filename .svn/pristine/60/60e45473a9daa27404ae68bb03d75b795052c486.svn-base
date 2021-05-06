using AutoMapper;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using System;
using System.Linq;
using System.Transactions;
using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Servicio de Mantenimiento
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 28112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ObjetivoEstrategicoFonafeService : GenericService, IObjetivoEstrategicoFonafeService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoFonafeLogicRepository objetivoEstrategicoFonafeLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoFonafeEntityRepository objetivoEstrategicoFonafeEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IObjetivoEstrategicoFonafeDetalleService objetivoEstrategicoFonafeDetalleService { get; set; }

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaObjetivoEstrategicoFonafeResponse>> BuscarObjetivoEstrategicoFonafe(BandejaObjetivoEstrategicoFonafeRequest filtro)
        {
            ProcessResult<List<BandejaObjetivoEstrategicoFonafeResponse>> resultado = new ProcessResult<List<BandejaObjetivoEstrategicoFonafeResponse>>();

            try
            {
                List<ObjetivoEstrategicoFonafeLogic> listado = objetivoEstrategicoFonafeLogicRepository.BuscarObjetivoEstrategicoFonafe(
                    filtro.CodigoObjetivoEstrategicoFonafe,
                    filtro.NombreObjetivoEstrategicoFonafe,
                    filtro.DescripcionObjetivoEstrategicoFonafe,
                    filtro.NombreCompletoResponsable,                  
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaObjetivoEstrategicoFonafeResponse>();

                Mapper.Map<List<ObjetivoEstrategicoFonafeLogic>, List<BandejaObjetivoEstrategicoFonafeResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(e.Message);
            }

            return resultado;
        }


        public ProcessResult<ObjetivoEstrategicoFonafeResponse> RegistrarObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            ProcessResult<ObjetivoEstrategicoFonafeResponse> resultado = new ProcessResult<ObjetivoEstrategicoFonafeResponse>();
            resultado.Result = new ObjetivoEstrategicoFonafeResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoFonafeEntity ObjetivoEstrategicoFonafeSincronizar = objetivoEstrategicoFonafeEntityRepository.GetById(data.CodigoObjetivoEstrategicoFonafe);
                    ObjetivoEstrategicoFonafeEntity ObjetivoEstrategicoFonafeGeneral = Mapper.Map<ObjetivoEstrategicoFonafeRequest, ObjetivoEstrategicoFonafeEntity>(data);

                    if (ObjetivoEstrategicoFonafeSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoFonafeEntity, ObjetivoEstrategicoFonafeEntity>(ObjetivoEstrategicoFonafeGeneral, ObjetivoEstrategicoFonafeSincronizar);
                        ObjetivoEstrategicoFonafeSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        objetivoEstrategicoFonafeEntityRepository.Editar(ObjetivoEstrategicoFonafeSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoFonafe = data.CodigoObjetivoEstrategicoFonafe;
                        resultado.Result.NombreObjetivoEstrategicoFonafe = data.NombreObjetivoEstrategicoFonafe;
                        resultado.Result.DescripcionObjetivoEstrategicoFonafe = data.DescripcionObjetivoEstrategicoFonafe;                        
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        objetivoEstrategicoFonafeEntityRepository.Insertar(ObjetivoEstrategicoFonafeGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoFonafe = ObjetivoEstrategicoFonafeGeneral.CodigoObjetivoEstrategicoFonafe;                        
                    }

                    objetivoEstrategicoFonafeEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                ObjetivoEstrategicoFonafeDetalleRequest oOEED = new ObjetivoEstrategicoFonafeDetalleRequest();
                oOEED.CodigoObjetivoEstrategicoFonafe = data.CodigoObjetivoEstrategicoFonafe;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                var ObjetivoEstrategicoEmpresaAsociados = objetivoEstrategicoFonafeDetalleService.BuscarObjetivoEstrategicoFonafeDetalle(oOEED);

                if (ObjetivoEstrategicoEmpresaAsociados.Result.Count > 0)
                {
                    for (int i = 0; i < ObjetivoEstrategicoEmpresaAsociados.Result.Count; i++)
                    {
                        if (ObjetivoEstrategicoEmpresaAsociados.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(MensajesSistemaResource.EtiquetaMsgValidacionConsistenciaOEF);
                            break;
                        }
                        else
                        {
                            objetivoEstrategicoFonafeEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoFonafe);
                            resultado.Result = objetivoEstrategicoFonafeEntityRepository.GuardarCambios();
                        }
                    }
                }
                else {
                    objetivoEstrategicoFonafeEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoFonafe);
                    resultado.Result = objetivoEstrategicoFonafeEntityRepository.GuardarCambios();
                }                
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                objetivoEstrategicoFonafeEntityRepository.Reactivar(data.CodigoObjetivoEstrategicoFonafe);
                resultado.Result = objetivoEstrategicoFonafeEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<ObjetivoEstrategicoFonafeResponse> ObtenerObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            ProcessResult<ObjetivoEstrategicoFonafeResponse> resultado = new ProcessResult<ObjetivoEstrategicoFonafeResponse>();
            resultado.Result = new ObjetivoEstrategicoFonafeResponse();
            try
            {
                if (data.CodigoObjetivoEstrategicoFonafe.HasValue)
                {
                    BandejaObjetivoEstrategicoFonafeRequest modelo = new BandejaObjetivoEstrategicoFonafeRequest();
                    modelo.CodigoObjetivoEstrategicoFonafe = data.CodigoObjetivoEstrategicoFonafe;
                    modelo.CodigoIdioma = data.CodigoIdioma;
                   
                    ObjetivoEstrategicoFonafeEntity ObjetivoEstrategicoFonafeEntity = objetivoEstrategicoFonafeEntityRepository.GetById(data.CodigoObjetivoEstrategicoFonafe);
      
                    if (ObjetivoEstrategicoFonafeEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(ObjetivoEstrategicoFonafeEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<ObjetivoEstrategicoFonafeEntity, ObjetivoEstrategicoFonafeResponse>(ObjetivoEstrategicoFonafeEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
