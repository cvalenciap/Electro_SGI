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
    public class FormulaDetalleService : GenericService, IFormulaDetalleService
    {
        #region Propiedades       
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IFormulaDetalleEntityRepository FormulaDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos       
        public ProcessResult<FormulaDetalleResponse> RegistrarFormulaDetalle(FormulaDetalleRequest data)
        {
            ProcessResult<FormulaDetalleResponse> resultado = new ProcessResult<FormulaDetalleResponse>();
            resultado.Result = new FormulaDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    FormulaDetalleEntity FormulaDetalleSincronizar = FormulaDetalleEntityRepository.GetById(data.CodigoFormulaDetalle);
                    FormulaDetalleEntity FormulaDetalleGeneral = Mapper.Map<FormulaDetalleRequest, FormulaDetalleEntity>(data);

                    if (FormulaDetalleSincronizar != null)
                    {
                        Mapper.Map<FormulaDetalleEntity, FormulaDetalleEntity>(FormulaDetalleGeneral, FormulaDetalleSincronizar);
                        FormulaDetalleEntityRepository.Editar(FormulaDetalleSincronizar);
                        resultado.Result.CodigoFormulaDetalle = data.CodigoFormulaDetalle;
                        resultado.Result.CodigoFormula = data.CodigoFormula;                     
                    }
                    else
                    {
                        FormulaDetalleEntityRepository.Insertar(FormulaDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<FormulaDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoFormulaDetalle = FormulaDetalleGeneral.CodigoFormulaDetalle;
                        resultado.Result.CodigoFormula = FormulaDetalleGeneral.CodigoFormula;
                    }

                    FormulaDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<FormulaDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarFormulaDetalle(FormulaDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                FormulaDetalleEntityRepository.Eliminar(data.CodigoFormulaDetalle);
                resultado.Result = FormulaDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<FormulaDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
