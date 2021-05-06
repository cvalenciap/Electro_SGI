using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
using AutoMapper;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;
using System.Transactions;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Implementación de servicios de aplicación de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class IndicadorService : GenericService, IIndicadorService
    {
        #region Propiedades
        /// <summary>
        /// Repositorio de Área Logic
        /// </summary>
        public IIndicadorLogicRepository indicadorLogicRepository { get; set; }
       
        public IIndicadorEntityRepository indicadorEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }
        /// <summary>
        /// Servicio de Indicador Gestion Entity
        /// </summary>
        public IIndicadorAmbitoEntityRepository indicadorAmbitoEntityRepository { get; set; }
       
        #endregion

       
        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Áreas</returns>
        public ProcessResult<List<BandejaIndicadorResponse>> BuscarIndicador(BandejaIndicadorRequest filtro)
        {
            ProcessResult<List<BandejaIndicadorResponse>> resultado = new ProcessResult<List<BandejaIndicadorResponse>>();

            try
            {
                List<IndicadorLogic> listaIndicador = indicadorLogicRepository.BuscarIndicador(
                    filtro.CodigoIndicador,                 
                    filtro.CodigoArea,
                    filtro.DescripcionIndicador,
                    filtro.FechaInicioVigencia,
                    filtro.FechaFinVigencia,      
                    filtro.CodigoTipoIndicador,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),          
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,// = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null),
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaIndicadorResponse>();

                Mapper.Map<List<IndicadorLogic>, List<BandejaIndicadorResponse>>(listaIndicador, resultado.Result);
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorService>(ex);
            }

            return resultado;
        }

        public ProcessResult<IndicadorResponse> RegistrarIndicador(IndicadorRequest data)
        {
            ProcessResult<IndicadorResponse> resultado = new ProcessResult<IndicadorResponse>();
            resultado.Result = new IndicadorResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    IndicadorEntity indicadorSincronizar = indicadorEntityRepository.GetById(data.CodigoIndicador);
                    IndicadorEntity indicadorGeneral = Mapper.Map<IndicadorRequest, IndicadorEntity>(data);

                    if (indicadorSincronizar != null)
                    {
                        if (data.CodigoFormula != null)
                            indicadorSincronizar.CodigoFormula = data.CodigoFormula;

                        if (indicadorSincronizar.CodigoFormula != null)
                            indicadorGeneral.CodigoFormula = indicadorSincronizar.CodigoFormula;

                        Mapper.Map<IndicadorEntity, IndicadorEntity>(indicadorSincronizar, indicadorGeneral);                        
                        indicadorEntityRepository.Editar(indicadorSincronizar);
                        resultado.Result.CodigoIndicador = data.CodigoIndicador;
                    }
                    else
                    {                           
                        indicadorEntityRepository.Insertar(indicadorGeneral);                                                
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<IndicadorService>(MensajesSistemaResource.EtiquetaError);
                        }                                                                        
                    }
                    resultado.Result.CodigoIndicador = indicadorGeneral.CodigoIndicador;

                    if (data.ListaIndicadorAmbito != null && data.ListaIndicadorAmbito.Count > 0)
                    {
                        this.EliminarIndicadorAmbito(indicadorGeneral);
                        this.GuardarIndicadorAmbito(data.ListaIndicadorAmbito, indicadorGeneral);
                    }

                    indicadorEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorService>(ex.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite eliminar Indicador Ambito 
        /// </summary>
        public void EliminarIndicadorAmbito(IndicadorEntity data)
        {
            List<IndicadorAmbitoEntity> lstIndicadorAmbito = indicadorAmbitoEntityRepository.GetFiltered(x => x.CodigoIndicador == data.CodigoIndicador && x.EstadoRegistro == DatosConstantes.EstadoRegistro.Activo).ToList();
            for (int i = 0; i < lstIndicadorAmbito.Count; i++)
            {
                Guid codigoIndicadorAmbito = lstIndicadorAmbito[i].CodigoIndicadorAmbito.Value;
                indicadorAmbitoEntityRepository.Eliminar(codigoIndicadorAmbito);
                indicadorAmbitoEntityRepository.GuardarCambios();
            }
        }

        /// <summary>
        /// Permite registar Indicador Gestion 
        /// </summary>
        public void GuardarIndicadorAmbito(List<IndicadorAmbitoRequest> lstIndicadorAmbito, IndicadorEntity data)
        {
            for (int i = 0; i < lstIndicadorAmbito.Count; i++)
            {
                lstIndicadorAmbito[i].CodigoIndicador = data.CodigoIndicador.Value;
                IndicadorAmbitoEntity indicadorAmbitoGeneral = Mapper.Map<IndicadorAmbitoRequest, IndicadorAmbitoEntity>(lstIndicadorAmbito[i]);
                indicadorAmbitoEntityRepository.Insertar(indicadorAmbitoGeneral);
                indicadorAmbitoEntityRepository.GuardarCambios();
            }
        }

        public ProcessResult<object> EliminarIndicador(IndicadorRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                IndicadorEntity oIndicadorEntity = indicadorEntityRepository.GetById(filtro.CodigoIndicador);               

                if (oIndicadorEntity != null)
                {
                    indicadorEntityRepository.Eliminar(oIndicadorEntity.CodigoIndicador);
                    resultado.IsSuccess = true;
                    indicadorEntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<IndicadorService>(ex.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<IndicadorResponse> ObtenerIndicador(IndicadorRequest data)
        {
            ProcessResult<IndicadorResponse> resultado = new ProcessResult<IndicadorResponse>();
            resultado.Result = new IndicadorResponse();
            try
            {
                if (data.CodigoIndicador.HasValue)
                {
                    IndicadorEntity IndicadorEntity = indicadorEntityRepository.GetById(data.CodigoIndicador);
                    if (IndicadorEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(IndicadorEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<IndicadorEntity, IndicadorResponse>(IndicadorEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;

                        resultado.Result.FechaInicioVigenciaString = resultado.Result.FechaInicioVigencia.Value.ToShortDateString();
                        resultado.Result.FechaFinVigenciaString = resultado.Result.FechaFinVigencia.Value.ToShortDateString();
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarIndicador(IndicadorRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                indicadorEntityRepository.Reactivar(data.CodigoIndicador);
                resultado.Result = indicadorEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Indicador Gestion
        /// </summary>        
        public ProcessResult<List<IndicadorAmbitoResponse>> ObtenerIndicadorAmbito(IndicadorRequest data)
        {
            ProcessResult<List<IndicadorAmbitoResponse>> resultado = new ProcessResult<List<IndicadorAmbitoResponse>>();
            resultado.Result = new List<IndicadorAmbitoResponse>();
            try
            {
                if (data.CodigoIndicador.HasValue)
                {
                    List<IndicadorAmbitoEntity> lstIndicadorAmbito = indicadorAmbitoEntityRepository.GetFiltered(x => x.CodigoIndicador == data.CodigoIndicador && x.EstadoRegistro == DatosConstantes.EstadoRegistro.Activo).ToList();
                    Mapper.Map<List<IndicadorAmbitoEntity>, List<IndicadorAmbitoResponse>>(lstIndicadorAmbito, resultado.Result);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorService>(ex.Message);
            }
            return resultado;
        }
    }
}
