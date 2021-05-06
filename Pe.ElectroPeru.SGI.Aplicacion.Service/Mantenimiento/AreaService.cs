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

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Implementación de servicios de aplicación de Área
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class AreaService : GenericService, IAreaService
    {
        #region Propiedades
        /// <summary>
        /// Repositorio de Área Logic
        /// </summary>
        public IAreaLogicRepository areaLogicRepository { get; set; }
        //public IEjecucionAreaEntityRepository ejecucionAreaEntityRepository { get; set; }
        public IAreaEntityRepository areaEntityRepository { get; set; }
        //public IGrupoService grupoService { get; set; }

        //public IProcedimientoService procedimientoService { get; set; }
        //public IProcedimientoEntityRepository procedimientoEntityRepository { get; set; }

        #endregion

        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Áreas</returns>
        //public ProcessResult<List<AreaResponse>> BuscarArea(AreaRequest filtro)
        //{
        //    ProcessResult<List<AreaResponse>> resultado = new ProcessResult<List<AreaResponse>>();

        //    try
        //    {
        //        AreaEntity[] arrAreaEntity;

        //        if (filtro.EstadoRegistro == null)
        //        {
        //            arrAreaEntity = areaEntityRepository.GetFiltered(x => (x.CodigoDepartamento == filtro.CodigoDepartamento || filtro.CodigoDepartamento == null)
        //            && (x.CodigoColaboradorResponsable == filtro.CodigoColaboradorResponsable || filtro.CodigoColaboradorResponsable == null)).ToArray();
        //        }
        //        else
        //        {
        //            arrAreaEntity = areaEntityRepository.GetFiltered(x => (x.CodigoDepartamento == filtro.CodigoDepartamento || filtro.CodigoDepartamento == null)
        //            && (x.CodigoColaboradorResponsable == filtro.CodigoColaboradorResponsable || filtro.CodigoColaboradorResponsable == null)
        //            && x.EstadoRegistro == DatosConstantes.EstadoRegistro.Activo).ToArray();
        //        }

        //        List<AreaResponse> lstArea = new List<AreaResponse>();
        //        Mapper.Map<IEnumerable<AreaEntity>, ICollection<AreaResponse>>(arrAreaEntity, lstArea);
        //        resultado.Result = lstArea;
        //    }
        //    catch (Exception ex)
        //    {
        //        resultado.IsSuccess = false;
        //        resultado.Exception = new ApplicationLayerException<AreaService>(ex);
        //    }
        //    return resultado;
        //}

        /// <summary>
        /// Permite la búsqueda de Áreas
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Áreas</returns>
        public ProcessResult<List<AreaResponse>> BuscarAreaGrilla(AreaRequest filtro)
        {
            ProcessResult<List<AreaResponse>> resultado = new ProcessResult<List<AreaResponse>>();

            try
            {
                List<AreaLogic> listaArea = areaLogicRepository.BuscarArea(
                    filtro.CodigoArea,                 
                    filtro.NombreResponsable,
                    filtro.NombreArea,                   
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,// = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null),
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<AreaResponse>();

                foreach (AreaLogic areaLogic in listaArea)
                {
                    AreaResponse areaResponse = AreaAdapter.ObtenerAreaPaginado(areaLogic);
                    resultado.Result.Add(areaResponse);
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AreaService>(ex);
            }

            return resultado;
        }

        public ProcessResult<object> RegistrarArea(AreaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            try
            {
                if (!string.IsNullOrEmpty(data.CodigoArea.ToString()))
                {
                    AreaEntity oAreaEntity = areaEntityRepository.GetById(data.CodigoArea);
                    if (oAreaEntity != null)
                    {
                        oAreaEntity.CodigoArea = data.CodigoArea;
                        oAreaEntity.NombreArea = data.NombreArea;
                        oAreaEntity.CodigoResponsable = data.CodigoResponsable;
                        areaEntityRepository.Editar(oAreaEntity);
                        resultado.IsSuccess = true;
                        areaEntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    AreaEntity oAreaEntity = new AreaEntity();                    
                    //oAreaEntity.CodigoArea = data.CodigoArea;
                    oAreaEntity.CodigoArea = Guid.NewGuid();
                    oAreaEntity.NombreArea = data.NombreArea;
                    oAreaEntity.CodigoResponsable = data.CodigoResponsable;

                    areaEntityRepository.Insertar(oAreaEntity);
                    resultado.IsSuccess = true;
                    areaEntityRepository.GuardarCambios();                    
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AreaService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarArea(AreaRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                AreaEntity oAreaEntity = areaEntityRepository.GetById(filtro.CodigoArea);               

                if (oAreaEntity != null)
                {
                    areaEntityRepository.Eliminar(oAreaEntity.CodigoArea);
                    resultado.IsSuccess = true;
                    areaEntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AreaService>(ex.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener un área
        /// </summary>
        /// <param name="codigoArea">Código del área</param>
        /// <returns>Entidad area</returns>
        //public ProcessResult<AreaResponse> ObtenerAreaPorId(int codigoArea)
        //{
        //    ProcessResult<AreaResponse> resultado = new ProcessResult<AreaResponse>();
        //    resultado.Result = new AreaResponse();
        //    try
        //    {
        //        AreaEntity areaEntity = areaEntityRepository.GetById(codigoArea);
        //        resultado.Result = Mapper.Map<AreaEntity, AreaResponse>(areaEntity);
        //    }
        //    catch (Exception ex)
        //    {
        //        resultado.IsSuccess = false;
        //        resultado.Exception = new ApplicationLayerException<DepartamentoService>(ex.Message);
        //    }
        //    return resultado;
        //}
    }
}
