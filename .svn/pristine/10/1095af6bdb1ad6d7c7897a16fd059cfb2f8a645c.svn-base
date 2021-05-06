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
using System.Text.RegularExpressions;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Servicio de Mantenimiento
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 28112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class FormulaService : GenericService, IFormulaService
    {
        #region Propiedades
        ///// <summary>
        ///// Servicio de Mantenimiento Logic
        ///// </summary>
        //public IFormulaLogicRepository FormulaLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IFormulaEntityRepository FormulaEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IVariableService variableService { get; set; }

        public IIndicadorService indicadorService { get; set; }

        public IFormulaDetalleService formulaDetalleService { get; set; }
        #endregion

        #region Métodos  
        public ProcessResult<FormulaResponse> RegistrarFormula(FormulaRequest data)
        {
            ProcessResult<FormulaResponse> resultado = new ProcessResult<FormulaResponse>();
            resultado.Result = new FormulaResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    FormulaEntity FormulaSincronizar = FormulaEntityRepository.GetById(data.CodigoFormula);
                    FormulaEntity FormulaGeneral = Mapper.Map<FormulaRequest, FormulaEntity>(data);

                    if (FormulaSincronizar != null)
                    {
                        Mapper.Map<FormulaEntity, FormulaEntity>(FormulaGeneral, FormulaSincronizar);
                        FormulaSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        FormulaEntityRepository.Editar(FormulaSincronizar);
                        resultado.Result.CodigoFormula = data.CodigoFormula;
                        resultado.Result.NombreFormula = data.NombreFormula;
                        resultado.Result.DescripcionFormula = data.NombreFormula;                      
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        FormulaEntityRepository.Insertar(FormulaGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<FormulaService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoFormula = FormulaGeneral.CodigoFormula;                        
                    }

                    FormulaEntityRepository.GuardarCambios();

                    //BUSCA INDICADOR
                    IndicadorRequest IndReq = new IndicadorRequest();
                    IndReq.CodigoIndicador = data.CodigoIndicador;
                    IndReq.CodigoIdioma = data.CodigoIdioma;
                    var res = indicadorService.ObtenerIndicador(IndReq);

                    //ACTUALIZA EL CÓDIGO DE FORMULA EN EL INDICADOR Y LO ACTUALIZA
                    IndReq.CodigoFormula = resultado.Result.CodigoFormula;
                    var response = indicadorService.RegistrarIndicador(IndReq);

                    //posterior a ello registrar la formula detalle: (codigo desarrollado abajo)

                    List<BandejaVariableRequest> lstVariables = new List<BandejaVariableRequest>();

                    String pattern = @"\[([^\[\]]+)\]";

                    foreach (Match m in Regex.Matches(data.NombreFormula, pattern))
                        lstVariables.Add(new BandejaVariableRequest() { NombreVariable = m.Groups[1].Value, CodigoIdioma = data.CodigoIdioma });

                    for (int i = 0; i < lstVariables.Count; i++)
                    {
                        lstVariables[i].CodigoVariable = variableService.BuscarVariable(lstVariables[i]).Result[0].CodigoVariable;
                    }
                    
                    FormulaDetalleRequest objFormulaDetalle = new FormulaDetalleRequest();

                    for (int i = 0; i < lstVariables.Count; i++)
                    {
                        objFormulaDetalle.CodigoFormula = resultado.Result.CodigoFormula;
                        objFormulaDetalle.CodigoVariable = lstVariables[i].CodigoVariable;
                        objFormulaDetalle.DescripcionValor = "Valor" + (i + 1);

                        var results = formulaDetalleService.RegistrarFormulaDetalle(objFormulaDetalle);
                    }
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<FormulaService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarFormula(FormulaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                FormulaDetalleRequest oOEED = new FormulaDetalleRequest();
                oOEED.CodigoFormula = data.CodigoFormula;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                FormulaEntityRepository.Eliminar(data.CodigoFormula);
                resultado.Result = FormulaEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<FormulaService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarFormula(FormulaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                FormulaEntityRepository.Reactivar(data.CodigoFormula);
                resultado.Result = FormulaEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<FormulaService>(e.Message);
            }
            return resultado;
        }
        #endregion
    }
}
